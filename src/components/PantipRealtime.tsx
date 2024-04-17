'use client';

import {
  Chip,
  Timeline,
  TimelineConnector,
  TimelineHeader,
  TimelineItem,
  Typography,
} from '@material-tailwind/react';
import type { UnknownAction } from '@reduxjs/toolkit';
import type { Dispatch } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { getAnnounce } from '@/services/homePageService';
import type { RootState } from '@/stores';
import { setAnnounce } from '@/stores/homePageSlice';

const fetcher = (dispatch: Dispatch<UnknownAction>) => {
  return () =>
    new Promise((rs, rj) => {
      getAnnounce()
        .then((res) => {
          const result = res?.data?.data;
          dispatch(setAnnounce(result));
          rs(result);
        })
        .catch((err) => rj(err));
    });
};

const PantipRealtime = () => {
  const dispatch = useDispatch();
  const announceList = useSelector(
    (state: RootState) => state.homePage.announce,
  );
  const { isLoading, error } = useSWR(`/api/announce`, fetcher(dispatch), {
    revalidateOnFocus: false,
  });
  if (error) return <div>Failed to load user data.</div>;
  if (!announceList || isLoading) return <div>Loading...</div>;

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
        {announceList?.map((ann) => (
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

export default PantipRealtime;
