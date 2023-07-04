/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';

import App from './App';
import { Router, hashIntegration } from '@solidjs/router';
import { ShoppingBagContextProvider } from './context/shoping-bag.context';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?',
  );
}

render(
  () => (
    <Router source={hashIntegration()}>
      <ShoppingBagContextProvider>
        <App />
      </ShoppingBagContextProvider>
    </Router>
  ),
  root!,
);
