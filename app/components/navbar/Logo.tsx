'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();

  return (
    <Image
      onClick={() => router.push('/')}
      className="hidden md:block cursor-pointer"
      src="/images/logo.png"
      height={48}
      width={48}
      alt="Logo"
    />
  );
};

export default Logo;
