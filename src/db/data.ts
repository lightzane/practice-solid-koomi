export interface Koomi {
  id: string;
  title: string;
  price: number;
  img: string;
  quantity?: number;
}

const getData = (): Koomi[] => [
  {
    id: '1',
    title: 'Chocnut Ka, Biscoff',
    img: 'assets/chocnut-ka-biscoff-194.webp',
    price: 194,
  },
  {
    id: '2',
    title: 'Banana Boombastic Nutella Fantastic',
    img: 'assets/banana-boombastic-nutella-fantastic-200.webp',
    price: 200,
  },
  {
    id: '3',
    title: 'A Melon Reasons Why I Lychee',
    img: 'assets/a-melon-reasons-why-i-lychee-161.webp',
    price: 161,
  },
  {
    id: '4',
    title: 'Stick-on-Me Purple Rice',
    img: 'assets/stick-on-me-purple-rice-139.webp',
    price: 139,
  },
  {
    id: '5',
    title: 'Mango Moo',
    img: 'assets/mango-moo-172.webp',
    price: 172,
  },
  {
    id: '6',
    title: 'Nuts About You',
    img: 'assets/nuts-about-you-189.webp',
    price: 189,
  },
  {
    id: '7',
    title: "Cookies N' Dream",
    img: 'assets/cookies-n-dream-150.webp',
    price: 150,
  },
  {
    id: '8',
    title: 'Avo Nice Day!',
    img: 'assets/avo-nice-day-206.webp',
    price: 206,
  },
  {
    id: '9',
    title: 'Mango Cracker Rocker',
    img: 'assets/mango-cracker-rocker-189.webp',
    price: 189,
  },
  {
    id: '10',
    title: 'Will Ube Mine',
    img: 'assets/will-ube-mine-189.webp',
    price: 189,
  },
  {
    id: '11',
    title: "You're the Berry Best",
    img: 'assets/youre-the-berry-best-172.webp',
    price: 172,
  },
  {
    id: '12',
    title: 'Berry Kiwissable',
    img: 'assets/berry-kiwissable-194.webp',
    price: 194,
  },
  {
    id: '13',
    title: 'Kitkat you outta my Head',
    img: 'assets/kitkat-you-outta-my-head-200.webp',
    price: 200,
  },
  {
    id: '14',
    title: 'Simply Koomi',
    img: 'assets/simply-koomi-111.webp',
    price: 111,
  },
  {
    id: '15',
    title: "I'm Berry Blue Without You",
    img: 'assets/im-berry-blue-without-you-194.webp',
    price: 194,
  },
  {
    id: '16',
    title: 'Dragon Funana',
    img: 'assets/dragon-funana-161.webp',
    price: 161,
  },
];

export const simulateHttpGetProducts = (): Promise<Koomi[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getData());
    }, 500);
  });
};

export const simulateHttpGetProduct = (productId: string): Promise<Koomi> => {
  const product = getData().find((p) => p.id === productId);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (product) {
        resolve(product);
      } else {
        reject(new Error('Not Found'));
      }
    }, 500);
  });
};
