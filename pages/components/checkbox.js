import React, {useCallback, useState}  from 'react';
import {Checkbox} from '@shopify/polaris';

function Check() {
    const [checked, setChecked] = useState(true);
    const handleChange = useCallback((newChecked) => setChecked(newChecked), []);
  
    return (
      <Checkbox
        label="アーカイブ商品も含める"
        checked={checked}
        onChange={handleChange}
      />
    );
}
export default Check;