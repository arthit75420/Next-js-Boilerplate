import { getTranslations } from 'next-intl/server';

import { Announce } from '@/components/Announce';
import { Rooms } from '@/components/Rooms';

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <>
      {/* <Image
        src="/assets/images/songkran.png"
        alt="songkarn"
        width={0}
        height={0}
        sizes="100vw"
        style={{ width: '100%', height: 'auto' }}
        className="rounded-b-md shadow-xl shadow-pantip-500/40"
      /> */}
      <Rooms />
      <Announce />
    </>
  );
}
