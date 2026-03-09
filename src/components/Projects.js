const projects = [
  {
    title: "Autonomous Agricultural Vehicle",
    description:
      "Developed a telemetry and monitoring system for an autonomous land rover as part of a capstone industry project. The system integrated GPS positioning, sensor data collection, and cloud-based monitoring.",
    tech: ["Python", "AWS", "IoT systems", "Telemetry dashboards"],
  },
  {
    title: "Conference Room Booking System",
    description:
      "Built a full-stack room reservation system allowing users to view available rooms, book time slots, and manage reservations with authentication.",
    tech: ["Django", "React", "REST API", "SQLite"],
  },
  {
    title: "Mobile Quiz Application",
    description:
      "Developed an Android mobile application that allows users to take quizzes, track scores, and store results in a backend database.",
    tech: ["Java", "Android Studio", "Firebase"],
  },
  {
    title: "CRUD API Application",
    description:
      "Created a RESTful API application implementing Create, Read, Update, and Delete operations for managing application data.",
    tech: ["Node.js", "Express", "REST API", "JSON"],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-12 text-center">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800/50 border border-slate-700 rounded-xl p-6 hover:border-emerald-500/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-xl font-semibold text-white mb-3">{project.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 text-xs font-medium bg-emerald-500/20 text-emerald-400 rounded-full border border-emerald-500/30"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
