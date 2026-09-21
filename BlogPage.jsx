import React, { useState } from "react";
import {
  Search,
  Mail,
  ChevronLeft,
  ChevronRight,
  ArrowLeft,
  Clock,
  Share2,
  Facebook,
  Twitter,
  Linkedin,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Mock content — swap for real data / CMS results when wiring this up.
// Every article now carries an `id`, `readTime`, `author`, and `body`
// (an array of paragraph / heading blocks) so the "Read More" links can
// open a full detail view.
// ---------------------------------------------------------------------------

const FEATURED_POST = {
  id: "advancements-in-cardiac-care-2024",
  category: "Research",
  date: "October 15, 2024",
  readTime: "6 min read",
  author: "Dr. Elena Marsh, Cardiology",
  title: "Advancements in Cardiac Care 2024",
  excerpt:
    "Explore the latest technological and methodological breakthroughs in cardiology. Our specialists detail how these new approaches are improving patient outcomes and streamlining recovery processes in modern clinical environments.",
  image:
    "https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=1400&auto=format&fit=crop",
  body: [
    { type: "p", text: "Cardiology has entered one of its most consequential decades. Across Meridian Health's cardiac units, teams are combining minimally invasive procedures with real-time monitoring to catch complications before they become emergencies." },
    { type: "h", text: "Smaller incisions, faster recovery" },
    { type: "p", text: "Transcatheter techniques that once applied only to the highest-risk patients are now standard for a much broader group. Where open-heart surgery once meant a week in hospital, many patients are walking the same day and home within 48 hours." },
    { type: "p", text: "This shift matters most for older patients, who face outsized risks from prolonged bed rest. Shorter recovery windows translate directly into fewer secondary complications like blood clots and pneumonia." },
    { type: "h", text: "Continuous monitoring changes the timeline" },
    { type: "p", text: "Wearable ECG patches and implantable loop recorders now stream data continuously instead of relying on periodic check-ups. Care teams can flag irregular rhythms within hours rather than discovering them at a follow-up appointment weeks later." },
    { type: "p", text: "Combined with predictive analytics, this earlier signal is allowing physicians to intervene before an arrhythmia becomes a hospitalization, a change our team considers one of the most significant of the past five years." },
    { type: "h", text: "What this means for patients" },
    { type: "p", text: "None of this replaces the fundamentals: diet, exercise, and regular screening remain the strongest predictors of long-term heart health. But for patients who do need intervention, 2024's tools make that intervention smaller, safer, and easier to recover from." },
  ],
};

const CATEGORIES = [
  { name: "Health Tips", count: 12 },
  { name: "Medical Research", count: 8 },
  { name: "Hospital News", count: 15 },
  { name: "Patient Stories", count: 5 },
];

const RECENT_POSTS = [
  {
    id: "new-pediatric-wing-opens-next-month",
    title: "New Pediatric Wing Opens Next Month",
    date: "Oct 14, 2024",
    category: "Hospital News",
    readTime: "3 min read",
    author: "Meridian Health Communications",
    excerpt: "A look inside the new family-centered pediatric wing, opening to patients next month.",
    image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1400&auto=format&fit=crop",
    body: [
      { type: "p", text: "Construction on Meridian's new pediatric wing is entering its final phase, with the unit set to welcome its first patients next month." },
      { type: "p", text: "The 40-bed expansion was designed around family-centered care, with private rooms, dedicated play areas, and space for a parent to stay overnight beside every bed." },
      { type: "h", text: "Built around families, not just beds" },
      { type: "p", text: "Every design decision, from lighting to hallway layout, went through review by a panel of former patients and their families. The result is a unit that reads less like a hospital ward and more like a place kids might actually want to be." },
    ],
  },
  {
    id: "wearable-tech-in-monitoring-chronic-illness",
    title: "Wearable Tech in Monitoring Chronic Illness",
    date: "Oct 10, 2024",
    category: "Medical Research",
    readTime: "5 min read",
    author: "Dr. Priya Nandan, Endocrinology",
    excerpt: "How continuous glucose monitors and smart wearables are reshaping chronic disease management.",
    image: "https://images.unsplash.com/photo-1544117519-31a4b719223d?q=80&w=1400&auto=format&fit=crop",
    body: [
      { type: "p", text: "For patients managing diabetes, heart disease, or COPD, the biggest barrier to good care has always been the gap between appointments. Wearable technology is closing that gap." },
      { type: "h", text: "From snapshots to continuous data" },
      { type: "p", text: "Continuous glucose monitors, smart inhalers, and connected blood pressure cuffs now feed data directly to care teams. Instead of reconstructing two weeks of history from memory, patients arrive at appointments with a complete picture already on file." },
      { type: "p", text: "Early results from our chronic care program show fewer emergency visits among patients using connected devices, though we're still gathering longer-term data before drawing firm conclusions." },
    ],
  },
  {
    id: "physical-therapy-what-to-expect",
    title: "Physical Therapy: What to Expect",
    date: "Oct 06, 2024",
    category: "Patient Stories",
    readTime: "4 min read",
    author: "James Okoro, PT, DPT",
    excerpt: "A plain-language walkthrough of your first physical therapy session and what comes after.",
    image: "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=1400&auto=format&fit=crop",
    body: [
      { type: "p", text: "Starting physical therapy can feel intimidating, especially if you're recovering from surgery or a new injury. Here's what actually happens in that first visit." },
      { type: "h", text: "Your first session" },
      { type: "p", text: "Expect an hour focused mostly on assessment: your therapist will test range of motion, strength, and pain points before building a plan. Very little actual exercise happens in visit one." },
      { type: "h", text: "Setting a realistic pace" },
      { type: "p", text: "Progress in physical therapy is rarely linear. Good weeks and plateau weeks are both normal, and your plan will adjust as your body responds." },
    ],
  },
];

const ARTICLES = [
  {
    id: "wellness-tips-for-the-family",
    category: "Health Tips",
    date: "Oct 12, 2024",
    readTime: "4 min read",
    author: "Meridian Wellness Team",
    title: "Wellness Tips for the Family",
    excerpt: "Simple, actionable advice for maintaining physical and mental well-being for all ages.",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?q=80&w=1400&auto=format&fit=crop",
    body: [
      { type: "p", text: "Good health habits are easiest to keep when the whole family builds them together. A few small, shared routines go further than any single person's willpower." },
      { type: "h", text: "Make movement social" },
      { type: "p", text: "A 20-minute after-dinner walk does more for a family's long-term health than an ambitious solo gym plan that fizzles out by February. Movement that's social is movement that sticks." },
      { type: "h", text: "Sleep is a household habit" },
      { type: "p", text: "Consistent bedtimes for kids also tend to regulate adult sleep schedules. Treating sleep as a family policy, not just a kids' rule, tends to improve everyone's rest." },
    ],
  },
  {
    id: "understanding-modern-diagnostics",
    category: "News",
    date: "Oct 08, 2024",
    readTime: "5 min read",
    author: "Dr. Samuel Ade, Radiology",
    title: "Understanding Modern Diagnostics",
    excerpt: "A deep dive into how new imaging technologies are changing early detection...",
    image: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b?q=80&w=1400&auto=format&fit=crop",
    body: [
      { type: "p", text: "Modern imaging is no longer just about producing a clearer picture — it's about producing that picture faster and interpreting it more precisely." },
      { type: "h", text: "AI-assisted reads" },
      { type: "p", text: "Machine-learning models now flag areas of concern on scans before a radiologist even opens the file, cutting time-to-diagnosis for some conditions from days to hours." },
      { type: "p", text: "Radiologists remain the final decision-makers; the models act as a second set of eyes, not a replacement for clinical judgment." },
    ],
  },
  {
    id: "vaccination-schedules-guide",
    category: "Health Tips",
    date: "Oct 05, 2024",
    readTime: "6 min read",
    author: "Dr. Grace Ibe, Family Medicine",
    title: "Vaccination Schedules Guide",
    excerpt: "An updated guide on recommended immunization timelines for children and adults.",
    image: "https://images.unsplash.com/photo-1584982751601-97dcc096659c?q=80&w=1400&auto=format&fit=crop",
    body: [
      { type: "p", text: "Vaccine schedules are updated periodically as new research and formulations become available. Here's what families should know heading into this season." },
      { type: "h", text: "For children" },
      { type: "p", text: "Most core childhood immunizations remain unchanged, though timing for a few boosters has shifted. Your pediatrician's office is always the most current source for your child's specific schedule." },
      { type: "h", text: "For adults" },
      { type: "p", text: "Adult vaccination is often overlooked. Annual flu shots, periodic tetanus boosters, and age-appropriate vaccines like shingles coverage are all worth reviewing at your next physical." },
    ],
  },
  {
    id: "dietary-impacts-on-recovery",
    category: "Research",
    date: "Oct 01, 2024",
    readTime: "5 min read",
    author: "Dr. Lena Marsh, Nutrition Science",
    title: "Dietary Impacts on Recovery",
    excerpt: "New findings on how specialized diets can accelerate healing post-surgery.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=1400&auto=format&fit=crop",
    body: [
      { type: "p", text: "Post-surgical recovery has traditionally focused on rest and medication, but new research points to nutrition as an equally powerful lever." },
      { type: "h", text: "Protein and wound healing" },
      { type: "p", text: "Patients on protein-forward recovery diets showed measurably faster wound closure in early trials at our surgical center, likely due to protein's role in tissue repair." },
      { type: "h", text: "A note of caution" },
      { type: "p", text: "These findings are promising but preliminary. Patients should always follow their surgical team's specific dietary guidance rather than adopting a general protocol on their own." },
    ],
  },
];

const ALL_ARTICLES = [FEATURED_POST, ...ARTICLES, ...RECENT_POSTS];

const TEAL = "#0F6E63";
const TEAL_DARK = "#0B564D";

// ---------------------------------------------------------------------------
// Small building blocks
// ---------------------------------------------------------------------------

function CategoryPill({ children }) {
  return (
    <span
      className="inline-block text-xs font-semibold px-3 py-1 rounded-full"
      style={{ backgroundColor: "#E6F2F0", color: TEAL }}
    >
      {children}
    </span>
  );
}

function ArticleCard({ article, onOpen }) {
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

function SectionCard({ children, className = "" }) {
  return (
    <div
      className={`bg-white rounded-xl border border-gray-200 p-6 ${className}`}
    >
      {children}
    </div>
  );
}

// ---------------------------------------------------------------------------
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
          style={{ "--tw-ring-color": TEAL }}
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
            style={{ "--tw-ring-color": TEAL }}
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

function Pagination({ page, totalPages, onPageChange }) {
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
          <div className="flex items-center gap-3 mt-10 pt-8 border-t border-gray-100">
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
    <div className="min-h-screen bg-[#FAFAF9]">
      {/* Header */}
      <header className="max-w-6xl mx-auto px-6 pt-16 pb-12 text-center">
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
