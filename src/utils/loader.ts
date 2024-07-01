const appElement: HTMLElement = document.getElementById('app');

export const loader = {
  createLoader: () => {
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