import { Suspense } from 'react';
import Books from './_components/books';
import { container } from './home.css';

export default function HomePage() {
  return (
    <main className={container}>
      <h1>책 목록</h1>
      <Suspense fallback={<div>Loading..</div>}>
        <Books />
      </Suspense>
    </main>
  );
}
