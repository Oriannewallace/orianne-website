import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Creative CFO Data Infrastructure",
    description: "Supporting companies of all sizes with their data needs—building data models and infrastructure across industries from manufacturing to financial services.",
    tags: ["dbt", "BigQuery", "Python", "GCP"],
    status: "active",
    category: "DATA ENGINEERING",
    icon: "📊",
  },
  {
    id: 2,
    title: "Property Management Platform",
    description: "Full-stack property portfolio software for tracking rental income, expenses, yields, and tenant management across multiple properties in South Africa.",
    tags: ["React", "Python", "PostgreSQL", "API"],
    status: "building",
    category: "PROPTECH",
    icon: "🏠",
  },
  {
    id: 3,
    title: "F1 Data Insights",
    description: "Deep analysis of Formula 1 telemetry, race strategy, and performance metrics. Powering The Winning Formula newsletter with data-driven race breakdowns.",
    tags: ["FastF1", "Python", "Plotly", "Analysis"],
    status: "active",
    category: "SPORTS ANALYTICS",
    icon: "🏎️",
  },
  {
    id: 4,
    title: "RandTracker",
    description: "Inspired by n8n automations I built for Creative CFO. A simple receipt scanner for freelancers and individuals who need tax-ready expense tracking without full-blown accounting software.",
    tags: ["Flutter", "OCR", "Firebase", "n8n"],
    status: "building",
    category: "FINTECH",
    icon: "🧾",
  },
  {
    id: 5,
    title: "SkinGem",
    description: "A platform for unfiltered, unsponsored skincare reviews in South Africa. Connect with people who share your skin type and tone, and find the best prices across local retailers.",
    tags: ["Flutter", "Python", "NLP", "API"],
    status: "concept",
    category: "HEALTH & BEAUTY",
    icon: "✨",
  },
  {
    id: 6,
    title: "Luke",
    description: "A mental health support app built in memory of my brother Luke, who I lost to mental illness. Helping others access resources and support when they need it most.",
    tags: ["Flutter", "Firebase", "AI", "Wellbeing"],
    status: "concept",
    category: "MENTAL HEALTH",
    icon: "💜",
  },
];

const statusConfig = {
  active: { label: "LIVE", color: "bg-emerald-400", textColor: "text-emerald-400" },
  building: { label: "IN DEV", color: "bg-amber-400", textColor: "text-amber-400" },
  concept: { label: "CONCEPT", color: "bg-violet-400", textColor: "text-violet-400" },
};

