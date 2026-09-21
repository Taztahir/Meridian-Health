import { useState } from "react";
import { RECENT_POSTS } from "../data/mimockData";
import { Mail, Search } from "lucide-react";

export const TEAL = "#0F6E63";
export const TEAL_DARK = "#0B564D";

export const CATEGORIES = [
  { name: "Health Tips", count: 12 },
  { name: "Medical Research", count: 8 },
  { name: "Hospital News", count: 15 },
  { name: "Patient Stories", count: 5 },
];



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

export function RecentPostsCard({ onOpen }) {
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


export function CategoriesCard() {
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


export function SearchBox() {
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


export function NewsletterCard() {
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
            // style={{ "--tw-ring-color": TEA }}
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

