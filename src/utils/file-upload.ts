
import { loader } from './loader';
import { worker } from './worker';

const fileInput = (document.getElementById('recognition-image-input') as HTMLInputElement);

const fileUploadEvent = (): void => {
  const file: File = fileInput.files[0];

  if (file) {
    try {
      loader.createLoader();
      const blob: Blob = new Blob([file], { type: file.type });

      worker(blob);
    } catch (error) {
      loader.deleteLoaer();
    }
  }
};

export const billUpload = () => {
  fileInput.addEventListener('change', fileUploadEvent);
}