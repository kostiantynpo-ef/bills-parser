import { loader } from './loader';

export const insertBillImage = (blob: Blob): void => {
  const appElement: HTMLElement = document.getElementById('app');
  const img: HTMLImageElement = document.createElement('img');
  const url: string = URL.createObjectURL(blob);

  img.src = url;

  loader.deleteLoaer();

  appElement.appendChild(img);
}