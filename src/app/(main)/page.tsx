import { Header } from "@/components/header/header";
import { useGetProducts } from "@/hooks/use-get-products";
import { Suspense } from "react";

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: { category?: string };
}) {
  const data = await useGetProducts({
    category: searchParams.category || "",
  });

  return (
    <div>
      <h1>Products Page</h1>
      <Suspense key={searchParams.category} fallback={<p>Test</p>}>
        {data.map((product) => {
          return (
            <div key={product._id}>
              <h2>{product.name}</h2>
              <p>{product.category}</p>
              <p>{product.cost}</p>
            </div>
          );
        })}
      </Suspense>
    </div>
  );
}
