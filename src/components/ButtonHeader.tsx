'use client';

import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/navigation';
import type { ReactNode } from 'react';

interface ButtonHeaderProps {
  title?: string;
  icon?: ReactNode;
}

const ButtonHeader = ({ title, icon }: ButtonHeaderProps) => {
  const router = useRouter();
  return (
    <Button
      variant="text"
      size="sm"
      ripple
      className="flex items-center p-2"
      onClick={() => router.push('/')}
      placeholder={title}
      onPointerEnterCapture={undefined}
      onPointerLeaveCapture={undefined}
    >
      {icon}
      {title}
    </Button>
  );
};

export { ButtonHeader };
