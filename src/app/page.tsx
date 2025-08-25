"use client"

import Image from 'next/image'
import { useEffect, useRef } from 'react'

const ASSET_URL = 'https://cdn.dribbble.com/userupload/4018346/file/original-c019861e4885d583641f058ad7fe5a0e.png?resize=1504x1128&vertical=center'

export default function Home() {
  const cardRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = cardRef.current
    if (!el) return

    const handle = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top
      const midX = rect.width / 2
      const midY = rect.height / 2
      const rotateY = ((x - midX) / midX) * 10
      const rotateX = -((y - midY) / midY) * 10
      el.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
    }
    const reset = () => {
      el.style.transform = 'rotateX(0deg) rotateY(0deg)'
    }

    el.addEventListener('mousemove', handle)
    el.addEventListener('mouseleave', reset)
    return () => {
      el.removeEventListener('mousemove', handle)
      el.removeEventListener('mouseleave', reset)
    }
  }, [])

  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Animated neon grid background */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-40">
        <div className="absolute inset-0 bg-cyber-grid bg-grid [background-position:0px_0px,0px_0px] animate-grid" />
        <div className="absolute inset-0 bg-radial-fade" />
        <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-black/60 to-transparent" />
      </div>

      <section className="mx-auto flex max-w-7xl flex-col items-center gap-10 px-6 py-16 sm:py-24">
        <header className="text-center">
          <p className="mb-3 text-sm tracking-[0.35em] text-neon-cyan/80">WELCOME TO</p>
          <h1 className="glitch text-5xl font-black tracking-tight sm:text-7xl" data-text="CYBERFUNK">
            CYBERFUNK
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-balance text-white/70">
            A micro-landing bathing in neon, depth, and retro-future grit. Move your mouse to bend the scene in 3D.
          </p>
        </header>

        {/* 3D Tilt Stage */}
        <div className="relative w-full max-w-5xl">
          <div className="tilt-3d group relative mx-auto aspect-[16/9] w-full cursor-pointer rounded-2xl border border-white/10 bg-white/5 p-[2px] shadow-neon backdrop-blur">
            <div
              ref={cardRef}
              className="relative h-full w-full rounded-2xl bg-black/40 ring-1 ring-white/10 transition-transform duration-200 ease-out"
              style={{ transformStyle: 'preserve-3d' }}
            >
              {/* Depth layers */}
              <div className="pointer-events-none absolute inset-0 depth-2">
                <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-neon-cyan/20 via-neon-pink/20 to-neon-purple/20 blur-lg" />
              </div>

              {/* Asset layer */}
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image
                  src={ASSET_URL}
                  alt="Cyberpunk 3D neon illustration"
                  fill
                  priority
                  className="object-cover object-center will-change-transform animate-glow"
                />
              </div>

              {/* UI overlay elements with depth */}
              <div className="pointer-events-none absolute inset-0 flex items-end justify-between p-6">
                <div className="depth-5">
                  <div className="mb-2 h-1 w-24 bg-gradient-to-r from-neon-cyan to-neon-pink" />
                  <p className="text-xs uppercase tracking-[0.25em] text-white/70">Nebula Node // v1.0</p>
                </div>
                <div className="depth-10 flex items-center gap-2">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-neon-lime shadow-[0_0_12px_2px_rgba(182,255,0,0.6)]" />
                  <span className="text-xs text-white/70">Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#"
            className="btn-shine group rounded-full border border-neon-cyan/40 bg-gradient-to-r from-neon-cyan/20 to-neon-pink/20 px-6 py-3 text-sm font-semibold text-white shadow-neon backdrop-blur hover:from-neon-cyan/30 hover:to-neon-pink/30"
          >
            Enter The Grid
          </a>
          <a
            href="#"
            className="rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white/90 hover:bg-white/10"
          >
            Learn More
          </a>
        </div>

        {/* Footer */}
        <footer className="mt-8 grid w-full max-w-5xl grid-cols-1 items-center gap-6 rounded-xl border border-white/10 bg-white/5 p-6 text-sm text-white/70 backdrop-blur sm:grid-cols-3">
          <div>
            <p className="text-white/60">Tech</p>
            <p>Next.js • Tailwind CSS</p>
          </div>
          <div>
            <p className="text-white/60">Vibe</p>
            <p>Neon grid • Glitch • Parallax</p>
          </div>
          <div className="text-right sm:text-right">
            <p className="text-white/60">Asset</p>
            <a className="underline-offset-4 hover:underline" href={ASSET_URL} target="_blank" rel="noreferrer">Dribbble source</a>
          </div>
        </footer>
      </section>
    </main>
  )
}
