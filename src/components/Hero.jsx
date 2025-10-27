import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 backdrop-blur">
              <Rocket size={14} />
              New: BrickMatch Quiz
            </span>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-[#1E1E1E] md:text-6xl">
              Which LEGO set is so you?
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 md:text-lg">
              Take this 2-minute quiz and discover your perfect build. Playful, premium, and made for LEGO lovers.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <a
                href="/quiz"
                className="group inline-flex items-center justify-center rounded-[20px] bg-gradient-to-r from-[#DA291C] to-[#FFCB05] px-6 py-3 text-base font-semibold text-white shadow-lg transition-transform duration-200 ease-out hover:scale-[1.03] focus:outline-none focus:ring-4 focus:ring-red-300"
              >
                Start Quiz
              </a>
              <a
                href="#trending"
                className="inline-flex items-center justify-center rounded-[16px] px-5 py-3 text-sm font-semibold text-[#1E1E1E] ring-1 ring-gray-300 transition-colors hover:bg-white"
              >
                Explore Trending
              </a>
            </div>
          </div>

          <div className="relative h-[340px] w-full rounded-[24px] bg-white shadow-lg md:h-[520px]">
            <Spline
              scene="https://prod.spline.design/95Gu7tsx2K-0F3oi/scene.splinecode"
              style={{ width: '100%', height: '100%' }}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
          </div>
        </div>
      </div>

      {/* Soft background accents */}
      <div className="pointer-events-none absolute left-1/2 top-[-10%] h-64 w-64 -translate-x-1/2 rounded-full bg-[#FFCB05]/30 blur-3xl" />
      <div className="pointer-events-none absolute bottom-[-10%] right-[-5%] h-72 w-72 rounded-full bg-[#DA291C]/20 blur-3xl" />
    </section>
  );
};

export default Hero;
