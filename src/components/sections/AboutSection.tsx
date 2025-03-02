export default function AboutSection() {
  return (
    <section
      id="apropos"
      className="min-h-screen py-16 sm:py-24 flex items-center bg-white dark:bg-black"
    >
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8">
              Libérez votre potentiel de développement
            </h2>
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Combien de temps passez-vous à attendre des réponses de votre
              équipe ? À chercher des informations dans la documentation ? À
              débugger des problèmes complexes ? SVETA change la donne en
              devenant votre partenaire de développement intelligent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Fini les blocages business
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Plus besoin d&apos;attendre des heures pour une réponse de votre
                PM ou de l&apos;équipe business. SVETA analyse vos documents et
                comprend le contexte pour vous donner des réponses précises,
                immédiatement.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span>
                  Accès instantané aux informations business
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span>
                  Compréhension approfondie des besoins
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span>
                  Prise de décision accélérée
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-800 dark:to-gray-900 p-6 rounded-2xl">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Debug intelligent
              </h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Les tickets de bug ne sont plus un casse-tête. SVETA analyse
                votre code, comprend le contexte technique et vous guide
                directement vers la source du problème.
              </p>
              <ul className="space-y-2 text-sm sm:text-base text-gray-600 dark:text-gray-400">
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span>
                  Localisation rapide des bugs
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span>
                  Suggestions de corrections
                </li>
                <li className="flex items-center">
                  <span className="text-green-500 mr-2">→</span>
                  Temps de résolution réduit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
