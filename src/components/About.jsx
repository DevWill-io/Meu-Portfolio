export default function About() {
  return (
    <section id="sobre">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">
            <span className="num">01 — SOBRE</span>
            Quem sou eu
          </h2>
          <p className="section-subtitle">
            Um pouco da minha trajetória e do que me motiva.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-text reveal">
            <p>
              Sou estudante do <strong>IFRN – Campus Caicó</strong>, no 1º ano
              do curso Técnico Integrado em{' '}
              <strong>Informática para Internet</strong>, com 7 meses de aula.
              Desde o início, venho buscando ir além da grade curricular,
              estudando programação por conta própria.
            </p>
            <p>
              Já concluí cursos com o professor{' '}
              <strong>Gustavo Guanabara (Curso em Vídeo)</strong> e outras
              plataformas, e hoje tenho experiência prática com tecnologias
              modernas do ecossistema <strong>JavaScript/TypeScript</strong> e{' '}
              <strong>Python</strong>.
            </p>
            <p>
              Sou uma pessoa proativa, disciplinada, curiosa e organizada.
              Gosto de trabalhar em equipe e estou sempre em busca de novos
              desafios que me façam evoluir como desenvolvedor.
            </p>
          </div>

          <div className="about-stats reveal">
            <div className="stat-card">
              <div className="stat-num">13+</div>
              <div className="stat-label">Tecnologias estudadas</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">7</div>
              <div className="stat-label">Meses de curso técnico</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">2</div>
              <div className="stat-label">Projetos publicados</div>
            </div>
            <div className="stat-card">
              <div className="stat-num">100%</div>
              <div className="stat-label">Comprometimento</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}