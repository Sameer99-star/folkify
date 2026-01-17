import { ReactNode } from 'react';
import { BottomNavigation } from './BottomNavigation';
// smart hacakhtn project

interface AppLayoutProps {
  children: ReactNode;
  hideNav?: boolean;
}

export const AppLayout = ({ children, hideNav = false }: AppLayoutProps) => {
  return (
    <div className="min-h-screen bg-background">
      <main className={`${hideNav ? '' : 'pb-20'}`}>
        {children}
      </main>
      {!hideNav && <BottomNavigation />}
    </div>
  );
};
