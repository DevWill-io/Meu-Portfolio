export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div>
            <span className="hero-tag">
              <span className="dot"></span> Disponível para projetos
            </span>

            <h1>
              Olá, eu sou <span className="gradient">Williams</span> 👋
            </h1>

            <p>
              Estudante do Ensino Médio Integrado ao Técnico em{' '}
              <strong>Informática para Internet</strong> pelo IFRN – Campus
              Caicó. Apaixonado por desenvolvimento web, sempre em busca de
              aprender e construir coisas novas com código.
            </p>

            <div className="hero-buttons">
              <a href="#projetos" className="btn btn-primary">
                Ver Projetos →
              </a>
              <a href="#contato" className="btn btn-secondary">
                Entrar em Contato
              </a>
            </div>
          </div>

          <div className="hero-avatar">
            <img src="/img/williams.jpeg" alt="Foto de Williams" />
          </div>
        </div>
      </div>
    </section>
  );
}