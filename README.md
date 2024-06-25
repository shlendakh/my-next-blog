# 🚀 My Next.js Blog

![Next.js](https://img.shields.io/badge/Next.js-14.2.4-blue.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-4.9-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.0-blue.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

Welcome to **My Next.js Blog**, a modern blog built with the power of **Next.js** and **TypeScript**. This project is designed to help you get started with the latest features of Next.js, including the new **App Router** and **Client Components**.

## ✨ Features

- **Next.js 14**: Utilizing the latest and greatest features of Next.js.
- **TypeScript**: Strongly typed goodness to catch errors early.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Dynamic Routing**: Seamless navigation with dynamic routes for posts.
- **Client and Server Components**: Efficient rendering with the right balance of server and client-side code.

## 🗂 Project Structure

Here's a quick overview of the project structure to help you navigate the codebase:

```plaintext
src/
├── app/
│   ├── layout.tsx           // Global layout
│   ├── page.tsx             // Home page
│   ├── about/
│   │   └── page.tsx         // About page
│   ├── posts/
│   │   ├── layout.tsx       // Posts-specific layout
│   │   ├── page.tsx         // Posts list page
│   │   └── [id]/
│   │       └── page.tsx     // Single post page
├── components/
│   ├── Header.tsx
│   ├── Layout.tsx
│   ├── PostItem.tsx
│   ├── PostList.tsx
│   └── index.ts
├── lib/
│   ├── api.ts
│   └── types.ts
├── styles/
│   ├── globals.css
│   └── Home.module.css
└── public/
    └── favicon.ico
```

## 📄 Pages and Layouts

- **Global Layout** (`layout.tsx`): This is the main layout that wraps around your entire app. It includes the header and main content area.
- **Home Page** (`page.tsx`): The landing page of your blog.
- **About Page** (`about/page.tsx`): A simple about page to tell your readers more about you.
- **Posts Layout** (`posts/layout.tsx`): A specific layout for the posts section, adding some unique flair to your posts pages.
- **Posts List Page** (`posts/page.tsx`): Displays a list of all blog posts.
- **Single Post Page** (`posts/[id]/page.tsx`): Displays the content of a single post based on the dynamic `id` parameter.

## 🛠 How to Run

1. **Development**: To start the development server, just run `npm run dev` and visit [http://localhost:3000](http://localhost:3000).
2. **Building**: Create an optimized production build with `npm run build`.
3. **Production**: Start the production server with `npm start`.

## 🎨 Styling with Tailwind CSS

We've integrated **Tailwind CSS** for a sleek, modern design. You can find the global styles in `styles/globals.css` and page-specific styles in their respective modules.

## 🚀 Deployment

Deploy your Next.js application to your favorite hosting provider, like **Vercel** (highly recommended for seamless integration with Next.js).

## 🙌 Contributing

Feel free to open issues or submit pull requests. Let's make this project better together!

## 📄 License

This project is open-source and available under the MIT License.
Paweł Szlendak (c) 2024 [@shlendakh](https://github.com/shlendakh)

---

Happy coding! 🎉