export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'coffee' | 'equipment' | 'accessories';
  featured: boolean;
}

export const products: Product[] = [
  {
    id: 'brazilian-santos',
    name: 'Brazilian Santos',
    description: 'A smooth, medium-bodied coffee with low acidity and notes of chocolate and nuts.',
    price: 14.99,
    image: '/images/brazilian-santos.jpg',
    category: 'coffee',
    featured: true
  },
  {
    id: 'colombian-supremo',
    name: 'Colombian Supremo',
    description: 'Well-balanced with a sweet aroma, medium body, and clean finish.',
    price: 16.99,
    image: '/images/colombian-supremo.jpg',
    category: 'coffee',
    featured: true
  },
  {
    id: 'ethiopian-yirgacheffe',
    name: 'Ethiopian Yirgacheffe',
    description: 'Bright acidity with complex floral and citrus notes.',
    price: 18.99,
    image: '/images/ethiopian-yirgacheffe.jpg',
    category: 'coffee',
    featured: true
  },
  {
    id: 'costa-rican-tarrazu',
    name: 'Costa Rican Tarrazu',
    description: 'Medium-bodied with bright acidity and notes of citrus and honey.',
    price: 17.99,
    image: '/images/costa-rican-tarrazu.jpg',
    category: 'coffee',
    featured: false
  }
];

export const getFeaturedProducts = () => products.filter(product => product.featured);
export const getProductById = (id: string) => products.find(product => product.id === id);
export const getProductsByCategory = (category: Product['category']) => 
  products.filter(product => product.category === category);