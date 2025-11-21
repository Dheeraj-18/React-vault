# TailwindCSS with React vite Build Tool

## project setup with vite and install tailwindcss 

```
npm create vite@latest my-project 

npm install tailwindcss @tailwindcss/vite

Configure the Vite plugin

import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
})

@import "tailwindcss"; in index.css 

<link rel="stylesheet" href="./src/index.css">
then put 

npm run dev

```
- **Sort Tailwind classes automatically by install a  prettier it's help when we formate out code then all classes are sorted in such way that we easily find out similar classes and debug it like all media-queries are together and box-model classes together etc..**
```
1) npm install -D prettier prettier-plugin-tailwindcss

2) create .prettierrc in project  and the above plugin

{
  "plugins": ["prettier-plugin-tailwindcss"]
}

