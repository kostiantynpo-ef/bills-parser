import { RecognizeResult } from 'tesseract.js';

export const getGoodsFromBill = (response: RecognizeResult): string[][] => {
  const billGoods: string[] = response.data.text.split('\n');
  const goodsPattern: RegExp = /\b\d+\.\d+\b/;
  const goods: string[] = billGoods.filter((line: string) => goodsPattern.test(line)).map(line => line.toLocaleLowerCase());

  return goods.map((line: string): string[] => {
    const lineParts: string[] = line.split(' ');
    const result: string[] = [];
    let goodsName: string = '';

    for (const linePart of lineParts) {
      if (+linePart || linePart.includes(',')) {
        result.push(linePart);
      } else {
        goodsName += `${linePart} `;
      }
    }

    result.unshift(goodsName.trim());

    return result;
  });
}