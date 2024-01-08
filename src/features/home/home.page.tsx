import { Suspense } from 'react';
import Books from './_components/books';
import { container } from './home.css';
import { QueryErrorResetBoundary } from '@tanstack/react-query';
import { ErrorBoundary } from '../../components/error-boundary';
import Loading from './_components/loading';

export default function HomePage() {
  return (
    <main className={container}>
      <h1>책 목록</h1>
      <QueryErrorResetBoundary>
        {({ reset }) => (
          <ErrorBoundary
            onReset={reset}
            fallbackRender={({ error, resetErrorBoundary }) => (
              <div>
                {error?.message ?? '에러가 발생했습니다.'}
                <button onClick={() => resetErrorBoundary()}>Try again</button>
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
