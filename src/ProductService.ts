import { Product } from './Product';

export default class ProductService {
  fetch = (): Promise<Product[]> => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([
          { id: 1, name: 'pen', description: 'blue ink' },
          { id: 2, name: 'paper', description: 'recycled' },
          { id: 3, name: 'ruler', description: 'metric units' },
        ]);
      }, 500);
    });
  };
}
