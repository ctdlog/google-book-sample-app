import { keyframes, style } from '@vanilla-extract/css';

export const container = style({
  display: 'flex',
  flex: '1',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
  width: '100%',
});

const rotate = keyframes({
  from: {
    transform: 'rotate(0deg)',
  },
  to: {
    transform: 'rotate(360deg)',
  },
});

export const spin = style({
  animationName: rotate,
  animationDuration: '2s',
});

export const spinner = style({
  width: '48px',
  height: '48px',
  color: '#475569',
  animation: `${rotate} 1s linear infinite`,
});
