import React from 'react';

import { useInView } from 'react-intersection-observer';

import * as stylex from '@stylexjs/stylex';

import { useBooksQuery } from './books.queries';

export default function Books() {
  const { ref, inView } = useInView();

  const { data, fetchNextPage } = useBooksQuery({
    q: 'react',
    startIndex: 0,
    maxResults: 12,
  });

  React.useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [fetchNextPage, inView]);

  return (
    <div {...stylex.props(styles.container)}>
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.items.map((item) => (
            <div key={item.id} {...stylex.props(styles.card)}>
              <img
                {...stylex.props(styles.image)}
                src={item.volumeInfo.imageLinks?.thumbnail}
                alt={item.volumeInfo.title}
              />
              <h2 {...stylex.props(styles.title)}>{item.volumeInfo.title}</h2>
            </div>
          ))}
          {index === data.pages.length - 1 && <div ref={ref} />}
        </React.Fragment>
      ))}
    </div>
  );
}

const styles = stylex.create({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '1rem',
    padding: '0.5rem',
  },
  card: {
    maxWidth: '101px',
  },
  image: {
    width: '101px',
    height: '101px',
    objectFit: 'cover',
  },
  title: {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    display: 'block',
    width: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
});
