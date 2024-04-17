'use client';

import {
  Card,
  CardBody,
  CardHeader,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import type { UnknownAction } from '@reduxjs/toolkit';
import { type Dispatch, useCallback, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useSWR from 'swr';

import { getHighlight } from '@/services/homePageService';
import type { RootState } from '@/stores';
import { setHighlight } from '@/stores/homePageSlice';

const fetcher = (dispatch: Dispatch<UnknownAction>) => {
  return () =>
    new Promise((rs, rj) => {
      getHighlight()
        .then((res) => {
          const result = res?.data?.data;
          dispatch(setHighlight(result));
          rs(result);
        })
        .catch((err) => rj(err));
    });
};

const Highlight = () => {
  const dispatch = useDispatch();
  const scrollDivRef = useRef<HTMLDivElement>(null);
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const highlightList = useSelector(
    (state: RootState) => state.homePage.highlight,
  );
  const { isLoading, error } = useSWR(`/api/highlight`, fetcher(dispatch), {
    revalidateOnFocus: false,
  });
  const checkScrollPosition = useCallback(() => {
    if (!scrollDivRef.current) {
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = scrollDivRef.current;
    setIsAtStart(scrollLeft === 0);
    setIsAtEnd(scrollLeft >= scrollWidth - clientWidth);
  }, []);

  // Function to scroll left
  const scrollLeft = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({ left: -300, behavior: 'smooth' });
      checkScrollPosition();
    }
  };

  // Function to scroll right
  const scrollRight = () => {
    if (scrollDivRef.current) {
      scrollDivRef.current.scrollBy({ left: 300, behavior: 'smooth' });
      checkScrollPosition();
    }
  };

  if (error) return <div>Failed to load user data.</div>;
  if (!highlightList || isLoading) return <div>Loading...</div>;

  return (
    <>
      <Typography
        variant="h4"
        color="blue-gray"
        className="mb-2 ml-16 mt-6"
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        Highlight
      </Typography>
      <div className="flex flex-row items-center">
        <div className="size-[56px] pl-2">
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
        <div
          className="hide-scrollbar mx-4 flex overflow-x-scroll"
          ref={scrollDivRef}
        >
          <div className="mb-4 flex gap-4">
            {highlightList?.map((ann) => (
              <Card
                className="h-[255px] w-[200px] overflow-hidden"
                key={ann.name}
                placeholder={undefined}
                onPointerEnterCapture={undefined}
                onPointerLeaveCapture={undefined}
              >
                <CardHeader
                  floated={false}
                  shadow={false}
                  color="transparent"
                  className="m-0 rounded-none"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  <img src={ann.image_url[0]} alt={ann.name} />
                </CardHeader>
                <CardBody
                  className="px-2 py-0"
                  placeholder={undefined}
                  onPointerEnterCapture={undefined}
                  onPointerLeaveCapture={undefined}
                >
                  {/* <Typography
                    variant="h6"
                    color="blue-gray"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {ann.name}
                  </Typography> */}
                  <Typography
                    variant="small"
                    color="gray"
                    className="!mx-1 !my-2 p-0 font-normal"
                    placeholder={undefined}
                    onPointerEnterCapture={undefined}
                    onPointerLeaveCapture={undefined}
                  >
                    {ann.name}
                  </Typography>
                </CardBody>
              </Card>
              // <div
              //   key={ann.name}
              //   className="flex size-[90px] flex-col items-center pt-2"
              // >
              //   <img
              //     src={ann.image_url[0]}
              //     alt={ann.name}
              //     width="60"
              //     className="rounded-md bg-pantip-500"
              //   />
              //   <span className="mb-2 pt-0.5 text-sm font-bold">
              //     {ann.name}
              //   </span>
              // </div>
            ))}
          </div>
        </div>
        <div className="size-[56px] pr-2 text-center">
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
    </>
  );
};

export default Highlight;
