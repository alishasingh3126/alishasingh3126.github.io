import { defineConfig } from "vite";
import { resolve } from 'path'
import blogs from './blogs.json'

const blogsList = blogs.blogs
const pages = blogsList.reduce((a, b) => ({ ...a, [b.link]: resolve(__dirname, b.link) }), {})
const input = Object.assign({}, { home: resolve(__dirname, "index.html") }, pages)

export default defineConfig({
    build: {
        rollupOptions: {
            input
        }
    },
})