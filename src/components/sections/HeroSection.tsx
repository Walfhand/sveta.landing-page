"use client";
import { useState, useEffect } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";

interface HeroSectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function HeroSection({ email, setEmail, handleSubmit }: HeroSectionProps) {
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
          <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-flex items-center gap-2 mb-6 px-3 sm:px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-400/10 dark:to-blue-400/10 rounded-full animate-pulse">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              <span className="text-xs sm:text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Phase MVP en cours de développement
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-purple-600 dark:text-white relative">
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                L'Assistant IA qui
              </span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                Révolutionne
              </span>{" "}
              <span className="inline-block transform hover:scale-105 transition-transform duration-300">
                le Développement
              </span>
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-2xl" />
            </h1>

            <p className={`text-base sm:text-xl text-gray-600 dark:text-gray-300 mb-8 sm:mb-12 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              SVETA centralise, analyse et exploite vos documents business et votre code 
              pour fournir des réponses précises et contextualisées à vos questions techniques et business.
            </p>

            <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
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
                  className="px-6 sm:px-8 py-3 sm:py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  <span className="relative z-10">Accès anticipé</span>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                </button>
              </form>

              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Installation rapide</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Support réactif</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 sm:w-5 h-4 sm:h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Mises à jour régulières</span>
                </div>
              </div>
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
