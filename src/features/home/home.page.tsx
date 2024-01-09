import { Suspense } from 'react';

import * as stylex from '@stylexjs/stylex';
import { QueryErrorResetBoundary } from '@tanstack/react-query';

import { ErrorBoundary } from '@/components/error-boundary';

import Books from './_components/books';
import Loading from './_components/loading';

const TABS = ['React', 'Vue', 'Angular'];

export default function HomePage() {
  return (
    <main {...stylex.props(styles.container)}>
      <div {...stylex.props(styles.tabs)}>
        {TABS.map((tab) => (
          <button {...stylex.props(styles.tab, tab === 'React' && styles.highlighted)} key={tab}>
            {tab}
          </button>
        ))}
      </div>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                {error?.message ?? '에러가 발생했습니다.'}
                <button onClick={() => resetErrorBoundary()}>다시 시도하기</button>
              </div>
            )}
          >
            <Suspense fallback={<Loading />}>
              <Books />
            </Suspense>
          </ErrorBoundary>
        )}
      </QueryErrorResetBoundary>
    </main>
  );
}

const styles = stylex.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    gap: '0.75rem',
    backgroundColor: '#fff',
    minHeight: '100vh',
    padding: '1rem',
  },
  tabs: {
    display: 'flex',
    fontSize: '1rem',
    fontWeight: 400,
    gap: '1.5rem',
    padding: '1rem 0.5rem',
    overflowX: 'auto',
  },
  tab: {
    fontSize: '1.125rem',
    lineHeight: '1.5rem',
    fontWeight: 700,
    color: '#A6A6A6',
    border: 'none',
    backgroundColor: 'transparent',
    padding: 0,
    cursor: 'pointer',
  },
  highlighted: {
    color: '#000',
    borderBottom: '2px solid #000',
  },
});
