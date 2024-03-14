# 👽 NextTasker

**Next.js**를 사용한 투두리스트 프로젝트를 통해 Next의
SSG, ISR, CSR, SSR 렌더링 방식 이해하기

<br>

### 🔽 **개발 환경**

### _Environment_ <br />

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)

### _Development_ <br />

![Next](https://img.shields.io/badge/Next.js-8BC0D0?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-ffffff?style=for-the-badge&logo=react)
![typescript](https://img.shields.io/badge/typescript-%23323330.svg?style=for-the-badge&logo=typescript&logoColor=%#3178C6)

### _Library_ <br />

![TanStack Query](https://img.shields.io/badge/TanStack--Query-FECC00?style=for-the-badge&logo=react-query&logoColor=white) ![tailwind](https://img.shields.io/badge/tailwind-06B6D4?style=for-the-badge&logo=TailwindCSS&logoColor=white)
![json-server](https://img.shields.io/badge/json-000000?style=for-the-badge&logo=json&logoColor=white)

<br>

### 🔽 디렉토리 구조

```
src
 ┣ app
 ┃ ┣ about
 ┃ ┃ ┗ page.tsx
 ┃ ┣ api
 ┃ ┃ ┣ company
 ┃ ┃ ┗ todos
 ┃ ┃ ┃ ┣ [id]
 ┃ ┃ ┃ ┃ ┗ route.ts
 ┃ ┃ ┃ ┗ route.ts
 ┃ ┣ home
 ┃ ┃ ┗ page.tsx
 ┃ ┣ report
 ┃ ┃ ┗ page.tsx
 ┃ ┣ todo-csr
 ┃ ┃ ┗ page.tsx
 ┃ ┣ todo-ssr
 ┃ ┃ ┗ page.tsx
 ┃ ┣ favicon.ico
 ┃ ┣ globals.css
 ┃ ┣ layout.tsx
 ┃ ┗ page.tsx
 ┣ assets
 ┃ ┗ catTheKing.png
 ┣ components
 ┃ ┣ NavBar.tsx
 ┃ ┣ TodoTaskCSR.tsx
 ┃ ┗ TodoTaskSSR.tsx
 ┣ constants
 ┃ ┗ queryKeys.ts
 ┣ hooks
 ┃ ┣ fetchTodos.ts
 ┃ ┣ mutateTodos.ts
 ┃ ┗ QueryProvider.tsx
 ┗ types
 ┃ ┗ index.ts
```

<br>

### 🔽 화면 구성 및 기능

### 1. Home 페이지, About 페이지

|                        Home 페이지                         |                       About 페이지                        |
| :--------------------------------------------------------: | :-------------------------------------------------------: |
| ![image](./image/스크린샷_14-3-2024_172749_localhost.jpeg) | ![image](./image/스크린샷_14-3-2024_17280_localhost.jpeg) |

- Home페이지와 About페이지는 SSG(Static Site Generation) 렌더링 방식을 사용하는 페이지로 회사의 정보를 불러와 보여줍니다.

<br>

### 2. Report 페이지

|                       Report 페이지                        |
| :--------------------------------------------------------: |
| ![image](./image/스크린샷_14-3-2024_183246_localhost.jpeg) |

- Report 페이지는 ISR(Incremental Static Regeneration) 렌더링 방식을 사용하는 페이지로 10초의 revalidate 시간을 가지고 정보를 불러와 보여줍니다.
- 현재 등록된 할일 갯수 및 완료된 할일 갯수, 미완료된 할일 갯수를 보여줍니다.

<br>

### 3. Todo-CSR 페이지

|                       Report 페이지                        |
| :--------------------------------------------------------: |
| ![image](./image/스크린샷_14-3-2024_172815_localhost.jpeg) |

- Todo-CSR 페이지는 CSR(Client-Side Rendering)방식을 사용하는 페이지입니다.
- 할일 추가 및 수정, 삭제가 가능합니다.
- 완료 또는 되돌리기 버튼을 눌러 완료 상태를 토글할 수 있습니다.

<br>

### 4. Todo-SSR 페이지

|                       Report 페이지                        |
| :--------------------------------------------------------: |
| ![image](./image/스크린샷_14-3-2024_172821_localhost.jpeg) |

- Todo-SSR 페이지는 SSR(Server-Side Rendering) 방식을 사용하는 페이지입니다.
- 데이터 조회를 제외한 다른 상호작용을 할 수 없습니다.

<br>
