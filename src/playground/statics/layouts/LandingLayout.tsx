import React from "react";

type LandingLayoutProps = {
  heroTitle: string;
  heroSubtitle?: string;
  sideContent: React.ReactNode;
  children: React.ReactNode;
};

export const LandingLayout: React.FC<LandingLayoutProps> = ({
  heroTitle,
  heroSubtitle,
  sideContent,
  children,
}) => {
  return (
    // 差异 1: 变成暗黑背景 (bg-slate-900)
    <div className="min-h-screen bg-slate-900 text-slate-100 antialiased">
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* 差异 2: 头部带有渐变色文字 */}
        <header className="mb-16 text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
            {heroTitle}
          </h1>
          {heroSubtitle && (
            <p className="text-slate-400 mt-4 text-lg">
              {heroSubtitle}
            </p>
          )}
        </header>

        {/* 差异 3: 从“单栏居中”变成“左右双栏网格 (Grid)” */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          
          {/* 左侧：专门放图片、卡片或静态引擎生成的特定节点 */}
          <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700/50 shadow-xl">
            {sideContent}
          </div>

          {/* 右侧：放常规 children 内容 */}
          <div className="space-y-6 text-slate-300">
            {children}
          </div>

        </div>

        {/* Footer */}
        <footer className="mt-20 pt-6 border-t border-slate-800 text-xs text-slate-500">
          Engine Mode: Feature-Landing Template
        </footer>

      </div>
    </div>
  );
};