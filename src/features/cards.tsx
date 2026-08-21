export const TEAL = "#0F6E63";
export const TEAL_DARK = "#0B564D";


export function CategoryPill({ children }) {
  return (
    <span
      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
      style={{ backgroundColor: "#E6F2F0", color: TEAL }}
    >
      {children}
    </span>
  );
}


export function SectionCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
    >
      {children}
    </div>
  );
}