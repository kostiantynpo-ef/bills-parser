export const loader = {
  createLoader: () => {
    const appElement: HTMLElement = document.getElementById('app');
    const loader: HTMLElement = document.createElement('div');

    loader.className = 'loader';

    appElement.appendChild(loader);
  },
  deleteLoaer: () => {
    let loader: HTMLElement = document.querySelector('.loader');

    if (loader) {
      loader.remove();
    }
  },
}