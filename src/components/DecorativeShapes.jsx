const referencePair = { first: { width: 112, height: 107 }, second: { width: 106, height: 102 }, x: 44, y: 39 };

export default function DecorativeShapes({ variant = "squares", rotation = 0, diameter = 900, pair = referencePair, className = "" }) {
  return (
    <div data-component="decoration" aria-hidden="true" className={`pointer-events-none absolute -z-10 ${className}`}>
      {variant === "circle" ? (
        <div className="rounded-full bg-reference-circle" style={{ width: diameter, height: diameter }} />
      ) : (
        <div className="relative" style={{ width: Math.max(pair.first.width, pair.x + pair.second.width), height: Math.max(pair.first.height, pair.y + pair.second.height), transform: `rotate(${rotation}deg)` }}>
          <div className="absolute top-0 left-0 bg-[var(--reference-square-fill)] opacity-[var(--reference-square-opacity)]" style={{ width: pair.first.width, height: pair.first.height }} />
          <div className="absolute bg-[var(--reference-square-fill)] opacity-[var(--reference-square-opacity)]" style={{ left: pair.x, top: pair.y, width: pair.second.width, height: pair.second.height }} />
        </div>
      )}
    </div>
  );
}
