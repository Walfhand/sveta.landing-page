"use client";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement email subscription logic
    console.log("Email submitted:", email);
    setEmail("");
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white dark:from-gray-900 dark:to-black py-20 sm:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl sm:text-6xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent mb-8">
              Your AI-Powered Business & Development Assistant
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-12">
              SVETA centralizes, analyzes, and leverages your business documents
              and code to provide intelligent insights and solutions.
            </p>
            <form
              onSubmit={handleSubmit}
              className="max-w-md mx-auto flex gap-4"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-gray-800"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-blue-500 text-white font-medium hover:opacity-90 transition"
              >
                Get Early Access
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white dark:bg-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16">
            Key Features
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Document Analysis",
                description:
                  "Automatically analyze and extract insights from business documents and specifications.",
                icon: "📄",
              },
              {
                title: "Code Integration",
                description:
                  "Seamlessly connect with Git repositories and analyze your codebase.",
                icon: "💻",
              },
              {
                title: "AI Assistance",
                description:
                  "Get intelligent answers and solutions powered by advanced AI models.",
                icon: "🤖",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-gray-50 dark:bg-gray-900 hover:shadow-lg transition"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
              About SVETA
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              SVETA is an advanced AI designed to revolutionize how businesses
              and development teams work. By leveraging cutting-edge AI
              technology, SVETA acts as a true team member, offering significant
              time savings, better decision-making, and active support in
              solving complex business and software development challenges.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-xl bg-white dark:bg-black">
                <h3 className="text-xl font-semibold mb-3">
                  Phase 1: MVP Features
                </h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Intuitive project creation interface</li>
                  <li>• Multi-format document support</li>
                  <li>• Git repository integration</li>
                  <li>
                    • Specialized AI agents for business and technical support
                  </li>
                </ul>
              </div>
              <div className="p-6 rounded-xl bg-white dark:bg-black">
                <h3 className="text-xl font-semibold mb-3">Coming Soon</h3>
                <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                  <li>• Advanced collaboration features</li>
                  <li>• Custom AI model training</li>
                  <li>• Real-time code analysis</li>
                  <li>• Integration with more development tools</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-500">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
            Ready to Transform Your Development Process?
          </h2>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full border border-white/20 bg-white/10 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              required
            />
            <button
              type="submit"
              className="px-8 py-3 rounded-full bg-white text-purple-600 font-medium hover:bg-opacity-90 transition"
            >
              Get Started
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
