import NewsletterForm from "../NewsletterForm";

export default function CtaSection() {
  return (
    <section className="py-16 sm:py-24 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">
            Prêt à révolutionner votre développement ?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-400 mb-8">
            Inscrivez-vous pour être parmi les premiers à essayer SVETA et
            bénéficier d&apos;offres exclusives.
          </p>
          <NewsletterForm />
        </div>
      </div>
    </section>
  );
}
