import { useState } from "react";
import Icon from "../components/Icon";

const filters = ["TEA", "TDAH", "Dislexia", "Fonoaudiólogo", "Psicólogo"];

const specialists: {
  name: string;
  specialty: string;
  tags: string[];
  rating: number;
  reviews: number;
  availability: string;
  photo: string;
  alt: string;
}[] = [
  {
    name: "Dra. Ana Ribeiro",
    specialty: "Psicologia • TDAH adulto",
    tags: ["TDAH", "Psicólogo"],
    rating: 4.9,
    reviews: 128,
    availability: "Próxima vaga: amanhã",
    photo:
      "https://images.unsplash.com/photo-1659353888906-adb3e0041693?w=200&h=200&fit=crop&auto=format",
    alt: "Retrato da Dra. Ana Ribeiro, psicóloga",
  },
  {
    name: "Dra. Marina Alves",
    specialty: "Fonoaudiologia • TEA infantil",
    tags: ["TEA", "Fonoaudiólogo"],
    rating: 4.8,
    reviews: 96,
    availability: "Teleconsulta • hoje 14h",
    photo:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&auto=format",
    alt: "Retrato da Dra. Marina Alves, fonoaudióloga",
  },
  {
    name: "Carlos Mendes",
    specialty: "Terapia ocupacional • Dislexia",
    tags: ["Dislexia"],
    rating: 4.7,
    reviews: 74,
    availability: "3,2 km • próxima vaga: 26 ago",
    photo:
      "https://images.unsplash.com/photo-1639747279286-c07eecb47a0b?w=200&h=200&fit=crop&auto=format",
    alt: "Retrato de Carlos Mendes, terapeuta ocupacional",
  },
  {
    name: "Dr. Rafael Souza",
    specialty: "Neuropediatria • TEA / TDAH",
    tags: ["TEA", "TDAH"],
    rating: 4.9,
    reviews: 152,
    availability: "Próxima vaga: 28 ago",
    photo:
      "https://images.unsplash.com/photo-1633625510483-c177f4308f33?w=200&h=200&fit=crop&auto=format",
    alt: "Retrato do Dr. Rafael Souza, neuropediatra",
  },
];

export default function NetworkScreen() {
  const [active, setActive] = useState<string[]>(["TDAH"]);

  const toggle = (f: string) =>
    setActive((cur) =>
      cur.includes(f) ? cur.filter((x) => x !== f) : [...cur, f],
    );

  const visible =
    active.length === 0
      ? specialists
      : specialists.filter((s) => s.tags.some((t) => active.includes(t)));

  return (
    <div className="no-scrollbar h-[calc(100%-44px)] overflow-y-auto px-5 pb-40 pt-2">
      <header className="pb-4">
        <h1 className="font-display text-2xl font-extrabold text-foreground">
          Rede especializada
        </h1>
        <p className="text-sm text-muted-foreground">
          Profissionais credenciados para a sua necessidade.
        </p>
      </header>

      {/* Search */}
      <div className="flex items-center gap-2.5 rounded-full bg-card px-4 py-3 shadow-[0_8px_24px_-18px_rgba(38,60,72,0.6)]">
        <Icon name="search" size={20} className="text-muted-foreground" />
        <input
          type="text"
          placeholder="Buscar especialidade, nome ou local"
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>

      {/* Filter chips */}
      <div className="no-scrollbar -mx-5 mt-4 flex gap-2 overflow-x-auto px-5 pb-1">
        {filters.map((f) => {
          const selected = active.includes(f);
          return (
            <button
              key={f}
              type="button"
              onClick={() => toggle(f)}
              aria-pressed={selected}
              className={
                "shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition " +
                (selected
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-border bg-card text-secondary-foreground hover:border-primary/50")
              }
            >
              {f}
            </button>
          );
        })}
      </div>

      {/* Results */}
      <p className="mt-5 px-1 text-xs font-semibold text-muted-foreground">
        {visible.length}{" "}
        {visible.length === 1
          ? "especialista encontrado"
          : "especialistas encontrados"}
      </p>

      <div className="mt-3 space-y-3">
        {visible.map((s) => (
          <article
            key={s.name}
            className="rounded-[22px] bg-card p-4 shadow-[0_10px_28px_-22px_rgba(38,60,72,0.5)]"
          >
            <div className="flex gap-3.5">
              <img
                src={s.photo}
                alt={s.alt}
                className="h-16 w-16 shrink-0 rounded-2xl bg-muted object-cover"
                loading="lazy"
              />
              <div className="min-w-0 flex-1">
                <h2 className="font-display text-[15px] font-bold text-foreground">
                  {s.name}
                </h2>
                <p className="truncate text-xs text-muted-foreground">
                  {s.specialty}
                </p>
                <div className="mt-1.5 flex items-center gap-1 text-xs">
                  <Icon name="star" size={15} className="text-[#e6b566]" />
                  <span className="font-bold text-foreground">{s.rating}</span>
                  <span className="text-muted-foreground">
                    ({s.reviews})
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-3 flex items-center justify-between gap-3">
              <span className="flex items-center gap-1.5 text-xs text-sage-foreground">
                <Icon name="calendar" size={15} strokeWidth={2} />
                {s.availability}
              </span>
              <button className="rounded-full bg-primary px-5 py-2 font-display text-sm font-bold text-primary-foreground transition hover:brightness-105">
                Agendar
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
