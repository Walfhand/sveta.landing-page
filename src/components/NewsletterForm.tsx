import { useState } from "react";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      console.log("Submitting email:", email);
      const response = await fetch("/api/subscribe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      setStatus("success");
      setMessage("Merci de votre inscription !");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Votre adresse email"
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 
                   focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
          required
        />
        <button
          type="submit"
          disabled={status === "loading"}
          className="px-6 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg
                   hover:from-purple-700 hover:to-blue-700 focus:outline-none focus:ring-2 
                   focus:ring-purple-500 disabled:opacity-50 transition-all duration-200 ease-in-out"
        >
          {status === "loading" ? "Envoi..." : "S'inscrire"}
        </button>
      </div>
      {message && (
        <p
          className={`mt-2 text-sm ${
            status === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </p>
      )}
    </form>
  );
}
