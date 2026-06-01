import type { Registry } from '@core/types';
import Typography from './Typography';

const defaultComponents: Registry = {
  div: 'div',
  a: 'a',
};

export const components = {
  ...defaultComponents,
  Typography,
};