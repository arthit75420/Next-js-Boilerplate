import {
  Button,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Typography,
} from '@material-tailwind/react';
import { useRouter } from 'next/navigation';

export function ProfileMenu() {
  const router = useRouter();
  return (
    <Menu placement="bottom-end">
      <MenuHandler>
        <Button
          variant="outlined"
          size="sm"
          ripple
          className="flex items-center border-pantip-500 p-2 text-pantip-500"
          onClick={() => router.push('/')}
          placeholder="menu profile"
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <span className="material-icons text-pantip-500">menu</span>
          <span className="material-icons text-pantip-500">
            sentiment_satisfied_alt
          </span>
        </Button>
      </MenuHandler>
      <MenuList
        placeholder={undefined}
        onPointerEnterCapture={undefined}
        onPointerLeaveCapture={undefined}
      >
        <MenuItem
          className="flex items-center gap-2"
          onClick={() => router.push('/sign-up')}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant="small"
            className="font-medium"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            สมัครสมาชิก
          </Typography>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-2"
          onClick={() => router.push('/sign-in')}
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <Typography
            variant="small"
            className="font-medium"
            placeholder={undefined}
            onPointerEnterCapture={undefined}
            onPointerLeaveCapture={undefined}
          >
            เข้าสู่ระบบ
          </Typography>
        </MenuItem>
        <hr className="my-2 border-blue-gray-50" />
        <MenuItem
          className="flex items-center gap-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <a href="https://pantip.com/point" target="_blank">
            <Typography
              variant="small"
              className="font-medium"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              แลกพอยท์
            </Typography>
          </a>
        </MenuItem>
        <MenuItem
          className="flex items-center gap-2"
          placeholder={undefined}
          onPointerEnterCapture={undefined}
          onPointerLeaveCapture={undefined}
        >
          <a href="https://pantip.com/activities" target="_blank">
            <Typography
              variant="small"
              className="font-medium"
              placeholder={undefined}
              onPointerEnterCapture={undefined}
              onPointerLeaveCapture={undefined}
            >
              กิจกรรมพันทิป
            </Typography>
          </a>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
