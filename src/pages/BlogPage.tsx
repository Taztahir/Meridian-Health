import { useState } from "react";
import { ArrowLeft, Clock } from "lucide-react";
import { Pagination } from "../features/Pagination";
import { ARTICLES, FEATURED_POST, RECENT_POSTS } from "../data/mimockData";
import { CategoriesCard, CategoryPill, NewsletterCard, RecentPostsCard, SearchBox, TEAL } from "../features/cards";
import { ArticleCard } from "../features/ArticleCard";


const ALL_ARTICLES = [FEATURED_POST, ...ARTICLES, ...RECENT_POSTS];


// ---------------------------------------------------------------------------
// Featured / hero article
// ---------------------------------------------------------------------------

function FeaturedPost({ post, onOpen }) {
  return (
    <article className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => onOpen(post.id)}
        className="h-64 sm:h-80 w-full overflow-hidden bg-gray-100 block group"
        aria-label={`Read ${post.title}`}
      >
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </button>
      <div className="p-6 sm:p-8">
        <div className="flex items-center gap-3 mb-4">
          <CategoryPill>{post.category}</CategoryPill>
          <span className="text-sm text-gray-400">{post.date}</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 leading-tight">
          {post.title}
        </h2>
        <p className="text-gray-500 leading-relaxed mb-5 max-w-2xl">
          {post.excerpt}
        </p>
        <button
          onClick={() => onOpen(post.id)}
          className="inline-flex items-center gap-1 font-semibold hover:gap-1.5 transition-all"
          style={{ color: TEAL }}
        >
          Read Full Article <span aria-hidden="true">→</span>
        </button>
      </div>
    </article>
  );
}

// ---------------------------------------------------------------------------
// Article detail ("Read More" destination)
// ---------------------------------------------------------------------------

function ArticleDetail({ article, onBack, onOpen }) {
  // Suggest up to 3 other articles, preferring the same category.
  const related = ALL_ARTICLES.filter((a) => a.id !== article.id)
    .sort((a, b) => (a.category === article.category ? -1 : 0) - (b.category === article.category ? -1 : 0))
    .slice(0, 3);

  return (
    <div>
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500 hover:text-gray-900 transition-colors mb-6"
      >
        <ArrowLeft size={16} /> Back to all articles
      </button>

      <article className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <div className="h-64 sm:h-96 w-full overflow-hidden bg-gray-100">
          <img
            src={article.image}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 sm:p-10">
          <div className="flex items-center gap-3 mb-5 flex-wrap">
            <CategoryPill>{article.category}</CategoryPill>
            <span className="text-sm text-gray-400">{article.date}</span>
            {article.readTime && (
              <span className="inline-flex items-center gap-1 text-sm text-gray-400">
                <Clock size={14} /> {article.readTime}
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
            {article.title}
          </h1>

          {article.author && (
            <p className="text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
              By <span className="font-semibold text-gray-700">{article.author}</span>
            </p>
          )}

          {/* Body content */}
          <div className="max-w-2xl">
            {article.body?.map((block, i) =>
              block.type === "h" ? (
                <h2
                  key={i}
                  className="text-xl font-bold text-gray-900 mt-8 mb-3"
                >
                  {block.text}
                </h2>
              ) : (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-5"
                >
                  {block.text}
                </p>
              )
            )}
          </div>
        </div>
      </article>

      {/* Related articles */}
      {related.length > 0 && (
        <div className="mt-10">
          <h3 className="text-xl font-bold text-gray-900 mb-5">
            You might also like
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {related.map((r) => (
              <ArticleCard key={r.id} article={r} onOpen={onOpen} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

const BlogPage = () => {
  const [page, setPage] = useState(1);
  const [activeId, setActiveId] = useState(null);

  const activeArticle = activeId
    ? ALL_ARTICLES.find((a) => a.id === activeId)
    : null;

  const openArticle = (id) => {
    setActiveId(id);
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  const closeArticle = () => {
    setActiveId(null);
    window.scrollTo?.({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FAFAF9] mt-16">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12 flex items-center flex-col justify-center text-center h-100">
        <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
          News &amp; Health Insights
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          Stay informed with the latest updates in modern healthcare,
          wellness tips, and research from Meridian Health professionals.
        </p>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-6 pb-20 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8">
        {/* Left column */}
        <div>
          {activeArticle ? (
            <ArticleDetail
              article={activeArticle}
              onBack={closeArticle}
              onOpen={openArticle}
            />
          ) : (
            <>
              <FeaturedPost post={FEATURED_POST} onOpen={openArticle} />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {ARTICLES.map((article) => (
                  <ArticleCard
                    key={article.id}
                    article={article}
                    onOpen={openArticle}
                  />
                ))}
              </div>

              <Pagination page={page} totalPages={3} onPageChange={setPage} />
            </>
          )}
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <SearchBox />
          <CategoriesCard />
          <RecentPostsCard onOpen={openArticle} />
          <NewsletterCard />
        </aside>
      </main>
    </div>
  );
};

export default BlogPage;
