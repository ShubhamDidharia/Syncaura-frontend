import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "We reduced 40% of manual work after switching to Flowbit. Attendance and leave tracking became completely effortless.",
    name: "Priya S",
    role: "HR Executive",
    company: "TechCorp India",
    initial: "P",
    color: "#f43f5e",
    grad: 'linear-gradient(135deg, rgba(244,63,94,0.12), rgba(139,92,246,0.06))',
    border: 'rgba(244,63,94,0.25)',
  },
  {
    quote: "The UI is super clean and intuitive. Kanban boards and real-time chat make daily work so much smoother for our team.",
    name: "Rahul M",
    role: "Product Designer",
    company: "DesignHub",
    initial: "R",
    color: "#22c55e",
    grad: 'linear-gradient(135deg, rgba(34,197,94,0.12), rgba(6,182,212,0.06))',
    border: 'rgba(34,197,94,0.25)',
  },
  {
    quote: "Scheduling meetings with auto Google Meet links is a lifesaver. No more jumping between tools. Everything just works.",
    name: "Sneha K",
    role: "Team Lead",
    company: "AgileWorks",
    initial: "S",
    color: "#6366f1",
    grad: 'linear-gradient(135deg, rgba(99,102,241,0.12), rgba(139,92,246,0.06))',
    border: 'rgba(99,102,241,0.25)',
  },
  {
    quote: "Our documentation, tasks, and meetings stay perfectly in sync. It feels like having everything in one brain.",
    name: "Vikas R",
    role: "Engineering Manager",
    company: "BuildFast",
    initial: "V",
    color: "#f59e0b",
    grad: 'linear-gradient(135deg, rgba(245,158,11,0.12), rgba(249,115,22,0.06))',
    border: 'rgba(245,158,11,0.25)',
  },
  {
    quote: "Flowbit completely transformed how our remote team collaborates. Productivity has never been this high.",
    name: "Ananya T",
    role: "COO",
    company: "ScaleUp Labs",
    initial: "A",
    color: "#06b6d4",
    grad: 'linear-gradient(135deg, rgba(6,182,212,0.12), rgba(59,130,246,0.06))',
    border: 'rgba(6,182,212,0.25)',
  },
  {
    quote: "Performance analytics in Flowbit helped us identify bottlenecks we never knew existed. Game-changer.",
    name: "Karan D",
    role: "CTO",
    company: "NexaCloud",
    initial: "K",
    color: "#8b5cf6",
    grad: 'linear-gradient(135deg, rgba(139,92,246,0.12), rgba(99,102,241,0.06))',
    border: 'rgba(139,92,246,0.25)',
  },
];

const StarRating = ({ color }) => (
  // Renders 5 tiny star icons in a row for the 5-star rating on the card.
  <div className="flex gap-0.5 mb-4">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={13} fill={color} stroke="none" />
    ))}
  </div>
);

const TestimonialCard = ({ item }) => (
  /* 
    TESTIMONIAL CARD
    An individual review card with dynamic colors (passed via the 'item' object).
  */
  <div
    className="relative flex flex-col justify-between w-[300px] sm:w-[320px] flex-shrink-0 p-6 rounded-2xl overflow-hidden group"
    style={{
      background: item.grad,
      border: `1px solid ${item.border}`,
      boxShadow: `0 8px 32px ${item.color}12`,
      minHeight: '220px',
    }}
  >
    {/* Corner glow */}
    <div
      className="absolute -top-5 -right-5 w-20 h-20 rounded-full blur-2xl opacity-20 pointer-events-none"
      style={{ backgroundColor: item.color }}
    />

    {/* Quote icon */}
    <div className="flex flex-col gap-3">
      <Quote size={22} style={{ color: item.color, opacity: 0.7 }} />

      <StarRating color={item.color} />

      <p
        className="text-sm leading-relaxed font-medium"
        style={{ color: 'var(--text-secondary)' }}
      >
        "{item.quote}"
      </p>
    </div>

    {/* Author */}
    <div className="flex items-center gap-3 mt-5 pt-4" style={{ borderTop: `1px solid ${item.border}` }}>
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
        style={{
          background: `linear-gradient(135deg, ${item.color}, ${item.color}aa)`,
          boxShadow: `0 4px 14px ${item.color}40`,
        }}
      >
        {item.initial}
      </div>
      <div>
        <p className="text-sm font-bold" style={{ color: 'var(--text-primary)' }}>{item.name}</p>
        <p className="text-xs" style={{ color: 'var(--text-secondary)', opacity: 0.7 }}>
          {item.role} · <span style={{ color: item.color }}>{item.company}</span>
        </p>
      </div>
    </div>

    {/* Bottom accent */}
    <div
      className="absolute bottom-0 left-5 right-5 h-[1.5px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      style={{ background: `linear-gradient(90deg, transparent, ${item.color}, transparent)` }}
    />
  </div>
);

const CARD_W = 320;
const GAP = 20;
const TOTAL = (CARD_W + GAP) * testimonials.length;

const Testimonials = () => {
  return (
    <>
      {/* 
        INFINITE SCROLL ANIMATION
        This inline CSS injects a custom keyframe animation 'scroll-left' 
        that slowly moves the track of cards to the left indefinitely.
      */}
      <style>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-${TOTAL}px); }
        }
        .scroll-track {
          animation: scroll-left ${testimonials.length * 5}s linear infinite;
          display: flex;
          gap: ${GAP}px;
          width: max-content;
        }
        .scroll-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      <section
        className="w-full py-16 md:py-24 relative overflow-hidden"
        style={{ backgroundColor: 'var(--bg-primary)' }}
      >
        {/* Background glow */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div
            animate={{ scale: [1, 1.2, 1], opacity: [0.04, 0.09, 0.04] }}
            transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full blur-[100px]"
            style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)' }}
          />
        </div>

        <div className="relative z-10">

          {/* ── Section Header ── */}
          <div className="text-center mb-14 space-y-5 px-4">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.14), rgba(139,92,246,0.14))',
                border: '1px solid rgba(99,102,241,0.3)',
                color: '#818cf8',
              }}
            >
              <Star size={11} fill="#818cf8" stroke="none" />
              Trusted by Top Professionals
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05]"
              style={{ color: 'var(--text-primary)' }}
            >
              What our users{' '}
              <span
                className="text-transparent bg-clip-text"
                style={{ backgroundImage: 'linear-gradient(135deg, #6366f1 0%, #8b5cf6 50%, #ec4899 100%)' }}
              >
                are saying
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base md:text-lg max-w-xl mx-auto leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Real stories from professionals who transformed how their teams work.
            </motion.p>
          </div>

          {/* 
            SCROLLING TRACK
            This holds the cards. Notice we render the 'testimonials' array TWICE 
            ([...testimonials, ...testimonials]) so that it creates a seamless, infinite scrolling illusion.
          */}
          <div className="overflow-hidden">
            <div className="scroll-track">
              {[...testimonials, ...testimonials].map((item, i) => (
                <TestimonialCard key={i} item={item} />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Testimonials;