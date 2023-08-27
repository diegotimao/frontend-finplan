import React from "react";
import AsideMenu from "../components/Aside-menu";
import Header from "../components/Header";

export default function Template({ children, }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen bg-neutral-50">
      <div className="flex">
        <AsideMenu />
        <div className="flex-1">
          <main className="w-full">
            <div className="w-full">
              {children}
            </div>
          </main>
        </div>
      </div>
    </div>
  )
};