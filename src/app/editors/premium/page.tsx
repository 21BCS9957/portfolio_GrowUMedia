"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const contentTypes = [
  {
    title: "Brand Videos",
    description: "Professional brand storytelling and promotional content",
    examples: [
      { title: "Brand Story", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Product Launch", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "YouTube Content",
    description: "High-quality YouTube videos with motion graphics",
    examples: [
      { title: "YouTube Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Channel Intro", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Event Coverage",
    description: "Multi-camera event editing with professional polish",
    examples: [
      { title: "Event Highlight", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Conference Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Music Videos",
    description: "Creative music video editing with effects",
    examples: [
      { title: "Music Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Lyric Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Commercial Ads",
    description: "Professional commercial and advertisement editing",
    examples: [
      { title: "TV Commercial", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Social Ad", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Documentary Style",
    description: "Narrative-driven documentary editing",
    examples: [
      { title: "Mini Documentary", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Interview Series", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
];

export default function PremiumEditors() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <Link href="/" className="text-blue-400 hover:text-blue-300 mb-8 inline-block">
          ← Back to Editor Selection
        </Link>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block px-4 py-2 bg-blue-600 rounded-full text-sm font-semibold mb-4">
            MOST POPULAR
          </div>
          <h1 className="text-5xl font-bold mb-4">Premium Editors</h1>
          <p className="text-2xl text-blue-400 mb-4">1 Year Experience</p>
          <p className="text-xl text-gray-300 mb-12">
            Advanced editing with creative storytelling, motion graphics, and professional
            polish for brands, YouTube creators, and commercial projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 p-6 rounded-xl border border-blue-500/30"
            >
              <h3 className="text-2xl font-semibold mb-2">{type.title}</h3>
              <p className="text-gray-400 mb-4">{type.description}</p>
              
              <div className="space-y-3">
                <h4 className="text-sm font-medium text-gray-300">Example Work:</h4>
                {type.examples.map((example, idx) => (
                  <a
                    key={idx}
                    href={example.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-blue-900/20 rounded-lg hover:bg-blue-900/40 transition-colors border border-blue-500/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-blue-400">{example.title}</span>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-xl border border-blue-500/50"
        >
          <h3 className="text-2xl font-semibold mb-4">What You Get:</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Everything in Standard, plus:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Advanced color grading</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Motion graphics & animations</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Sound design & mixing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Creative transitions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Multi-camera editing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Green screen compositing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Professional storytelling</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
