"use server";

import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  email: z.string().email("Correo electrónico inválido"),
  church: z.string().min(2, "El nombre de la iglesia debe tener al menos 2 caracteres"),
  role: z.string().min(1, "Selecciona tu rol"),
  message: z.string().min(10, "El mensaje debe tener al menos 10 caracteres"),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    church: formData.get("church") as string,
    role: formData.get("role") as string,
    message: formData.get("message") as string,
  };

  const parsed = contactSchema.safeParse(raw);

  if (!parsed.success) {
    return {
      success: false,
      message: "Por favor corrige los errores en el formulario.",
      errors: parsed.error.flatten().fieldErrors,
    };
  }

  // TODO: Integrate with real email service (Resend, SendGrid, etc.)
  console.log("Contact form submitted:", parsed.data);

  return {
    success: true,
    message: "¡Gracias! Hemos recibido tu mensaje. Te contactaremos pronto.",
  };
}
