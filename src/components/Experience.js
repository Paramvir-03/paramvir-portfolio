const experiences = [
  {
    role: "Desktop Site Engineer",
    company: "Axiom Technologies",
    location: "Auckland, NZ",
    period: "Aug 2024 – Present",
    responsibilities: [
      "Prepared and deployed laptops and tablets for engineers across NZ",
      "Managed Active Directory user administration",
      "Logged and tracked incidents in ServiceNow",
      "Troubleshot Windows OS, VPN, MFA, and Wi-Fi issues",
      "Configured Microsoft 365 accounts and applications",
      "Provided remote support using LogMeIn and AnyDesk",
      "Managed device lifecycle and asset tracking",
      "Escalated complex issues to Level 2/3 teams",
    ],
  },
  {
    role: "Desktop Support Engineer",
    company: "Ingram Micro",
    location: "Auckland, NZ",
    period: "Apr 2024 – Jun 2024",
    responsibilities: [
      "Imaged enterprise laptops using SCCM",
      "Resolved hardware and software tickets within SLA",
      "Supported onboarding and offboarding processes",
      "Troubleshot Windows 10/11 environments",
      "Diagnosed VPN, MFA, Wi-Fi, and Microsoft 365 issues",
      "Assisted with asset inventory and system audits",
    ],
  },
];

const additionalExperience = [
  {
    role: "Sales Assistant",
    company: "Mountain Warehouse",
    location: "Manukau, Auckland",
    period: "Feb 2024 – Sept 2024",
    responsibilities: [
      "Delivered high-quality customer service in a fast-paced retail environment",
      "Assisted customers with product selection and resolved product-related queries",
      "Handled transactions, stock management, and inventory control",
      "Maintained accuracy in point-of-sale operations and stock handling",
      "Demonstrated strong communication skills interacting with diverse customers",
      "Worked collaboratively with team members to maintain store performance",
    ],
  },
];

function ExperienceCard({ exp }) {
  return (
    <div className="relative pl-8 border-l-2 border-slate-700 border-emerald-500/30 hover:border-emerald-500/60 transition-colors">
      <div className="absolute -left-2 top-0 w-3 h-3 rounded-full bg-emerald-500" />
      <div className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-colors ml-4">
        <div className="flex flex-wrap items-baseline justify-between gap-2 mb-2">
          <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
          <p className="text-emerald-400 font-mono text-sm">{exp.period}</p>
        </div>
        <p className="text-emerald-400 font-medium">{exp.company}</p>
        <p className="text-slate-500 text-sm">{exp.location}</p>
        <ul className="mt-4 space-y-2">
          {exp.responsibilities.map((item) => (
            <li key={item} className="text-slate-400 text-sm flex gap-2">
              <span className="text-emerald-500 shrink-0">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Experience</h2>

        <div className="space-y-8">
          {experiences.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} />
          ))}
        </div>

        <h3 className="text-xl font-semibold text-white mt-16 mb-6 text-center">
          Additional Experience
        </h3>
        <div className="space-y-8">
          {additionalExperience.map((exp) => (
            <ExperienceCard key={`${exp.company}-${exp.period}`} exp={exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
