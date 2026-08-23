import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

type FAQCategory = {
  id: string;
  title: string;
  icon: "calendar" | "billing" | "clock" | "emergency";
  questions: FAQItem[];
};

const faqCategories: FAQCategory[] = [
  {
    id: "appointments",
    title: "Appointments",
    icon: "calendar",
    questions: [
      {
        question: "How do I book an appointment?",
        answer:
          "You can book an appointment by calling our patient scheduling line at (555) 123-4567, or by using our online patient portal. For new patients, please have your insurance information ready when calling.",
      },
      {
        question: "Do I need a referral to see a specialist?",
        answer:
          "Some specialist appointments may require a referral. Please contact our patient support team or check with your insurance provider to confirm whether a referral is required.",
      },
      {
        question: "What should I bring to my first appointment?",
        answer:
          "Please bring a valid form of identification, your insurance information, a list of current medications, and any relevant medical records or documents requested by your provider.",
      },
    ],
  },
  {
    id: "insurance",
    title: "Insurance & Billing",
    icon: "billing",
    questions: [
      {
        question: "What insurance plans do you accept?",
        answer:
          "We accept a wide range of major insurance plans. Please contact our billing team to confirm whether your specific insurance plan is accepted.",
      },
    ],
  },
  {
    id: "visiting",
    title: "Visiting Hours",
    icon: "clock",
    questions: [
      {
        question: "What are your visiting hours?",
        answer:
          "Our standard visiting hours are Monday through Friday, 8am to 5pm. Visiting hours may vary depending on the department.",
      },
    ],
  },
  {
    id: "emergency",
    title: "Emergency Care",
    icon: "emergency",
    questions: [
      {
        question: "What should I do in an emergency?",
        answer:
          "If you are experiencing a medical emergency, please seek immediate emergency assistance or contact your local emergency services.",
      },
    ],
  },
];

/* -----------------------------------------
   CATEGORY ICONS
----------------------------------------- */

function CategoryIcon({
  type,
  active = false,
}: {
  type: FAQCategory["icon"];
  active?: boolean;
}) {
  const color = active ? "#009E95" : "#52677D";

  if (type === "calendar") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <rect x="3" y="4" width="18" height="17" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    );
  }

  if (type === "billing") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <rect x="3" y="6" width="18" height="13" rx="2" />
        <path d="M3 10h18M7 15h4" />
      </svg>
    );
  }

  if (type === "clock") {
    return (
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    );
  }

  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
    >
      <path d="M12 3v18M3 12h18M5.5 5.5l13 13M18.5 5.5l-13 13" />
    </svg>
  );
}

/* -----------------------------------------
   CHEVRON
----------------------------------------- */

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className={`transition-transform duration-200 ${
        open ? "rotate-180" : ""
      }`}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

/* -----------------------------------------
   FAQ QUESTION
----------------------------------------- */

function FAQQuestion({
  item,
  open,
  onClick,
}: {
  item: FAQItem;
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-6 py-[18px] text-left"
        aria-expanded={open}
      >
        <span
          className={`text-[15px] font-semibold leading-6 transition-colors ${
            open ? "text-primary" : "text-slate-900"
          }`}
        >
          {item.question}
        </span>

        <span className="shrink-0 text-slate-600">
          <Chevron open={open} />
        </span>
      </button>

      {open && (
        <div className="pb-[18px] pr-8">
          <p className="max-w-[800px] text-[13px] leading-[1.7] text-slate-600">
            {item.answer}
          </p>
        </div>
      )}
    </div>
  );
}

/* -----------------------------------------
   FAQ CARD
----------------------------------------- */

function FAQCard({
  category,
  openQuestion,
  setOpenQuestion,
}: {
  category: FAQCategory;
  openQuestion: string | null;
  setOpenQuestion: (question: string | null) => void;
}) {
  return (
    <section
      id={`faq-${category.id}`}
      className="scroll-mt-24 rounded-[9px] border border-slate-200 bg-white px-5 sm:px-6"
    >
      <div className="flex items-center gap-3 pt-5 pb-2">
        <CategoryIcon type={category.icon} active />

        <h2 className="text-[18px] font-medium leading-6 text-slate-900">
          {category.title}
        </h2>
      </div>

      <div>
        {category.questions.map((item) => (
          <FAQQuestion
            key={item.question}
            item={item}
            open={openQuestion === item.question}
            onClick={() =>
              setOpenQuestion(
                openQuestion === item.question ? null : item.question
              )
            }
          />
        ))}
      </div>
    </section>
  );
}

