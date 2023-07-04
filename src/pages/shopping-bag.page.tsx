import { For, Show } from 'solid-js';
import { useShoppingBagContext } from '../context/shoping-bag.context';

export default function ShoppingBagPage() {
  const { items, setItems, dark } = useShoppingBagContext();

  function reduceQty(productId: string): void {
    const item = items.find((i) => i.id === productId);

    if (!item.quantity) {
      return;
    }

    setItems(
      (i) => i.id === productId,
      'quantity',
      (qty) => qty - 1,
    );
  }

  function addQty(productId: string): void {
    setItems(
      (i) => i.id === productId,
      'quantity',
      (qty) => qty + 1,
    );
  }

  function removeItem(productId: string): void {
    setItems((i) => i.filter((k) => k.id !== productId));
  }

  return (
    <div classList={{ dark: dark() }}>
      <div class='p-5 bg-white dark:bg-slate-700 rounded-md mt-5 max-w-xl w-full mx-auto select-none'>
        <h2 class='leading-6 text-gray-800 dark:text-gray-200 font-semibold mb-5'>
          Your Shopping Bag
        </h2>

        <For each={items}>
          {(item) => (
            <div class='flex items-center space-x-10 mt-5'>
              <div class='flex space-x-5'>
                <span
                  onClick={() => reduceQty(item.id)}
                  class='font-mono font-semibold cursor-pointer dark:text-white'>
                  -
                </span>
                <span class='dark:text-white'>{item.quantity || 0}</span>
                <span
                  onClick={() => addQty(item.id)}
                  class='font-mono font-semibold cursor-pointer dark:text-white'>
                  +
                </span>
              </div>
              <div class='flex-1'>
                <div class='flex space-x-5 items-center'>
                  <img
                    class='w-16 h-16 rounded-md'
                    src={item.img}
                    alt={item.title}
                  />
                  <p class='dark:text-white'>{item.title}</p>
                </div>
              </div>

              <Show
                when={item.price * item.quantity <= 0}
                fallback={
                  <div class='dark:text-white'>
                    {item.price * item.quantity}
                  </div>
                }>
                <button
                  onClick={() => {
                    removeItem(item.id);
                  }}
                  class='bg-rose-500 py-1 px-3 text-sm text-white font-semibold rounded-md'>
                  Remove
                </button>
              </Show>
            </div>
          )}
        </For>

        <Show when={!items.length}>
          <p class='dark:text-white'>Grabbing food...</p>
        </Show>
      </div>
    </div>
  );
}
