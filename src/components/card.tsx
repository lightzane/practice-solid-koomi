import { Show, createSignal } from 'solid-js';
import { useShoppingBagContext } from '../context/shoping-bag.context';
import { Koomi } from '../db';
import IconPlus from '../icons/plus.icon';

interface Props {
  product: Koomi;
}

export default function Card(props: Props) {
  const [loaded, setLoaded] = createSignal(false);

  const { items, setItems, dark } = useShoppingBagContext();

  const product = () => props.product;

  const exists = () => items.find((i) => i.id === product().id);

  function addToBag(e: MouseEvent): void {
    setLoaded(true);

    setTimeout(() => {
      setLoaded(false);
    }, 2000);

    e.stopPropagation();

    if (exists()) {
      setItems(
        (p) => p.id === product().id, // filter
        'quantity', // field to update
        (qty) => qty + 1, // callback with access to current value
      );
    }

    // Add new product
    else {
      const newItem: Koomi = {
        ...product(),
        quantity: 1,
      };

      setItems([...items, newItem]);
    }
  }

  return (
    <div classList={{ dark: dark() }}>
      <div
        class={`flex space-x-5 bg-white dark:bg-slate-700 p-3.5 rounded-md cursor-pointer hover:ring-1 hover:ring-emerald-300 transition`}
        classList={{
          '!ring-2 ring-emerald-500 shadow-md': !!exists(),
        }}>
        <div class='shrink-0'>
          <img class='w-28 h-28 rounded-md' src={product().img} />
        </div>

        <div class='flex flex-col justify-between w-full'>
          <h2 class='dark:text-white'>{product().title}</h2>

          <div class='flex justify-between'>
            <p class='leading-6 font-bold pb-3 dark:text-white'>
              {product().price}
            </p>

            <Show
              when={!loaded()}
              fallback={<p class='dark:text-white'>Added!</p>}>
              <button
                onClick={(e) => addToBag(e)}
                class='rounded-full bg-emerald-500 hover:bg-emerald-400 w-8 h-8 text-white font-semibold text-sm'>
                <IconPlus />
              </button>
            </Show>
          </div>
        </div>
      </div>
    </div>
  );
}

export function CardFallback() {
  return (
    <div class='pointer-events-none flex space-x-5 bg-white dark:bg-slate-700 p-3.5 rounded-md'>
      <div class='shrink-0'>
        <div class='w-28 h-28 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse' />
      </div>
      <div class='flex flex-col justify-between w-full'>
        <h2 class='h-7 bg-gray-200 dark:bg-gray-800 animate-pulse rounded-md w-full'></h2>
        <div class='flex justify-between'>
          <p class='font-bold pb-3 h-5 w-1/2 rounded-md bg-gray-200 dark:bg-gray-800 animate-pulse'></p>
          <button class='rounded-full bg-gray-200 dark:bg-gray-800 animate-pulse w-8 h-8 text-white font-semibold text-sm'></button>
        </div>
      </div>
    </div>
  );
}
