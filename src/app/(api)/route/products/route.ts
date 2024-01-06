import resources from "@/api";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get("category");

  const offset = searchParams.get("offset");
  const limit = searchParams.get("limit");

  const data = await resources.products.getProducts();

  let paginatedData = data;

  if (offset) {
    paginatedData = paginatedData.slice(parseInt(offset));
  }

  if (limit) {
    paginatedData = paginatedData.slice(0, parseInt(limit));
  }

  if (category) {
    paginatedData = paginatedData.filter(
      (product) => product.category.toLowerCase() === category.toLowerCase()
    );
  }

  paginatedData = paginatedData.map((product) => ({
    ...product,
    slug: product.name.replaceAll(" ", "-"),
  }));

  return NextResponse.json(paginatedData, { status: 200 });
}
