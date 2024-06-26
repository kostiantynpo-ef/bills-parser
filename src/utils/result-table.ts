import { RecognizeResult } from 'tesseract.js';
import { insertBillImage } from './insert-bill-image'
import { getGoodsFromBill } from './goods-parsing';

export const createResultTabe = (blob: Blob, response: RecognizeResult) => {
  const resulteTable: HTMLElement = document.querySelector('#resulte-table tbody');
  let goods: string[][] = [];

  insertBillImage(blob);
  goods = getGoodsFromBill(response);

  for (const item of goods) {
    const tr = document.createElement('tr');

    for (const element of item) {
      const td = document.createElement('td');

      tr.appendChild(td);
      td.innerText = element;

    }

    resulteTable.appendChild(tr);
  }
}