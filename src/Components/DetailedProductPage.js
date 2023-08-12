import React from 'react';
import { useParams } from 'react-router-dom';
import {inventoryData} from '../Constant/const';

function DetailedProductPage() {
  const { id } = useParams();
  const product = inventoryData.find(item => item.id === Number(id));

  if (!product) {
    return <div>Product not found.</div>;
  }

  return (
    <div className="detailed-product">
      <img src={product.imageUrl} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      {/* Display other product details */}
    </div>
  );
}

export default DetailedProductPage;
