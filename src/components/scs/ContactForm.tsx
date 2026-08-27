import { useState, type FormEvent } from "react";

// Publiczny klucz dostępu Web3Forms — bezpieczny w kodzie client-side.
const WEB3FORMS_ACCESS_KEY = "ad7b1b17-08e1-4ac8-8c03-4f81e644d85b";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "min-h-[48px] w-full rounded-none border border-hairline-strong bg-field px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:italic placeholder:text-[oklch(0.62_0_0)] hover:border-[oklch(0.45_0_0)] focus:border-foreground";

const labelClass = "mb-2 block text-[0.95rem] font-medium text-foreground";

export function ContactForm({
  hiddenFields,
}: {
  hiddenFields?: Record<string, string>;
} = {}) {
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    setMessage("");

    try {
      const payload = new FormData(form);
      payload.append("access_key", WEB3FORMS_ACCESS_KEY);
      payload.append("subject", "Nowe zgłoszenie ze strony SCS Web");
      payload.append("from_name", "Formularz scsweb.pl");

      const email = (payload.get("E-mail") as string | null) ?? "";
      if (email.trim()) {
        payload.append("replyto", email.trim());
      }

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: payload,
      });
      const result = (await response.json()) as { success?: boolean; message?: string };

      if (response.ok && result.success) {
        setStatus("success");
        setMessage("Dziękuję. Odezwę się do Ciebie w ciągu 24 godzin.");
        form.reset();
      } else {
        setStatus("error");
        setMessage(
          result.message ??
            "Nie udało się wysłać wiadomości. Zadzwoń: +48 664 013 998 lub napisz na kamil.pietraszko@onet.pl.",
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Brak połączenia z serwerem formularza. Zadzwoń: +48 664 013 998 lub napisz na kamil.pietraszko@onet.pl.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5 border border-hairline-strong bg-secondary/25 p-6 md:p-8">
      <p className="border-l-2 border-hairline pl-4 leading-relaxed text-muted-foreground">
        Wypełnienie zajmuje minutę. Niczego nie instalujesz, do niczego się nie zobowiązujesz.
      </p>
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="imie" className={labelClass}>
            Imię <span aria-hidden="true">*</span>
          </label>
          <input id="imie" name="Imię" required placeholder="Jan" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="telefon" className={labelClass}>
            Telefon <span aria-hidden="true">*</span>
          </label>
          <input
            id="telefon"
            name="Telefon"
            type="tel"
            required
            placeholder="600 000 000"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className={labelClass}>
          E-mail <span className="text-muted-foreground">(opcjonalnie)</span>
        </label>
        <p className="mb-2 text-sm italic text-muted-foreground">
          Na ten adres wyślę link do gotowego projektu.
        </p>
        <input
          id="email"
          name="E-mail"
          type="email"
          placeholder="jan@twojafirma.pl"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="firma" className={labelClass}>
          Nazwa firmy i branża <span aria-hidden="true">*</span>
        </label>
        <input
          id="firma"
          name="Nazwa firmy i branża"
          required
          placeholder="Hydro-Perfekt — hydraulik"
          className={fieldClass}
        />
      </div>

      <div>
        <label htmlFor="opis" className={labelClass}>
          Krótko o Twojej firmie <span className="text-muted-foreground">(opcjonalnie)</span>
        </label>
        <textarea
          id="opis"
          name="Krótko o Twojej firmie"
          rows={5}
          placeholder="Czym się zajmujesz, gdzie działasz, co ma być na stronie."
          className={fieldClass}
        />
      </div>

      {hiddenFields &&
        Object.entries(hiddenFields).map(([name, value]) => (
          <input key={name} type="hidden" name={name} value={value} />
        ))}

      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="inline-flex min-h-[48px] w-full items-center justify-center gap-3 bg-foreground px-8 py-3.5 text-base font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Wysyłam…" : "Wyślij — odezwę się w 24 h"}
        {status !== "sending" && <span aria-hidden="true">→</span>}
      </button>

      {message && (
        <p
          role="status"
          className={
            status === "success"
              ? "border-l-2 border-foreground pl-4 text-sm text-foreground"
              : "border-l-2 border-hairline pl-4 text-sm text-muted-foreground"
          }
        >
          {message}
        </p>
      )}

      <p className="text-muted-foreground">Pola oznaczone * są wymagane. Zero spamu. Odpowiadam osobiście.</p>
    </form>
  );
}
