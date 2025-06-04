import React, { ReactNode } from 'react'

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = ({ children }: BlogLayoutProps) => {
  return (
    <div>
        <h1>Hi this is Blog</h1>
        {children}
    </div>
  );
}

export default BlogLayout