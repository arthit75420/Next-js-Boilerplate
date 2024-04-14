'use client';

import { Card, CardBody, Typography } from '@material-tailwind/react';
import useSWR from 'swr';

interface IRoom {
  id: number;
  name: string;
  name_en: string;
  slug: string;
  is_pinned: boolean;
}

interface ResponseGetRoom {
  success: boolean;
  data: IRoom[];
}

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
    },
  }).then((res) => res.json());

const Rooms = () => {
  const { data, error }: { data: ResponseGetRoom; error: any } = useSWR(
    `https://pantip.com/api/forum-service/home/get_room_recommend?tracking_code={sbveztwkuVuPKdg7S}`,
    fetcher,
  );

  if (error) return <div>Failed to load user data.</div>;
  if (!data) return <div>Loading...</div>;

  // const listImage = [
  //   {
  //     id: 100,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-all.svg',
  //   },
  //   {
  //     id: 32,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-bangrak.svg',
  //   },
  //   {
  //     id: 30,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-cartoon.svg',
  //   },
  //   {
  //     id: 9,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-home.svg',
  //   },
  //   {
  //     id: 10,
  //     imageUrl:
  //       'https://ptcdn.info/mobile/icon_room/pt-forum-siliconvalley.svg',
  //   },
  //   {
  //     id: 23,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-lumpini.svg',
  //   },
  //   {
  //     id: 33,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-horoscope.svg',
  //   },
  //   {
  //     id: 22,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-siam.svg',
  //   },
  //   {
  //     id: 27,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-library.svg',
  //   },
  //   {
  //     id: 15,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-region.svg',
  //   },
  //   {
  //     id: 3,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-gallery.svg',
  //   },
  //   {
  //     id: 31,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-tvshow.svg',
  //   },
  //   {
  //     id: 21,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-supachalasai.svg',
  //   },
  //   {
  //     id: 1,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-camera.svg',
  //   },
  //   {
  //     id: 2,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-food.svg',
  //   },
  //   {
  //     id: 4,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-klaibann.svg',
  //   },
  //   {
  //     id: 5,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-jatujak.svg',
  //   },
  //   {
  //     id: 6,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-chalermkrung.svg',
  //   },
  //   {
  //     id: 7,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-chalermthai.svg',
  //   },
  //   {
  //     id: 8,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-family.svg',
  //   },
  //   {
  //     id: 11,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-beauty.svg',
  //   },
  //   {
  //     id: 12,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-writer.svg',
  //   },
  //   {
  //     id: 13,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-blueplanet.svg',
  //   },
  //   {
  //     id: 14,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-pantip.svg',
  //   },
  //   {
  //     id: 16,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-mbk.svg',
  //   },
  //   {
  //     id: 17,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-ratchada.svg',
  //   },
  //   {
  //     id: 18,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-rajdumnern.svg',
  //   },
  //   {
  //     id: 19,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-social.svg',
  //   },
  //   {
  //     id: 20,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-religious.svg',
  //   },
  //   {
  //     id: 24,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-sinthorn.svg',
  //   },
  //   {
  //     id: 25,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-silom.svg',
  //   },
  //   {
  //     id: 26,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-wahkor.svg',
  //   },
  //   {
  //     id: 28,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-greenzone.svg',
  //   },
  //   {
  //     id: 29,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-art.svg',
  //   },
  //   {
  //     id: 34,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-theoldsiam.svg',
  //   },
  //   {
  //     id: 35,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-korea.svg',
  //   },
  //   {
  //     id: 36,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-gadget.svg',
  //   },
  //   {
  //     id: 99,
  //     imageUrl: 'https://ptcdn.info/mobile/icon_room/pt-forum-isolate.svg',
  //   },
  // ];

  return (
    <Card
      className="mt-6 w-full"
      placeholder={undefined}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      <CardBody
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <Typography
          variant="h4"
          color="blue-gray"
          className="mb-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          เลือกห้อง
        </Typography>
        <div className="overflow-x-auto">
          <div className="flex w-fit flex-row">
            {data?.data?.slice(0, data.data.length / 2).map((ann) => (
              <div
                key={ann.id}
                className="mt-1 flex size-[90px] pt-2 text-center"
              >
                <span className="text-sm font-bold">{ann.name}</span>
              </div>
            ))}
          </div>
          <div className="flex w-fit flex-row">
            {data?.data
              ?.slice(data.data.length / 2, data.data.length)
              .map((ann) => (
                <div
                  key={ann.id}
                  className="mt-1 flex size-[90px] pt-2 text-center"
                >
                  <span className="text-sm font-bold">{ann.name}</span>
                </div>
              ))}
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export { Rooms };
