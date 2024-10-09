import React, { useState } from 'react';
import './Checkbox.css';
import Item from './Item/Item'
import Supplier from './Supplier/Supplier'

function Checkbox() {
  const [activeComponent, setActiveComponent] = useState(null);

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    // Set the active component based on which checkbox is checked
    setActiveComponent(name);
  };

  return (
    <div className='checkbox-main'>
      <label className="custom-checkbox">
        <input className='input-checkbox'
          type="checkbox"
          name="Item"
          checked={activeComponent === 'Item'}
          onChange={handleCheckboxChange}
        />
        Item
      </label>

      <label className="custom-checkbox">
        <input className='input-checkbox'
          type="checkbox"
          name="Supplier"
          checked={activeComponent === 'Supplier'}
          onChange={handleCheckboxChange}
        />
        Supplier
      </label>

      <div className="components">
        {activeComponent === 'Item' && <Item />}
        {activeComponent === 'Supplier' && <Supplier />}
      </div>
    </div>
  );
}

export default Checkbox;
