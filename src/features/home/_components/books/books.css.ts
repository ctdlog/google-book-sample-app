import { style } from '@vanilla-extract/css';

export const container = style({
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '1rem',
  padding: '0.5rem',
});

export const card = style({
  maxWidth: '101px',
});

export const image = style({
  width: '101px',
  height: '101px',
  objectFit: 'cover',
});

export const title = style({
  fontSize: '1rem',
  lineHeight: '1.5rem',
  display: 'block',
  width: '100%',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});
