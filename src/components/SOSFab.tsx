import Icon from "./Icon";

type SOSFabProps = {
  onClick: () => void;
};

export default function SOSFab({ onClick }: SOSFabProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="absolute bottom-28 right-5 z-30 flex items-center gap-2 rounded-full bg-danger px-5 py-3.5 font-display text-sm font-bold text-white shadow-[0_14px_30px_-8px_rgba(217,138,138,0.9)] transition-transform hover:scale-[1.03] active:scale-95"
      aria-label="SOS Crise — abrir apoio à crise"
    >
      <Icon name="heart" size={20} strokeWidth={2} />
      SOS Crise
    </button>
  );
}
