import path from 'node:path';
import { fileURLToPath } from 'node:url';

const filePath = fileURLToPath(import.meta.url);
const currentDir = path.dirname(filePath);

export const SRC_DIR = path.resolve(currentDir, '..');

export const TEMPLATE_DIR = path.join(SRC_DIR, 'templates');
