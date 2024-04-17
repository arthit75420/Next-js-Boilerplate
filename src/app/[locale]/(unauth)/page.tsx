import { getTranslations } from 'next-intl/server';

import Announce from '@/components/Announce';
import Highlight from '@/components/Highlight';
import RoomRecommend from '@/components/RoomRecommend';

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
      <RoomRecommend />
      {/* <div className="my-2 border" /> */}
      <hr className="my-3" />
      <Announce />
      <Highlight />
      <div className="mb-8" />
    </>
  );
}
