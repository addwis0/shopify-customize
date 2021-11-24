import {TextField, FormLayout,Layout} from '@shopify/polaris';
import React, {useCallback, useState}  from 'react';


function DateFormStart(){
  const [value, setValue] = useState('');
  const handleChange = useCallback((newValue) => setValue(newValue), []);
  return(

 <Layout>
    <Layout.Section secondary>
      {/* <FormLayout>
        <FormLayout.Group condensed>
          <TextField label=""  onChange={() => {}} autoComplete="on" />
          <TextField label="" placeholder="年/月/日" onChange={() => {}} autoComplete="off" />
        </FormLayout.Group>
      </FormLayout> */}
      <TextField
        label=""
        value={value}
        onChange={handleChange}
        autoComplete="on"
      />
      〜
      <TextField
        label=""
        value={value}
        onChange={handleChange}
        autoComplete="on"
      />
    </Layout.Section> 
     <Layout.Section>

     </Layout.Section>
   </Layout>

  )
}

export default DateFormStart;