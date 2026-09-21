import { CategoryPill, TEAL } from "./cards";

export function ArticleCard({ article, onOpen }) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden flex flex-col h-full group">
      <button
        onClick={() => onOpen(article.id)}
        className="h-44 sm:h-48 w-full overflow-hidden bg-gray-100 block text-left"
        aria-label={`Read ${article.title}`}
      >
        <img
          src={article.image}
          alt={article.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </button>
      <div className="p-5 flex flex-col flex-1">
        <div className="mb-3">
          <CategoryPill>{article.category}</CategoryPill>
        </div>
        <h3 className="text-lg font-bold text-gray-900 leading-snug mb-2">
          <button
            onClick={() => onOpen(article.id)}
            className="text-left hover:underline decoration-2 underline-offset-2"
            style={{ textDecorationColor: TEAL }}
          >
            {article.title}
          </button>
        </h3>
        <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-400">{article.date}</span>
          <button
            onClick={() => onOpen(article.id)}
            className="inline-flex items-center gap-1 font-semibold hover:gap-1.5 transition-all"
            style={{ color: TEAL }}
          >
            Read More <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </article>
  );
}