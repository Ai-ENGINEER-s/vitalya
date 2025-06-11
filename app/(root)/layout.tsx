import React, { ReactNode, FC } from 'react';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

interface RootLayoutProps {
  /** Contenu principal à afficher dans la mise en page */
  children: ReactNode;
}

/**
 * Composant de mise en page principale qui encapsule toute l'application.
 * Inclut la barre de navigation, la zone de contenu principal, le chatbot et le pied de page.
 */
const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black flex flex-col w-full overflow-x-hidden">
      <Navbar />
      
      <main className="flex-grow w-full flex flex-col">
        <div className="w-full flex-grow">
          {children}
        </div>
 
      </main>
      
      <Footer />
    </div>
  );
};

export default RootLayout;
