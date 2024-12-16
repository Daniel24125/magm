"use client"
import Navigation from "./components/navigation";
import React from "react";
import { Toaster } from "@/components/ui/toaster";
import Topbar from "@/app/components/topbar"
import PageContext from "@/contexts/PageContext";
import RootTemplate from "./components/RootTemplate";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {

  return "Dashboard"
}
