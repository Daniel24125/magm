"use client"
import "./global.css"
import { useUser } from '@auth0/nextjs-auth0/client';


export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(isLoading)
  return <>
    <h2>HELLO</h2>
  </>
}
