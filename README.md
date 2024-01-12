# Google Book Sample App

모던 리액트 Deep Dive 6장의 실습을 위해 만든 예제 앱입니다.

이 앱은 참고 자료에 있는 Figma의 Pages Design에서 찾을 수 있는 4.3 Home - Vendors 및 4.3 Detail Menu의 UI를 구현하기 위해 Google Books API를 활용합니다.

## 요구 사항
1. Figma Pages Design에서 4.3 Home - Vendors 및 4.3 Detail Menu의 UI를 구현하세요. 제목 섹션은 제외하고 탭은 React 하나만 존재하도록 합니다.
2. Google Book API를 통해 초기에 로드되는 데이터는 12개의 항목으로 구성되어야 하며, 무한 스크롤이 구현되어야 합니다.
3. TanStack Query, Suspense, Error Boundary 및 CSS-in-JS를 필수 종속성으로 사용하세요. 다른 라이브러리 사용은 선택 사항입니다.

## 실행 방법
```sh
pnpm install
pnpm dev
```

## 참고 자료
- [Figma](https://www.figma.com/file/GxsiyGhYcXgnbHC4kf9Mni/Bazar---Books-Mobile-App-(Community)?type=design&node-id=1855%3A6688&mode=dev) 
- [Google Books API 문서](https://developers.google.com/books/docs/overview?hl=ko)
