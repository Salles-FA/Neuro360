import type { ReactNode } from "react";

type ScreenScaffoldProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  action?: ReactNode;
  children: ReactNode;
};

export default function ScreenScaffold({
  eyebrow,
  title,
  subtitle,
  action,
  children,
}: ScreenScaffoldProps) {
  return (
    <div className="flex h-full flex-col">
      <header className="shrink-0 px-6 pt-14 pb-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            {eyebrow && (
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                {eyebrow}
              </p>
            )}
            <h1 className="font-display text-[26px] font-extrabold leading-tight text-foreground">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-1 text-sm text-muted-foreground">{subtitle}</p>
            )}
          </div>
          {action}
        </div>
      </header>
      <div className="no-scrollbar flex-1 overflow-y-auto px-6 pb-40">
        {children}
      </div>
    </div>
  );
}
