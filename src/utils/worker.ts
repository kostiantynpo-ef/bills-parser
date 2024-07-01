import { RecognizeResult, createWorker } from 'tesseract.js';
import { navigationTabs } from './navigation-tabs';

export const worker = async (blob: Blob) => {
  const worker = await createWorker('eng');
  const response: RecognizeResult = await worker.recognize(blob);

  navigationTabs(response);

  await worker.terminate();
};