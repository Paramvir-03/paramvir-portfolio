export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-slate-950">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-white mb-6">About</h2>
        <div className="prose prose-invert max-w-none">
          <p className="text-slate-400 leading-relaxed text-lg">
            I am a Bachelor of Computing Systems graduate based in Auckland with
            experience supporting enterprise IT environments. I have worked with
            Windows systems, Microsoft 365 services, device deployment processes,
            and remote troubleshooting tools in SLA-driven service desk environments.
          </p>
          <p className="text-slate-400 leading-relaxed text-lg mt-4">
            Alongside my IT support experience, I have built several software
            projects including a full-stack conference booking system, an autonomous
            vehicle telemetry project, a mobile quiz application, and a REST CRUD API
            application.
          </p>
        </div>
      </div>
    </section>
  );
}
