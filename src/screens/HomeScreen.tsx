import { useState } from "react";
import Icon, { type IconName } from "../components/Icon";

const moods: { id: string; label: string; emoji: string }[] = [
  { id: "great", label: "Ótimo", emoji: "😊" },
  { id: "calm", label: "Calmo", emoji: "🙂" },
  { id: "ok", label: "Neutro", emoji: "😐" },
  { id: "tired", label: "Cansado", emoji: "😔" },
  { id: "over", label: "Sobrecarga", emoji: "😣" },
];

const therapies: {
  title: string;
  pro: string;
  time: string;
  icon: IconName;
  tint: string;
}[] = [
  {
    title: "Fonoaudiologia",
    pro: "Dra. Marina Alves",
    time: "Hoje • 14:00",
    icon: "speech",
    tint: "bg-primary-soft text-primary",
  },
  {
    title: "Terapia ocupacional",
    pro: "Carlos Mendes",
    time: "Amanhã • 10:30",
    icon: "puzzle",
    tint: "bg-sage-soft text-sage-foreground",
  },
  {
    title: "Psicologia",
    pro: "Dra. Ana Ribeiro",
    time: "Qui • 16:00",
    icon: "brain",
    tint: "bg-primary-soft text-primary",
  },
];

export default function HomeScreen() {
  const [mood, setMood] = useState<string | null>("calm");

  return (
    <div className="no-scrollbar h-[calc(100%-44px)] overflow-y-auto px-5 pb-40 pt-2">
      {/* Greeting */}
      <header className="flex items-center justify-between pb-5">
        <div>
          <p className="text-sm text-muted-foreground">Bom dia,</p>
          <h1 className="font-display text-2xl font-extrabold text-foreground">
            Marina 🌿
          </h1>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-soft font-display text-lg font-extrabold text-sage-foreground">
          M
        </div>
      </header>

      {/* Emotional check-in */}
      <section className="rounded-[24px] bg-card p-5 shadow-[0_10px_30px_-18px_rgba(38,60,72,0.4)]">
        <h2 className="font-display text-base font-bold text-foreground">
          Como você está se sentindo hoje?
        </h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Registrar ajuda sua equipe a acompanhar você.
        </p>
        <div className="mt-4 flex justify-between">
          {moods.map((m) => {
            const selected = mood === m.id;
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setMood(m.id)}
                aria-pressed={selected}
                className="flex flex-col items-center gap-1.5"
              >
                <span
                  className={
                    "flex h-12 w-12 items-center justify-center rounded-full text-2xl transition " +
                    (selected
                      ? "bg-primary-soft ring-2 ring-primary"
                      : "bg-muted hover:bg-primary-soft/60")
                  }
                >
                  {m.emoji}
                </span>
                <span
                  className={
                    "text-[10px] font-semibold " +
                    (selected ? "text-primary" : "text-muted-foreground")
                  }
                >
                  {m.label}
                </span>
              </button>
            );
          })}
        </div>
      </section>

      {/* Upcoming therapies — horizontal cards */}
      <section className="mt-7">
        <div className="mb-3 flex items-center justify-between px-1">
          <h2 className="font-display text-base font-bold text-foreground">
            Próximas terapias
          </h2>
          <button className="text-sm font-semibold text-primary">Agenda</button>
        </div>
        <div className="no-scrollbar -mx-5 flex gap-3 overflow-x-auto px-5 pb-1">
          {therapies.map((t) => (
            <article
              key={t.title}
              className="w-[190px] shrink-0 rounded-[22px] bg-card p-4 shadow-[0_10px_28px_-20px_rgba(38,60,72,0.5)]"
            >
              <span
                className={
                  "flex h-11 w-11 items-center justify-center rounded-2xl " +
                  t.tint
                }
              >
                <Icon name={t.icon} size={22} />
              </span>
              <h3 className="mt-3 font-display text-[15px] font-bold text-foreground">
                {t.title}
              </h3>
              <p className="text-xs text-muted-foreground">{t.pro}</p>
              <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-primary">
                <Icon name="clock" size={15} strokeWidth={2} />
                {t.time}
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Care coordination — featured card */}
      <section className="mt-7">
        <article
          className="overflow-hidden rounded-[26px] p-6 text-white shadow-[0_20px_45px_-22px_rgba(91,143,176,0.9)]"
          style={{
            background: "linear-gradient(140deg, #6ba0c0 0%, #8bab97 100%)",
          }}
        >
          <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
            <Icon name="shield" size={18} strokeWidth={2} />
            Coordenação de cuidado
          </div>
          <h2 className="mt-3 font-display text-xl font-extrabold leading-snug">
            Seu plano está 62% concluído
          </h2>
          <p className="mt-1 text-sm text-white/85">
            Semana 4 de 8 • acompanhamento multidisciplinar integrado.
          </p>
          <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/30">
            <div className="h-full w-[62%] rounded-full bg-white" />
          </div>
          <button className="mt-5 flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 font-display text-sm font-bold text-[#3a6076] transition hover:bg-white">
            <Icon name="report" size={18} />
            Ver relatórios
          </button>
        </article>
      </section>

      {/* Quick tip */}
      <section className="mt-5 flex items-center gap-3 rounded-[22px] bg-sage-soft/70 p-4">
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sage-foreground">
          <Icon name="leaf" size={20} />
        </span>
        <p className="text-sm text-sage-foreground">
          Dica do dia: uma pausa curta e silenciosa entre tarefas reduz a
          sobrecarga sensorial.
        </p>
      </section>
    </div>
  );
}
