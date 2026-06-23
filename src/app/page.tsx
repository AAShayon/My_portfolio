"use client";

import { personalInfo, skills, experiences, projects } from "./data";
import {
  Menu,
  Smartphone,
  Atom,
  CodeXml,
  PanelsTopLeft,
  Server,
  Database,
  Flame,
  GitBranch,
  Terminal,
} from "lucide-react";
import React, { useState, useEffect } from "react";

const getIcon = (name: string) => {
  switch (name) {
    case "📱":
    case "🎯":
    case "⚡":
    case "🌊":
    case "🔄":
    case "🤖":
      return <Smartphone className="w-6 h-6 text-[#00F0FF]" />;
    case "⚛️":
      return <Atom className="w-6 h-6 text-[#00F0FF]" />;
    case "📘":
    case "💛":
      return <CodeXml className="w-6 h-6 text-[#00F0FF]" />;
    case "🎨":
      return <PanelsTopLeft className="w-6 h-6 text-[#00F0FF]" />;
    case "🐘":
    case "🔧":
    case "🟢":
      return <Server className="w-6 h-6 text-[#00F0FF]" />;
    case "🗄️":
    case "🍃":
      return <Database className="w-6 h-6 text-[#00F0FF]" />;
    case "🔥":
      return <Flame className="w-6 h-6 text-[#00F0FF]" />;
    case "📦":
      return <GitBranch className="w-6 h-6 text-[#00F0FF]" />;
    case "🌐":
    case "🏃":
      return <Terminal className="w-6 h-6 text-[#00F0FF]" />;
    default:
      return <Smartphone className="w-6 h-6 text-[#00F0FF]" />;
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main>
      {/* Header */}
      <header
        style={{
          height: "80px",
          display: "flex",
          alignItems: "center",
          position: "sticky",
          top: 0,
          zIndex: 1000,
        }}
        className="glass"
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{ fontSize: "1.5rem", fontWeight: "bold" }}
            className="animate-slideInLeft"
          >
            <span style={{ color: "#00F0FF" }}>Asif</span>
            <span style={{ color: "#E0E6ED" }}>.dev</span>
          </div>

          <nav style={{ display: "flex", gap: "2rem" }} className="mobile-hidden animate-slideInRight">
            {["Home", "Projects", "Skills", "Experience", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                style={{
                  color: "#E0E6ED",
                  textDecoration: "none",
                  fontSize: "0.9rem",
                  fontWeight: 500,
                  transition: "color 0.3s ease",
                }}
              >
                {item}
              </a>
            ))}
          </nav>
          <button style={{ background: "none", border: "none", cursor: "pointer", padding: "0.5rem" }} className="desktop-hidden">
            <Menu className="w-6 h-6 text-[#00F0FF]" />
          </button>
        </div>
      </header>

      {/* Hero */}
      <section
        id="home"
        style={{
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "1rem 0",
          overflow: "hidden",
        }}
      >
        <div
          className="mobile-stack"
          style={{
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 1,
            gap: "6rem",
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: "600px", flex: 1, animation: "fadeInUp 1s ease forwards" }}>
            <h2
              style={{
                color: "#7000FF",
                fontSize: "1.5rem",
                fontWeight: 600,
                marginBottom: "0.5rem",
                textTransform: "uppercase",
                letterSpacing: "4px",
                fontFamily: '"Courier New", Courier, monospace',
              }}
            >
              Software Engineer
            </h2>
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: 800,
                marginBottom: "1.5rem",
                lineHeight: 1.1,
                color: "#E0E6ED",
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.8rem" }}>
                <span style={{ color: "#00F0FF", textShadow: "0 0 20px #00F0FF80" }}>
                  MD Asif Afroj Shayon
                </span>
              </div>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#94A3B8",
                lineHeight: 1.7,
                marginBottom: "3rem",
                borderLeft: "2px solid #00F0FF",
                paddingLeft: "1rem",
                maxWidth: "500px",
              }}
            >
              {personalInfo.bio}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
              <div className="glass-panel" style={{ padding: "0.8rem 1.2rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "90px", border: "1px solid #00F0FF20" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00F0FF" }}>4+</span>
                <span style={{ fontSize: "0.7rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Years Exp</span>
              </div>
              <div className="glass-panel" style={{ padding: "0.8rem 1.2rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "90px", border: "1px solid #00F0FF20" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00F0FF" }}>10+</span>
                <span style={{ fontSize: "0.7rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Live Apps</span>
              </div>
              <div className="glass-panel" style={{ padding: "0.8rem 1.2rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "90px", border: "1px solid #00F0FF20" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#00F0FF" }}>100%</span>
                <span style={{ fontSize: "0.7rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Commitment</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" }}>
              <a
                href="#projects"
                style={{
                  padding: "0.9rem 2rem",
                  background: "#00F0FF",
                  color: "#000",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  boxShadow: "0 0 20px #00F0FF50",
                  border: "1px solid #00F0FF",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="glass"
                style={{
                  padding: "0.9rem 2rem",
                  color: "#E0E6ED",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 600,
                  border: "1px solid #64748B",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Contact Me
              </a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "center", width: "100%", maxWidth: "400px", animation: "fadeIn 1s ease forwards" }}>
            <div style={{ position: "relative", width: "300px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                style={{ width: "85%", height: "85%", borderRadius: "50%", objectFit: "cover", border: "2px solid #00F0FF", boxShadow: "0 0 30px #00F0FF40", position: "relative", zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "4rem 0", background: "#0a0a1e", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              Featured <span style={{ color: "#00F0FF" }}>Projects</span>
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem" }}>
            {projects.map((proj, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "1rem", border: "1px solid #00F0FF20", background: "rgba(10, 10, 25, 0.6)", height: "100%", animation: "fadeInUp 0.8s ease forwards" }}>
                <div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                    {proj.technologies.map((tech, i) => (
                      <span key={i} style={{ fontSize: "0.65rem", fontWeight: 600, padding: "0.2rem 0.5rem", background: "#00F0FF10", borderRadius: "4px", color: "#00F0FF", border: "1px solid #00F0FF40", textTransform: "uppercase", letterSpacing: "0.5px" }}>{tech}</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#00F0FF", marginBottom: "0.5rem" }}>{proj.name}</h3>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "0.5rem" }}>
                  {proj.iconUrl && (
                    <div style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "10px", overflow: "hidden", border: "1px solid #00F0FF20", background: "#ffffff", padding: "2px" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={proj.iconUrl} alt={`${proj.name} icon`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "8px" }} />
                    </div>
                  )}
                  <p style={{ color: "#94A3B8", fontSize: "0.85rem", lineHeight: 1.5, margin: 0 }}>{proj.description}</p>
                </div>
                <div style={{ marginTop: "auto", borderTop: "1px solid rgba(0, 240, 255, 0.2)", paddingTop: "0.8rem" }}>
                  <a href={(proj as { playStoreUrl?: string; appStoreUrl?: string }).playStoreUrl || (proj as { appStoreUrl?: string }).appStoreUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#00F0FF", textDecoration: "none", fontWeight: 600, fontSize: "0.85rem", display: "flex", alignItems: "center", justifyContent: "space-between", textTransform: "uppercase", letterSpacing: "1px", padding: "0.5rem 0" }}>
                    <span style={{ borderBottom: "1px solid #00F0FF", paddingBottom: "2px" }}>View</span>
                    <span>➔</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "3rem 0", background: "transparent", position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              <span style={{ color: "#00F0FF" }}>Skills</span>
            </h2>
          </div>
          {(() => {
            const names = skills.map((s) => s.name);
            const perRow = Math.ceil(names.length / 3);
            return [0, 1, 2].map((row) => (
              <div key={row} style={{ display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                {names.slice(row * perRow, (row + 1) * perRow).map((name) => (
                  <span key={name} className="glass" style={{ padding: "0.3rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem", color: "#00F0FF", border: "1px solid #00F0FF20", fontWeight: 500 }}>
                    {name}
                  </span>
                ))}
              </div>
            ));
          })()}
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: "4rem 0", background: "#0a0a1e", position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              Experience
            </h2>
          </div>
          {experiences.map((exp, idx) => (
            <div key={idx} className="glass-panel" style={{ padding: "1.5rem", borderRadius: "12px", border: "1px solid #00F0FF20", marginBottom: "1.5rem", animation: "fadeInUp 0.8s ease forwards" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem", alignItems: "flex-start" }}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#E0E6ED", marginBottom: "0.2rem" }}>{exp.position}</h3>
                  <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#00F0FF" }}>{exp.company}</h4>
                </div>
                <span style={{ color: "#94A3B8", fontSize: "0.85rem", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.85rem", marginBottom: "0.8rem" }}>📍 {exp.location}</p>
              <ul style={{ color: "#64748B", lineHeight: 1.6, listStyle: "none", fontSize: "0.9rem" }}>
                {exp.responsibilities.map((task, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem", display: "flex", gap: "0.6rem" }}>
                    <span style={{ color: "#00F0FF", fontSize: "0.7rem", marginTop: "4px" }}>▹</span>
                    {task}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section id="education" style={{ background: "transparent", padding: "4rem 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              Education
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "1.5rem" }}>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", gap: "1.5rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#00F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.5rem" }}>🎓</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.2rem", color: "#00F0FF", marginBottom: "0.3rem", fontWeight: 700 }}>Master of Engineering (MEng)</h3>
                <h4 style={{ fontSize: "1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 500 }}>Computer Science and Engineering</h4>
                <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "0.5rem" }}>United International University</p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>📅 2018 - 2020</span>
                  <span className="glass" style={{ padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 600, color: "#00F0FF" }}>First Class</span>
                </div>
              </div>
            </div>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", gap: "1.5rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#00F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.5rem" }}>🎓</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.2rem", color: "#00F0FF", marginBottom: "0.3rem", fontWeight: 700 }}>Bachelor of Engineering (BE)</h3>
                <h4 style={{ fontSize: "1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 500 }}>Computer Science and Engineering</h4>
                <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "0.5rem" }}>Ahsanullah University of Science and Technology</p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>📅 2014 - 2018</span>
                  <span className="glass" style={{ padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 600, color: "#00F0FF" }}>2nd Class</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" style={{ background: "#0a0a1e", padding: "4rem 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              Certifications
            </h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#00F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 700 }}>Six Sigma Yellow Belt</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "0.5rem", lineHeight: 1.4 }}>6sigmastudy</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "#00F0FF", fontWeight: 500 }}>📅 September 2025</span>
                  <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-MdAsifAfroj-1102841.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#ffffff", background: "#00F0FF", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600 }}>View →</a>
                </div>
              </div>
            </div>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#00F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 700 }}>Scrum Fundamentals Certified (SFC)</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "0.5rem", lineHeight: 1.4 }}>SCRUMstudy</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "#00F0FF", fontWeight: 500 }}>📅 October 2024</span>
                  <a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1053814" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#ffffff", background: "#00F0FF", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600 }}>View →</a>
                </div>
              </div>
            </div>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#00F0FF", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 700 }}>Kanban Essentials with AI Certified</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "0.5rem", lineHeight: 1.4 }}>Kanbanstudy</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "#00F0FF", fontWeight: 500 }}>📅 September 2025 - September 2028</span>
                  <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/KanbanEssentialswithAICertified-MDAsifAfroj-1102823.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#ffffff", background: "#00F0FF", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600 }}>View →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" style={{ background: "transparent", padding: "4rem 0" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              Publications
            </h2>
          </div>
          <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", gap: "1.5rem" }}>
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#FFD600", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.5rem" }}>📄</span>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "1.2rem", color: "#E0E6ED", marginBottom: "0.5rem", fontWeight: 700, lineHeight: 1.4 }}>Smart Car Parking Technique for Metropolitan City</h3>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem" }}>
                <span style={{ fontSize: "0.9rem", color: "#00F0FF", fontWeight: 600 }}>📚 Springer</span>
                <span style={{ fontSize: "0.85rem", color: "#94A3B8" }}>📅 January 2020</span>
              </div>
              <a href="https://link.springer.com/chapter/10.1007/978-981-15-7031-5_14" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "#ffffff", background: "#FFD600", padding: "0.5rem 1.2rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600, display: "inline-block" }}>Read Paper →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ padding: "4rem 0 2rem 0", background: "#050510" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="glass" style={{ textAlign: "center", padding: "3rem 2rem", borderRadius: "24px", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>Let&#x27;s Work Together</h2>
            <p style={{ fontSize: "1rem", color: "#64748B", maxWidth: "500px", margin: "0 auto 2rem auto", lineHeight: 1.6 }}>I&#x27;m always open to discussing new projects, creative ideas or opportunities.</p>
            <a href="mailto:shayon.asif@gmail.com" style={{ display: "inline-block", padding: "0.9rem 2.5rem", background: "#00F0FF", color: "#000", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}>Keep In Touch</a>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1.5rem", borderTop: "1px solid rgba(0, 240, 255, 0.2)", paddingTop: "1.5rem" }}>
            <p style={{ color: "#94A3B8", fontSize: "0.85rem" }}>© 2025 MD Asif Afroj Shayon. All rights reserved.</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="https://github.com/AAShayon" target="_blank" rel="noopener noreferrer" title="GitHub" style={{ fontSize: "1.3rem", textDecoration: "none" }}>💻</a>
              <a href="https://www.linkedin.com/in/aashayon" target="_blank" rel="noopener noreferrer" title="LinkedIn" style={{ fontSize: "1.3rem", textDecoration: "none" }}>💼</a>
              <a href="https://wa.me/8801580873412" target="_blank" rel="noopener noreferrer" title="WhatsApp" style={{ fontSize: "1.3rem", textDecoration: "none" }}>💬</a>
              <a href="https://twitter.com/Shayon01" target="_blank" rel="noopener noreferrer" title="Twitter" style={{ fontSize: "1.3rem", textDecoration: "none" }}>🐦</a>
              <a href="https://facebook.com/shayon" target="_blank" rel="noopener noreferrer" title="Facebook" style={{ fontSize: "1.3rem", textDecoration: "none" }}>👥</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
