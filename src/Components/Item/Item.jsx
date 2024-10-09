import React from 'react';
import './Item.css';

function Item() {
  return (
    <div>
      <div>
        <h1 className="item-heading">Item Details</h1>
      </div>
      <div class="form-container">
        <div className="grey-box">
            <div>
          <label for="Item Name">Item Name</label>
          <input type="text" id="field1" placeholder="Enter Field 1" />
        </div>
        <div>
          <label for="field2">Field 2</label>
          <input type="text" id="field2" placeholder="Enter Field 2" />
        </div>
        <div>
          <label for="field3">Field 3</label>
          <input type="text" id="field3" placeholder="Enter Field 3" />
        </div>
        <div>
          <label for="field4">Field 4</label>
          <input type="text" id="field4" placeholder="Enter Field 4" />
        </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
