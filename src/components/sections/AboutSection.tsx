export default function AboutSection() {
  return (
    <section id="apropos" className="h-screen flex items-center bg-white dark:bg-black">
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
  );
}
