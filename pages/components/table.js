import React from 'react';
import {Page, Card, DataTable} from '@shopify/polaris';


function Table() {
    const rows = [
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      ['', '', '', '', '', ''],
      [
        '',
        '',
        '',
        '',
        '',
        '',
      ],
    ];
  
    return (
      <Page title="">
        <Card>
          <DataTable
            columnContentTypes={[
              'text',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
              'numeric',
            ]}
            headings={[
              'SKU(品番)',
              'バリエーション',
              '商品名',
              '発売日',
              '価格',
              '在庫(販売可能数)'
            ]}
            rows={rows}
          />
        </Card>
      </Page>
    );
}
export default Table;