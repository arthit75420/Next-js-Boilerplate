'use client';

import { ThemeProvider } from '@material-tailwind/react';
import { useTranslations } from 'next-intl';
import { Provider } from 'react-redux';

import { Header } from '@/components/Header';
import store from '@/stores';
import { AppConfig } from '@/utils/AppConfig';

const BaseTemplate = (props: { children: React.ReactNode }) => {
  const t = useTranslations('BaseTemplate');

  return (
    <ThemeProvider>
      <Provider store={store}>
        <div className="w-full text-gray-700 antialiased">
          <Header />
          <main className="mt-[90px]">{props.children}</main>

          <footer className="border-t border-gray-300 py-8 text-center text-sm">
            © Copyright {new Date().getFullYear()} {AppConfig.name}.
            {` ${t('made_with')} `}
            <a
              href="https://creativedesignsguru.com"
              className="text-blue-700 hover:border-b-2 hover:border-blue-700"
            >
              CreativeDesignsGuru
            </a>
            .
            {/*
             * PLEASE READ THIS SECTION
             * I'm an indie maker with limited resources and funds, I'll really appreciate if you could have a link to my website.
             * The link doesn't need to appear on every pages, one link on one page is enough.
             * For example, in the `About` page. Thank you for your support, it'll mean a lot to me.
             */}
          </footer>
        </div>
      </Provider>
    </ThemeProvider>
  );
};

export { BaseTemplate };
