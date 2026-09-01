import { useState } from "react";
import Icon, { type IconName } from "../components/Icon";

const sensoryPrefs = [
  "Menos animações",
  "Textos objetivos",
  "Alto contraste",
  "Sons suaves",
];

const settings: { label: string; hint: string; icon: IconName }[] = [
  {
    label: "Lembretes inteligentes",
    hint: "Aviso 24h e 2h antes das consultas",
    icon: "bell",
  },
  {
    label: "Consentimentos e dados",
    hint: "Controle quem acessa suas informações",
    icon: "shield",
  },
  {
    label: "Preferências do app",
    hint: "Idioma, notificações e conta",
    icon: "sliders",
  },
];

export default function ProfileScreen() {
  const [prefs, setPrefs] = useState<string[]>([
    "Menos animações",
    "Textos objetivos",
  ]);

  const toggle = (p: string) =>
    setPrefs((cur) =>
      cur.includes(p) ? cur.filter((x) => x !== p) : [...cur, p],
    );

  return (
    <div className="no-scrollbar h-[calc(100%-44px)] overflow-y-auto px-5 pb-40 pt-2">
      {/* Profile header */}
      <header className="flex flex-col items-center pb-6 pt-4 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-sage-soft font-display text-3xl font-extrabold text-sage-foreground">
          M
        </div>
        <h1 className="mt-3 font-display text-xl font-extrabold text-foreground">
          Marina Costa
        </h1>
        <p className="text-sm text-muted-foreground">
          Cuidado ativo • Plano Care Plus
        </p>
        <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1 text-xs font-bold text-primary">
          <Icon name="sparkle" size={14} />
          Neurodivergente • TDAH
        </span>
      </header>

      {/* Sensory preferences */}
      <section className="rounded-[24px] bg-card p-5 shadow-[0_10px_30px_-20px_rgba(38,60,72,0.4)]">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-sage-soft text-sage-foreground">
            <Icon name="leaf" size={18} />
          </span>
          <div>
            <h2 className="font-display text-base font-bold text-foreground">
              Preferências sensoriais
            </h2>
            <p className="text-xs text-muted-foreground">
              Ajuste o app ao seu conforto.
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-wrap gap-2">
          {sensoryPrefs.map((p) => {
            const on = prefs.includes(p);
            return (
              <button
                key={p}
                type="button"
                onClick={() => toggle(p)}
                aria-pressed={on}
                className={
                  "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-2 text-sm font-semibold transition " +
                  (on
                    ? "border-sage bg-sage-soft text-sage-foreground"
                    : "border-border bg-card text-muted-foreground hover:border-sage/50")
                }
              >
                {on && <Icon name="check" size={14} strokeWidth={2.6} />}
                {p}
              </button>
            );
          })}
        </div>
      </section>

      {/* Settings list */}
      <section className="mt-5 overflow-hidden rounded-[24px] bg-card shadow-[0_10px_30px_-20px_rgba(38,60,72,0.4)]">
        {settings.map((s, i) => (
          <button
            key={s.label}
            type="button"
            className={
              "flex w-full items-center gap-3.5 px-5 py-4 text-left transition hover:bg-muted " +
              (i !== settings.length - 1 ? "border-b border-border" : "")
            }
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-soft text-primary">
              <Icon name={s.icon} size={20} />
            </span>
            <div className="flex-1">
              <p className="font-display text-[15px] font-bold text-foreground">
                {s.label}
              </p>
              <p className="text-xs text-muted-foreground">{s.hint}</p>
            </div>
            <Icon name="chevron" size={20} className="text-muted-foreground" />
          </button>
        ))}
      </section>

      <button className="mt-5 w-full rounded-[20px] border border-border bg-card py-3.5 font-display text-sm font-bold text-muted-foreground transition hover:text-foreground">
        Sair da conta
      </button>
    </div>
  );
}
