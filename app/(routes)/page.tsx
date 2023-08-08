import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";

import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";

export const revalidate = 0;

export default async function HomePage() {
  const products = await getProducts({ isFeatured: true });
  const billboard = await getBillboard("62862f01-630e-4757-839f-d79e432ba869");

  return (
    <Container>
      <div className='space-y-10 pb-10'>
        <Billboard data={billboard} />
        <div className='flex flex-col gap-y-8 px-4 sm:px6 lg:px-8'>
          <ProductList title={"Featured Products"} items={products} />
        </div>
      </div>
    </Container>
  );
}
