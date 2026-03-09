const skillCategories = [
  {
    title: "Operating Systems",
    items: ["Windows 10", "Windows 11", "Basic macOS"],
    icon: "💻",
  },
  {
    title: "Microsoft 365",
    items: ["User provisioning", "Mailbox configuration", "MFA setup", "License management"],
    icon: "☁️",
  },
  {
    title: "Device Deployment",
    items: ["SCCM imaging", "OS deployment", "BIOS configuration", "Device staging"],
    icon: "📦",
  },
  {
    title: "Networking",
    items: ["VPN troubleshooting", "DHCP", "DNS", "TCP/IP issues", "Basic firewall diagnostics"],
    icon: "🌐",
  },
  {
    title: "Remote Support Tools",
    items: ["LogMeIn", "AnyDesk", "Remote Desktop"],
    icon: "🖥️",
  },
  {
    title: "Ticketing Systems",
    items: ["ServiceNow", "Jira Service Management", "ManageEngine"],
    icon: "🎫",
  },
  {
    title: "Cloud",
    items: ["AWS EC2", "AWS IAM", "Basic PowerShell scripting"],
    icon: "⚡",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors duration-300"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{category.icon}</span>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li key={item} className="text-slate-400 text-sm flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
