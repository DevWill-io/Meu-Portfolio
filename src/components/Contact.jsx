import { Mail, Github, Instagram } from './icons';

export default function Contact() {
  return (
    <section id="contato" className="contact">
      <div className="container">
        <div className="reveal">
          <h2 className="section-title">
            <span className="num">04 — CONTATO</span>
            Vamos conversar?
          </h2>
          <p className="section-subtitle">
            Estou aberto a oportunidades, colaborações e trocas de conhecimento.
            É só me chamar!
          </p>
        </div>

        <div className="contact-links reveal">
          <a href="mailto:contato.devwilliams@gmail.com" className="contact-link">
            <Mail /> E-mail
          </a>
          <a
            href="https://github.com/DevWill-io"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Github /> GitHub
          </a>
          <a
            href="https://instagram.com/wil_lians0"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            <Instagram /> Instagram
          </a>
        </div>
      </div>
    </section>
  );
}