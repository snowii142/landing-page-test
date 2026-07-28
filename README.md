## Getting Started

ต้องมี [Node.js](https://nodejs.org/) 18.18 ขึ้นไป (แนะนำ 20 LTS) และ package manager (`yarn`, `npm` หรือ `pnpm`)

```bash
yarn install    # ติดตั้ง dependencies
yarn dev        # รัน dev server
```

เปิด [http://localhost:3000](http://localhost:3000) เพื่อดูผล

### Scripts

| คำสั่ง       | ทำอะไร                                          |
| ------------ | ----------------------------------------------- |
| `yarn dev`   | รัน dev server (hot reload)                     |
| `yarn build` | build + export เป็น static ไปที่โฟลเดอร์ `out/` |
| `yarn start` | เสิร์ฟ production build                         |
| `yarn lint`  | ตรวจโค้ดด้วย ESLint                             |

## Approach & Architecture

### Tech stack

- **Next.js 16 (App Router)** — โครงสร้าง React แบบ component, deploy เป็น static export
- **Tailwind CSS v4** — utility-first, ธีม/สีกำหนดผ่าน CSS variables ใน [globals.css](src/app/globals.css)
- **next/font** — โหลดฟอนต์ Google (Outfit, Noto Sans JP, Roboto Condensed) แบบ self-host
- **Swiper** — สไลด์แนวนอนในเซกชัน "How to style them"
- **Motion** — animation ของเมนูบนมือถือ

### โครงสร้างโฟลเดอร์

```
src/
├── app/              # layout, page, global styles, metadata (SEO)
├── components/
│   ├── layout/       # Navbar, Footer, MobileMenu
│   ├── hero/         # HeroSection
│   ├── product/      # ProductCard, ProductList, Modal ฯลฯ
│   ├── ui/           # Button และ UI ย่อย
│   └── icons/        # SVG icons
├── data/product.ts   # ข้อมูลสินค้า (source of truth) + helper สร้าง path รูป
├── types/            # TypeScript types
└── constants/        # ข้อมูลเมนู
public/images/        # รูปภาพทั้งหมด
```

### แนวคิดหลัก

- **Data-driven** — สินค้าทั้งหมดมาจาก [data/product.ts](src/data/product.ts) ที่เดียว
  มี helper (`img`, `galleriesImg`) สร้าง path รูปให้ การเพิ่มสินค้าหรือเปลี่ยนไฟล์รูปแก้ที่เดียวจบ
- **Component แยกส่วน** — UI แบ่งเป็น component ที่ reuse ได้ ดูแลง่าย
- **Mobile-first** — เขียน style จากจอเล็กก่อน แล้วเพิ่ม breakpoint (`sm` / `md` / `xl` / `2xl`)
