/* eslint-disable react/no-unstable-nested-components */

'use client';

import { IconButton } from '@material-tailwind/react';
import type { UnknownAction } from '@reduxjs/toolkit';
import { type Dispatch, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { getRoomRecommend } from '@/services/homePageService';
import type { RootState } from '@/stores';
import { setRoomRecommend } from '@/stores/homePageSlice';
import type { IRoomRecommend } from '@/types/response';

import { listImageRoomRecommend } from './mockIcon';

const fetcher = (dispatch: Dispatch<UnknownAction>) => {
  return () =>
    new Promise((rs, rj) => {
      getRoomRecommend()
        .then((res) => {
          const result = res?.data?.data?.map(
            (t1) =>
              ({
                ...t1,
                ...listImageRoomRecommend.find((t2) => t2.id === t1.id),
              }) as IRoomRecommend,
          );
          dispatch(setRoomRecommend(result));
          rs(result);
        })
        .catch((err) => rj(err));
    });
};

const RoomRecommend = () => {
  const dispatch = useDispatch();
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const roomRecommendList = useSelector(
    (state: RootState) => state.homePage.roomRecommend,
  );
  const { isLoading, error } = useSWR(
    `/api/room_recommend`,
    fetcher(dispatch),
    {
      revalidateOnFocus: false,
    },
  );
  useEffect(() => {
    const checkScrollPosition = () => {
      if (!scrollDivRef.current) {
        return;
      }
      const { scrollLeft, scrollWidth, clientWidth } = scrollDivRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft >= scrollWidth - clientWidth);
    };

    scrollDivRef.current?.addEventListener('scroll', checkScrollPosition);
    checkScrollPosition(); // Initial check on component mount

    return () => {
      scrollDivRef.current?.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);
  // Function to scroll left
  const scrollLeft = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  if (error) return <div>Failed to load user data.</div>;
  if (!roomRecommendList || isLoading) return <div>Loading...</div>;
  return (
    <div className="flex flex-row">
      <div className="size-[90px] pr-2 pt-5 text-center">
        <IconButton
          variant="outlined"
          className="rounded-full"
          onClick={scrollLeft}
          disabled={isAtStart}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <span className="material-icons pl-2 pt-1">arrow_back_ios</span>
        </IconButton>
      </div>
      <div className="hide-scrollbar flex overflow-x-scroll" ref={scrollDivRef}>
        <div className="flex">
          {roomRecommendList?.map((ann) => (
            <div
              key={ann.id}
              className="flex size-[90px] flex-col items-center pt-2"
            >
              <img
                src={ann.imageUrl}
                alt={ann.name_en}
                width="60"
                className="rounded-md bg-pantip-500"
              />
              <span className="mb-2 pt-0.5 text-sm font-bold">{ann.name}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="size-[90px] pl-2 pt-5 text-center">
        <IconButton
          variant="outlined"
          className="rounded-full"
          onClick={scrollRight}
          disabled={isAtEnd}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <span className="material-icons pt-1">arrow_forward_ios</span>
        </IconButton>
      </div>
    </div>
  );
};

export default RoomRecommend;
