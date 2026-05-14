import { motion } from "framer-motion"
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaExternalLinkAlt,
} from "react-icons/fa"

import cineverseHome from "./assets/home-hero.png"
import cineverseLogin from "./assets/login-page.png"

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden relative selection:bg-purple-500 selection:text-white">

      {/* Animated Background */}
      <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px] animate-pulse"></div>

      <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[150px] animate-pulse"></div>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6 border-b border-white/10 backdrop-blur-xl sticky top-0 z-50">

        <h1 className="text-2xl font-bold tracking-wide">
          Ubaidha
        </h1>

        <div className="flex gap-6 text-sm text-gray-300">

          <a href="#about" className="hover:text-white transition">
            About
          </a>

          <a href="#projects" className="hover:text-white transition">
            Projects
          </a>

          <a href="#contact" className="hover:text-white transition">
            Contact
          </a>

        </div>

      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 py-40">

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-purple-400 mb-6 tracking-[0.4em] uppercase text-sm z-10"
        >
          Aspiring Software Developer
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-8xl font-black leading-tight z-10 max-w-6xl"
        >
          Building Modern
          <br />
          Digital Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="text-gray-400 mt-10 max-w-2xl text-lg leading-relaxed z-10"
        >
          Passionate about crafting elegant web applications,
          premium UI experiences, and scalable digital products
          using React, Flutter, and modern technologies.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="flex gap-4 mt-12 z-10"
        >

          <a
            href="#projects"
            className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition duration-300 shadow-2xl"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="border border-white/20 px-8 py-4 rounded-full hover:bg-white/10 transition duration-300"
          >
            Contact Me
          </a>

        </motion.div>

        {/* Social Icons */}
        <div className="flex gap-6 mt-12 text-2xl text-gray-400 z-10">

          <a
            href="https://github.com/Ubaidha"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://linkedin.com/in/ubaidha-ummer"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:ubaidhaummer@gmail.com"
            className="hover:text-white hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

        </div>

      </section>

      {/* About */}
      <section
        id="about"
        className="px-8 py-32 border-t border-white/10"
      >

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center">

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-4">
              About Me
            </p>

            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Passionate About
              Building Beautiful
              Digital Products
            </h2>

          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >

            <p className="text-gray-400 text-lg leading-relaxed mb-8">
              I’m a Computer Science graduate passionate about
              frontend engineering, UI/UX design, and creating
              impactful digital experiences with modern web technologies.
            </p>

            <p className="text-gray-400 text-lg leading-relaxed">
              I enjoy transforming ideas into elegant,
              responsive, and user-focused applications
              with smooth interactions and premium design systems.
            </p>

          </motion.div>

        </div>

      </section>

      {/* Projects */}
      <section
        id="projects"
        className="px-8 py-32 border-t border-white/10"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex items-center justify-between mb-16">

            <h2 className="text-5xl md:text-6xl font-bold">
              Featured Projects
            </h2>

            <p className="text-gray-500">
              Selected Works
            </p>

          </div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Project 1 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-purple-500/40 transition duration-500 backdrop-blur-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={cineverseHome}
                  alt="Cineverse"
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold mb-4">
                  Cineverse
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  A premium Netflix-inspired streaming platform
                  built with React featuring modern UI,
                  responsive design, and immersive movie browsing experience.
                </p>

                <div className="flex gap-3 flex-wrap mb-8">

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    React
                  </span>

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    Tailwind
                  </span>

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    Firebase
                  </span>

                </div>

                <div className="flex gap-4">

                  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                    <FaGithub />
                    GitHub
                  </button>

                  <button className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>

                </div>

              </div>

            </motion.div>

            {/* Project 2 */}
            <motion.div
              whileHover={{ y: -10 }}
              className="group bg-white/5 border border-white/10 rounded-[32px] overflow-hidden hover:border-blue-500/40 transition duration-500 backdrop-blur-xl"
            >

              <div className="overflow-hidden">
                <img
                  src={cineverseLogin}
                  alt="Portfolio"
                  className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
                />
              </div>

              <div className="p-8">

                <h3 className="text-3xl font-semibold mb-4">
                  Portfolio Website
                </h3>

                <p className="text-gray-400 leading-relaxed mb-8">
                  A modern full-stack developer portfolio
                  showcasing projects, frontend expertise,
                  animations, and premium user experience.
                </p>

                <div className="flex gap-3 flex-wrap mb-8">

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    React
                  </span>

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    Node.js
                  </span>

                  <span className="bg-white/10 px-4 py-2 rounded-full text-sm">
                    Tailwind
                  </span>

                </div>

                <div className="flex gap-4">

                  <button className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-full font-medium hover:scale-105 transition">
                    <FaGithub />
                    GitHub
                  </button>

                  <button className="flex items-center gap-2 border border-white/20 px-6 py-3 rounded-full hover:bg-white/10 transition">
                    <FaExternalLinkAlt />
                    Live Demo
                  </button>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* Contact */}
      <section
        id="contact"
        className="px-8 py-32 border-t border-white/10"
      >

        <div className="max-w-4xl mx-auto text-center">

          <p className="text-purple-400 uppercase tracking-[0.3em] text-sm mb-6">
            Contact
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
            Let’s Build Something
            Amazing Together
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-12">
            I’m always interested in exciting projects,
            collaborations, and opportunities in frontend
            and full-stack development.
          </p>

          <div className="space-y-4 text-lg text-gray-300">

            <p>
              📧 ubaidhaummer@gmail.com
            </p>

            <p>
              📱 +91 8921988197
            </p>

            <p>
              🔗 linkedin.com/in/ubaidha-ummer
            </p>

            <p>
              💻 github.com/Ubaidha
            </p>

          </div>

        </div>

      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-gray-500 text-sm">
        © 2026 Ubaidha. Crafted with React & Tailwind CSS.
      </footer>

    </div>
  )
}