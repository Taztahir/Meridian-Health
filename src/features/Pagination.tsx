import { ChevronLeft, ChevronRight } from "lucide-react";

const TEAL = "#0F6E63";
const TEAL_DARK = "#0B564D";

export function Pagination({ page, totalPages, onPageChange }) {
  const pages = [1, 2, 3];
  return (
    <nav className="flex items-center justify-center gap-2 mt-12">
      <button
        onClick={() => onPageChange(Math.max(1, page - 1))}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
        aria-label="Previous page"
      >
        <ChevronLeft size={16} />
      </button>

      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onPageChange(p)}
          className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-semibold border transition-colors"
          style={
            p === page
              ? { backgroundColor: TEAL, borderColor: TEAL, color: "white" }
              : { borderColor: "#E5E7EB", color: "#6B7280" }
          }
        >
          {p}
        </button>
      ))}

      <span className="w-9 h-9 flex items-center justify-center text-gray-400 text-sm">
        ...
      </span>

      <button
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
        aria-label="Next page"
      >
        <ChevronRight size={16} />
      </button>
    </nav>
  );
}
