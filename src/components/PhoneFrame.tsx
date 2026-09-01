import type { ReactNode } from "react";

type PhoneFrameProps = {
  children: ReactNode;
};

export default function PhoneFrame({ children }: PhoneFrameProps) {
  return (
    <div className="flex min-h-full items-center justify-center p-4 sm:p-8">
      <div className="w-full max-w-[400px] rounded-[42px] bg-[#20303a] p-2.5 shadow-[0_30px_80px_-20px_rgba(38,60,72,0.55)]">
        <div className="relative h-[812px] max-h-[calc(100vh-64px)] overflow-hidden rounded-[34px] bg-background">
          {/* Status bar */}
          <div className="flex h-11 items-center justify-between px-7 pt-1 text-[13px] font-semibold text-foreground/70">
            <span className="font-display">9:41</span>
            <div className="flex items-center gap-1.5">
              <span className="tracking-[0.15em]">•••</span>
              <span>100%</span>
            </div>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
