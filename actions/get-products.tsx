import { Product } from "@/types";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface Query {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

const getProducts = async (query: Query): Promise<Product[]> => {
  const { categoryId, colorId, sizeId, isFeatured } = query;

  const url = qs.stringifyUrl({
    url: URL,
    query: {
        categoryId,
        colorId,
        sizeId,
        isFeatured,
    },
  });

  const res = await fetch(url);

  return await res.json();
};

export default getProducts;
