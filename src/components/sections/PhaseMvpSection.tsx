export default function PhaseMvpSection() {
  return (
    <section id="phase" className="h-screen flex items-center bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-purple-900">
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
  );
}
