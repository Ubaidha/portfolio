import { useState, useEffect, useCallback } from "react"
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaDownload,
  FaBars,
  FaTimes,
  FaGraduationCap,
  FaFolderOpen,
  FaReact,
  FaLayerGroup,
} from "react-icons/fa"

import cineverseHome from "./assets/home-hero.png"
import cineverseLogin from "./assets/login-page.png"
import safewatchDashboard from "./assets/safewatch/dashboard-screen.jpeg"
import resume from "./assets/resume.pdf"
import profile from "./assets/profile.png"

const SAFEWATCH_TECH = [
  "Flutter",
  "Python",
  "Firebase",
  "YOLOv8",
  "OpenCV",
  "CCTV",
  "IP Webcam",
]

const viewport = { once: true, margin: "-60px 0px -60px 0px" }

function MouseGlow({ reduced }) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 90, damping: 28, mass: 0.4 })
  const springY = useSpring(y, { stiffness: 90, damping: 28, mass: 0.4 })

  useEffect(() => {
    if (reduced) return
    const move = (e) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [x, y, reduced])

  if (reduced) return null

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[2] h-[min(520px,90vw)] w-[min(520px,90vw)] -translate-x-1/2 -translate-y-1/2 rounded-full mix-blend-screen opacity-70"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle at center, rgba(168,85,247,0.22) 0%, rgba(59,130,246,0.12) 35%, transparent 65%)",
      }}
    />
  )
}

function LoadingScreen({ onDone }) {
  const reduced = useReducedMotion()

  useEffect(() => {
    const ms = reduced ? 400 : 2000
    const t = setTimeout(onDone, ms)
    return () => clearTimeout(t)
  }, [reduced, onDone])

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-black"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="relative flex h-20 w-20 items-center justify-center">
        <motion.div
          className="absolute inset-0 rounded-full border border-purple-500/30"
          animate={reduced ? {} : { rotate: 360 }}
          transition={{ duration: 1.2, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-2 rounded-full border border-t-blue-400/80 border-r-transparent border-b-transparent border-l-transparent"
          animate={reduced ? {} : { rotate: -360 }}
          transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
        />
        <motion.span
          className="font-display text-xl font-bold tracking-tight text-white"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45 }}
        >
          U
        </motion.span>
      </div>
      <motion.p
        className="mt-8 text-xs font-medium uppercase tracking-[0.35em] text-purple-300/90"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.5 }}
      >
        Loading experience
      </motion.p>
      {!reduced && (
        <motion.div
          className="mt-4 h-0.5 w-40 overflow-hidden rounded-full bg-white/10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <motion.div
            className="h-full w-1/2 rounded-full bg-gradient-to-r from-purple-500 to-blue-400"
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      )}
    </motion.div>
  )
}

const PROFESSIONAL_HIGHLIGHTS = [
  {
    label: "Computer Science Graduate",
    icon: FaGraduationCap,
    glow: "from-purple-500/25 via-purple-600/10 to-transparent",
    border: "hover:border-purple-400/45 hover:shadow-purple-500/15",
    iconColor: "text-purple-300",
  },
  {
    label: "2+ Projects Completed",
    icon: FaFolderOpen,
    glow: "from-blue-500/25 via-blue-600/10 to-transparent",
    border: "hover:border-blue-400/45 hover:shadow-blue-500/15",
    iconColor: "text-blue-300",
  },
  {
    label: "React Developer",
    icon: FaReact,
    glow: "from-violet-500/25 via-indigo-500/10 to-transparent",
    border: "hover:border-violet-400/45 hover:shadow-violet-500/15",
    iconColor: "text-violet-300",
  },
  {
    label: "Full Stack Development Enthusiast",
    icon: FaLayerGroup,
    glow: "from-cyan-500/20 via-blue-500/10 to-transparent",
    border: "hover:border-cyan-400/40 hover:shadow-cyan-500/10",
    iconColor: "text-cyan-300",
  },
]

