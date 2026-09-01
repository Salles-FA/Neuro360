import Icon, { type IconName } from "./Icon";

export type TabId = "home" | "journey" | "network" | "team" | "profile";

const tabs: { id: TabId; label: string; icon: IconName }[] = [
  { id: "home", label: "Início", icon: "home" },
  { id: "journey", label: "Jornada", icon: "route" },
  { id: "network", label: "Rede", icon: "network" },
  { id: "team", label: "Equipe", icon: "team" },
  { id: "profile", label: "Perfil", icon: "profile" },
];

type BottomNavProps = {
  active: TabId;
  onChange: (tab: TabId) => void;
};

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="absolute inset-x-0 bottom-0 z-20 border-t border-border/70 bg-card/95 px-2 pb-6 pt-2.5 backdrop-blur">
      <ul className="flex items-stretch justify-between">
        {tabs.map((tab) => {
          const isActive = tab.id === active;
          return (
            <li key={tab.id} className="flex-1">
              <button
                type="button"
                onClick={() => onChange(tab.id)}
                aria-current={isActive ? "page" : undefined}
                aria-label={tab.label === "Rede" ? "Rede Especializada" : tab.label}
                className="group flex w-full flex-col items-center gap-1 rounded-2xl py-1.5 transition-colors"
              >
                <span
                  className={
                    "flex h-9 w-12 items-center justify-center rounded-full transition-colors " +
                    (isActive
                      ? "bg-primary-soft text-primary"
                      : "text-muted-foreground group-hover:text-primary")
                  }
                >
                  <Icon name={tab.icon} size={22} strokeWidth={isActive ? 2.1 : 1.8} />
                </span>
                <span
                  className={
                    "font-display text-[11px] leading-none " +
                    (isActive
                      ? "font-bold text-primary"
                      : "font-semibold text-muted-foreground")
                  }
                >
                  {tab.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
