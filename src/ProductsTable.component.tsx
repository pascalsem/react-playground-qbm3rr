import React from 'react';
import { Product } from './Product';

interface ComponentProps {
  products: Product[];
  onSelect: (id: string) => void;
}
export default function ProductsTable(componentProps: ComponentProps) {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    componentProps.onSelect(event.currentTarget.value);
  };
  return (
    <div>
      {componentProps.products.map((product) => (
        <div className="row" key={product.id}>
          <span>
            Product #{product.id} = {product.name} ({product.description})
          </span>
          <button className="action" onClick={handleClick} value={product.id}>
            Select
          </button>
        </div>
      ))}
    </div>
  );
}
