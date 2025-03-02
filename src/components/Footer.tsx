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
              Your AI-powered business and development assistant
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Product</h4>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  About
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4 text-gray-900 dark:text-white">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white">
                  Terms of Service
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
            © {new Date().getFullYear()} SVETA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
