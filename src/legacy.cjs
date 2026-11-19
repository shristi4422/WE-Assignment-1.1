import { createRequire } from 'node:module';
const require = createRequire(import.meta.url);
const { add } = require('./legacy.cjs');