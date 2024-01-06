import { useGetCategories } from "@/hooks/use-get-categories";
import Link from "next/link";
import React from "react";
import { Navbar } from "../navbar/navbar";

export const Header = async () => {
  const categories = await useGetCategories();

  return (
    <div>
      <h1>Header</h1>
      <Navbar categories={categories} />
    </div>
  );
};
