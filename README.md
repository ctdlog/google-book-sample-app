# Google Book Sample App

`Modern React Deep Dive` 6장 실습을 위해서 만든 예제 앱입니다.

This is a sample app created for the practical exercises in Chapter 6 of `Modern React Deep Dive`.

The app utilizes the Google Books API to implement the UI found in the Figma Pages Design under 4.3 Home - Vendors and 4.3 Detail Menu. Please note that the title section is excluded, and only one React tab is present.

## Requirements

1. Implement the UI from the [Figma](<https://www.figma.com/file/GxsiyGhYcXgnbHC4kf9Mni/Bazar---Books-Mobile-App-(Community)?type=design&node-id=1855%3A6688&mode=dev>) Pages Design under 4.3 Home - Vendors and 4.3 Detail Menu. Exclude the title section, and ensure that only one React tab exists.
2. The initial data loaded through the Google Book API should consist of 12 items, and infinite scrolling must be implemented.
3. Use TanStack Query, Suspense, Error Boundary, and CSS-in-JS as mandatory dependencies. Other library usage is optional.

## How to Run

```sh
pnpm install
pnpm dev
```

## Reference Materials

- [Google Books API Docs](https://developers.google.com/books/docs/overview?hl=ko)
