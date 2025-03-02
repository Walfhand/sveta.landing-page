export default function PhaseMvpSection() {
  return (
    <section id="phase" className="min-h-screen py-16 sm:py-24 flex items-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 sm:mb-16">
            <span className="inline-block px-3 sm:px-4 py-1.5 mb-4 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full text-xs sm:text-sm font-medium text-purple-700 dark:text-purple-300">
              En développement
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              Phase 1 : MVP
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
              Découvrez les fonctionnalités clés de notre première version
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Création de Projet</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Interface intuitive de création de projet</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Configuration rapide des informations clés</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Gestion des paramètres du projet</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Import de Documents</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Support multi-formats (.pdf, .docx, .md, .txt)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Analyse automatique du contenu</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Stockage en mémoire sémantique</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Intégration Code Source</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Connexion aux dépôts Git (GitHub, GitLab, Azure)</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Clonage et analyse automatique des fichiers</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Support des fichiers .cs, .js, .md, .txt</span>
                </li>
              </ul>
            </div>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-8 shadow-lg">
              <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6">Agents IA Spécialisés</h3>
              <ul className="space-y-3 sm:space-y-4">
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Agent Business : Stratégie et analyse business</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Agent Technique : Support développement et debug</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2 sm:mr-3 text-green-500">✓</span>
                  <span className="text-sm sm:text-base">Réponses contextualisées et génération de code</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
