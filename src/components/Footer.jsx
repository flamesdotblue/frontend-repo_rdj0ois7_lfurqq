import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <h4 className="text-sm font-bold text-[#1E1E1E]">About</h4>
            <p className="mt-2 text-sm text-gray-600">
              BrickMatch helps you find the perfect LEGO set with a quick, fun quiz.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1E1E1E]">Contact</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Email</a></li>
              <li><a href="#" className="hover:underline">Instagram</a></li>
              <li><a href="#" className="hover:underline">Twitter</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1E1E1E]">Legal</h4>
            <ul className="mt-2 space-y-1 text-sm text-gray-600">
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">Privacy</a></li>
              <li><a href="#" className="hover:underline">Terms</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-bold text-[#1E1E1E]">Affiliate Disclosure</h4>
            <p className="mt-2 text-sm text-gray-600">
              As an Amazon Associate, we earn from qualifying purchases.
            </p>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between border-t border-gray-200 pt-6 text-sm text-gray-600">
          <p>© BrickMatch 2025</p>
          <div className="flex items-center gap-4">
            <a href="/" className="hover:underline">Home</a>
            <a href="/quiz" className="hover:underline">Start Quiz</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
