interface CtaSectionProps {
  email: string;
  setEmail: (email: string) => void;
  handleSubmit: (e: React.FormEvent) => void;
}

export default function CtaSection({ email, setEmail, handleSubmit }: CtaSectionProps) {
  return (
    <section className="min-h-screen py-16 sm:py-24 flex items-center bg-gradient-to-r from-purple-600 to-blue-600 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-400/[0.1] bg-[size:75px_75px]" />
      <div className="container mx-auto px-4 text-center relative">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
          Prêt à Transformer Votre Processus de Développement ?
        </h2>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Entrez votre email"
            className="flex-1 px-4 sm:px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
            required
          />
          <button
            type="submit"
            className="px-6 sm:px-8 py-3 rounded-full bg-white text-purple-600 font-medium hover:bg-opacity-90 transition-all duration-200 hover:scale-105"
          >
            Commencer
          </button>
        </form>
      </div>
    </section>
  );
}
