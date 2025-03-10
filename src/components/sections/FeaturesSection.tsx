export default function FeaturesSection() {
  return (
    <section id="fonctionnalites" className="min-h-screen py-16 sm:py-24 flex items-center bg-white dark:bg-black relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Un assistant qui comprend votre métier
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-sm sm:text-base">
            SVETA analyse votre contexte business et technique pour vous fournir une assistance pertinente et immédiate
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {[
            {
              title: "Analyse Intelligente",
              description: "Compréhension approfondie de vos documents business et techniques. Plus besoin d'attendre les réponses de votre équipe.",
              icon: "📄",
            },
            {
              title: "Debug Assisté",
              description: "Localisation rapide des bugs dans votre code. SVETA analyse le contexte et vous guide vers la solution.",
              icon: "🔍",
            },
            {
              title: "Agents IA Spécialisés",
              description: "Une équipe d'agents IA dédiés à vos besoins business et techniques, disponibles 24/7.",
              icon: "🤖",
            },
            {
              title: "Hébergement Local",
              description: "Option d'utiliser des modèles IA hébergés dans votre infrastructure pour garantir la confidentialité de vos données sensibles.",
              icon: "🔒",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="group p-4 sm:p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4 transform group-hover:scale-110 transition-transform duration-300">{feature.icon}</div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{feature.title}</h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
