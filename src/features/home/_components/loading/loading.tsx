import * as stylex from '@stylexjs/stylex';

export default function Loading() {
  return (
    <div {...stylex.props(styles.container)}>
      <svg
        {...stylex.props(styles.spinner)}
        xmlns='http://www.w3.org/2000/svg'
        width='24'
        height='24'
        viewBox='0 0 24 24'
        fill='none'
        stroke='currentColor'
        strokeWidth='2'
        strokeLinecap='round'
        strokeLinejoin='round'
      >
        <path d='M21 12a9 9 0 1 1-6.219-8.56' />
      </svg>
    </div>
  );
}

const spin = stylex.keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' },
});

const styles = stylex.create({
  container: {
    display: 'flex',
    flex: '1',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
  },
  spinner: {
    width: '48px',
    height: '48px',
    color: '#475569',
    animation: `${spin} 1s linear infinite`,
  },
});
