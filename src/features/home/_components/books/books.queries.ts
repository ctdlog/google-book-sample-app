import { useSuspenseInfiniteQuery } from '@tanstack/react-query';

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

export const queryKeys = {
  books: {
    all: ['books'] as const,
    lists: () => [...queryKeys.books.all, 'list'] as const,
    list: ({ q, startIndex, maxResults }: BookFilters) =>
      [...queryKeys.books.lists(), { q, startIndex, maxResults }] as const,
  },
};

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
  return useSuspenseInfiniteQuery({
    queryKey: queryKeys.books.list({ q, startIndex, maxResults }),
    queryFn: ({ pageParam = 0 }) =>
      getBooksByFilter({
        q,
        maxResults,
        startIndex: pageParam,
      }),
    initialPageParam: startIndex,
    getNextPageParam: (_, allPages) => allPages.length * maxResults,
  });
};
