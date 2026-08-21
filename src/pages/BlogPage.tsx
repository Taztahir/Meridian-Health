import React, { useState } from "react";
import {
  Search,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Clock,
  Share2,
  // Facebook,
  // Twitter,
  // Linkedin,
} from "lucide-react";
import { Pagination } from "../features/Pagination";
import { ARTICLES, FEATURED_POST, RECENT_POSTS } from "../data/mimockData";
import { CategoryPill, SectionCard, TEAL, TEAL_DARK } from "../features/cards";
import { ArticleCard } from "../features/ArticleCard";


const CATEGORIES = [
  { name: "Health Tips", count: 12 },
  { name: "Medical Research", count: 8 },
  { name: "Hospital News", count: 15 },
  { name: "Patient Stories", count: 5 },
];



const ALL_ARTICLES = [FEATURED_POST, ...ARTICLES, ...RECENT_POSTS];

//---------------------------------------------------------------
// Sidebar pieces
// ---------------------------------------------------------------------------

function SearchBox() {
  const [query, setQuery] = useState("");
  return (
    <SectionCard>
      <div className="relative">
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search articles..."
          className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-gray-200 text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2"
          // style={{ "--tw-ring-color": TEAL }}
        />
      </div>
    </SectionCard>
  );
}

function CategoriesCard() {
  return (
    <SectionCard>
      <h3 className="text-lg font-bold text-gray-900 mb-4">Categories</h3>
      <ul className="divide-y divide-gray-100">
        {CATEGORIES.map((cat) => (
          <li key={cat.name}>
            <button className="w-full flex items-center justify-between py-3 text-sm text-gray-700 hover:text-gray-900 transition-colors text-left">
              <span>{cat.name}</span>
              <span className="text-xs font-semibold text-gray-400 bg-gray-100 rounded-full px-2 py-0.5">
                {cat.count}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

function RecentPostsCard({ onOpen }) {
  return (
    <SectionCard>
      <h3 className="text-lg font-bold text-gray-900 mb-4 pb-4 border-b border-gray-100">
        Recent Posts
      </h3>
      <ul className="space-y-4">
        {RECENT_POSTS.map((post) => (
          <li key={post.id}>
            <button
              onClick={() => onOpen(post.id)}
              className="w-full flex gap-3 text-left group"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-14 h-14 rounded-lg object-cover flex-shrink-0 bg-gray-100"
                loading="lazy"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900 leading-snug group-hover:underline decoration-2 underline-offset-2" style={{ textDecorationColor: TEAL }}>
                  {post.title}
                </p>
                <p className="text-xs text-gray-400 mt-1">{post.date}</p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </SectionCard>
  );
}

function NewsletterCard() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <div
      className="rounded-xl p-6 text-center"
      style={{ backgroundColor: "#EAF1F0" }}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-3"
        style={{ backgroundColor: TEAL }}
      >
        <Mail size={18} className="text-white" />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">Stay Healthy</h3>
      <p className="text-sm text-gray-500 mb-5 leading-relaxed">
        Subscribe to our newsletter for weekly wellness tips and clinic
        updates.
      </p>

      {submitted ? (
        <p className="text-sm font-semibold" style={{ color: TEAL_DARK }}>
          You're subscribed — thanks for joining!
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="w-full px-4 py-2.5 rounded-lg border border-gray-200 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 bg-white"
            // style={{ "--tw-ring-color": TEAL }}
          />
          <button
            type="submit"
            className="w-full py-2.5 rounded-lg text-white text-sm font-semibold transition-colors"
            style={{ backgroundColor: TEAL }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = TEAL_DARK)
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = TEAL)
            }
          >
            Subscribe
          </button>
        </form>
      )}
    </div>
  );
}


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

          {/* Share row */}
          {/* <div className="flex items-center gap-3 mt-10 pt-8 border-t border-gray-100">
            <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-500">
              <Share2 size={15} /> Share
            </span>
            {[Facebook, Twitter, Linkedin].map((Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-full flex items-center justify-center border border-gray-200 text-gray-500 hover:text-white transition-colors"
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = TEAL;
                  e.currentTarget.style.borderColor = TEAL;
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.borderColor = "#E5E7EB";
                }}
                aria-label="Share this article"
              >
                <Icon size={15} />
              </button>
            ))}
          </div> */}
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