/* -----------------------------------------
   FAQ PAGE
----------------------------------------- */

export default function FAQPage() {
  // The Figma design has the first question open.
  const [openQuestion, setOpenQuestion] = useState<string | null>(
    "How do I book an appointment?"
  );

  const scrollToCategory = (id: string) => {
    const element = document.getElementById(`faq-${id}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <main className="min-h-screen bg-slate-50">
      <div
        className="
          mx-auto
          w-full
          max-w-[1280px]
          px-6
          pb-20
          pt-[145px]
          sm:px-8
          lg:px-12
          lg:pt-[145px]
        "
      >
        {/* =====================================
            PAGE HEADER
        ===================================== */}

        <div className="mx-auto max-w-[760px] text-center">
          <h1
            className="
              text-[38px]
              font-bold
              leading-[1.12]
              tracking-[-0.035em]
              text-slate-900
              sm:text-[44px]
              lg:text-[48px]
            "
          >
            Frequently Asked Questions
          </h1>

          <p
            className="
              mx-auto
              mt-5
              max-w-[700px]
              text-[15px]
              leading-[1.65]
              text-slate-600
              sm:text-[16px]
            "
          >
            Find answers to common questions about appointments, billing, and
            our services. If you need more help, our team is here for you.
          </p>
        </div>

        {/* =====================================
            FAQ AREA
        ===================================== */}

        <div
          className="
            mt-10
            grid
            grid-cols-1
            items-start
            gap-6
            lg:grid-cols-[280px_minmax(0,1fr)]
          "
        >
          {/* ===================================
              SIDEBAR
          =================================== */}

          <aside className="rounded-[9px] border border-slate-200 bg-white p-4 shadow-[0_1px_3px_rgba(0,0,0,0.05)]">
            <h3 className="px-3 pb-3 text-[12px] font-bold uppercase tracking-[0.08em] text-slate-600">
              Categories
            </h3>

            <nav className="space-y-1">
              {faqCategories.map((category, index) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => scrollToCategory(category.id)}
                  className={`
                    flex
                    w-full
                    items-center
                    justify-between
                    rounded-[7px]
                    px-3
                    py-[11px]
                    text-left
                    text-[13px]
                    transition-colors
                    ${
                      index === 0
                        ? "bg-slate-100 font-medium text-primary"
                        : "font-medium text-slate-700 hover:bg-slate-50 hover:text-primary"
                    }
                  `}
                >
                  <span>{category.title}</span>

                  <CategoryIcon
                    type={category.icon}
                    active={index === 0}
                  />
                </button>
              ))}
            </nav>
          </aside>

          {/* ===================================
              FAQ CARDS
          =================================== */}

          <div className="space-y-3">
            <FAQCard
              category={faqCategories[0]}
              openQuestion={openQuestion}
              setOpenQuestion={setOpenQuestion}
            />

            <FAQCard
              category={faqCategories[1]}
              openQuestion={openQuestion}
              setOpenQuestion={setOpenQuestion}
            />
          </div>
        </div>

        {/* =====================================
            CTA
        ===================================== */}

        <section className="mt-8 rounded-[9px] border border-slate-200 bg-slate-100 px-6 py-12 text-center">
          <h2 className="text-[28px] font-bold leading-tight text-slate-900">
            Still have questions?
          </h2>

          <p className="mx-auto mt-4 max-w-[600px] text-[15px] leading-[1.65] text-slate-600">
            Contact our patient support team. We are available Monday through
            Friday, 8am to 5pm to assist you.
          </p>

          <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/contact"
              className="inline-flex min-w-[135px] items-center justify-center rounded-[6px] bg-primary px-6 py-3 text-[13px] font-semibold text-white transition-opacity hover:opacity-90"
            >
              Contact Us
            </a>

            <a
              href="#"
              className="inline-flex min-w-[190px] items-center justify-center rounded-[6px] border border-primary bg-transparent px-6 py-3 text-[13px] font-semibold text-primary transition-colors hover:bg-primary hover:text-white"
            >
              Access Patient Portal
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}