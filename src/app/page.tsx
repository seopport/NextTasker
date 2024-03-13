'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect } from 'react';

const Page = () => {
  const router = useRouter();
  const pathName = usePathname();

  useEffect(() => {
    if (pathName === '/') {
      router.replace('/home');
    }
  }, [pathName, router]);
};

export default Page;
