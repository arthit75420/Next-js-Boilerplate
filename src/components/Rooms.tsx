/* eslint-disable react/no-unstable-nested-components */

'use client';

import { Carousel, IconButton } from '@material-tailwind/react';
import useSWR from 'swr';
import { undefined } from 'zod';

interface IRoom {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
  imageUrl: string;
}

interface ResponseGetRoom {
  success: boolean;
  data: IRoom[];
}
const listImage = [
  {
    id: 100,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-all.svg',
  },
  {
    id: 32,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-bangrak.svg',
  },
  {
    id: 30,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-cartoon.svg',
  },
  {
    id: 9,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-home.svg',
  },
  {
    id: 10,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-siliconvalley.svg',
  },
  {
    id: 23,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-lumpini.svg',
  },
  {
    id: 33,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-horoscope.svg',
  },
  {
    id: 22,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-siam.svg',
  },
  {
    id: 27,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-library.svg',
  },
  {
    id: 15,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-region.svg',
  },
  {
    id: 3,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-gallery.svg',
  },
  {
    id: 31,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-tvshow.svg',
  },
  {
    id: 21,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-supachalasai.svg',
  },
  {
    id: 1,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-camera.svg',
  },
  {
    id: 2,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-food.svg',
  },
  {
    id: 4,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-klaibann.svg',
  },
  {
    id: 5,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-jatujak.svg',
  },
  {
    id: 6,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-chalermkrung.svg',
  },
  {
    id: 7,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-chalermthai.svg',
  },
  {
    id: 8,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-family.svg',
  },
  {
    id: 11,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-beauty.svg',
  },
  {
    id: 12,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-writer.svg',
  },
  {
    id: 13,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-blueplanet.svg',
  },
  {
    id: 14,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-pantip.svg',
  },
  {
    id: 16,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-mbk.svg',
  },
  {
    id: 17,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-ratchada.svg',
  },
  {
    id: 18,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-rajdumnern.svg',
  },
  {
    id: 19,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-social.svg',
  },
  {
    id: 20,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-religious.svg',
  },
  {
    id: 24,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-sinthorn.svg',
  },
  {
    id: 25,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-silom.svg',
  },
  {
    id: 26,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-wahkor.svg',
  },
  {
    id: 28,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-greenzone.svg',
  },
  {
    id: 29,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-art.svg',
  },
  {
    id: 34,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-theoldsiam.svg',
  },
  {
    id: 35,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-korea.svg',
  },
  {
    id: 36,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-gadget.svg',
  },
  {
    id: 99,
    imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-isolate.svg',
  },
];
const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
    },
  })
    .then((res) => res.json())
    .then((data: ResponseGetRoom) =>
      data?.data?.map(
        (t1) =>
          ({
            ...t1,
            ...listImage.find((t2) => t2.id === t1.id),
          }) as IRoom,
      ),
    );

const Rooms = () => {
  const { data, error } = useSWR(
    `https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code={sbveztwkuVuPKdg7S}`,
    fetcher,
  );

  if (error) return <div>Failed to load user data.</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className="w-full">
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handlePrev}
            className="!absolute left-4 top-2/4 -translate-y-2/4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={handleNext}
            className="!absolute !right-4 top-2/4 -translate-y-2/4"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex w-fit flex-row">
          {data?.slice(0, 19)?.map((ann) => (
            <div
              key={ann.id}
              className="mt-1 flex size-[90px] flex-col items-center pt-2"
            >
              <img
                src={ann.imageUrl}
                alt={ann.name_en}
                width="60"
                className="bg-pantip-500"
              />
              <span className="text-sm font-bold">{ann.name}</span>
            </div>
          ))}
        </div>
        <div className="flex w-fit flex-row">
          {data?.slice(19, 38)?.map((ann) => (
            <div
              key={ann.id}
              className="mt-1 flex size-[90px] flex-col items-center pt-2"
            >
              <img
                src={ann.imageUrl}
                alt={ann.name_en}
                width="60"
                className="bg-pantip-500"
              />
              <span className="text-sm font-bold">{ann.name}</span>
            </div>
          ))}
        </div>
      </Carousel>
    </div>
  );
};

export { Rooms };
