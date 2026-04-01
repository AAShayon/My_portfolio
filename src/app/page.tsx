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
            <span className="gradient-text">Asif</span>
            <span style={{ color: "#E0E6ED" }}>.dev</span>
          </div>

          <nav style={{ display: "flex", gap: "2rem" }} className="mobile-hidden animate-slideInRight">
            {["Home", "Skills", "Experience", "Projects", "Contact"].map((item) => (
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
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          padding: "6rem 0",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            height: "100%",
            background: "radial-gradient(circle at center, #00F0FF10 0%, transparent 60%)",
            zIndex: -1,
            pointerEvents: "none",
          }}
        ></div>
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
                <span className="neon-text" style={{ background: "linear-gradient(to bottom, #fff 0%, #00F0FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", textShadow: "0 0 20px #00F0FF80" }}>
                  MD Asif Afroj Shayon
                </span>
              </div>
            </h1>
            <p
              style={{
                fontSize: "1.1rem",
                color: "#94A3B8",
                lineHeight: 1.7,
                marginBottom: "4rem",
                borderLeft: "2px solid #00F0FF",
                paddingLeft: "1rem",
                maxWidth: "500px",
              }}
            >
              {personalInfo.bio}
            </p>
            <div style={{ display: "flex", gap: "2rem", marginBottom: "4rem", flexWrap: "wrap" }}>
              <div className="glass-panel hover-glow" style={{ padding: "1rem 1.5rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "100px", border: "1px solid #00F0FF20" }}>
                <span className="gradient-text" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>4+</span>
                <span style={{ fontSize: "0.8rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Years Exp</span>
              </div>
              <div className="glass-panel hover-glow" style={{ padding: "1rem 1.5rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "100px", border: "1px solid #00F0FF20" }}>
                <span className="gradient-text" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>10+</span>
                <span style={{ fontSize: "0.8rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Live Apps</span>
              </div>
              <div className="glass-panel hover-glow" style={{ padding: "1rem 1.5rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "100px", border: "1px solid #00F0FF20" }}>
                <span className="gradient-text" style={{ fontSize: "1.8rem", fontWeight: "bold" }}>100%</span>
                <span style={{ fontSize: "0.8rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Commitment</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "2rem", marginTop: "2rem" }}>
              <a
                href="#projects"
                className="hover-lift"
                style={{
                  padding: "1rem 2.5rem",
                  background: "#00F0FF",
                  color: "#000",
                  borderRadius: "2px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  boxShadow: "0 0 20px #00F0FF50",
                  border: "1px solid #00F0FF",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Initialize Projects
              </a>
              <a
                href="#contact"
                className="glass hover-lift"
                style={{
                  padding: "1rem 2.5rem",
                  color: "#E0E6ED",
                  borderRadius: "2px",
                  textDecoration: "none",
                  fontWeight: 600,
                  border: "1px solid #64748B",
                  textTransform: "uppercase",
                  letterSpacing: "1px",
                  clipPath: "polygon(10% 0, 100% 0, 100% 70%, 90% 100%, 0 100%, 0 30%)",
                  display: "inline-block",
                  textAlign: "center",
                }}
              >
                Establish Contact
              </a>
            </div>
          </div>
          <div style={{ flexShrink: 0, display: "flex", justifyContent: "center", width: "100%", maxWidth: "450px", animation: "fadeIn 1s ease forwards" }}>
            <div style={{ position: "relative", width: "350px", height: "350px", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "120%", height: "120%", border: "1px dashed #00F0FF40", borderRadius: "50%", zIndex: 0 }}></div>
              <div style={{ position: "absolute", top: "-20%", left: "-20%", width: "140%", height: "140%", border: "1px solid #BD00FF20", borderLeftColor: "transparent", borderRightColor: "transparent", borderRadius: "50%", zIndex: 0 }}></div>
              <div className="animate-pulse" style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "radial-gradient(circle, #00F0FF20 0%, transparent 70%)", borderRadius: "50%", zIndex: -1 }}></div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={personalInfo.avatar}
                alt={personalInfo.name}
                style={{ width: "80%", height: "80%", borderRadius: "50%", objectFit: "cover", border: "2px solid #00F0FF", boxShadow: "0 0 50px #BD00FF40", position: "relative", zIndex: 2 }}
              />
              <div style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", backgroundImage: "linear-gradient(#050510 1px, transparent 1px), linear-gradient(90deg, #050510 1px, transparent 1px)", backgroundSize: "20px 20px", opacity: 0.1, zIndex: 3, pointerEvents: "none", borderRadius: "50%" }}></div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "6rem 0", background: "transparent", position: "relative", zIndex: 1 }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "3.5rem", fontWeight: 800, marginBottom: "1rem", letterSpacing: "-1px", color: "#E0E6ED" }}>
              Technical <span className="gradient-text neon-text">Arsenal</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#7000FF", letterSpacing: "2px", textTransform: "uppercase" }}>Powered by Next-Gen Technologies</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem" }}>
            {["Mobile", "Frontend", "Backend", "Database", "Tools"].map((category) => (
              <div key={category} className="glass-panel" style={{ padding: "2rem", borderRadius: "16px", border: "1px solid #00F0FF20", position: "relative", overflow: "hidden", animation: "fadeInUp 0.8s ease forwards" }}>
                <div style={{ display: "flex", alignItems: "center", marginBottom: "2rem", gap: "1rem" }}>
                  <h3 style={{ fontSize: "1.8rem", fontWeight: 700, color: "#00F0FF", textTransform: "uppercase", letterSpacing: "1px" }}>{category}</h3>
                  <div style={{ height: "1px", flex: 1, background: "linear-gradient(90deg, #00F0FF 0%, transparent 100%)" }}></div>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
                  {skills
                    .filter((skill) => skill.category === category)
                    .map((skill) => (
                      <div key={skill.name} className="glass" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem", borderRadius: "12px", border: "1px solid rgba(255, 255, 255, 0.05)", transition: "all 0.3s ease", cursor: "default", animation: "fadeInUp 1s ease forwards" }}>
                        <span style={{ fontSize: "1.5rem", background: "rgba(255, 255, 255, 0.05)", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "8px" }}>
                          {getIcon(skill.icon)}
                        </span>
                        <div style={{ flex: 1 }}>
                          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.5rem" }}>
                            <span style={{ fontWeight: 600, color: "#E0E6ED", fontSize: "1.1rem" }}>{skill.name}</span>
                            <span style={{ color: "#7000FF", fontSize: "0.9rem", fontWeight: 700 }}>{skill.level}%</span>
                          </div>
                          <div style={{ height: "4px", background: "rgba(255,255,255,0.05)", borderRadius: "2px", overflow: "hidden" }}>
                            <div style={{ height: "100%", background: "linear-gradient(90deg, #00F0FF 0%, #BD00FF 100%)", borderRadius: "2px", boxShadow: "0 0 10px #00F0FF", width: `${skill.level}%` }}></div>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" style={{ padding: "6rem 0", position: "relative" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem", color: "#E0E6ED" }}>
              Mission <span className="gradient-text neon-text">Logs</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#7000FF", letterSpacing: "2px", textTransform: "uppercase" }}>Operational History & Deployments</p>
          </div>
          <div style={{ position: "relative", paddingLeft: 0 }}>
            <div style={{ position: "absolute", left: "9px", top: "20px", bottom: 0, width: "2px", background: "linear-gradient(to bottom, #00F0FF 0%, #BD00FF 100%)", opacity: 0.3 }}></div>
            {experiences.map((exp, idx) => (
              <div key={idx} style={{ position: "relative", marginBottom: "6rem", display: "flex", gap: "2rem", animation: "fadeInUp 1s ease forwards" }}>
                <div style={{ flexShrink: 0, width: "20px", display: "flex", justifyContent: "center", position: "relative", zIndex: 2 }}>
                  <div className="animate-pulse" style={{ width: "16px", height: "16px", background: "#050510", border: "2px solid #00F0FF", borderRadius: "50%", boxShadow: "0 0 10px #00F0FF", marginTop: "5px" }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <div className="glass-panel hover-lift" style={{ padding: "2rem", borderRadius: "16px", border: "1px solid #00F0FF20", position: "relative" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem", marginBottom: "1rem", alignItems: "flex-start" }}>
                      <div>
                        <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#E0E6ED", marginBottom: "0.2rem" }}>{exp.position}</h3>
                        <h4 className="gradient-text" style={{ fontSize: "1.1rem", fontWeight: 600 }}>{exp.company}</h4>
                      </div>
                      <span style={{ color: "#00F0FF", fontSize: "0.9rem", background: "#00F0FF10", padding: "0.4rem 1rem", borderRadius: "50px", border: "1px solid #00F0FF30", whiteSpace: "nowrap" }}>{exp.period}</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", marginBottom: "1.5rem", color: "#94A3B8", fontSize: "0.9rem" }}>
                      <span style={{ fontSize: "1rem" }}>📍</span>
                      <span style={{ fontStyle: "italic" }}>{exp.location}</span>
                    </div>
                    <ul style={{ color: "#64748B", lineHeight: 1.7, listStyle: "none" }}>
                      {exp.responsibilities.map((task, i) => (
                        <li key={i} style={{ marginBottom: "0.8rem", display: "flex", gap: "0.8rem" }}>
                          <span style={{ color: "#00F0FF", fontSize: "0.8rem", marginTop: "4px" }}>▹</span>
                          {task}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" style={{ background: "linear-gradient(180deg, #1a1a3e 0%, #0a0a1e 100%)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="animate-fadeInUp" style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem", letterSpacing: "-1px", color: "#ffffff" }}>
              <span className="gradient-text">Education</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#64748B" }}>Academic background and qualifications</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
            <div className="glass hover-lift animate-fadeInUp" style={{ padding: "2rem", borderRadius: "24px", display: "flex", gap: "2rem", animationDelay: "0s" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px #00F0FF40" }}>
                <span style={{ fontSize: "2rem" }}>🎓</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.5rem", color: "#00F0FF", margin: "0 0 0.5rem 0", fontWeight: 700 }}>Master of Engineering (MEng)</h3>
                <h4 style={{ fontSize: "1.1rem", color: "#E0E6ED", margin: "0 0 0.5rem 0", fontWeight: 500 }}>Computer Science and Engineering</h4>
                <p style={{ fontSize: "1rem", color: "#64748B", marginBottom: "1rem" }}>United International University</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
                  <span style={{ color: "#94A3B8", fontSize: "0.9rem" }}>📅 2018 - 2020</span>
                  <span className="glass" style={{ padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, color: "#00F0FF", border: "1px solid rgba(102, 126, 234, 0.3)" }}>First Class</span>
                </div>
              </div>
            </div>
            <div className="glass hover-lift animate-fadeInUp" style={{ padding: "2rem", borderRadius: "24px", display: "flex", gap: "2rem", animationDelay: "0.2s" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px #00F0FF40" }}>
                <span style={{ fontSize: "2rem" }}>🎓</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.5rem", color: "#00F0FF", margin: "0 0 0.5rem 0", fontWeight: 700 }}>Bachelor of Engineering (BE)</h3>
                <h4 style={{ fontSize: "1.1rem", color: "#E0E6ED", margin: "0 0 0.5rem 0", fontWeight: 500 }}>Computer Science and Engineering</h4>
                <p style={{ fontSize: "1rem", color: "#64748B", marginBottom: "1rem" }}>Ahsanullah University of Science and Technology</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", marginTop: "1rem" }}>
                  <span style={{ color: "#94A3B8", fontSize: "0.9rem" }}>📅 2014 - 2018</span>
                  <span className="glass" style={{ padding: "0.4rem 1rem", borderRadius: "20px", fontSize: "0.85rem", fontWeight: 600, color: "#00F0FF", border: "1px solid rgba(102, 126, 234, 0.3)" }}>2nd Class</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" style={{ background: "linear-gradient(180deg, #0a0a1e 0%, #1a1a3e 100%)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="animate-fadeInUp" style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem", letterSpacing: "-1px", color: "#ffffff" }}>
              <span className="gradient-text">Certifications</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#64748B" }}>Professional certifications and achievements</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "2rem" }}>
            <div className="glass hover-lift animate-fadeInUp" style={{ padding: "2rem", borderRadius: "20px", display: "flex", alignItems: "flex-start", gap: "1rem", animationDelay: "0s" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px #00F0FF40" }}>
                <span style={{ fontSize: "1.5rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.3rem", color: "#E0E6ED", margin: "0 0 0.5rem 0", fontWeight: 700 }}>Six Sigma Yellow Belt</h3>
                <p style={{ fontSize: "0.95rem", color: "#64748B", marginBottom: "0.75rem", lineHeight: 1.5 }}>6sigmastudy - The global certification body for six sigma certifications</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.9rem", color: "#00F0FF", fontWeight: 500 }}>📅 September 2025</span>
                  <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-MdAsifAfroj-1102841.pdf" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ fontSize: "0.85rem", color: "#ffffff", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600, display: "inline-block", boxShadow: "0 4px 12px #00F0FF40" }}>View Certificate →</a>
                </div>
              </div>
            </div>
            <div className="glass hover-lift animate-fadeInUp" style={{ padding: "2rem", borderRadius: "20px", display: "flex", alignItems: "flex-start", gap: "1rem", animationDelay: "0.15s" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px #00F0FF40" }}>
                <span style={{ fontSize: "1.5rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.3rem", color: "#E0E6ED", margin: "0 0 0.5rem 0", fontWeight: 700 }}>Scrum Fundamentals Certified (SFC)</h3>
                <p style={{ fontSize: "0.95rem", color: "#64748B", marginBottom: "0.75rem", lineHeight: 1.5 }}>SCRUMstudy - Accreditation Body for Scrum and Agile</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.9rem", color: "#00F0FF", fontWeight: 500 }}>📅 October 2024</span>
                  <a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1053814" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ fontSize: "0.85rem", color: "#ffffff", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600, display: "inline-block", boxShadow: "0 4px 12px #00F0FF40" }}>View Certificate →</a>
                </div>
              </div>
            </div>
            <div className="glass hover-lift animate-fadeInUp" style={{ padding: "2rem", borderRadius: "20px", display: "flex", alignItems: "flex-start", gap: "1rem", animationDelay: "0.3s" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px #00F0FF40" }}>
                <span style={{ fontSize: "1.5rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.3rem", color: "#E0E6ED", margin: "0 0 0.5rem 0", fontWeight: 700 }}>Kanban Essentials with AI Certified</h3>
                <p style={{ fontSize: "0.95rem", color: "#64748B", marginBottom: "0.75rem", lineHeight: 1.5 }}>Kanbanstudy</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.9rem", color: "#00F0FF", fontWeight: 500 }}>📅 September 2025 - September 2028</span>
                  <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/KanbanEssentialswithAICertified-MDAsifAfroj-1102823.pdf" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ fontSize: "0.85rem", color: "#ffffff", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", padding: "0.5rem 1rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600, display: "inline-block", boxShadow: "0 4px 12px #00F0FF40" }}>View Certificate →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "6rem 0", background: "transparent", position: "relative" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "6rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem", color: "#E0E6ED" }}>
              Featured <span className="gradient-text neon-text">Deployments</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#7000FF", letterSpacing: "2px", textTransform: "uppercase" }}>Active Mission Directives</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "4rem" }}>
            {projects.map((proj, idx) => (
              <div key={idx} className="glass-panel" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", flexDirection: "column", gap: "1rem", border: "1px solid #00F0FF20", background: "rgba(10, 10, 25, 0.6)", height: "100%", animation: "fadeInUp 0.8s ease forwards" }}>
                <div>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                    {proj.technologies.map((tech, i) => (
                      <span key={i} style={{ fontSize: "0.65rem", fontWeight: 600, padding: "0.2rem 0.5rem", background: "#00F0FF10", borderRadius: "4px", color: "#00F0FF", border: "1px solid #00F0FF40", textTransform: "uppercase", letterSpacing: "0.5px" }}>{tech}</span>
                    ))}
                  </div>
                  <h3 style={{ fontSize: "1.5rem", fontWeight: 700, color: "#00F0FF", marginBottom: "0.5rem", textShadow: "0 0 10px #00F0FF40" }}>{proj.name}</h3>
                </div>
                <div style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1rem" }}>
                  {proj.iconUrl && (
                    <div style={{ flexShrink: 0, width: "50px", height: "50px", borderRadius: "10px", overflow: "hidden", border: "1px solid #00F0FF20", background: "#ffffff", padding: "2px", boxShadow: "0 0 10px #00F0FF10" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={proj.iconUrl} alt={`${proj.name} icon`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "8px" }} />
                    </div>
                  )}
                  <p style={{ color: "#94A3B8", fontSize: "0.9rem", lineHeight: 1.5, margin: 0 }}>{proj.description}</p>
                </div>
                <div style={{ marginTop: "auto", borderTop: "1px solid rgba(0, 240, 255, 0.2)", paddingTop: "0.8rem" }}>
                  <a href={proj.playStoreUrl} target="_blank" rel="noopener noreferrer" className="hover-glow" style={{ color: "#7000FF", textDecoration: "none", fontWeight: 600, fontSize: "0.9rem", display: "flex", alignItems: "center", justifyContent: "space-between", textTransform: "uppercase", letterSpacing: "1px", padding: "0.5rem 0" }}>
                    <span style={{ borderBottom: "1px solid #7000FF", paddingBottom: "2px" }}>View</span>
                    <span style={{ transform: "translateX(0)", transition: "transform 0.3s ease" }}>➔</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering & Leadership */}
      <section id="volunteering" style={{ background: "linear-gradient(180deg, #1a1a3e 0%, #0a0a1e 100%)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="animate-fadeInUp" style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem", letterSpacing: "-1px", color: "#ffffff" }}>
              <span className="gradient-text">Volunteering & Leadership</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#64748B" }}>Giving back to the community through technology</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
            <div className="glass hover-lift animate-fadeInUp" style={{ padding: "2rem", borderRadius: "24px", display: "flex", gap: "2rem", animationDelay: "0s" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "linear-gradient(135deg, #00FF94 0%, #00F0FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px #00FF9440" }}>
                <span style={{ fontSize: "2rem" }}>🤝</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.5rem", color: "#00F0FF", margin: "0 0 0.5rem 0", fontWeight: 700 }}>GRASSROOT CO-OPERATION</h3>
                <h4 style={{ fontSize: "1.1rem", color: "#E0E6ED", margin: "0 0 0.5rem 0", fontWeight: 600 }}>IT Consultant</h4>
                <p style={{ fontSize: "0.9rem", color: "#94A3B8", marginBottom: "1rem" }}>📅 February 2020 - May 2023</p>
                <p style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.7 }}>Provided comprehensive technical guidance, troubleshooting, and IT infrastructure support. Designed and delivered training sessions to improve digital literacy and technical skills.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" style={{ background: "linear-gradient(180deg, #0a0a1e 0%, #1a1a3e 100%)", padding: "6rem 0" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="animate-fadeInUp" style={{ textAlign: "center", marginBottom: "6rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 900, marginBottom: "1rem", letterSpacing: "-1px", color: "#ffffff" }}>
              <span className="gradient-text">Publications</span>
            </h2>
            <p style={{ fontSize: "1.2rem", color: "#64748B" }}>Research contributions and academic publications</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "2rem" }}>
            <div className="glass hover-lift animate-fadeInUp" style={{ padding: "2rem", borderRadius: "24px", display: "flex", gap: "2rem", animationDelay: "0s" }}>
              <div style={{ width: "60px", height: "60px", borderRadius: "16px", background: "linear-gradient(135deg, #FFD600 0%, #00F0FF 100%)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, boxShadow: "0 4px 12px #FFD60040" }}>
                <span style={{ fontSize: "2rem" }}>📄</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.3rem", color: "#E0E6ED", margin: "0 0 1rem 0", fontWeight: 700, lineHeight: 1.4 }}>Smart Car Parking Technique for Metropolitan City</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                  <span style={{ fontSize: "1rem", color: "#00F0FF", fontWeight: 600 }}>📚 Springer</span>
                  <span style={{ fontSize: "0.9rem", color: "#94A3B8" }}>📅 January 2020</span>
                </div>
                <a href="https://link.springer.com/chapter/10.1007/978-981-15-7031-5_14" target="_blank" rel="noopener noreferrer" className="hover-lift" style={{ fontSize: "0.9rem", color: "#ffffff", background: "linear-gradient(135deg, #FFD600 0%, #00F0FF 100%)", padding: "0.6rem 1.5rem", borderRadius: "8px", textDecoration: "none", fontWeight: 600, display: "inline-block", marginTop: "1rem", boxShadow: "0 4px 12px #FFD60040" }}>Read Paper →</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" style={{ padding: "6rem 0 2rem 0", background: "#050510" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="glass animate-fadeInUp" style={{ textAlign: "center", padding: "4rem 2rem", borderRadius: "30px", marginBottom: "4rem" }}>
            <h2 style={{ fontSize: "3rem", fontWeight: 800, marginBottom: "1rem", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Let&#x27;s Work Together</h2>
            <p style={{ fontSize: "1.1rem", color: "#64748B", maxWidth: "600px", margin: "0 auto 2.5rem auto", lineHeight: 1.6 }}>I&#x27;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.</p>
            <a href="mailto:shayon.asif@gmail.com" className="hover-lift" style={{ display: "inline-block", padding: "1rem 3rem", background: "linear-gradient(135deg, #00F0FF 0%, #BD00FF 100%)", color: "white", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "1.1rem", boxShadow: "0 10px 20px #00F0FF40" }}>Keep In Touch</a>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "2rem", borderTop: "1px solid rgba(0, 240, 255, 0.2)", paddingTop: "2rem" }}>
            <p style={{ color: "#94A3B8", fontSize: "0.9rem" }}>© 2025 MD Asif Afroj Shayon. All rights reserved.</p>
            <div style={{ display: "flex", gap: "1.5rem" }}>
              <a href="https://github.com/AAShayon" target="_blank" rel="noopener noreferrer" className="hover-lift" title="GitHub" style={{ fontSize: "1.5rem", textDecoration: "none", transition: "transform 0.3s ease" }}>💻</a>
              <a href="https://www.linkedin.com/in/aashayon" target="_blank" rel="noopener noreferrer" className="hover-lift" title="LinkedIn" style={{ fontSize: "1.5rem", textDecoration: "none", transition: "transform 0.3s ease" }}>💼</a>
              <a href="https://wa.me/8801580873412" target="_blank" rel="noopener noreferrer" className="hover-lift" title="WhatsApp" style={{ fontSize: "1.5rem", textDecoration: "none", transition: "transform 0.3s ease" }}>💬</a>
              <a href="https://twitter.com/Shayon01" target="_blank" rel="noopener noreferrer" className="hover-lift" title="Twitter" style={{ fontSize: "1.5rem", textDecoration: "none", transition: "transform 0.3s ease" }}>🐦</a>
              <a href="https://facebook.com/shayon" target="_blank" rel="noopener noreferrer" className="hover-lift" title="Facebook" style={{ fontSize: "1.5rem", textDecoration: "none", transition: "transform 0.3s ease" }}>👥</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
