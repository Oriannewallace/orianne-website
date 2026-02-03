import Image from "next/image";

const projects = [
  {
    id: 1,
    title: "Creative CFO Data Infrastructure",
    description: "Supporting companies of all sizes with their data needs—building data models and infrastructure across industries from manufacturing to financial services.",
    tags: ["dbt", "BigQuery", "Python", "GCP"],
    status: "active",
    category: "DATA ENGINEERING",
    accent: "from-emerald-500/20 to-teal-500/20",
    borderAccent: "border-emerald-500/30",
    icon: "📊",
  },
  {
    id: 2,
    title: "Property Management Platform",
    description: "Full-stack property portfolio software for tracking rental income, expenses, yields, and tenant management across multiple properties in South Africa.",
    tags: ["React", "Python", "PostgreSQL", "API"],
    status: "building",
    category: "PROPTECH",
    accent: "from-blue-500/20 to-indigo-500/20",
    borderAccent: "border-blue-500/30",
    icon: "🏠",
  },
  {
    id: 3,
    title: "F1 Data Insights",
    description: "Deep analysis of Formula 1 telemetry, race strategy, and performance metrics. Powering The Winning Formula newsletter with data-driven race breakdowns.",
    tags: ["FastF1", "Python", "Plotly", "Analysis"],
    status: "active",
    category: "SPORTS ANALYTICS",
    accent: "from-red-500/20 to-orange-500/20",
    borderAccent: "border-red-500/30",
    icon: "🏎️",
  },
  {
    id: 4,
    title: "RandTracker",
    description: "Inspired by n8n automations I built for Creative CFO. A simple receipt scanner for freelancers and individuals who need tax-ready expense tracking without full-blown accounting software.",
    tags: ["Flutter", "OCR", "Firebase", "n8n"],
    status: "building",
    category: "FINTECH",
    accent: "from-amber-500/20 to-yellow-500/20",
    borderAccent: "border-amber-500/30",
    icon: "🧾",
  },
  {
    id: 5,
    title: "SkinGem",
    description: "A platform for unfiltered, unsponsored skincare reviews in South Africa. Connect with people who share your skin type and tone, and find the best prices across local retailers.",
    tags: ["Flutter", "Python", "NLP", "API"],
    status: "concept",
    category: "HEALTH & BEAUTY",
    accent: "from-pink-500/20 to-rose-500/20",
    borderAccent: "border-pink-500/30",
    icon: "✨",
  },
  {
    id: 6,
    title: "Luke",
    description: "A mental health support app built in memory of my brother Luke, who I lost to mental illness. Helping others access resources and support when they need it most.",
    tags: ["Flutter", "Firebase", "AI", "Wellbeing"],
    status: "concept",
    category: "MENTAL HEALTH",
    accent: "from-violet-500/20 to-purple-500/20",
    borderAccent: "border-violet-500/30",
    icon: "💜",
  },
];

