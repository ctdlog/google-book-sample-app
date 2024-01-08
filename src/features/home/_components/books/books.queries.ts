import { createQueryKeyStore } from '@lukemorales/query-key-factory';
import { useSuspenseQuery } from '@tanstack/react-query';

interface BookFilters {
  q: string;
  startIndex: number;
  maxResults: number;
}

interface GetBooksResponse {
  kind: string;
  totalItems: number;
  items: Array<{
    id: string;
    volumeInfo: {
      title: string;
      description: string;
      authors: string[];
      imageLinks: {
        thumbnail: string;
        smallThumbnail: string;
      };
    };
  }>;
}

export const getBooksByFilter = ({ q, startIndex, maxResults }: BookFilters): Promise<GetBooksResponse> => {
  return fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${q}&startIndex=${startIndex}&maxResults=${maxResults}`
  ).then((res) => res.json());
};

export const queryKeys = createQueryKeyStore({
  books: {
    detail: (bookId: string) => [bookId],
    list: (filters: BookFilters) => ({
      queryKey: [{ filters }],
      queryFn: () => getBooksByFilter(filters),
    }),
  },
});

export const useBooksQuery = (
  {
    q,
    startIndex,
    maxResults,
  }: {
    q: string;
    startIndex: number;
    maxResults: number;
  } = {
    q: 'react',
    startIndex: 0,
    maxResults: 40,
  }
) => {
  return useSuspenseQuery(queryKeys.books.list({ q, startIndex, maxResults }));
};
