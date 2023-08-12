// InventoryTable.js
import React, { useState } from 'react';
import { inventoryData } from '../Constant/const'; // Path to your data file

function InventoryTable() {
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [lowStockFilter, setLowStockFilter] = useState(false);

  const uniqueDepartments = [...new Set(inventoryData.map(item => item.department))];

  const filteredData = inventoryData.filter(item => {
    if (selectedDepartment && item.department !== selectedDepartment) {
      return false;
    }
    if (lowStockFilter && item.stock > 10) {
      return false;
    }
    return true;
  });

  return (
    <div className="inventory-table">
    <div className='filter-div'>
      <div className="filter-dropdown">
        <label htmlFor="department">Filter by Department: </label>
        <select
          id="department"
          value={selectedDepartment}
          onChange={e => setSelectedDepartment(e.target.value)}
        >
          <option value="">All Departments</option>
          {uniqueDepartments.map(department => (
            <option key={department} value={department}>
              {department}
            </option>
          ))}
        </select>
      
      <div className="filter-checkbox">
        <label>
          <input
            type="checkbox"
            checked={lowStockFilter}
            onChange={() => setLowStockFilter(!lowStockFilter)}
          />
          Low Stock
        </label>
      </div>
      </div>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Image</th>
            <th>Department</th>
            <th>Name</th>
            <th>Description</th>
            <th>Price</th>
            <th>Stock</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map(item => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td><img src={item.imageUrl} alt={item.name} width={300} height={200}/></td>
              <td>{item.department}</td>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>${item.price.toFixed(2)}</td>
              <td>{item.stock}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryTable;
