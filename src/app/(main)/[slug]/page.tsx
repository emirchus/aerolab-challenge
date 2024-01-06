import { useGetProducts } from "@/hooks/use-get-products";

export default async function ProductsPage() {
  const data = await useGetProducts({ category: "", limit: 5, offset: 0 });

  return (
    <div>
      <h1>Products Page</h1>
      {data.map((product) => {
        return (
          <div key={product._id}>
            <h2>{product.name}</h2>
            <p>{product.category}</p>
            <p>{product.cost}</p>
          </div>
        );
      })}
    </div>
  );
}
