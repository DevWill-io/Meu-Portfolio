const events = [
  {
    date: '2025 · dez',
    title: 'Aprovado no IFRN - caicó',
    desc: 'Recebi o resultado que passei no IFRN - caicó.',
  },
  {
    date: '2026 · jan',
    title: 'Primeiros passos em programação',
    desc: 'Iniciei os cursos do professor Gustavo Guanabara (Curso em Vídeo): HTML, CSS e JavaScript.',
  },
  {
    date: '2026 · fev',
    title: 'Git, GitHub e Python',
    desc: 'Aprofundei versionamento de código e lógica com Python. continuei estudando mais e mais.',
  },
  {
    date: '2026 · mar',
    title: 'React e outras tecnologias',
    desc: 'Inicio do aprendizado de react, node.js, vercel, vite, firebase entre outras.',
  },
  {
    date: '2026 · jun',
    title: 'Site Turma 2V',
    desc: 'Início do desenvolvimento do site da turma com login via SUAP, calculadora de notas, boletins e um mascote em forma de mini jogo.',
  },
  {
    date: '2026 · out',
    title: 'Pedraverde RPG',
    desc: 'Desenvolvimento de um RPG de texto medieval completo, com Firebase, PWA e mais de 35 locais exploráveis.',
  },
  {
    date: '2027',
    title: 'Próximo passo: primeiro estágio',
    desc: 'Busca pela primeira oportunidade profissional em desenvolvimento web.',
    highlight: true,
  },
];

export default function Timeline() {
  return (
    <section id="trajetoria">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">
            <span className="num">03 — TRAJETÓRIA</span>
            Minha evolução
          </h2>
          <p className="section-subtitle">
            Marcos importantes desde o início da minha jornada na programação.
          </p>
        </div>

        <div className="timeline">
          {events.map((e, i) => (
            <div
              className={`timeline-item reveal ${e.highlight ? 'highlight' : ''}`}
              key={i}
            >
              <div className="timeline-card">
                <div className="timeline-date">{e.date}</div>
                <h3 className="timeline-title">{e.title}</h3>
                <p className="timeline-desc">{e.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}