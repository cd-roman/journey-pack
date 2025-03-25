import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404</h1>
      <main className="not-found">
        <div className="empty-state">
          <h3>Page Not Found</h3>
          <p>Sorry, the page you are looking for doesn&apos;t exist.</p>
          <Link to="/" className="btn">
            Go back to home
          </Link>
        </div>
      </main>
    </>
  );
}
