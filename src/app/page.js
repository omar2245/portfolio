"use client";
import { redirect } from "next/navigation";

export default function page() {
  redirect("/home");
  return <div></div>;
}
