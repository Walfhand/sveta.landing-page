"use client";
import { useState, useEffect } from "react";
import BackgroundAnimation from "@/components/BackgroundAnimation";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-br from-purple-50 via-white to-blue-50 dark:from-gray-900 dark:via-black dark:to-purple-900">
        <BackgroundAnimation />
        <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-black/0 dark:via-black/0 dark:to-black pointer-events-none" />
        
        <div className="container relative mx-auto px-4 py-20 sm:py-32">
          <div className="max-w-4xl mx-auto">
            <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 bg-gradient-to-r from-purple-500/10 to-blue-500/10 dark:from-purple-400/10 dark:to-blue-400/10 rounded-full animate-pulse">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-600 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                </span>
                <span className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Phase MVP en cours de développement
                </span>
              </div>

              <h1 className="text-5xl sm:text-7xl font-bold mb-8 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 bg-clip-text text-transparent animate-gradient relative">
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

              <p className={`text-xl text-gray-600 dark:text-gray-300 mb-12 leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                SVETA centralise, analyse et exploite vos documents business et votre code 
                pour fournir des réponses précises et contextualisées à vos questions techniques et business.
              </p>

              <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Entrez votre email"
                    className="flex-1 px-6 py-4 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg"
                    required
                  />
                  <button
                    type="submit"
                    className="relative px-8 py-4 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-medium transition-all duration-300 hover:shadow-lg hover:scale-105 hover:from-purple-500 hover:to-blue-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <span className="relative z-10">Accès anticipé</span>
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 blur-lg opacity-50 group-hover:opacity-75 transition-opacity" />
                  </button>
                </form>

                <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Installation rapide</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Support réactif</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="w-5 h-5 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

      {/* Features Section */}
      <section id="fonctionnalites" className="py-20 bg-white dark:bg-black relative overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Fonctionnalités Clés
            </h2>
            <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Une suite complète d'outils pour optimiser votre processus de développement
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Analyse de Documents",
                description: "Import et analyse automatique de documents business, analyses fonctionnelles et spécifications techniques (.pdf, .docx, .md, .txt).",
                icon: "📄",
              },
              {
                title: "Intégration Code",
                description: "Connexion directe aux dépôts Git (GitHub, GitLab, Azure DevOps) avec analyse automatique du code source.",
                icon: "💻",
              },
              {
                title: "Agents IA Spécialisés",
                description: "Agents Business et Technique utilisant des modèles IA avancés comme DeepSeek pour des réponses contextualisées.",
                icon: "🤖",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Phase MVP Section */}
      <section id="phase" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-sm font-medium text-purple-700 dark:text-purple-300">
                En développement
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Phase 1 : MVP
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Découvrez les fonctionnalités clés de notre première version
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Création de Projet</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Interface intuitive de création de projet</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Configuration rapide des informations clés</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Gestion des paramètres du projet</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Import de Documents</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Support multi-formats (.pdf, .docx, .md, .txt)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Analyse automatique du contenu</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Stockage en mémoire sémantique</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Intégration Code Source</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Connexion aux dépôts Git (GitHub, GitLab, Azure)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Clonage et analyse automatique des fichiers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Support des fichiers .cs, .js, .md, .txt</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-semibold mb-6">Agents IA Spécialisés</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Agent Business : Stratégie et analyse business</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Agent Technique : Support développement et debug</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3 text-green-500">✓</span>
                    <span>Réponses contextualisées et génération de code</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-8">
              À Propos de SVETA
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
              SVETA est une intelligence artificielle avancée conçue pour assister les entreprises,
              les développeurs et les chefs de projet. En s'appuyant sur les dernières technologies d'IA,
              SVETA agit comme un véritable membre de l'équipe, offrant des gains de temps significatifs,
              une meilleure prise de décision et un support actif pour résoudre les problèmes complexes.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-slate-400/[0.1] bg-[size:75px_75px]" />
        <div className="container mx-auto px-4 text-center relative">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Prêt à Transformer Votre Processus de Développement ?
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Entrez votre email"
              className="flex-1 px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-purple-600 font-medium hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
            >
              Commencer
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
