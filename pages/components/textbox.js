import {TextField} from '@shopify/polaris';
import React, {useCallback, useState}  from 'react';


function TextBox() {
    const [value, setValue] = useState('');
  
    const handleChange = useCallback((newValue) => setValue(newValue), []);
  
    return (
      <TextField
        label=""
        value={value}
        onChange={handleChange}
        autoComplete="off"
      />
    );
  }
  export default TextBox;