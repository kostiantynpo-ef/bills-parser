import { RecognizeResult, createWorker } from 'tesseract.js';
import { createResultTabe } from './result-table';

export const worker = async (blob: Blob) => {
  const worker = await createWorker('eng');
  const response: RecognizeResult = await worker.recognize(blob);

  createResultTabe(blob, response);

  await worker.terminate();
};