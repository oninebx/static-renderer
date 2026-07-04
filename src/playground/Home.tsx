import { Link } from "react-router-dom";

const pages = [
  {
    path: '/article',
    title: 'Article Page',
    description: 'Article layout demo',
  },
  {
    path: '/landing',
    title: 'Landing Page',
    description: 'Marketing landing page',
  }
];


const DemoHome = () => (
  <div className="min-h-screen bg-slate-50 p-8">
    <div className="mx-auto max-w-7xl">
      <h1 className="mb-2 text-4xl font-bold">
        Static Renderer Demo
      </h1>

      <p className="mb-8 text-slate-600">
        Select a page to preview
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="
              rounded-xl
              border
              border-slate-200
              bg-white
              p-6
              shadow-sm
              transition-all
              hover:-translate-y-1
              hover:border-blue-400
              hover:shadow-lg
            "
          >
            <h2 className="mb-2 text-lg font-semibold">
              {page.title}
            </h2>

            <p className="text-sm text-slate-500">
              {page.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default DemoHome;