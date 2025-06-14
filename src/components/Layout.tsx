
import React from 'react';
import Header from './Header';
import Footer from './Footer';
import FloatingActionButton from './FloatingActionButton';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-neutral">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <FloatingActionButton />
    </div>
  );
};

export default Layout;
