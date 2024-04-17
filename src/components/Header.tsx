'use client';

import {
  Button,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Typography,
} from '@material-tailwind/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { title } from 'process';
import { useState } from 'react';

import { ButtonHeader } from './ButtonHeader';
import { ProfileMenu } from './ProfileMenu';

const Header = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-300 bg-white">
      <div className="mx-14 flex flex-row">
        <Image
          className="cursor-pointer"
          src="/assets/images/Logo-Pantippurple-1024x724.png"
          alt="Pantip Logo"
          width={100}
          height={72}
          onClick={() => router.push('/')}
        />
        <div className="flex w-full flex-row items-center">
          <div className="px-4">
            <Button
              variant="text"
              size="sm"
              ripple
              className="flex items-center p-2"
              onClick={handleOpen}
              placeholder={title}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              <span className="material-icons mr-1 !text-3xl text-pantip-500">
                search
              </span>
              ค้นหา
            </Button>
          </div>
          <nav className="flex w-full flex-row justify-center">
            <div className="flex justify-center gap-1">
              <ButtonHeader
                title="หน้าแรก"
                icon={
                  <span className="material-icons mr-1 text-pantip-500">
                    home
                  </span>
                }
              />
              <Link href="https://pantip.com/home/feed" target="_blank">
                <ButtonHeader
                  title="My Feed"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      dynamic_feed
                    </span>
                  }
                />
              </Link>
              <Link href="https://pantip.com/home/pick" target="_blank">
                <ButtonHeader
                  title="Pantip Pick"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      thumb_up
                    </span>
                  }
                />
              </Link>
              <Link href="https://pantip.com/home/hitz" target="_blank">
                <ButtonHeader
                  title="Pantip Hitz"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      stars
                    </span>
                  }
                />
              </Link>
              <Link href="https://pantip.com/home/communities" target="_blank">
                <ButtonHeader
                  title="Explore"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      explore
                    </span>
                  }
                />
              </Link>
              <div className="gap-1 border-l-2" />
              <Link href="https://pantip.com/point" target="_blank">
                <ButtonHeader
                  title="แลกพอยท์"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      emoji_events
                    </span>
                  }
                />
              </Link>
              <Link href="https://pantip.com/activities" target="_blank">
                <ButtonHeader
                  title="กิจกรรมพันทิป"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      event_note
                    </span>
                  }
                />
              </Link>
            </div>
          </nav>
          <nav className="w-[340px]">
            <div className="flex justify-center gap-1">
              <Link href="https://pantip.com/forum/new_topic" target="_blank">
                <ButtonHeader
                  title="ตั้งกระทู้"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      loupe
                    </span>
                  }
                />
              </Link>
              <Link href="https://pantip.com/forum/new_topic" target="_blank">
                <ButtonHeader
                  title="คอมมูนิตี้"
                  icon={
                    <span className="material-icons mr-1 text-pantip-500">
                      groups
                    </span>
                  }
                />
              </Link>
              <ProfileMenu />
            </div>
          </nav>
        </div>
      </div>
      <Dialog
        open={open}
        size="xs"
        handler={handleOpen}
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <div className="flex items-center justify-between">
          <DialogHeader
            className="flex flex-col items-start"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            {' '}
            <Typography
              className="mb-1"
              variant="h4"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              ค้นหาบน Pantip
            </Typography>
          </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 size-5"
            onClick={handleOpen}
          >
            <path
              fillRule="evenodd"
              d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <DialogBody
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <div className="grid gap-6">
            <Input
              label="คุณกำลังมองหาอะไร"
              icon={
                <span className="material-icons text-pantip-500">search</span>
              }
              className="border-pantip-500 text-pantip-500"
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
              crossOrigin={undefined}
            />
          </div>
        </DialogBody>
      </Dialog>
    </header>
  );
};

export { Header };
