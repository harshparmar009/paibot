"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/hero.mp4" type="video/mp4" />
      </video>
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-7xl md:text-8xl font-extrabold mb-6 tracking-tight"
        >
          <span className="text-emerald-400">PAIBOT</span>
          
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-xl md:text-2xl text-neutral-200 max-w-2xl mb-14"
        >
          Discover premium hotels and modern flats across top cities. Smart
          search. Real availability. Trusted listings.
        </motion.p>

        <div className="flex flex-col md:flex-row gap-8">
          <Link href="/hotels">
            <button className="px-14 py-6 bg-emerald-500 text-black rounded-2xl text-2xl font-bold hover:scale-105 transition">
              Find Hotels
            </button>
          </Link>
          <Link href="/flats">
            <button className="px-14 py-6 bg-white/10 backdrop-blur border border-white/30 rounded-2xl text-2xl font-semibold hover:scale-105 transition">
              Find Flats
            </button>
          </Link>
        </div>

        {/* Trust Badges */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 text-neutral-200">
          <div>
            <p className="text-3xl font-bold">10K+</p>
            <p className="text-sm text-neutral-400">Verified Listings</p>
          </div>
          <div>
            <p className="text-3xl font-bold">50+</p>
            <p className="text-sm text-neutral-400">Cities Covered</p>
          </div>
          <div>
            <p className="text-3xl font-bold">4.8★</p>
            <p className="text-sm text-neutral-400">User Rating</p>
          </div>
        </div>
      </section>
    </main>
  );
}
