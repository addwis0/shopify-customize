import{Page, Layout, Button} from '@shopify/polaris';
import React from 'react';
import styled from "styled-components";
import Head from './components/heading.js';
import DateForm from './components/date-form.js';           
import Check from './components/checkbox.js';
import SelectBox from './components/selectbox.js';
import TextBox from './components/textbox.js';
import Table from './components/table.js';


const Form = styled.div`
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
`;

function Index(){
  return(
    <Page>
      <Head/>
      <br/>
      <Layout>
        <Layout.Section>
          <DateForm/>
        </Layout.Section>
      </Layout>
      <Layout.Section secondary>

      </Layout.Section>
      <Check/>
      <br/>
      <SelectBox/>
      <br/>
      <TextBox/>
      <br/>
      <Button>検索</Button>
      <br/>
      <Table/>
    </Page>
  )
 }
 
 export default Index;


