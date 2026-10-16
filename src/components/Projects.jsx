import React, { lazy } from 'react';
import { Github, ExternalLink } from './icons';

const projects = [
  {
    icon: '🎓',
    title: 'Site Turma 2V',
    desc: 'Site oficial da turma de Informática para Internet com login via SUAP. Inclui calculadora de notas, boletins, horários das aulas e um mascote em formato de mini jogo com skins, XP, níveis e conquistas.',
    tags: ['HTML', 'CSS', 'JavaScript', 'API SUAP', 'Google Calendar'],
    link: 'https://github.com/Infoweb2026-2V/SITE-2V',
    image: '/img/projeto-2v.png',
  },
  {
    icon: '⚔️',
    title: 'Pedraverde — RPG',
    desc: 'RPG de texto medieval jogável no navegador com interface estilo terminal retrô. Explore 9 regiões, +35 locais, encontre/compra 167 itens e derrote diversos inimigos — incluindo 12 bosses épicos.',
    tags: ['React', 'Vite', 'Firebase', 'PWA', 'Web Audio API', 'Vercel'],
    link: 'https://github.com/DevWill-io/pedraverde',
    image: '/img/projeto-pedraverde.png',
  },
];

export default function Projects() {
  return (
    <section id="projetos">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">
            <span className="num">03 — PROJETOS</span>
            Coisas que já construí
          </h2>
          <p className="section-subtitle">
            Alguns dos projetos que desenvolvi durante meus estudos.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card reveal" key={p.title}>
              <div className="project-thumb">
                <span className="project-thumb-emoji">{p.icon}</span>
                {p.image && (
                  <img
                    src={p.image}
                    alt={`Print do projeto ${p.title}`}
                    className="project-thumb-img"
                    loading="lazy"
                    onError={(e) => e.target.remove()}
                  />
                )}
              </div>
              <div className="project-body">
                <h3 className="project-title">{p.title}</h3>
                <p className="project-desc">{p.desc}</p>

                <div className="project-tags">
                  {p.tags.map((t) => (
                    <span className="project-tag" key={t}>
                      {t}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a href={p.link} target="_blank" rel="noreferrer">
                    <Github /> Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}