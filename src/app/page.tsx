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
      return <Smartphone className="w-6 h-6 text-[#14B8A6]" />;
    case "⚛️":
      return <Atom className="w-6 h-6 text-[#14B8A6]" />;
    case "📘":
    case "💛":
      return <CodeXml className="w-6 h-6 text-[#14B8A6]" />;
    case "🎨":
      return <PanelsTopLeft className="w-6 h-6 text-[#14B8A6]" />;
    case "🐘":
    case "🔧":
    case "🟢":
      return <Server className="w-6 h-6 text-[#14B8A6]" />;
    case "🗄️":
    case "🍃":
      return <Database className="w-6 h-6 text-[#14B8A6]" />;
    case "🔥":
      return <Flame className="w-6 h-6 text-[#14B8A6]" />;
    case "📦":
      return <GitBranch className="w-6 h-6 text-[#14B8A6]" />;
    case "🌐":
    case "🏃":
      return <Terminal className="w-6 h-6 text-[#14B8A6]" />;
    default:
      return <Smartphone className="w-6 h-6 text-[#14B8A6]" />;
  }
};

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);

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
            <span style={{ color: "#14B8A6" }}>Asif</span>
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
            <Menu className="w-6 h-6 text-[#14B8A6]" />
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
                <span style={{ color: "#14B8A6", textShadow: "0 0 20px #14B8A680" }}>
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
                borderLeft: "2px solid #14B8A6",
                paddingLeft: "1rem",
                maxWidth: "500px",
              }}
            >
              {personalInfo.bio}
            </p>
            <div style={{ display: "flex", gap: "1.5rem", marginBottom: "3rem", flexWrap: "wrap" }}>
              <div className="glass-panel" style={{ padding: "0.8rem 1.2rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "90px", border: "1px solid #14B8A620" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#14B8A6" }}>4+</span>
                <span style={{ fontSize: "0.7rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Years Exp</span>
              </div>
              <div className="glass-panel" style={{ padding: "0.8rem 1.2rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "90px", border: "1px solid #14B8A620" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#14B8A6" }}>10+</span>
                <span style={{ fontSize: "0.7rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Live Apps</span>
              </div>
              <div className="glass-panel" style={{ padding: "0.8rem 1.2rem", borderRadius: "12px", display: "flex", flexDirection: "column", alignItems: "center", minWidth: "90px", border: "1px solid #14B8A620" }}>
                <span style={{ fontSize: "1.5rem", fontWeight: "bold", color: "#14B8A6" }}>100%</span>
                <span style={{ fontSize: "0.7rem", color: "#64748B", textTransform: "uppercase", letterSpacing: "1px", marginTop: "0.2rem" }}>Commitment</span>
              </div>
            </div>
            <div style={{ display: "flex", gap: "1.5rem", marginTop: "1.5rem" }}>
              <a
                href="#projects"
                style={{
                  padding: "0.9rem 2rem",
                  background: "#14B8A6",
                  color: "#000",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  boxShadow: "0 0 20px #14B8A650",
                  border: "1px solid #14B8A6",
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
                style={{ width: "85%", height: "85%", borderRadius: "50%", objectFit: "cover", border: "2px solid #14B8A6", boxShadow: "0 0 30px #14B8A640", position: "relative", zIndex: 2 }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" style={{ padding: "4rem 0", background: "#0a0a1e", position: "relative" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "3rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              Featured <span style={{ color: "#14B8A6" }}>Projects</span>
            </h2>
          </div>
          {(() => {
            const withSS = projects.filter(p => !!(p as any).ssUrl);
            const withoutSS = projects.filter(p => !(p as any).ssUrl);
            return (
              <>
                <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem" }}>
                  {withSS.map((proj, idx) => {
                    const p = proj as { ssUrl?: string };
                    return (
                      <div key={idx} className="glass-panel" style={{ borderRadius: "16px", overflow: "hidden", border: "1px solid #14B8A620", background: "rgba(10, 10, 25, 0.6)", animation: "fadeInUp 0.8s ease forwards" }}>
                        <div style={{ width: "100%", aspectRatio: "16/10", overflow: "hidden", background: "#0a0a1e", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", borderBottom: "1px solid #14B8A610" }} onClick={() => setLightbox(p.ssUrl!)}>
                          {/* eslint-disable-next-line @next/next/no-img-element */}
                          <img src={p.ssUrl} alt={`${proj.name} screenshot`} style={{ width: "100%", height: "100%", objectFit: "contain", transition: "transform 0.4s ease" }} onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")} onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")} />
                        </div>
                        <div style={{ padding: "1.25rem" }}>
                          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                            {proj.technologies.map((tech, i) => (
                              <span key={i} style={{ fontSize: "0.65rem", fontWeight: 600, padding: "0.2rem 0.5rem", background: "#14B8A610", borderRadius: "4px", color: "#14B8A6", border: "1px solid #14B8A640", textTransform: "uppercase", letterSpacing: "0.5px" }}>{tech}</span>
                            ))}
                          </div>
                          <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                            {proj.iconUrl && (
                              <div style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "8px", overflow: "hidden", border: "1px solid #14B8A620", background: "#ffffff", padding: "2px" }}>
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={proj.iconUrl} alt={`${proj.name} icon`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }} />
                              </div>
                            )}
                            <div>
                              <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#14B8A6", marginBottom: "0.3rem" }}>{proj.name}</h3>
                              <p style={{ color: "#94A3B8", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>{proj.description}</p>
                            </div>
                          </div>
                          <div style={{ marginTop: "0.8rem", borderTop: "1px solid rgba(0, 240, 255, 0.2)", paddingTop: "0.8rem" }}>
                            <a href={(p as { websiteUrl?: string; playStoreUrl?: string; appStoreUrl?: string }).websiteUrl || (p as { playStoreUrl?: string; appStoreUrl?: string }).playStoreUrl || (p as { appStoreUrl?: string }).appStoreUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#14B8A6", textDecoration: "none", fontWeight: 600, fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "space-between", textTransform: "uppercase", letterSpacing: "1px", padding: "0.2rem 0" }}>
                              <span style={{ borderBottom: "1px solid #14B8A6", paddingBottom: "2px" }}>{(p as { websiteUrl?: string }).websiteUrl ? "Visit Website" : "View on Store"}</span>
                              <span>➔</span>
                            </a>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
                {withoutSS.length > 0 && (
                  <div className="grid-2" style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.5rem", marginTop: "2rem" }}>
                    {withoutSS.map((proj, idx) => (
                      <div key={idx} className="glass-panel" style={{ padding: "1.25rem", borderRadius: "16px", border: "1px solid #14B8A620", background: "rgba(10, 10, 25, 0.6)", animation: "fadeInUp 0.8s ease forwards", display: "flex", flexDirection: "column" }}>
                        <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "0.5rem" }}>
                          {proj.technologies.map((tech, i) => (
                            <span key={i} style={{ fontSize: "0.65rem", fontWeight: 600, padding: "0.2rem 0.5rem", background: "#14B8A610", borderRadius: "4px", color: "#14B8A6", border: "1px solid #14B8A640", textTransform: "uppercase", letterSpacing: "0.5px" }}>{tech}</span>
                          ))}
                        </div>
                        <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "#14B8A6", marginBottom: "0.3rem" }}>{proj.name}</h3>
                        <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.5rem", flex: 1 }}>
                          {proj.iconUrl && (
                            <div style={{ flexShrink: 0, width: "32px", height: "32px", borderRadius: "8px", overflow: "hidden", border: "1px solid #14B8A620", background: "#ffffff", padding: "2px" }}>
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              <img src={proj.iconUrl} alt={`${proj.name} icon`} style={{ width: "100%", height: "100%", objectFit: "contain", borderRadius: "6px" }} />
                            </div>
                          )}
                          <p style={{ color: "#94A3B8", fontSize: "0.8rem", lineHeight: 1.5, margin: 0 }}>{proj.description}</p>
                        </div>
                        <div style={{ borderTop: "1px solid rgba(0, 240, 255, 0.2)", paddingTop: "0.8rem" }}>
                          <a href={(proj as { websiteUrl?: string; playStoreUrl?: string; appStoreUrl?: string }).websiteUrl || (proj as { playStoreUrl?: string; appStoreUrl?: string }).playStoreUrl || (proj as { appStoreUrl?: string }).appStoreUrl} target="_blank" rel="noopener noreferrer" style={{ color: "#14B8A6", textDecoration: "none", fontWeight: 600, fontSize: "0.8rem", display: "flex", alignItems: "center", justifyContent: "space-between", textTransform: "uppercase", letterSpacing: "1px", padding: "0.2rem 0" }}>
                            <span style={{ borderBottom: "1px solid #14B8A6", paddingBottom: "2px" }}>{(proj as { websiteUrl?: string }).websiteUrl ? "Visit Website" : "View on Store"}</span>
                            <span>➔</span>
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            );
          })()}
        </div>
      </section>

      {/* Skills */}
      <section id="skills" style={{ padding: "3rem 0", background: "transparent", position: "relative" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", padding: "0 2rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem", animation: "fadeInUp 0.6s ease forwards" }}>
            <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem", color: "#E0E6ED" }}>
              <span style={{ color: "#14B8A6" }}>Skills</span>
            </h2>
          </div>
          {(() => {
            const names = skills.map((s) => s.name);
            const perRow = Math.ceil(names.length / 3);
            return [0, 1, 2].map((row) => (
              <div key={row} style={{ display: "flex", justifyContent: "center", gap: "0.6rem", flexWrap: "wrap", marginBottom: "0.6rem" }}>
                {names.slice(row * perRow, (row + 1) * perRow).map((name) => (
                  <span key={name} className="glass" style={{ padding: "0.3rem 0.9rem", borderRadius: "6px", fontSize: "0.85rem", color: "#14B8A6", border: "1px solid #14B8A620", fontWeight: 500 }}>
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
            <div key={idx} className="glass-panel" style={{ padding: "1.5rem", borderRadius: "12px", border: "1px solid #14B8A620", marginBottom: "1.5rem", animation: "fadeInUp 0.8s ease forwards" }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem", marginBottom: "0.5rem", alignItems: "flex-start" }}>
                <div>
                  <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "#E0E6ED", marginBottom: "0.2rem" }}>{exp.position}</h3>
                  <h4 style={{ fontSize: "1rem", fontWeight: 600, color: "#14B8A6" }}>{exp.company}</h4>
                </div>
                <span style={{ color: "#94A3B8", fontSize: "0.85rem", whiteSpace: "nowrap" }}>{exp.period}</span>
              </div>
              <p style={{ color: "#64748B", fontSize: "0.85rem", marginBottom: "0.8rem" }}>📍 {exp.location}</p>
              <ul style={{ color: "#64748B", lineHeight: 1.6, listStyle: "none", fontSize: "0.9rem" }}>
                {exp.responsibilities.map((task, i) => (
                  <li key={i} style={{ marginBottom: "0.4rem", display: "flex", gap: "0.6rem" }}>
                    <span style={{ color: "#14B8A6", fontSize: "0.7rem", marginTop: "4px" }}>▹</span>
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
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#14B8A6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.5rem" }}>🎓</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.2rem", color: "#14B8A6", marginBottom: "0.3rem", fontWeight: 700 }}>Master of Engineering (MEng)</h3>
                <h4 style={{ fontSize: "1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 500 }}>Computer Science and Engineering</h4>
                <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "0.5rem" }}>United International University</p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>📅 2018 - 2020</span>
                  <span className="glass" style={{ padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 600, color: "#14B8A6" }}>First Class</span>
                </div>
              </div>
            </div>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", gap: "1.5rem" }}>
              <div style={{ width: "50px", height: "50px", borderRadius: "12px", background: "#14B8A6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.5rem" }}>🎓</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.2rem", color: "#14B8A6", marginBottom: "0.3rem", fontWeight: 700 }}>Bachelor of Engineering (BE)</h3>
                <h4 style={{ fontSize: "1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 500 }}>Computer Science and Engineering</h4>
                <p style={{ fontSize: "0.9rem", color: "#64748B", marginBottom: "0.5rem" }}>Ahsanullah University of Science and Technology</p>
                <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ color: "#94A3B8", fontSize: "0.85rem" }}>📅 2014 - 2018</span>
                  <span className="glass" style={{ padding: "0.3rem 0.8rem", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 600, color: "#14B8A6" }}>2nd Class</span>
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
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#14B8A6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 700 }}>Six Sigma Yellow Belt</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "0.5rem", lineHeight: 1.4 }}>6sigmastudy</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "#14B8A6", fontWeight: 500 }}>📅 September 2025</span>
                  <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/SixSigmaYellowBelt-MdAsifAfroj-1102841.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#ffffff", background: "#14B8A6", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600 }}>View →</a>
                </div>
              </div>
            </div>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#14B8A6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 700 }}>Scrum Fundamentals Certified (SFC)</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "0.5rem", lineHeight: 1.4 }}>SCRUMstudy</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "#14B8A6", fontWeight: 500 }}>📅 October 2024</span>
                  <a href="https://www.scrumstudy.com/certification/verify?type=SFC&number=1053814" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#ffffff", background: "#14B8A6", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600 }}>View →</a>
                </div>
              </div>
            </div>
            <div className="glass" style={{ padding: "1.5rem", borderRadius: "16px", display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ width: "40px", height: "40px", borderRadius: "10px", background: "#14B8A6", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ fontSize: "1.2rem" }}>🏆</span>
              </div>
              <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: "1.1rem", color: "#E0E6ED", marginBottom: "0.3rem", fontWeight: 700 }}>Kanban Essentials with AI Certified</h3>
                <p style={{ fontSize: "0.8rem", color: "#64748B", marginBottom: "0.5rem", lineHeight: 1.4 }}>Kanbanstudy</p>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                  <span style={{ fontSize: "0.8rem", color: "#14B8A6", fontWeight: 500 }}>📅 September 2025 - September 2028</span>
                  <a href="https://c46e136a583f7e334124-ac22991740ab4ff17e21daf2ed577041.ssl.cf1.rackcdn.com/Certificate/KanbanEssentialswithAICertified-MDAsifAfroj-1102823.pdf" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.8rem", color: "#ffffff", background: "#14B8A6", padding: "0.4rem 0.8rem", borderRadius: "6px", textDecoration: "none", fontWeight: 600 }}>View →</a>
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
            <div style={{ width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
              <span style={{ fontSize: "1.5rem" }}>📄</span>
            </div>
            <div style={{ flex: 1 }}>
              <h3 style={{ fontSize: "1.2rem", color: "#E0E6ED", marginBottom: "0.5rem", fontWeight: 700, lineHeight: 1.4 }}>Smart Car Parking Technique for Metropolitan City</h3>
              <div style={{ display: "flex", gap: "1rem", marginBottom: "0.8rem" }}>
                <span style={{ fontSize: "0.9rem", color: "#94A3B8", fontWeight: 600 }}>📚 Springer</span>
                <span style={{ fontSize: "0.85rem", color: "#64748B" }}>📅 January 2020</span>
              </div>
              <a href="https://link.springer.com/chapter/10.1007/978-981-15-7031-5_14" target="_blank" rel="noopener noreferrer" style={{ fontSize: "0.85rem", color: "#94A3B8", textDecoration: "none", fontWeight: 500, borderBottom: "1px solid #475569", paddingBottom: "1px" }}>Read Paper →</a>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightbox && (
        <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.92)", zIndex: 9999, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", padding: "1rem" }} onClick={() => setLightbox(null)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={lightbox} alt="Screenshot preview" style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "contain", borderRadius: "8px", boxShadow: "0 0 40px rgba(0,0,0,0.5)" }} />
        </div>
      )}

      {/* Footer */}
      <footer id="contact" style={{ padding: "4rem 0 2rem 0", background: "#050510" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 2rem" }}>
          <div className="glass" style={{ textAlign: "center", padding: "3rem 2rem", borderRadius: "24px", marginBottom: "3rem" }}>
            <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "0.5rem", color: "#E0E6ED" }}>Let&#x27;s Work Together</h2>
            <p style={{ fontSize: "1rem", color: "#64748B", maxWidth: "500px", margin: "0 auto 2rem auto", lineHeight: 1.6 }}>I&#x27;m always open to discussing new projects, creative ideas or opportunities.</p>
            <a href="mailto:shayon.asif@gmail.com" style={{ display: "inline-block", padding: "0.9rem 2.5rem", background: "#14B8A6", color: "#000", borderRadius: "50px", textDecoration: "none", fontWeight: 600, fontSize: "1rem" }}>Keep In Touch</a>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "2rem", borderTop: "1px solid rgba(0, 240, 255, 0.2)", paddingTop: "2rem" }}>
            <div>
              <p style={{ color: "#E0E6ED", fontSize: "1rem", fontWeight: 600, marginBottom: "0.5rem" }}>MD Asif Afroj Shayon</p>
              <p style={{ color: "#64748B", fontSize: "0.85rem", maxWidth: "300px", lineHeight: 1.5 }}>Software Engineer specializing in Flutter & cross-platform mobile development.</p>
              <p style={{ color: "#64748B", fontSize: "0.8rem", marginTop: "1rem" }}>© 2025 All rights reserved.</p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {[
                { name: "GitHub", handle: "@AAShayon", url: "https://github.com/AAShayon", color: "#E0E6ED" },
                { name: "LinkedIn", handle: "@aashayon", url: "https://www.linkedin.com/in/aashayon", color: "#0A66C2" },
                { name: "WhatsApp", handle: "+880 1580-873412", url: "https://wa.me/8801580873412", color: "#25D366" },
                { name: "Twitter / X", handle: "@Shayon01", url: "https://twitter.com/Shayon01", color: "#E0E6ED" },
                { name: "Facebook", handle: "@shayon", url: "https://facebook.com/shayon", color: "#1877F2" },
              ].map((social) => (
                <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none", padding: "0.5rem 0.8rem", borderRadius: "10px", transition: "background 0.2s", color: "#94A3B8" }} onMouseOver={(e) => e.currentTarget.style.background = "rgba(0,240,255,0.05)"} onMouseOut={(e) => e.currentTarget.style.background = "transparent"}>
                  <span style={{ width: "28px", height: "28px", flexShrink: 0 }}>
                    {social.name === "GitHub" && (
                      <svg viewBox="0 0 24 24" fill={social.color} style={{ width: "100%", height: "100%" }}>
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                      </svg>
                    )}
                    {social.name === "LinkedIn" && (
                      <svg viewBox="0 0 24 24" fill={social.color} style={{ width: "100%", height: "100%" }}>
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    )}
                    {social.name === "WhatsApp" && (
                      <svg viewBox="0 0 24 24" fill={social.color} style={{ width: "100%", height: "100%" }}>
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                    )}
                    {social.name === "Twitter / X" && (
                      <svg viewBox="0 0 24 24" fill={social.color} style={{ width: "100%", height: "100%" }}>
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                      </svg>
                    )}
                    {social.name === "Facebook" && (
                      <svg viewBox="0 0 24 24" fill={social.color} style={{ width: "100%", height: "100%" }}>
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                  </span>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.9rem", color: "#E0E6ED" }}>{social.name}</div>
                    <div style={{ fontSize: "0.75rem", color: "#64748B" }}>{social.handle}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
