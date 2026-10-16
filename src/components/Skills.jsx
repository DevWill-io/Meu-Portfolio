const skills = [
  { name: 'HTML', slug: 'html5', color: 'E34F26' },
  { name: 'CSS', slug: 'css', color: '1572B6' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: 'e8e8f0', invertOnLight: true },
  { name: 'Node.js', slug: 'nodedotjs', color: '5FA04E' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Git', slug: 'git', color: 'F05032' },
  { name: 'GitHub', slug: 'github', color: 'e8e8f0', invertOnLight: true },
  { name: 'Vercel', slug: 'vercel', color: 'e8e8f0', invertOnLight: true },
  { name: 'Vite', slug: 'vite', color: '646CFF' },
  { name: 'Python', slug: 'python', color: '3776AB' },
];

const softSkills = [
  'Proatividade',
  'Disciplina',
  'Organização',
  'Responsabilidade',
  'Comunicação',
  'Trabalho em equipe',
  'Curiosidade',
  'Autonomia',
  'Comprometimento',
  'Vontade de evoluir',
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">
            <span className="num">02 — HABILIDADES</span>
            Tecnologias & Skills
          </h2>
          <p className="section-subtitle">
            Ferramentas e linguagens que venho estudando e utilizando.
          </p>
        </div>

        <div className="skills-grid reveal">
          {skills.map((s) => (
            <div className="skill" key={s.name}>
              <div className="skill-icon-wrap">
                <img
                  src={`https://cdn.simpleicons.org/${s.slug}/${s.color}`}
                  alt={s.name}
                  loading="lazy"
                  className={s.invertOnLight ? 'invert-on-light' : ''}
                  onError={(e) => {
                    // Fallback: usa cor de destaque neutra se falhar
                    e.target.src = `https://cdn.simpleicons.org/${s.slug}/7c3aed`;
                  }}
                />
              </div>
              <div className="skill-name">{s.name}</div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="soft-title">Soft Skills</h3>
          <div className="soft-skills">
            {softSkills.map((s) => (
              <span className="soft-tag" key={s}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}