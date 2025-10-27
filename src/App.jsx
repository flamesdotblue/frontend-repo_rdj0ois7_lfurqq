import React from 'react';
import Hero from './components/Hero';
import Why from './components/Why';
import Featured from './components/Featured';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] text-[#1E1E1E]">
      {/* Header / simple nav */}
      <header className="sticky top-0 z-20 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="text-xl font-extrabold tracking-tight">
            <span className="text-[#DA291C]">Brick</span>
            <span className="text-[#1E1E1E]">Match</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-700 md:flex">
            <a href="#why" className="hover:text-[#DA291C]">Why</a>
            <a href="#trending" className="hover:text-[#DA291C]">Trending</a>
            <a
              href="/quiz"
              className="rounded-[16px] bg-[#DA291C] px-4 py-2 font-semibold text-white shadow-sm transition-transform hover:scale-[1.02]"
            >
              Start Quiz
            </a>
          </nav>
        </div>
      </header>

      {/* Sections */}
      <main>
        <Hero />
        <Why />
        <Featured />
      </main>

      <Footer />
    </div>
  );
}

export default App;
