Astro Sphere is a static, minimalist, lightweight, lightning fast portfolio and blog theme based on my personal website.

It is primarily Astro, Tailwind and Typescript, with a very small amount of SolidJS for stateful components.

## 📋 Features

- ✅ 100/100 Lighthouse performance
- ✅ Responsive
- ✅ Accessible
- ✅ SEO-friendly
- ✅ Typesafe
- ✅ Minimal style
- ✅ Light/Dark Theme
- ✅ Animated UI
- ✅ Tailwind styling
- ✅ Auto generated sitemap
- ✅ Auto generated RSS Feed
- ✅ Markdown support
- ✅ MDX Support (components in your markdown)
- ✅ Searchable content (posts and projects)

## 📄 Configuration

The blog posts on the demo serve as the documentation and configuration.

## 💻 Commands

All commands are run from the root of the project, from a terminal:

Replace npm with your package manager of choice. `npm`, `pnpm`, `yarn`, `bun`, etc

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run dev:network`     | Starts dev server on local network               |
| `npm run sync`            | Generates TypeScript types for all Astro modules.|
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run preview:network` | Starts preview server on local network           |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run lint`            | Run ESLint                                       |
| `npm run lint:fix`        | Auto-fix ESLint issues                           |

```
<div tw="flex flex-col w-full h-full items-center justify-center bg-white p-8">
  <div tw="flex flex-col w-full max-w-4xl">
    <h1 tw="text-[80px] font-bold text-[#1a202c] leading-tight">
      Exo Noob's Blog
    </h1>
    <p tw="text-[32px] text-gray-600 mt-4">
      exonoob.in
    </p>
    <div tw="w-40 h-2 bg-blue-600 mt-2"></div>
  </div>
  <div tw="absolute bottom-8 right-8 bg-blue-600 text-white text-[48px] w-25 h-20 flex items-center justify-center rounded-lg">
      ExN
    </div>
</div>
```

## 🗺️ Roadmap

A few features I plan to implement
- ⬜ Article Pages - Table of Contents
- ⬜ Article Pages - Share on social media

## 🏛️ License

MIT