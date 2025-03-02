export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
              SVETA
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              Votre assistant IA pour le business et le développement
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Produit</h4>
            <ul className="space-y-2">
              <li>
                <a href="#fonctionnalites" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Fonctionnalités
                </a>
              </li>
              <li>
                <a href="#apropos" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  À propos
                </a>
              </li>
              <li>
                <a href="#phase" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Phase MVP
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Légal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#confidentialite" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="#conditions" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Conditions d'utilisation
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="mailto:contact@sveta.ai" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  contact@sveta.ai
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
          <p className="text-center text-gray-600 dark:text-gray-400">
            {new Date().getFullYear()} SVETA. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}
