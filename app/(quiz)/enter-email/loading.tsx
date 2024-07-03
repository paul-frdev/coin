"use client";

import { Loader } from "@/components/ui/loader";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const Loading = () => {
  const pathname = usePathname();
  return (
    <div className={cn(`flex h-full w-full justify-center items-center pb-56`)}>
      <Loader />
    </div>
  );
};

export default Loading;
