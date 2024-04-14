'use client';

import { Card, CardBody, Typography } from '@material-tailwind/react';
import useSWR from 'swr';

interface IAnnounce {
  announce_id: number;
  category_name: string;
  type: string;
  display_message: string | TrustedHTML;
  created_time: string;
}

interface ResponseGetAnnounce {
  success: boolean;
  data: IAnnounce[];
}

const fetcher = (url: string) =>
  fetch(url, {
    headers: {
      Ptauthorize: 'Basic dGVzdGVyOnRlc3Rlcg==',
    },
  }).then((res) => res.json());

const Announce = () => {
  const { data, error }: { data: ResponseGetAnnounce; error: any } = useSWR(
    `https://pantip.com/api/forum-service/forum/get_announce?room=homepage&limit=3`,
    fetcher,
  );

  if (error) return <div>Failed to load user data.</div>;
  if (!data) return <div>Loading...</div>;

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
          Announce
        </Typography>
        {data?.data?.map((ann) => (
          <div
            key={ann.announce_id}
            className="mt-1 flex w-full flex-row content-center border-t-2 pt-2"
          >
            <div
              className="mb-2 w-full"
              dangerouslySetInnerHTML={{ __html: ann.display_message }}
            />
            <div className="h-8 w-24 border-spacing-1 rounded-lg border border-s border-pantip-500 text-center">
              <span className="text-sm font-bold">{ann.category_name}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export { Announce };
