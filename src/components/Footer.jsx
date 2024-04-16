export default function Footer() {
  return (
    <footer>
      <small>{getCurrentYear()} Journey Pack</small>
      <small>React demo app</small>
    </footer>
  );
}

function getCurrentYear() {
  return new Date().getFullYear();
}
