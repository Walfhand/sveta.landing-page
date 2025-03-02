import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-gray-100 dark:bg-black/80 dark:border-gray-800">
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
            SVETA
          </span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <Link href="#fonctionnalites" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
            Fonctionnalités
          </Link>
          <Link href="#apropos" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
            À propos
          </Link>
          <Link href="#phase" className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white transition">
            Phase MVP
          </Link>
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition">
            Démarrer
          </button>
        </div>
      </nav>
    </header>
  );
}
