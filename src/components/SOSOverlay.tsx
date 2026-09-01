import { useEffect, useState } from "react";
import Icon from "./Icon";

type SOSOverlayProps = {
  onClose: () => void;
};

export default function SOSOverlay({ onClose }: SOSOverlayProps) {
  // Two 4s halves of the 8s breathe animation: grow (inspire) then shrink (expire).
  const [phase, setPhase] = useState<"Inspire" | "Expire">("Inspire");

  useEffect(() => {
    const id = window.setInterval(
      () => setPhase((p) => (p === "Inspire" ? "Expire" : "Inspire")),
      4000,
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="absolute inset-0 z-40 flex flex-col overflow-hidden rounded-[34px]"
      role="dialog"
      aria-modal="true"
      aria-label="Apoio à crise"
      style={{
        background:
          "linear-gradient(165deg, #e8f1f0 0%, #dfeaf1 45%, #e6eef0 100%)",
      }}
    >
      <div className="flex items-center justify-between px-6 pt-6">
        <div>
          <p className="font-display text-lg font-extrabold text-foreground">
            Você está seguro aqui
          </p>
          <p className="text-sm text-muted-foreground">
            Vamos respirar juntos, no seu ritmo.
          </p>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-white/70 text-secondary-foreground transition hover:bg-white"
          aria-label="Fechar"
        >
          <Icon name="close" size={20} />
        </button>
      </div>

      {/* Breathing circle */}
      <div className="flex flex-1 flex-col items-center justify-center gap-8">
        <div className="relative flex h-64 w-64 items-center justify-center">
          <span className="absolute h-full w-full rounded-full bg-sage/15" />
          <span className="animate-breathe absolute h-full w-full rounded-full bg-gradient-to-br from-[#a9cbdd] to-[#8bab97] opacity-70" />
          <span className="animate-breathe absolute h-44 w-44 rounded-full bg-white/50" />
          <span className="relative font-display text-2xl font-extrabold text-[#33525f]">
            {phase}
          </span>
        </div>
        <p className="max-w-[240px] text-center text-sm text-secondary-foreground">
          Siga o círculo: inspire enquanto ele cresce, expire enquanto ele
          diminui.
        </p>
      </div>

      {/* Quick actions */}
      <div className="space-y-3 px-6 pb-10">
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-[22px] bg-white/85 py-4 font-display text-base font-bold text-[#33525f] shadow-sm transition hover:bg-white"
        >
          <Icon name="sound" size={22} />
          Ouvir sons calmantes
        </button>
        <button
          type="button"
          className="flex w-full items-center justify-center gap-3 rounded-[22px] bg-sage py-4 font-display text-base font-bold text-white shadow-[0_14px_30px_-10px_rgba(139,171,151,0.9)] transition hover:brightness-105"
        >
          <Icon name="phone" size={22} />
          Falar com suporte especializado agora
        </button>
      </div>
    </div>
  );
}
