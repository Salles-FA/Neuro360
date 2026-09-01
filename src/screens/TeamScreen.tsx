import Icon, { type IconName } from "../components/Icon";

const team: {
  name: string;
  role: string;
  icon: IconName;
  tint: string;
  photo?: string;
  alt?: string;
  next?: string;
}[] = [
  {
    name: "Dra. Ana Ribeiro",
    role: "Coordenadora de cuidado • Psicologia",
    icon: "brain",
    tint: "bg-primary-soft text-primary",
    photo:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=200&h=200&fit=crop&auto=format",
    alt: "Retrato da Dra. Ana Ribeiro",
    next: "Revisão do plano • 30 ago",
  },
  {
    name: "Dra. Marina Alves",
    role: "Fonoaudiologia",
    icon: "speech",
    tint: "bg-sage-soft text-sage-foreground",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&auto=format",
    alt: "Retrato da Dra. Marina Alves",
    next: "Sessão • hoje 14:00",
  },
  {
    name: "Carlos Mendes",
    role: "Terapia ocupacional",
    icon: "puzzle",
    tint: "bg-primary-soft text-primary",
    photo:
      "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?w=200&h=200&fit=crop&auto=format",
    alt: "Retrato de Carlos Mendes",
    next: "Sessão • amanhã 10:30",
  },
];

export default function TeamScreen() {
  return (
    <div className="no-scrollbar h-[calc(100%-44px)] overflow-y-auto px-5 pb-40 pt-2">
      <header className="pb-4">
        <h1 className="font-display text-2xl font-extrabold text-foreground">
          Sua equipe
        </h1>
        <p className="text-sm text-muted-foreground">
          Profissionais que cuidam de você de forma integrada.
        </p>
      </header>

      {/* Coordinator highlight */}
      <article
        className="mb-5 overflow-hidden rounded-[24px] p-5 text-white shadow-[0_20px_45px_-24px_rgba(91,143,176,0.9)]"
        style={{ background: "linear-gradient(140deg, #6ba0c0 0%, #8bab97 100%)" }}
      >
        <div className="flex items-center gap-2 text-sm font-semibold text-white/90">
          <Icon name="shield" size={18} strokeWidth={2} />
          Coordenação de cuidado
        </div>
        <div className="mt-3 flex items-center gap-3.5">
          <img
            src={team[0].photo}
            alt={team[0].alt}
            className="h-14 w-14 rounded-2xl bg-white/20 object-cover"
          />
          <div>
            <h2 className="font-display text-lg font-extrabold">
              {team[0].name}
            </h2>
            <p className="text-sm text-white/85">Coordenadora responsável</p>
          </div>
        </div>
        <button className="mt-4 flex items-center gap-2 rounded-full bg-white/95 px-5 py-2.5 font-display text-sm font-bold text-[#3a6076] transition hover:bg-white">
          <Icon name="speech" size={18} />
          Enviar mensagem
        </button>
      </article>

      <h2 className="mb-3 px-1 font-display text-base font-bold text-foreground">
        Equipe multidisciplinar
      </h2>
      <div className="space-y-3">
        {team.map((m) => (
          <article
            key={m.name}
            className="flex items-center gap-3.5 rounded-[22px] bg-card p-4 shadow-[0_10px_28px_-22px_rgba(38,60,72,0.5)]"
          >
            {m.photo ? (
              <img
                src={m.photo}
                alt={m.alt}
                className="h-14 w-14 shrink-0 rounded-2xl bg-muted object-cover"
                loading="lazy"
              />
            ) : (
              <span
                className={
                  "flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl " +
                  m.tint
                }
              >
                <Icon name={m.icon} size={24} />
              </span>
            )}
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-[15px] font-bold text-foreground">
                {m.name}
              </h3>
              <p className="text-xs text-muted-foreground">{m.role}</p>
              {m.next && (
                <span className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  <Icon name="clock" size={14} strokeWidth={2} />
                  {m.next}
                </span>
              )}
            </div>
            <Icon name="chevron" size={20} className="text-muted-foreground" />
          </article>
        ))}
      </div>

      {/* Support contact */}
      <h2 className="mb-3 mt-6 px-1 font-display text-base font-bold text-foreground">
        Rede de apoio
      </h2>
      <article className="flex items-center gap-3.5 rounded-[22px] bg-sage-soft/70 p-4">
        <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-white font-display text-xl font-extrabold text-sage-foreground">
          P
        </span>
        <div className="flex-1">
          <h3 className="font-display text-[15px] font-bold text-foreground">
            Paula
          </h3>
          <p className="text-xs text-sage-foreground">
            Familiar • contato de apoio
          </p>
        </div>
        <button className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-sage-foreground transition hover:brightness-105">
          <Icon name="phone" size={20} />
        </button>
      </article>
    </div>
  );
}
