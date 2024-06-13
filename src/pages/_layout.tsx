import '@mantine/core/styles.css';

import "../styles.css";

import type { ReactNode } from "react";

import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { ColorSchemeScript, MantineProvider } from '@mantine/core';

type RootLayoutProps = { children: ReactNode };

export default async function RootLayout({ children }: RootLayoutProps) {
  const data = await getData();

  return (
    <div className="font-['Nunito']">
      <meta property="description" content={data.description} />
      <link rel="icon" type="image/png" href={data.icon} />
      <ColorSchemeScript />
      <Header />
      <main className="m-6 flex items-center *:min-h-64 *:min-w-64 lg:m-0 lg:min-h-svh lg:justify-center">
        <MantineProvider>{children}</MantineProvider>
      </main>
      <Footer />
    </div>
  );
}

const getData = async () => {
  return {
    description: 'An internet website!',
    icon: '/images/favicon.png',
  };
};

export const getConfig = async () => {
  return {
    render: 'static',
  };
};
