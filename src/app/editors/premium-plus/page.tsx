"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const contentTypes = [
  {
    title: "Cinematic Films",
    description: "Feature-quality cinematic editing with advanced techniques",
    examples: [
      { title: "Short Film", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Cinematic Reel", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "High-End Commercials",
    description: "Premium commercial work for major brands",
    examples: [
      { title: "Luxury Brand Ad", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Super Bowl Style", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "VFX Heavy Projects",
    description: "Complex visual effects and compositing work",
    examples: [
      { title: "VFX Breakdown", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "CGI Integration", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Music Videos (Pro)",
    description: "High-budget music video production",
    examples: [
      { title: "Professional MV", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Artist Showcase", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Corporate Films",
    description: "Executive-level corporate video production",
    examples: [
      { title: "Corporate Story", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Annual Report", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "3D Motion Graphics",
    description: "Advanced 3D animation and motion design",
    examples: [
      { title: "3D Explainer", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Product Visualization", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Documentary Features",
    description: "Feature-length documentary editing",
    examples: [
      { title: "Documentary Film", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Investigative Piece", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
  {
    title: "Broadcast Quality",
    description: "TV and streaming platform ready content",
    examples: [
      { title: "TV Series Edit", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
      { title: "Streaming Content", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    ],
  },
];

export default function PremiumPlusEditors() {
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
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-sm font-semibold mb-4">
            EXPERT LEVEL
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Premium+ Editors
          </h1>
          <p className="text-2xl text-purple-400 mb-4">2+ Years Experience</p>
          <p className="text-xl text-gray-300 mb-12">
            Expert-level editing with cinematic quality, advanced VFX, 3D motion graphics,
            and professional sound design for high-end commercial and film projects.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {contentTypes.map((type, index) => (
            <motion.div
              key={type.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-purple-900/30 to-pink-900/30 p-6 rounded-xl border border-purple-500/30"
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
                    className="block p-3 bg-purple-900/20 rounded-lg hover:bg-purple-900/40 transition-colors border border-purple-500/30"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-purple-400">{example.title}</span>
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
          transition={{ duration: 0.5, delay: 0.8 }}
          className="mt-12 p-8 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-xl border border-purple-500/50"
        >
          <h3 className="text-2xl font-semibold mb-4">What You Get:</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Everything in Premium, plus:</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Cinematic color grading</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Advanced VFX & compositing</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>3D motion graphics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Professional sound design</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Complex multi-cam projects</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Brand identity integration</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Creative direction input</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Broadcast quality output</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 text-xl">✓</span>
              <span>Feature film techniques</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="mt-8 p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20 rounded-xl border border-yellow-500/30"
        >
          <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
            <span className="text-2xl">⭐</span>
            Premium+ Exclusive Benefits
          </h4>
          <p className="text-gray-300">
            Work directly with award-winning editors who have experience on major productions.
            Get creative direction, strategic input, and industry-leading quality that sets
            your content apart.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
