import Navigation from "./components/navigation";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Topbar from "@/app/components/topbar"
import PageContext from "@/contexts/PageContext";
import RootTemplate from "./components/RootTemplate";

export default function Home() {
  
  return <RootTemplate >
    <PageContext>
      <div className='h-screen flex overflow-hidden'>
          <Navigation />
          <main className='w-full h-full overflow-auto px-6'>
              <Topbar />
          </main>
      </div>
      <Toaster/>
    </PageContext>
  </RootTemplate>
}
