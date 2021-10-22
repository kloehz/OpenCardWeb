import { ReactNode } from 'react';
import NavBar from '../navbar/NavBar';

interface ILayoutProps {
    children: ReactNode
}

export const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <NavBar />
      {/* TODO: Pasar esto a un archivo css */}
      <div style={{marginTop: '90px'}}>
        { children }
      </div>
    </>
  );
};
