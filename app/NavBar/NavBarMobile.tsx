"use client";
import { DrawerTrigger } from "@/components/ui/drawer";
import { Bike, Menu, RocketIcon } from "lucide-react";
import Link from "next/link";

export default function NavBarMobile() {
  return (
    <div className="w-full h-[100px] px-8 flex justify-between align-center items-center">
      <div className="flex items-center gap-2">
        <Link className="flex" href={"/"}>
          <h1 className="text-2xl font-medium">ULAS HiPR</h1>
          <RocketIcon className="ml-3 text-lg" />
        </Link>
      </div>
      <DrawerTrigger>
        <Menu size={36} />
      </DrawerTrigger>
    </div>
  );
}
