import { useParams } from '@solidjs/router';
import { Koomi, simulateHttpGetProduct } from '../db';
import { Show, createResource } from 'solid-js';
import Card, { CardFallback } from '../components/card';

interface Props {
  dark: boolean;
}

const fetchProduct = (productId: string): Promise<Koomi> => {
  return simulateHttpGetProduct(productId);
};

export default function ProductPage(props: Props) {
  const params = useParams<{ productId: string }>();

  const [product] = createResource(params.productId, fetchProduct);

  return (
    <div classList={{ dark: props.dark }}>
      <div class='mt-5'>
        <Show when={!product.loading} fallback={<CardFallback />}>
          <Card product={product()} />
        </Show>
      </div>
    </div>
  );
}
