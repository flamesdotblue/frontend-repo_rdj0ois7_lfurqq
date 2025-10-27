import React from 'react';
import { Brain, Blocks, BadgeDollarSign } from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'Smart recommendations',
    desc: 'Answer a few fun questions and let our logic match your vibe to the perfect set.'
  },
  {
    icon: Blocks,
    title: 'All official LEGO sets',
    desc: 'Curated across themes: Technic, Star Wars, Architecture, Ideas, and more.'
  },
  {
    icon: BadgeDollarSign,
    title: 'Best prices via Amazon & LEGO Store',
    desc: 'Affiliate links help you save while supporting BrickMatch at no extra cost.'
  }
];

const Why = () => {
  return (
    <section className="bg-[#F3F4F6] py-16" id="why">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl font-extrabold text-[#1E1E1E] md:text-4xl">
          Why BrickMatch?
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-gray-600">
          Simple, fast, and fun. Discover sets that match your mood, personality, and budget.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-[20px] bg-white p-6 shadow-md ring-1 ring-gray-100 transition-transform hover:scale-[1.01]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#DA291C]/10 text-[#DA291C]">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 text-lg font-bold text-[#1E1E1E]">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Why;
