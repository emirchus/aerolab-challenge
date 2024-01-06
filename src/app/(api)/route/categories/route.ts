import resources from "@/api";
import { NextResponse } from "next/server";

export async function GET() {
  const data = await resources.products.getProducts();

  const categories = new Set<string>(data.map((product) => product.category));

  const availableCategories = Array.from(categories).map((category) => ({
    name: category,
    slug: encodeURIComponent(category.toLowerCase()),
    img: data.find((product) => product.category === category)?.img,
  }));

  return NextResponse.json(availableCategories, { status: 200 });
}
