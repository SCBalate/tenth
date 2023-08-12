import React from 'react';
import { Link } from 'react-router-dom';
import { inventoryData } from '../Constant/const';

function DepartmentsPage() {
  const departmentsMap = new Map();

  inventoryData.forEach(item => {
    if (!departmentsMap.has(item.department)) {
      departmentsMap.set(item.department, item);
    }
  });

  const uniqueDepartments = Array.from(departmentsMap.values());

  return (
    <div className="departments">
      {uniqueDepartments.map(item => (
        <Link to={`/products/${item.department}`} key={item.id}>
          <div className="department-card">{item.department}</div>
        </Link>
      ))}
    </div>
  );
}

export default DepartmentsPage;
