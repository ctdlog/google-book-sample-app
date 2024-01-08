import { useInView } from 'react-intersection-observer';
import { card, container, image, title } from './books.css';
import { useBooksQuery } from './books.queries';
import React from 'react';

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
    <div className={container}>
      {data.pages.map((page, index) => (
        <React.Fragment key={index}>
          {page.items.map((item) => (
            <div key={item.id} className={card}>
              <img className={image} src={item.volumeInfo.imageLinks?.thumbnail} alt={item.volumeInfo.title} />
              <h2 className={title}>{item.volumeInfo.title}</h2>
            </div>
          ))}
          {index === data.pages.length - 1 && <div ref={ref} />}
        </React.Fragment>
      ))}
    </div>
  );
}
