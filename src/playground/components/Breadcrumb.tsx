import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
  const location = useLocation();

  const segments = location.pathname
    .split('/')
    .filter(Boolean);

  return (
    <nav className="mb-6 flex items-center text-sm text-slate-500">
      <Link
        to="/"
        className="hover:text-slate-900"
      >
        Home
      </Link>

      {segments.map((segment, index) => {
        const path = '/' + segments.slice(0, index + 1).join('/');
        const isLast = index === segments.length - 1;

        const label = segment
          .split('-')
          .map(
            (word) =>
              word.charAt(0).toUpperCase() + word.slice(1)
          )
          .join(' ');

        return (
          <div
            key={path}
            className="flex items-center"
          >
            <span className="mx-2">/</span>

            {isLast ? (
              <span className="font-medium text-slate-500">
                {label}
              </span>
            ) : (
              <Link
                to={path}
                className="hover:text-slate-900"
              >
                {label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
}