function HighlightCard({ item, index, reduced }) {
  const Icon = item.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.55, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      whileHover={
        reduced
          ? {}
          : {
              y: -8,
              scale: 1.02,
              transition: { type: "spring", stiffness: 320, damping: 22 },
            }
      }
      className={`glass-panel group relative overflow-hidden rounded-2xl p-6 transition-shadow duration-500 sm:rounded-[1.75rem] sm:p-7 ${item.border} hover:shadow-xl`}
    >
      <div
        className={`pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-gradient-to-br opacity-40 blur-2xl transition-opacity duration-500 group-hover:opacity-100 sm:h-32 sm:w-32 ${item.glow}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        aria-hidden
      />

      <div className="relative flex flex-col gap-4">
        <motion.div
          className={`flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.06] text-xl backdrop-blur-md ${item.iconColor}`}
          whileHover={reduced ? {} : { scale: 1.08, rotate: 3 }}
          transition={{ type: "spring", stiffness: 400, damping: 18 }}
        >
          <Icon />
        </motion.div>
        <p className="font-display text-base font-semibold leading-snug tracking-tight text-white sm:text-lg">
          {item.label}
        </p>
      </div>
    </motion.div>
  )
}

function FloatingBadge({ children, delay = 0 }) {
  const reduced = useReducedMotion()
  return (
    <motion.span
      className={`inline-flex rounded-full border border-white/10 bg-white/[0.07] px-4 py-2.5 text-sm font-medium text-white/90 shadow-inner shadow-white/[0.03] backdrop-blur-md transition-colors duration-300 hover:border-purple-400/35 hover:bg-white/[0.12] hover:text-white md:px-5 md:py-3 ${reduced ? "" : "float-badge"}`}
      style={reduced ? undefined : { animationDelay: `${delay}s` }}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={viewport}
      transition={{ duration: 0.45, delay }}
    >
      {children}
    </motion.span>
  )
}

export default function App() {
  const [loaded, setLoaded] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const reduced = useReducedMotion()
  const handleLoadComplete = useCallback(() => setLoaded(true), [])

  const navLinkClass =
    "relative py-1 text-sm font-medium text-zinc-400 transition-colors duration-300 hover:text-white after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-gradient-to-r after:from-purple-400 after:to-blue-400 after:transition-all after:duration-300 hover:after:w-full"

  const closeMenu = () => setMenuOpen(false)

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-black text-white selection:bg-purple-500 selection:text-white">
      <AnimatePresence mode="wait">
        {!loaded && (
          <LoadingScreen key="loader" onDone={handleLoadComplete} />
        )}
      </AnimatePresence>

      <MouseGlow reduced={reduced} />

      {/* Ambient orbs */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-40 top-[-180px] h-[480px] w-[480px] animate-pulse rounded-full bg-purple-600/15 blur-[120px] md:left-[-200px]" />
        <div className="absolute -right-40 bottom-[-180px] h-[480px] w-[480px] animate-pulse rounded-full bg-blue-600/15 blur-[120px] [animation-delay:1s] md:right-[-200px]" />
      </div>

      <div className="relative z-10">
        {/* Navbar */}
        <motion.nav
          initial={false}
          animate={loaded ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="glass-nav sticky top-0 z-50 flex items-center justify-between px-5 py-4 sm:px-8 sm:py-5"
        >
          <h1 className="font-display text-xl font-bold tracking-tight sm:text-2xl">
            Ubaidha
          </h1>

          <div className="hidden items-center gap-8 text-sm md:flex">
            <a href="#about" className={navLinkClass}>
              About
            </a>
            <a href="#skills" className={navLinkClass}>
              Skills
            </a>
            <a href="#projects" className={navLinkClass}>
              Projects
            </a>
            <a href="#contact" className={navLinkClass}>
              Contact
            </a>
            <a
              href={resume}
              download
              className="group flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-black shadow-lg shadow-purple-500/10 transition duration-300 hover:scale-[1.03] hover:shadow-xl hover:shadow-purple-500/20"
            >
              <FaDownload className="transition group-hover:-translate-y-0.5" />
              Resume
            </a>
          </div>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-lg text-white backdrop-blur-md transition hover:border-purple-400/40 hover:bg-white/10 md:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((o) => !o)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </motion.nav>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="glass-nav relative z-40 overflow-hidden border-b border-white/10 md:hidden"
            >
              <div className="flex flex-col gap-1 px-5 py-4">
                {[
                  ["#about", "About"],
                  ["#skills", "Skills"],
                  ["#projects", "Projects"],
                  ["#contact", "Contact"],
                ].map(([href, label]) => (
                  <a
                    key={href}
                    href={href}
                    onClick={closeMenu}
                    className="rounded-xl px-4 py-3 text-base font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white"
                  >
                    {label}
                  </a>
                ))}
                <a
                  href={resume}
                  download
                  onClick={closeMenu}
                  className="mt-2 flex items-center justify-center gap-2 rounded-full bg-white py-3 text-sm font-semibold text-black"
                >
                  <FaDownload />
                  Resume
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero */}
        <section className="relative px-5 py-20 sm:px-8 sm:py-28 md:py-36">
          <div className="mx-auto grid max-w-7xl items-center gap-14 md:grid-cols-2 md:gap-20 lg:gap-24">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-purple-400 sm:text-sm sm:tracking-[0.4em]"
              >
                Aspiring Software Developer
              </motion.p>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
              >
                <span className="block text-white">Building Modern</span>
                <span className="mt-1 block animate-gradient-text bg-clip-text">
                  Digital Experiences
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg md:mt-10"
              >
                Passionate about crafting elegant web applications, premium UI
                experiences, and scalable digital products using React, Flutter,
                and modern technologies.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={loaded ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: 0.28 }}
                className="mt-10 flex flex-wrap gap-3 sm:mt-12 sm:gap-4"
              >
                <motion.a
                  href="#projects"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-black shadow-xl shadow-purple-500/15 transition-colors duration-300 hover:shadow-2xl hover:shadow-purple-500/25 sm:px-8 sm:py-4"
                >
                  View Projects
                </motion.a>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="rounded-full border border-white/15 bg-white/[0.04] px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-white/25 hover:bg-white/10 sm:px-8 sm:py-4"
                >
                  Contact Me
                </motion.a>
                <motion.a
                  href={resume}
                  download
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-2 rounded-full border border-purple-500/35 bg-purple-500/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-purple-400/50 hover:bg-purple-500/15 sm:px-8 sm:py-4"
                >
                  <FaDownload />
                  Download Resume
                </motion.a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={loaded ? { opacity: 1 } : {}}
                transition={{ delay: 0.45, duration: 0.6 }}
                className="mt-10 flex gap-5 text-2xl text-zinc-500 sm:mt-12 sm:gap-6"
              >
                {[
                  ["https://github.com/Ubaidha", <FaGithub key="g" />],
                  ["https://linkedin.com/in/ubaidha-ummer", <FaLinkedin key="l" />],
                  [
                    "https://www.instagram.com/ubaidhaaa___?igsh=ZWtkdDdmMjZiN21k&utm_source=qr",
                    <FaInstagram key="i" />,
                  ],
                ].map(([url, icon]) => (
                  <motion.a
                    key={url}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.12, y: -3, color: "#fff" }}
                    className="transition-colors duration-300 hover:text-purple-300"
                  >
                    {icon}
                  </motion.a>
                ))}
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={loaded ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.85, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex justify-center"
            >
              <div className="absolute h-[min(380px,85vw)] w-[min(380px,85vw)] rounded-full bg-gradient-to-br from-purple-500/25 to-blue-500/20 blur-[90px]" />
              <motion.div
                whileHover={reduced ? {} : { y: -6 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
                className="relative"
              >
                <img
                  src={profile}
                  alt="Profile"
                  className="relative h-[min(420px,70vh)] w-[min(300px,85vw)] rounded-[2rem] border border-white/10 object-cover shadow-2xl shadow-black/50 sm:w-[min(340px,80vw)] md:h-[450px] md:w-[350px] md:rounded-[40px]"
                />
                <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10 md:rounded-[40px]" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Professional Highlights */}
        <section className="relative border-t border-white/10 px-5 py-16 sm:px-8 sm:py-20 md:py-24">
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-10 text-center sm:mb-14"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-sm">
                Professional Highlights
              </p>
              <h2 className="font-display text-2xl font-bold tracking-tight text-white sm:text-3xl md:text-4xl">
                Credentials & Focus
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6">
              {PROFESSIONAL_HIGHLIGHTS.map((item, index) => (
                <HighlightCard
                  key={item.label}
                  item={item}
                  index={index}
                  reduced={reduced}
                />
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 md:py-32"
        >
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2 md:gap-20 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: reduced ? 0 : -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-sm">
                About Me
              </p>
              <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Passionate About Building Beautiful Digital Products
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: reduced ? 0 : 48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-3xl p-6 sm:p-8"
            >
              <p className="mb-6 text-base leading-relaxed text-zinc-400 sm:text-lg">
                I’m a Computer Science graduate passionate about frontend
                engineering, UI/UX design, and creating impactful digital
                experiences with modern web technologies.
              </p>
              <p className="text-base leading-relaxed text-zinc-400 sm:text-lg">
                I enjoy transforming ideas into elegant, responsive, and
                user-focused applications with smooth interactions and premium
                design systems.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Skills */}
        <section
          id="skills"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-14 text-center sm:mb-20"
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6 }}
            >
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-sm">
                Skills
              </p>
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                <span className="animate-gradient-text bg-clip-text">Technologies</span>{" "}
                <span className="text-white">I Use</span>
              </h2>
            </motion.div>

            <div className="grid gap-6 md:grid-cols-3 md:gap-8">
              {[
                {
                  title: "Frontend",
                  border: "hover:border-purple-500/45 hover:shadow-purple-500/10",
                  items: ["React", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
                },
                {
                  title: "Backend",
                  border: "hover:border-blue-500/45 hover:shadow-blue-500/10",
                  items: [
                    "Node.js",
                    "Express.js",
                    "MongoDB",
                    "Firebase",
                    "MySQL",
                  ],
                },
                {
                  title: "Tools & Platforms",
                  border: "hover:border-cyan-400/40 hover:shadow-cyan-500/10",
                  items: ["GitHub", "VS Code", "Cursor AI", "Postman", "Vercel"],
                },
              ].map((col, ci) => (
                <motion.div
                  key={col.title}
                  initial={{ opacity: 0, y: 36 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={viewport}
                  transition={{ duration: 0.55, delay: ci * 0.1 }}
                  whileHover={reduced ? {} : { y: -8 }}
                  className={`glass-panel group rounded-[1.75rem] p-6 transition duration-500 sm:rounded-[2rem] sm:p-8 ${col.border} hover:shadow-xl`}
                >
                  <h3 className="font-display mb-6 text-2xl font-semibold sm:mb-8 sm:text-3xl">
                    {col.title}
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {col.items.map((item, i) => (
                      <FloatingBadge key={item} delay={ci * 0.08 + i * 0.05}>
                        {item}
                      </FloatingBadge>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects */}
        <section
          id="projects"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <motion.div
              className="mb-12 flex flex-col gap-4 sm:mb-16 sm:flex-row sm:items-end sm:justify-between"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.55 }}
            >
              <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
                Featured Projects
              </h2>
              <p className="text-sm font-medium uppercase tracking-widest text-zinc-500">
                Selected Works
              </p>
            </motion.div>

            <div className="flex flex-col gap-8 md:gap-10">
              {/* SafeWatch AI — featured */}
              <motion.article
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                whileHover={reduced ? {} : { y: -8 }}
                className="group glass-panel relative overflow-hidden rounded-[1.75rem] transition duration-500 hover:border-purple-500/40 hover:shadow-2xl hover:shadow-purple-500/10 sm:rounded-[2rem]"
              >
                <div
                  className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-purple-500/15 blur-[80px] transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-blue-500/10 blur-[70px] transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />

                <div className="relative overflow-hidden border-b border-white/10">
                  <motion.img
                    src={safewatchDashboard}
                    alt="SafeWatch AI dashboard"
                    className="h-[260px] w-full object-cover object-top sm:h-[320px] md:h-[420px] lg:h-[460px]"
                    whileHover={reduced ? {} : { scale: 1.04 }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent opacity-80 transition duration-500 group-hover:opacity-90" />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:from-purple-500/20 group-hover:to-blue-500/10 group-hover:opacity-100" />
                  <span className="absolute left-5 top-5 rounded-full border border-purple-400/30 bg-purple-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-200 backdrop-blur-md sm:left-8 sm:top-8">
                    Featured
                  </span>
                </div>

                <div className="relative p-6 sm:p-8 md:p-10">
                  <h3 className="font-display mb-3 text-2xl font-semibold text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-sky-300 group-hover:bg-clip-text group-hover:text-transparent sm:text-3xl md:text-4xl">
                    SafeWatch AI
                  </h3>
                  <p className="max-w-4xl text-base leading-relaxed text-zinc-400 sm:text-lg">
                    AI-powered intelligent CCTV surveillance platform built using
                    Flutter, Python, Firebase, YOLO, and IP Webcam integration.
                    Features include real-time CCTV monitoring, weapon detection,
                    automated alerts, image capture, and cloud-based surveillance
                    management.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2 sm:mt-8 sm:gap-2.5">
                    {SAFEWATCH_TECH.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-xs font-medium text-zinc-300 backdrop-blur-md transition duration-300 group-hover:border-purple-400/25 group-hover:text-white sm:px-4 sm:py-2 sm:text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <motion.a
                    href="https://github.com/Ubaidha/SafeWatch-AI"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={reduced ? {} : { scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-white/15 bg-white/[0.06] px-6 py-3 text-sm font-semibold text-white backdrop-blur-md transition duration-300 hover:border-purple-400/40 hover:bg-purple-500/15 hover:shadow-lg hover:shadow-purple-500/15 sm:mt-10"
                  >
                    <FaGithub className="text-lg" />
                    View on GitHub
                  </motion.a>
                </div>
              </motion.article>

              <div className="grid gap-8 md:grid-cols-2 md:gap-10">
                {[
                  {
                    img: cineverseHome,
                    alt: "Cineverse",
                    title: "Cineverse",
                    desc: "A premium Netflix-inspired streaming platform built with React featuring modern UI, responsive design, and immersive movie browsing experience.",
                    accent:
                      "group-hover:border-purple-500/50 group-hover:shadow-purple-500/15",
                  },
                  {
                    img: cineverseLogin,
                    alt: "Portfolio",
                    title: "Portfolio Website",
                    desc: "A modern full-stack developer portfolio showcasing projects, frontend expertise, animations, and premium user experience.",
                    accent:
                      "group-hover:border-blue-500/50 group-hover:shadow-blue-500/15",
                  },
                ].map((project, pi) => (
                  <motion.article
                    key={project.title}
                    initial={{ opacity: 0, y: 48 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6, delay: 0.08 + pi * 0.12 }}
                    whileHover={reduced ? {} : { y: -10 }}
                    className={`group glass-panel relative overflow-hidden rounded-[1.75rem] transition duration-500 sm:rounded-[2rem] ${project.accent} hover:shadow-2xl`}
                  >
                    <div className="relative overflow-hidden">
                      <motion.img
                        src={project.img}
                        alt={project.alt}
                        className="h-[240px] w-full object-cover sm:h-[280px] md:h-[320px]"
                        whileHover={reduced ? {} : { scale: 1.06 }}
                        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
                      />
                      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 transition duration-500 group-hover:opacity-90" />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-br from-purple-500/0 to-blue-500/0 opacity-0 transition duration-500 group-hover:from-purple-500/15 group-hover:to-blue-500/10 group-hover:opacity-100"
                        aria-hidden
                      />
                    </div>
                    <div className="relative p-6 sm:p-8">
                      <h3 className="font-display mb-3 text-2xl font-semibold text-white transition duration-300 group-hover:bg-gradient-to-r group-hover:from-white group-hover:via-purple-200 group-hover:to-sky-300 group-hover:bg-clip-text group-hover:text-transparent sm:text-3xl">
                        {project.title}
                      </h3>
                      <p className="leading-relaxed text-zinc-400">{project.desc}</p>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="border-t border-white/10 px-5 py-20 sm:px-8 sm:py-28 md:py-32"
        >
          <motion.div
            className="glass-panel mx-auto max-w-4xl rounded-[1.75rem] px-6 py-12 text-center sm:rounded-[2rem] sm:px-10 sm:py-16 md:px-12"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.65 }}
          >
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-purple-400 sm:text-sm sm:tracking-[0.35em]">
              Contact
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              Let’s Build Something{" "}
              <span className="animate-gradient-text bg-clip-text">Amazing</span> Together
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-zinc-400 sm:mt-8 sm:text-lg">
              I’m always interested in exciting projects, collaborations, and
              opportunities in frontend and full-stack development.
            </p>
            <div className="mt-10 space-y-3 text-base text-zinc-300 sm:mt-12 sm:text-lg">
              <p>📧 ubaidhaummer@gmail.com</p>
              <p>📱 +91 8921988197</p>
              <p>🔗 linkedin.com/in/ubaidha-ummer</p>
              <p>💻 github.com/Ubaidha</p>
            </div>
          </motion.div>
        </section>

        <footer className="border-t border-white/10 px-5 py-8 text-center text-sm text-zinc-500 sm:py-10">
          © 2026 Ubaidha. Crafted with React & Tailwind CSS.
        </footer>
      </div>
    </div>
  )
}
