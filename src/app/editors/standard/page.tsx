"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const contentTypes = [
  {
    title: "Social Media Content",
    description: "Instagram Reels, TikTok videos, YouTube Shorts",
    examples: [
      { title: "Instagram Reel Example", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "TikTok Style Edit", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Product Videos",
    description: "Simple product showcases and demonstrations",
    examples: [
      { title: "Product Demo", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Unboxing Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Vlogs & Lifestyle",
    description: "Personal vlogs, day-in-the-life content",
    examples: [
      { title: "Vlog Edit", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Lifestyle Content", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Basic Tutorials",
    description: "How-to videos and simple educational content",
    examples: [
      { title: "Tutorial Example", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Educational Video", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
];

export default function StandardEditors() {
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
          <h1 className="text-5xl font-bold mb-4">Standard Editors</h1>
          <p className="text-2xl text-blue-400 mb-4">6 Months Experience</p>
          <p className="text-xl text-gray-300 mb-12">
            Perfect for basic video editing needs with skilled editors who can handle
            social media content, simple product videos, and vlogs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-neutral-900 to-neutral-800 p-6 rounded-xl border border-neutral-700"
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
                    className="block p-3 bg-neutral-800 rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-600"
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
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 p-8 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-xl border border-blue-500/30"
        >
          <h3 className="text-2xl font-semibold mb-4">What You Get:</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Basic color correction and grading</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Simple transitions and effects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Audio syncing and cleanup</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Social media formatting</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Quick turnaround time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 text-xl">✓</span>
              <span>Revision support</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}
