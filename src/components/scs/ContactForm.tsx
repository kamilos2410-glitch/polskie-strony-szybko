import { useState, type FormEvent } from "react";

// ⚠️ Wklej tutaj prawdziwy klucz dostępu Web3Forms:
const WEB3FORMS_ACCESS_KEY = "PLACEHOLDER_KEY";

type Status = "idle" | "sending" | "success" | "error";

const fieldClass =
  "w-full rounded-none border border-hairline bg-background px-4 py-3 text-base text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-foreground";

export function ContactForm() {
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
      payload.append("subject", "Nowe zgłoszenie — darmowe demo (SCS Web)");

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
            "Nie udało się wysłać wiadomości. Zadzwoń: 664 013 998 lub napisz na kamil.pietraszko@onet.pl.",
        );
      }
    } catch {
      setStatus("error");
      setMessage(
        "Brak połączenia z serwerem formularza. Zadzwoń: 664 013 998 lub napisz na kamil.pietraszko@onet.pl.",
      );
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="imie" className="eyebrow mb-2 block">
            Imię
          </label>
          <input id="imie" name="Imię" required placeholder="Jan" className={fieldClass} />
        </div>
        <div>
          <label htmlFor="kontakt" className="eyebrow mb-2 block">
            Telefon lub e-mail
          </label>
          <input
            id="kontakt"
            name="Telefon lub e-mail"
            required
            placeholder="600 000 000"
            className={fieldClass}
          />
        </div>
      </div>

      <div>
        <label htmlFor="firma" className="eyebrow mb-2 block">
          Nazwa firmy i branża
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
        <label htmlFor="opis" className="eyebrow mb-2 block">
          Krótko o Twojej firmie
        </label>
        <textarea
          id="opis"
          name="Krótko o Twojej firmie"
          rows={5}
          placeholder="Czym się zajmujesz, gdzie działasz, co ma być na stronie."
          className={fieldClass}
        />
      </div>

      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-foreground px-8 py-4 text-sm font-medium tracking-wide text-background transition-all duration-200 hover:-translate-y-0.5 hover:opacity-90 disabled:opacity-50 sm:w-auto"
      >
        {status === "sending" ? "Wysyłam…" : "Wyślij — odezwę się w 24 h"}
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

      <p className="text-sm text-muted-foreground">Zero spamu. Odpowiadam osobiście.</p>
    </form>
  );
}
