"use client";
import { useState, useEffect } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";

interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function HeroSection({
  email,
  setEmail,
  handleSubmit,
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-purple-900">
      <BackgroundAnimation />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-black/0 dark:via-black/0 dark:to-black pointer-events-none" />

      <div className="container relative mx-auto px-4 py-12 sm:py-32">
        <div className="max-w-4xl mx-auto">
          <div
            className={`text-center transform transition-all duration-1000 ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-6 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-400/10 dark:to-blue-400/10 rounded-full animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Votre assistant IA personnel
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-purple-600 dark:text-white relative">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Développez sans
              </span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                les blocages
              </span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                habituels
              </span>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            </h1>

            <p
              className={`text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed transition-all duration-1000 delay-300 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              Imaginez un monde où vous n'avez plus besoin d'attendre les réponses de votre PM. 
              Où les tickets de bug sont résolus plus rapidement grâce à une IA qui localise précisément le problème. 
              SVETA est votre assistant qui comprend votre code et votre contexte business.
            </p>

            <div
              className={`transition-all duration-1000 delay-500 ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-10 opacity-0"
              }`}
            >
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-left">
                  <div className="text-xl mb-2">🔍</div>
                  <h3 className="font-semibold mb-1">Analyse de bugs</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Localisation précise des bugs dans votre code</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-left">
                  <div className="text-xl mb-2">💡</div>
                  <h3 className="font-semibold mb-1">Contexte business</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Réponses immédiates à vos questions business</p>
                </div>
                <div className="bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 text-left">
                  <div className="text-xl mb-2">⚡</div>
                  <h3 className="font-semibold mb-1">Développement accéléré</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Plus de temps à coder, moins à chercher</p>
                </div>
              </div>

              <form
                onSubmit={handleSubmit}
                className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Entrez votre email"
                  className="flex-1 px-4 sm:px-6 py-3 sm:py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                  required
                />
                <button
                  type="submit"
                  className="relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <span className="relative z-10">Accès anticipé</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-8 bg-gradient-to-b from-purple-500/50 to-transparent" />
    </section>
  );
}
