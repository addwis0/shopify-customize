import {TextField, FormLayout,Layout} from '@shopify/polaris';
import React, {useCallback, useState}  from 'react';


function DateFormEnd(){
  const [value, setValue] = useState('');
  const handleChange = useCallback((newValue) => setValue(newValue), []);
  return(

 <Layout>
    {/* <Layout.Section secondary> */}
      
      <TextField
        label=""
        value={value}
        onChange={handleChange}
        autoComplete="on"
      />
      
    {/* </Layout.Section> 
     <Layout.Section>

     </Layout.Section> */}
   </Layout>

  )
}

export default DateFormEnd;