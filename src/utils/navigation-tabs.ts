import { RecognizeResult } from 'tesseract.js';
import { getGoodsFromBill } from './goods-parsing';
import { createResultTabe } from './result-table';
import { loader } from './loader';

const resulteTable: HTMLElement = document.getElementById('content-table');
const tabsButtonsContainer: HTMLElement = document.getElementById('tabs-buttons');
let tabButtons: NodeListOf<HTMLElement>;
let index: number = 0;
let billCounter: number = 1;
let goods: string[][] = [];
let tabContent: string[][][] = [];

const createNavigationTab = () => {
  const tabButton = document.createElement('div');

  tabButton.classList.add('tab');
  tabButton.setAttribute('index', (index++).toString());
  tabButton.innerText = `Bill - ${billCounter++}`;

  tabsButtonsContainer.appendChild(tabButton);

  tabButton.addEventListener('click', () => tabButtonEvent(tabButton));
};

const tabButtonEvent = (tabButton: HTMLElement) => {
  const index = +tabButton.getAttribute('index');

  tabButtons.forEach((tabButtonElement: HTMLElement) => tabButtonElement.classList.remove('active-tab'));

  tabButton.classList.add('active-tab');

  resulteTable.innerHTML = null;

  createResultTabe(tabContent[index]);
};

export const navigationTabs = (response: RecognizeResult): void => {
  createNavigationTab();

  goods = getGoodsFromBill(response);

  tabButtons = document.querySelectorAll('.tab');

  if (tabButtons.length === 1) {
    tabButtons[0].classList.add('active-tab');

    createResultTabe(goods);
  }

  tabContent.push(goods)

  loader.deleteLoaer();
}