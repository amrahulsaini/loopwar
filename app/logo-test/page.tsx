export const metadata = {
  title: "Logo Test | Loopwar",
};

export default function LogoTestPage() {
  return (
    <main className="min-h-screen grid place-items-center p-8">
      <div
        aria-label="LW logo"
        role="img"
        style={{
          width: "min(72vw, 420px)",
          aspectRatio: "1 / 1",
          borderRadius: "clamp(36px, 9vw, 92px)",
          background: "var(--color-primary)",
          display: "grid",
          placeItems: "center",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-montserrat)",
            fontWeight: 500,
            fontSize: "clamp(84px, 18vw, 170px)",
            letterSpacing: "0.06em",
            lineHeight: 1,
            color: "var(--color-secondary-1)",
            transform: "translateX(0.02em)",
          }}
        >
          LW
        </span>
      </div>
    </main>
  );
}
