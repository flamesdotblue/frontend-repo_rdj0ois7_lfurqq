import React from 'react';
import { Star } from 'lucide-react';

const trending = [
  {
    id: 'technic-lambo',
    name: 'LEGO Technic Lamborghini Sián FKP 37',
    img: 'https://images.unsplash.com/photo-1582395761364-0d5cd6f7a5d2?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tag: 'Premium Build'
  },
  {
    id: 'starwars-falcon',
    name: 'LEGO Star Wars Millennium Falcon',
    img: 'https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tag: 'Fan Favorite'
  },
  {
    id: 'architecture-skyline',
    name: 'LEGO Architecture Skyline Collection',
    img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop',
    link: '#',
    tag: 'Aesthetic'
  }
];

const Featured = () => {
  return (
    <section className="py-16" id="trending">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-extrabold text-[#1E1E1E] md:text-4xl">Top Trending LEGO Sets</h2>
          <div className="hidden items-center gap-2 text-sm text-gray-500 md:flex">
            <Star className="text-yellow-500" size={16} /> curated picks
          </div>
        </div>
        <p className="mt-2 max-w-2xl text-gray-600">
          Quick picks you can’t go wrong with. Some links are affiliate — thanks for your support!
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trending.map((item) => (
            <a
              key={item.id}
              href={item.link}
              className="group block overflow-hidden rounded-[20px] bg-white shadow-md ring-1 ring-gray-100 transition-transform hover:scale-[1.01]"
              target="_blank"
              rel="noreferrer"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <img
                  src={item.img}
                  alt={item.name}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <span className="absolute left-3 top-3 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800 shadow-sm ring-1 ring-gray-200">
                  {item.tag}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#1E1E1E]">{item.name}</h3>
                <p className="mt-1 text-sm text-gray-600">Buy now →</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
