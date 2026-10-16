const nowItems = [
  {
    icon: '📚',
    label: 'Estudando agora',
    value: 'Next.js + TypeScript avançado',
  },
  {
    icon: '🛠️',
    label: 'Construindo',
    value: 'Novos recursos no Pedraverde RPG',
  },
  {
    icon: '🎯',
    label: 'Meta para 2026',
    value: 'Primeira vaga de estágio em dev',
  },
  {
    icon: '✨',
    label: 'Explorando',
    value: 'PWA, Web Audio API e Firebase',
  },
];

export default function Now() {
  return (
    <section id="agora">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">
            <span className="num">02 — AGORA</span>
            Em que estou focado
          </h2>
          <p className="section-subtitle">
            O que estou estudando, construindo e perseguindo neste momento.
          </p>
        </div>

        <div className="now-grid">
          {nowItems.map((item) => (
            <div className="now-card reveal" key={item.label}>
              <div className="now-icon">{item.icon}</div>
              <div className="now-label">{item.label}</div>
              <div className="now-value">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}