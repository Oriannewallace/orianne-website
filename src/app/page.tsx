import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-zinc-100">
      <main className="mx-auto max-w-6xl px-6 py-12">

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

          {/* Hero Card - Spans 2 columns */}
          <div className="md:col-span-2 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-3xl p-8 border border-zinc-800">
            <p className="text-pink-500 font-mono text-sm mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Orianne</h1>
            <p className="text-xl text-zinc-400 mb-6">
              Data Engineer & Newsletter Creator
            </p>
            <p className="text-zinc-500 max-w-lg">
              British-born South African based in Cape Town. I turn data into stories
              about F1, property, skincare, and tech.
            </p>
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/Oriannewallace"
                target="_blank"
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-colors"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com/in/oriannewallace"
                target="_blank"
                className="px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-full text-sm transition-colors"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Profile Photo Card */}
          <div className="bg-gradient-to-br from-pink-600/20 to-purple-600/20 rounded-3xl p-6 border border-zinc-800 flex items-center justify-center">
            <div className="w-48 h-48 rounded-full border-4 border-pink-500/30 overflow-hidden">
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

          {/* Newsletter Card */}
          <div className="md:col-span-2 bg-gradient-to-r from-pink-600/10 to-purple-600/10 rounded-3xl p-6 border border-pink-500/20">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">The Winning Formula</h2>
                <p className="text-zinc-400 text-sm">
                  My newsletter where I analyse F1 data, explore trends, and share what I'm learning.
                </p>
              </div>
              <a
                href="https://the-winning-formula.beehiiv.com"
                target="_blank"
                className="px-6 py-3 bg-pink-600 hover:bg-pink-500 rounded-full text-sm font-medium transition-colors whitespace-nowrap"
              >
                Subscribe
              </a>
            </div>
          </div>

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
