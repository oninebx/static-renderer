import React from 'react';

interface TypographyProps {
  // 使用 ElementType 允许传入任意 HTML 标签或自定义组件
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
}

export default ({
  as: Component = 'p', // 默认渲染为段落 p 标签
  className = '',
  children,
}: TypographyProps) => {
  // 根据不同的标签，赋予默认的通用的样式（这里以 Tailwind 为例）
  const getBaseStyle = () => {
    switch (Component) {
      case 'h1': return 'text-4xl font-bold text-gray-900 my-4';
      case 'h2': return 'text-2xl font-semibold text-gray-800 my-3';
      case 'h3': return 'text-xl font-medium text-gray-800 my-2';
      case 'p': return 'text-base text-gray-600 leading-relaxed my-2';
      default: return 'text-base text-gray-600';
    }
  };

  return (
    <Component className={`${getBaseStyle()} ${className}`}>
      {children}
    </Component>
  );
};