export default function Footer() {
  return (
    <footer className="footer">
      Feito com <span className="heart">♥</span> por Williams · ©{' '}
      {new Date().getFullYear()}
    </footer>
  );
}