export default function Home() {
  return (
    <div className="grain min-h-screen bg-[#050505] text-zinc-100 relative">
      {/* Grid texture overlay */}
      <div className="grid-texture" />

      <main className="relative z-10 mx-auto max-w-6xl px-6 py-16 md:py-24">

        {/* Hero Section */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* Main Hero Card */}
          <div className="md:col-span-2 card rounded-3xl p-10 relative overflow-hidden animate-fade-up">
            <div className="hero-gradient" />
            <div className="relative z-10">
              <p className="mono text-pink-400 text-sm mb-3 tracking-wide">Hello, I'm</p>
              <h1 className="text-6xl md:text-7xl font-semibold mb-2 tracking-tight">
                Orianne<span className="serif text-pink-400">.</span>
              </h1>
              <p className="text-xl text-zinc-400 mb-6 font-light">
                Data Engineer <span className="text-zinc-600">&</span> <span className="serif">Newsletter Creator</span>
              </p>
              <p className="text-zinc-500 max-w-lg leading-relaxed text-[15px]">
                British-born South African based in Cape Town. I turn data into stories
                about F1, property, skincare, and tech.
              </p>
              <div className="flex gap-3 mt-10">
                <a
                  href="https://github.com/Oriannewallace"
                  target="_blank"
                  className="btn-primary px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm transition-all mono"
                >
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/oriannewallace"
                  target="_blank"
                  className="btn-primary px-5 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-sm transition-all mono"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>

          {/* Profile Photo Card */}
          <div className="card rounded-3xl p-8 flex items-center justify-center relative overflow-hidden animate-fade-up delay-1">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 via-transparent to-violet-500/10" />
            <div className="profile-glow">
              <div className="w-44 h-44 rounded-full border-2 border-white/10 overflow-hidden relative z-10">
                <Image
                  src="/profile.png"
                  alt="Orianne"
                  width={176}
                  height={176}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About & Newsletters Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">

          {/* About Me Card */}
          <div className="card rounded-2xl p-6 animate-fade-up delay-2">
            <h2 className="text-sm font-medium mb-4 flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              About Me
            </h2>
            <p className="text-zinc-500 text-[14px] leading-relaxed">
              I work remotely as a data engineer, building pipelines and analysing data.
              Outside of work, I dig into F1 telemetry, track property markets, and test
              skincare products with the same analytical mindset.
            </p>
          </div>

          {/* The Winning Formula Newsletter */}
          <div className="card rounded-2xl p-6 relative overflow-hidden animate-fade-up delay-3 group">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="mono text-[10px] text-pink-400 tracking-widest mb-2">NEWSLETTER</p>
              <h2 className="text-lg font-medium mb-2">The Winning Formula</h2>
              <p className="text-zinc-500 text-sm flex-1">
                F1 data analysis, race breakdowns, and trends from the paddock.
              </p>
              <a
                href="https://the-winning-formula.beehiiv.com"
                target="_blank"
                className="btn-primary mt-5 px-5 py-2.5 bg-pink-500 hover:bg-pink-400 rounded-full text-sm font-medium text-center text-white"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Working Smarter Newsletter */}
          <div className="card rounded-2xl p-6 relative overflow-hidden animate-fade-up delay-4 group">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="relative z-10 flex flex-col h-full">
              <p className="mono text-[10px] text-blue-400 tracking-widest mb-2">NEWSLETTER</p>
              <h2 className="text-lg font-medium mb-2">Working Smarter</h2>
              <p className="text-zinc-500 text-sm flex-1">
                Working smarter, not harder—insights across tech, data, and assets.
              </p>
              <a
                href="#"
                target="_blank"
                className="btn-primary mt-5 px-5 py-2.5 bg-blue-500 hover:bg-blue-400 rounded-full text-sm font-medium text-center text-white"
              >
                Subscribe
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="mb-16 animate-fade-up delay-5">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-medium flex items-baseline gap-3">
              <span className="gradient-text">Projects</span>
              <span className="text-zinc-600 mono text-xs">/ what I'm building</span>
            </h2>
            <div className="flex gap-4 mono text-[11px]">
              <span className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-emerald-400" /> Live
              </span>
              <span className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-amber-400" /> Building
              </span>
              <span className="flex items-center gap-2 text-zinc-500">
                <span className="w-2 h-2 rounded-full bg-violet-400" /> Concept
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {projects.map((project, index) => {
              const status = statusConfig[project.status as keyof typeof statusConfig];
              return (
                <div
                  key={project.id}
                  className={`project-card card rounded-2xl p-6 animate-fade-up`}
                  style={{ animationDelay: `${0.5 + index * 0.1}s` }}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">{project.icon}</span>
                      <div>
                        <p className="mono text-[10px] text-zinc-600 tracking-widest">{project.category}</p>
                        <h3 className="font-medium text-[15px] leading-tight mt-1">{project.title}</h3>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/30 border border-white/5">
                      <span className={`w-1.5 h-1.5 rounded-full ${status.color} status-pulse`} />
                      <span className={`mono text-[10px] ${status.textColor}`}>{status.label}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-zinc-500 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="tag px-2.5 py-1 text-zinc-500 mono text-[10px] rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <div className="section-divider my-12" />

        {/* Tech Stack */}
        <section className="card rounded-2xl p-8 mb-6 animate-fade-up delay-7">
          <h2 className="text-sm font-medium mb-6 flex items-center gap-2 text-zinc-300">
            <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
            Tech Stack
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { category: "Languages", items: ["Python", "SQL", "JavaScript"] },
              { category: "Frameworks", items: ["React", "Flutter"] },
              { category: "Cloud", items: ["GCP", "Azure"] },
              { category: "Data", items: ["dbt", "Power BI", "BigQuery"] },
              { category: "Tools", items: ["Claude Code", "Git", "n8n"] },
            ].map((group) => (
              <div key={group.category}>
                <h3 className="mono text-[10px] text-zinc-600 mb-3 tracking-widest">
                  {group.category.toUpperCase()}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="tag px-3 py-1.5 text-zinc-400 text-xs rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience & Education Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

          {/* Experience */}
          <div className="md:col-span-2 card rounded-2xl p-8 animate-fade-up delay-8">
            <h2 className="text-sm font-medium mb-6 flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              Experience
            </h2>
            <div className="space-y-3">
              {[
                { role: "Data Engineer", company: "Creative CFO", period: "2025 – Present", highlight: true },
                { role: "Senior Analyst", company: "Circana", period: "2023 – 2025", highlight: false },
                { role: "UK Chapter", company: "England", period: "2022 – 2023", highlight: false },
                { role: "Operations Manager", company: "Zaina Wealth", period: "2021 – 2022", highlight: false },
              ].map((job, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-4 rounded-xl transition-all ${
                    job.highlight
                      ? "bg-pink-500/5 border border-pink-500/10"
                      : "bg-white/[0.02] hover:bg-white/[0.04]"
                  }`}
                >
                  <div>
                    <p className="font-medium text-sm text-zinc-200">{job.role}</p>
                    <p className="text-zinc-600 text-xs mt-0.5">{job.company}</p>
                  </div>
                  <span className="mono text-zinc-600 text-[11px]">{job.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="card rounded-2xl p-8 animate-fade-up delay-8">
            <h2 className="text-sm font-medium mb-6 flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              Education
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-white/[0.02] rounded-xl">
                <p className="font-medium text-sm text-zinc-200">BCom Honours</p>
                <p className="text-zinc-600 text-xs mt-0.5">UCT • 2020</p>
                <p className="text-zinc-700 text-xs mt-2">Financial Analysis</p>
              </div>
              <div className="p-4 bg-white/[0.02] rounded-xl">
                <p className="font-medium text-sm text-zinc-200">BCom</p>
                <p className="text-zinc-600 text-xs mt-0.5">UCT • 2017–2019</p>
                <p className="text-zinc-700 text-xs mt-2">Economics & Statistics</p>
              </div>
            </div>
          </div>
        </section>

        {/* What I Write About & Connect Row */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {/* What I Write About */}
          <div className="md:col-span-2 card rounded-2xl p-8">
            <h2 className="text-sm font-medium mb-6 flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              What I Write About
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { icon: "🏎️", label: "F1 & Data", desc: "Race analysis, telemetry" },
                { icon: "🏠", label: "Property", desc: "SA market, yields" },
                { icon: "✨", label: "Skincare", desc: "Ingredients, data" },
                { icon: "💻", label: "Tech", desc: "Tools, automation" },
              ].map((interest) => (
                <div key={interest.label} className="p-5 bg-white/[0.02] hover:bg-white/[0.04] rounded-xl text-center transition-all group">
                  <span className="text-3xl mb-3 block group-hover:scale-110 transition-transform">{interest.icon}</span>
                  <p className="font-medium text-sm text-zinc-300">{interest.label}</p>
                  <p className="text-zinc-600 text-xs mt-1">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div className="card rounded-2xl p-8">
            <h2 className="text-sm font-medium mb-6 flex items-center gap-2 text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-pink-400" />
              Connect
            </h2>
            <div className="space-y-2">
              <a href="mailto:hello@orianne.dev" className="flex items-center gap-4 p-3 rounded-xl text-zinc-400 hover:text-pink-400 hover:bg-white/[0.02] transition-all group">
                <span className="w-10 h-10 bg-white/[0.03] group-hover:bg-pink-500/10 rounded-full flex items-center justify-center transition-colors">✉️</span>
                <span className="text-sm">Email</span>
              </a>
              <a href="https://github.com/Oriannewallace" target="_blank" className="flex items-center gap-4 p-3 rounded-xl text-zinc-400 hover:text-pink-400 hover:bg-white/[0.02] transition-all group">
                <span className="w-10 h-10 bg-white/[0.03] group-hover:bg-pink-500/10 rounded-full flex items-center justify-center transition-colors">💻</span>
                <span className="text-sm">GitHub</span>
              </a>
              <a href="https://linkedin.com/in/oriannewallace" target="_blank" className="flex items-center gap-4 p-3 rounded-xl text-zinc-400 hover:text-pink-400 hover:bg-white/[0.02] transition-all group">
                <span className="w-10 h-10 bg-white/[0.03] group-hover:bg-pink-500/10 rounded-full flex items-center justify-center transition-colors">💼</span>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-20 pt-8 border-t border-white/5 text-center">
          <p className="text-zinc-700 text-sm mono">
            Built with Next.js • Cape Town, South Africa
          </p>
        </footer>

      </main>
    </div>
  );
}
