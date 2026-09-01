import Icon, { type IconName } from "../components/Icon";

type Status = "done" | "current" | "upcoming";

const events: {
  title: string;
  detail: string;
  date: string;
  icon: IconName;
  status: Status;
}[] = [
  {
    title: "Diagnóstico de TDAH",
    detail: "Avaliação neuropsicológica concluída",
    date: "Mar 2024",
    icon: "brain",
    status: "done",
  },
  {
    title: "Início da fonoaudiologia",
    detail: "Plano de comunicação estruturado",
    date: "Mai 2024",
    icon: "speech",
    status: "done",
  },
  {
    title: "Marco: rotina matinal estável",
    detail: "3 semanas seguidas sem sobrecarga",
    date: "Jul 2024",
    icon: "sun",
    status: "done",
  },
  {
    title: "Terapia ocupacional em curso",
    detail: "Foco em regulação sensorial",
    date: "Agora",
    icon: "puzzle",
    status: "current",
  },
  {
    title: "Revisão do plano de cuidado",
    detail: "Com a coordenadora, Dra. Ana",
    date: "30 Ago",
    icon: "report",
    status: "upcoming",
  },
];

const statusStyles: Record<
  Status,
  { node: string; ring: string; badge: string; badgeText: string }
> = {
  done: {
    node: "bg-sage text-white",
    ring: "border-sage",
    badge: "bg-sage-soft",
    badgeText: "text-sage-foreground",
  },
  current: {
    node: "bg-primary text-white",
    ring: "border-primary",
    badge: "bg-primary-soft",
    badgeText: "text-primary",
  },
  upcoming: {
    node: "bg-muted text-muted-foreground",
    ring: "border-border",
    badge: "bg-muted",
    badgeText: "text-muted-foreground",
  },
};

const statusLabel: Record<Status, string> = {
  done: "Concluído",
  current: "Em andamento",
  upcoming: "Próximo",
};

export default function JourneyScreen() {
  return (
    <div className="no-scrollbar h-[calc(100%-44px)] overflow-y-auto px-5 pb-40 pt-2">
      <header className="pb-4">
        <h1 className="font-display text-2xl font-extrabold text-foreground">
          Jornada de cuidado
        </h1>
        <p className="text-sm text-muted-foreground">
          Seu progresso, diagnósticos e marcos ao longo do tempo.
        </p>
      </header>

      <div className="mb-5 flex gap-3">
        <div className="flex-1 rounded-[20px] bg-card p-4 text-center shadow-[0_10px_28px_-22px_rgba(38,60,72,0.5)]">
          <p className="font-display text-2xl font-extrabold text-primary">3</p>
          <p className="text-xs text-muted-foreground">marcos alcançados</p>
        </div>
        <div className="flex-1 rounded-[20px] bg-card p-4 text-center shadow-[0_10px_28px_-22px_rgba(38,60,72,0.5)]">
          <p className="font-display text-2xl font-extrabold text-sage-foreground">
            18
          </p>
          <p className="text-xs text-muted-foreground">meses de cuidado</p>
        </div>
      </div>

      {/* Timeline */}
      <ol className="relative">
        {events.map((e, i) => {
          const s = statusStyles[e.status];
          const isLast = i === events.length - 1;
          return (
            <li key={e.title} className="relative flex gap-4 pb-5">
              {/* connector + node */}
              <div className="flex flex-col items-center">
                <span
                  className={
                    "z-10 flex h-11 w-11 items-center justify-center rounded-full border-2 bg-card " +
                    s.ring
                  }
                >
                  <span
                    className={
                      "flex h-9 w-9 items-center justify-center rounded-full " +
                      s.node
                    }
                  >
                    <Icon name={e.icon} size={18} strokeWidth={2} />
                  </span>
                </span>
                {!isLast && (
                  <span className="mt-1 w-0.5 flex-1 rounded-full bg-border" />
                )}
              </div>

              {/* card */}
              <article className="flex-1 rounded-[20px] bg-card p-4 shadow-[0_10px_28px_-22px_rgba(38,60,72,0.5)]">
                <div className="flex items-start justify-between gap-2">
                  <h2 className="font-display text-[15px] font-bold text-foreground">
                    {e.title}
                  </h2>
                  <span className="shrink-0 text-xs font-semibold text-muted-foreground">
                    {e.date}
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
                <span
                  className={
                    "mt-3 inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-bold " +
                    s.badge +
                    " " +
                    s.badgeText
                  }
                >
                  {e.status === "done" && <Icon name="check" size={13} strokeWidth={2.4} />}
                  {statusLabel[e.status]}
                </span>
              </article>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
