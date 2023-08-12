import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import {inventoryData} from '../Constant/const';

function ProductListPage() {
  // const { department } = useParams();
  const [lowStockFilter, setLowStockFilter] = useState(false);

  const filteredProducts = inventoryData.filter(
    item => !lowStockFilter || (lowStockFilter && item.stock <= 10) 
  );

  return (
    <div className="product-list">
      <div>
        <label>
          <input
            type="checkbox"
            checked={lowStockFilter}
            onChange={() => setLowStockFilter(!lowStockFilter)}
          />
          Low Stock Items
        </label>
      </div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>${item.price}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductListPage;
