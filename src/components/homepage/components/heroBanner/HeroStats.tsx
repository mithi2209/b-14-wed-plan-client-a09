

"use client";

const stats = [
  { value: "500+", label: "Trusted Vendors" },
  { value: "10K+", label: "Happy Couples" },
  { value: "20+",  label: "Cities" },
  { value: "4.9",  label: "Avg Rating" },
];

const HeroStats = () => {

  return (
    
    <div className="mt-12 rounded-2xl border border-accent/30 bg-card/60 px-4 py-5 shadow-sm backdrop-blur-sm sm:mt-14 sm:px-6 sm:py-6 lg:mt-16">
      <div className="grid grid-cols-2 gap-6 text-center sm:grid-cols-4 sm:divide-x sm:divide-accent/25">
        {stats.map((s) => (
          <div key={s.label} className="px-2">
            <div className="font-heading text-2xl text-espresso dark:text-ivory">
              {s.value}
            </div>
            <div className="mt-1 text-[10px] uppercase tracking-[0.2em] text-mocha dark:text-soft-mocha">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroStats;