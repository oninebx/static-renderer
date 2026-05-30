import { type PropsWithChildren } from "react";

type ArticleLayoutProps = {
  title: string;
  description?: string;
};

export const ArticleLayout = ({
  title,
  description,
  children,
}: PropsWithChildren<ArticleLayoutProps>) => {
  return (
    <div className="min-h-screen bg-white flex justify-center">
      <div className="w-full max-w-3xl px-6 py-10">

        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">
            {title}
          </h1>

          {description && (
            <p className="text-sm text-gray-500 mt-2">
              {description}
            </p>
          )}
        </header>

        {/* Content */}
        <article className="prose prose-gray max-w-none">
          {children}
        </article>

        {/* Footer */}
        <footer className="mt-16 pt-6 border-t text-xs text-gray-400">
          Powered by static-render engine
        </footer>

      </div>
    </div>
  );
};