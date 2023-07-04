import { A, Route, Routes } from '@solidjs/router';
import { Show, type Component } from 'solid-js';
import { useShoppingBagContext } from './context/shoping-bag.context';
import IconHome from './icons/home.icon';
import IconPalette from './icons/palette.icon';
import IconShoppingBag from './icons/shopping-bag.icon';
import HomePage from './pages/home.page';
import ProductPage from './pages/product.page';
import ShoppingBagPage from './pages/shopping-bag.page';

const App: Component = () => {
  const { items, dark, setDark } = useShoppingBagContext();

  const totalPrice = (): number => {
    return items.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  function toggleTheme(): void {
    setDark((prev) => !prev);
  }

  return (
    <main class='h-full' classList={{ dark: dark() }}>
      <div class='bg-gray-100 h-full dark:bg-gray-800 overflow-auto'>
        <header class='bg-white dark:bg-slate-700 transition duration-300 p-5 fixed w-full shadow-md'>
          <div class='max-w-6xl w-full mx-auto flex justify-between'>
            <A
              href='/'
              class='text-xl font-bold text-white bg-gradient-to-r from-indigo-400 to-indigo-500 py-1 px-5 rounded-md'>
              Koomi
            </A>
            <div class='flex space-x-10'>
              <A
                href='/'
                class='flex items-center space-x-2 hover:!text-emerald-400 transition dark:text-white duration-300'>
                <IconHome />
                <span>Home</span>
              </A>
              <A
                href='/shopping-bag'
                class='flex items-center space-x-2 hover:bg-emerald-400 transition relative px-4 py-2 text-white bg-emerald-500 rounded-md'>
                <IconShoppingBag />
                <span class='font-semibold text-sm'>{totalPrice()}</span>
                <Show when={items.length}>
                  <span class='absolute -left-5 -top-1 rounded-full w-5 h-5 flex items-center justify-center bg-white text-emerald-500 text-sm lg:text-xs ring-1 ring-emerald-500'>
                    {items.length}
                  </span>
                </Show>
              </A>
              <button
                onClick={toggleTheme}
                class='outline-none dark:text-white hover:!text-emerald-500'>
                <IconPalette />
              </button>
            </div>
          </div>
        </header>

        <div class='mt-28 px-0 md:px-20 lg:px-44'>
          <Routes>
            <Route path={'/'} component={HomePage}></Route>
            <Route path={'/shopping-bag'} component={ShoppingBagPage}></Route>
            <Route path={'/product/:productId'} component={ProductPage}></Route>
          </Routes>
        </div>
      </div>
    </main>
  );
};

export default App;
