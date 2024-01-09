import { Fragment, useEffect } from 'react';

import { useInView } from 'react-intersection-observer';
import * as stylex from '@stylexjs/stylex';

import { useBooksQuery } from './books.queries';
import Book from '../book';

export default function Books() {
  const { ref, inView } = useInView();

  const {
    data: { pages: bookPages },
    fetchNextPage,
  } = useBooksQuery({
    q: 'react',
    startIndex: 0,
    maxResults: 12,
  });

  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div {...stylex.props(styles.container)}>
      {bookPages.map(({ items }, index) => (
        <Fragment key={index}>
          {items.map(({ id, volumeInfo: { title, imageLinks } }) => (
            <Book key={id} title={title} thumbnail={imageLinks?.thumbnail} />
          ))}
          {index === bookPages.length - 1 && <div ref={ref} />}
        </Fragment>
      ))}
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    padding: '0 0.5rem',
  },
});