const statusConfig = {
  active: { label: "LIVE", color: "bg-emerald-500", textColor: "text-emerald-400" },
  building: { label: "IN DEV", color: "bg-amber-500", textColor: "text-amber-400" },
  concept: { label: "CONCEPT", color: "bg-purple-500", textColor: "text-purple-400" },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-12">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Hero Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <p className="text-pink-500 font-mono text-sm mb-2 tracking-wider">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4 tracking-tight">Orianne</h1>
            <p className="text-xl text-zinc-400 mb-6 font-medium">
              Data Engineer & Newsletter Creator
            </p>
            <p className="text-zinc-500 max-w-lg leading-relaxed">
              British-born South African based in Cape Town. I turn data into stories
              about F1, property, skincare, and tech.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Oriannewallace"
                target="_blank"
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-all hover:scale-105 font-mono"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/oriannewallace"
                target="_blank"
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-all hover:scale-105 font-mono"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Photo Card */}
          <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-3xl p-6 border border-zinc-800 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(236,72,153,0.1),transparent_70%)]" />
            <div className="w-48 h-48 rounded-full border-4 border-pink-500/30 overflow-hidden relative z-10 shadow-2xl shadow-pink-500/20">
              <Image
                src="/profile.png"
                alt="Orianne"
                width={192}
                height={192}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* About Me Card */}
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <span className="text-pink-500">◆</span> About Me
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed">
              I work remotely as a data engineer, building pipelines and analysing data.
              Outside of work, I dig into F1 telemetry, track property markets, and test
              skincare products with the same analytical mindset.
            </p>
          </div>

          {/* Newsletter Cards */}
          <div className="bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-3xl p-6 border border-pink-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent opacity-50" />
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <p className="text-[10px] font-mono text-pink-400 tracking-widest mb-1">NEWSLETTER</p>
                <h2 className="text-lg font-semibold mb-2">The Winning Formula</h2>
                <p className="text-zinc-400 text-sm">
                  F1 data analysis, race breakdowns, and trends from the paddock.
                </p>
              </div>
              <a
                href="https://the-winning-formula.beehiiv.com"
                target="_blank"
                className="mt-4 px-5 py-2.5 bg-pink-600 hover:bg-pink-500 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-pink-500/25 text-center"
              >
                Subscribe
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600/10 to-cyan-600/10 rounded-3xl p-6 border border-blue-500/20 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />
            <div className="flex flex-col h-full">
              <div className="flex-1">
                <p className="text-[10px] font-mono text-blue-400 tracking-widest mb-1">NEWSLETTER</p>
                <h2 className="text-lg font-semibold mb-2">Working Smarter</h2>
                <p className="text-zinc-400 text-sm">
                  Working smarter, not harder—insights across tech, data, and assets.
                </p>
              </div>
              <a
                href="#"
                target="_blank"
                className="mt-4 px-5 py-2.5 bg-blue-600 hover:bg-blue-500 rounded-full text-sm font-medium transition-all hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 text-center"
              >
                Subscribe
              </a>
            </div>
          </div>

          {/* Projects Section - Full width */}
          <div className="md:col-span-3 mt-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-3">
                <span className="gradient-text">Projects</span>
                <span className="text-zinc-600 font-mono text-sm font-normal">/ what I'm building</span>
              </h2>
              <div className="flex gap-2 text-xs font-mono">
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" /> Live
                </span>
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-amber-500" /> Building
                </span>
                <span className="flex items-center gap-1.5 text-zinc-500">
                  <span className="w-2 h-2 rounded-full bg-purple-500" /> Concept
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map((project) => {
                const status = statusConfig[project.status as keyof typeof statusConfig];
                return (
                  <div
                    key={project.id}
                    className={`project-card bg-gradient-to-br ${project.accent} rounded-2xl p-5 border ${project.borderAccent} backdrop-blur-sm`}
                  >
                    <div>
                      {/* Header */}
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{project.icon}</span>
                          <div>
                            <p className="text-[10px] font-mono text-zinc-500 tracking-widest">{project.category}</p>
                            <h3 className="font-semibold text-base leading-tight mt-0.5">{project.title}</h3>
                          </div>
                        </div>
                        <div className={`flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-900/80 border border-zinc-800`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${status.color} status-pulse`} />
                          <span className={`text-[10px] font-mono ${status.textColor}`}>{status.label}</span>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-zinc-400 text-sm leading-relaxed mb-4">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="tag-chip px-2 py-0.5 bg-zinc-900/60 text-zinc-400 text-[10px] font-mono rounded border border-zinc-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="md:col-span-3 section-divider my-8" />

          {/* Tech Stack Card - Full width */}
          <div className="md:col-span-3 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-pink-500">◆</span> Tech Stack
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {[
                { category: "Languages", items: ["Python", "SQL", "JavaScript"] },
                { category: "Frameworks", items: ["React", "Flutter"] },
                { category: "Cloud", items: ["GCP", "Azure"] },
                { category: "Data", items: ["dbt", "Power BI", "BigQuery"] },
                { category: "Tools", items: ["Claude Code", "Git", "n8n"] },
              ].map((group) => (
                <div key={group.category}>
                  <h3 className="text-xs font-medium text-zinc-500 mb-2 uppercase tracking-wider">
                    {group.category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 bg-zinc-800 text-zinc-300 text-xs rounded-full border border-zinc-700"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Card */}
          <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-pink-500">◆</span> Experience
            </h2>
            <div className="space-y-4">
              {[
                { role: "Data Engineer", company: "Creative CFO", period: "2025 – Present", highlight: true },
                { role: "Senior Analyst", company: "Circana", period: "2023 – 2025", highlight: false },
                { role: "UK Chapter", company: "England", period: "2022 – 2023", highlight: false },
                { role: "Operations Manager", company: "Zaina Wealth", period: "2021 – 2022", highlight: false },
              ].map((job, i) => (
                <div
                  key={i}
                  className={`flex items-center justify-between p-3 rounded-xl ${
                    job.highlight ? "bg-pink-600/10 border border-pink-500/20" : "bg-zinc-800/50"
                  }`}
                >
                  <div>
                    <p className="font-medium text-sm">{job.role}</p>
                    <p className="text-zinc-500 text-xs">{job.company}</p>
                  </div>
                  <span className="text-zinc-500 text-xs">{job.period}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Education Card */}
          <div className="bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-pink-500">◆</span> Education
            </h2>
            <div className="space-y-4">
              <div className="p-3 bg-zinc-800/50 rounded-xl">
                <p className="font-medium text-sm">BCom Honours</p>
                <p className="text-zinc-500 text-xs">UCT • 2020</p>
                <p className="text-zinc-600 text-xs mt-1">Financial Analysis</p>
              </div>
              <div className="p-3 bg-zinc-800/50 rounded-xl">
                <p className="font-medium text-sm">BCom</p>
                <p className="text-zinc-500 text-xs">UCT • 2017–2019</p>
                <p className="text-zinc-600 text-xs mt-1">Economics & Statistics</p>
              </div>
            </div>
          </div>

          {/* Interests Card */}
          <div className="md:col-span-2 bg-zinc-900 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-pink-500">◆</span> What I Write About
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {[
                { icon: "🏎️", label: "F1 & Data", desc: "Race analysis, telemetry" },
                { icon: "🏠", label: "Property", desc: "SA market, yields" },
                { icon: "✨", label: "Skincare", desc: "Ingredients, data" },
                { icon: "💻", label: "Tech", desc: "Tools, automation" },
              ].map((interest) => (
                <div key={interest.label} className="p-4 bg-zinc-800/50 rounded-xl text-center">
                  <span className="text-2xl mb-2 block">{interest.icon}</span>
                  <p className="font-medium text-sm">{interest.label}</p>
                  <p className="text-zinc-500 text-xs">{interest.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-6 border border-zinc-800">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <span className="text-pink-500">◆</span> Connect
            </h2>
            <div className="space-y-3">
              <a href="mailto:hello@orianne.dev" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-pink-500 transition-colors">
                <span className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">✉️</span>
                Email
              </a>
              <a href="https://github.com/Oriannewallace" target="_blank" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-pink-500 transition-colors">
                <span className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">💻</span>
                GitHub
              </a>
              <a href="https://linkedin.com/in/oriannewallace" target="_blank" className="flex items-center gap-3 text-sm text-zinc-400 hover:text-pink-500 transition-colors">
                <span className="w-8 h-8 bg-zinc-800 rounded-full flex items-center justify-center">💼</span>
                LinkedIn
              </a>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-600 text-sm">
          <p>Built with Next.js • Cape Town, South Africa</p>
        </footer>

      </main>
    </div>
  );
}
