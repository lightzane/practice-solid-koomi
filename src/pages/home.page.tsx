import { useNavigate } from '@solidjs/router';
import { For, Show, createResource } from 'solid-js';
import Card, { CardFallback } from '../components/card';
import { Koomi, simulateHttpGetProducts } from '../db';

const fetchProducts = (): Promise<Koomi[]> => {
  return simulateHttpGetProducts();
};

export default function HomePage() {
  const navigate = useNavigate();

  const [products] = createResource(fetchProducts);

  function viewProducts(productId: string): void {
    navigate(`/product/${productId}`);
  }

  return (
    <div class='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-7 my-4'>
      <Show when={!products.loading} fallback={<ProductsFallback />}>
        <For each={products()}>
          {(product) => (
            <div onClick={() => viewProducts(product.id)}>
              <Card product={product} />
            </div>
          )}
        </For>
      </Show>
    </div>
  );
}

function ProductsFallback() {
  const items = new Array(6).fill('');
  return (
    <>
      <For each={items}>{() => <CardFallback />}</For>
    </>
  );
}
