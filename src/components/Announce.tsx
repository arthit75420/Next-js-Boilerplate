'use client';

import {
  Chip,
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
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
    <div className="mx-14">
      <Typography
        variant="h4"
        color="blue-gray"
        className="mb-2 ml-2 mt-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Announce
      </Typography>
      <Timeline>
        {data?.data?.map((ann) => (
          <TimelineItem className="h-28" key={ann.announce_id}>
            <TimelineConnector className="!w-[78px]" />
            <TimelineHeader className="relative rounded-xl border border-blue-gray-50 bg-white py-3 pl-4 pr-8 shadow-lg shadow-blue-gray-900/5">
              <div className="flex items-center gap-1">
                <Chip
                  style={{ fontSize: 11, height: 28 }}
                  size="sm"
                  value={ann.category_name}
                  color={ann.category_name === 'activity' ? 'indigo' : 'amber'}
                />
                <div
                  className="ml-2 w-full"
                  dangerouslySetInnerHTML={{ __html: ann.display_message }}
                />
              </div>
            </TimelineHeader>
          </TimelineItem>
        ))}
      </Timeline>
    </div>
  );
};

export default Announce;
