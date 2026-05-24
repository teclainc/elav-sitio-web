"use client";

import { useActionState } from "react";
import { Button } from "@/components/ui/button";
import { submitContact, type ContactFormState } from "./actions";
import { CheckCircle, AlertCircle } from "lucide-react";

const initialState: ContactFormState = { success: false, message: "" };

export function ContactForm() {
  const [state, formAction, isPending] = useActionState(submitContact, initialState);

  const fieldError = (name: string) => state.errors?.[name]?.join(", ");

  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-text-primary mb-6">Envíanos un mensaje</h2>

      {state.message && !isPending && (
        <div
          className={`mb-6 flex items-start gap-3 rounded-xl border p-4 text-sm ${
            state.success
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
          role="alert"
          aria-live="polite"
        >
          {state.success ? (
            <CheckCircle className="h-5 w-5 shrink-0 mt-0.5" />
          ) : (
            <AlertCircle className="h-5 w-5 shrink-0 mt-0.5" />
          )}
          {state.message}
        </div>
      )}

      <form action={formAction} className="flex flex-col gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-text-primary mb-1.5">
              Nombre
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all ${
                fieldError("name") ? "border-red-300" : "border-zinc-200"
              }`}
              placeholder="Tu nombre"
              aria-invalid={fieldError("name") ? true : undefined}
              aria-describedby={fieldError("name") ? "name-error" : undefined}
            />
            {fieldError("name") && (
              <p id="name-error" className="mt-1 text-xs text-red-600">{fieldError("name")}</p>
            )}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-text-primary mb-1.5">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all ${
                fieldError("email") ? "border-red-300" : "border-zinc-200"
              }`}
              placeholder="tu@email.com"
              aria-invalid={fieldError("email") ? true : undefined}
              aria-describedby={fieldError("email") ? "email-error" : undefined}
            />
            {fieldError("email") && (
              <p id="email-error" className="mt-1 text-xs text-red-600">{fieldError("email")}</p>
            )}
          </div>
        </div>

        <div>
          <label htmlFor="church" className="block text-sm font-medium text-text-primary mb-1.5">
            Nombre de tu iglesia
          </label>
          <input
            type="text"
            id="church"
            name="church"
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all ${
              fieldError("church") ? "border-red-300" : "border-zinc-200"
            }`}
            placeholder="Iglesia Centro de Vida"
            aria-invalid={fieldError("church") ? true : undefined}
            aria-describedby={fieldError("church") ? "church-error" : undefined}
          />
          {fieldError("church") && (
            <p id="church-error" className="mt-1 text-xs text-red-600">{fieldError("church")}</p>
          )}
        </div>

        <div>
          <label htmlFor="role" className="block text-sm font-medium text-text-primary mb-1.5">
            Tu rol en la iglesia
          </label>
          <select
            id="role"
            name="role"
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-primary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all appearance-none ${
              fieldError("role") ? "border-red-300" : "border-zinc-200"
            }`}
            defaultValue=""
            aria-invalid={fieldError("role") ? true : undefined}
            aria-describedby={fieldError("role") ? "role-error" : undefined}
          >
            <option value="" disabled>Selecciona tu rol</option>
            <option value="pastor">Pastor principal</option>
            <option value="pastor-asociado">Pastor asociado</option>
            <option value="lider">Líder de ministerio</option>
            <option value="admin">Administrador</option>
            <option value="otro">Otro</option>
          </select>
          {fieldError("role") && (
            <p id="role-error" className="mt-1 text-xs text-red-600">{fieldError("role")}</p>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-text-primary mb-1.5">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className={`w-full rounded-xl border bg-white px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary focus:outline-none focus:ring-2 focus:ring-[#7c3aed]/20 focus:border-[#7c3aed]/50 transition-all resize-none ${
              fieldError("message") ? "border-red-300" : "border-zinc-200"
            }`}
            placeholder="Cuéntanos sobre tu iglesia y cómo podemos ayudarte..."
            aria-invalid={fieldError("message") ? true : undefined}
            aria-describedby={fieldError("message") ? "message-error" : undefined}
          />
          {fieldError("message") && (
            <p id="message-error" className="mt-1 text-xs text-red-600">{fieldError("message")}</p>
          )}
        </div>

        <Button type="submit" variant="gradient" size="lg" className="w-full sm:w-auto" disabled={isPending}>
          {isPending ? "Enviando..." : "Enviar mensaje"}
        </Button>
      </form>
    </>
  );
}
