import React, {useCallback, useState}  from 'react';
import {Select} from '@shopify/polaris';

function SelectBox() {
    const [selected, setSelected] = useState('today');
  
    const handleSelectChange = useCallback((value) => setSelected(value), []);
  
    const options = [
      {label: '全て', value: 'all'},
      {label: '', value: ''},
      {label: '', value: ''},
    ];
  
    return (
      <Select
        label=""
        options={options}
        onChange={handleSelectChange}
        value={selected}
      />
    );
}

export default SelectBox;