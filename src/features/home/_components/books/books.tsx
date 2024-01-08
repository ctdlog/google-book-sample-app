import { card, container, image, title } from './books.css';
import { useBooksQuery } from './books.queries';

export default function Books() {
  const booksQuery = useBooksQuery({
    q: 'react',
    startIndex: 0,
    maxResults: 10,
  });

  return (
    <div className={container}>
      {booksQuery.data.items.map((book) => {
        return (
          <div className={card} key={book.id}>
            <img className={image} src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
            <span className={title}>{book.volumeInfo.title}</span>
          </div>
        );
      })}
    </div>
  );
}
