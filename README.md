# ⛏️ CraftPedia — Minecraft Community Wiki

![VitePress](https://img.shields.io/badge/Built%20with-VitePress-646CFF?style=flat-square&logo=vitepress)
![Sveltia CMS](https://img.shields.io/badge/CMS-Sveltia%20CMS-FF3E00?style=flat-square)
![Netlify](https://img.shields.io/badge/Hosted%20on-Netlify-00C7B7?style=flat-square&logo=netlify)
![Languages](https://img.shields.io/badge/Languages-English%20%7C%20မြန်မာ-success?style=flat-square)

**CraftPedia** is a modern, bilingual (English & Burmese) community wiki and encyclopedia built for Minecraft players. Designed with a clean, Wikipedia-inspired interface and a **zero-backend architecture**, it empowers players to log in, share their survival worlds, recommend mods/shaders, and ask or answer community questions directly from the browser.

---

## ✨ Key Features

- **🌐 Bilingual Support (i18n):** Seamless switching between **English** (`/`) and **Burmese / မြန်မာ** (`/my/`).
- **✍️ Zero-Backend Community Editing:** Powered by **Sveltia CMS** and **Netlify Identity**, allowing any registered player to write, edit, and upload images via `/admin` without touching code or Git commands.
- **⚡ Fast & Responsive UI:** Built with **VitePress**, featuring instant local search, dark/light mode toggle, and mobile-friendly navigation.
- **📚 Organized Knowledge Base:**
  - **🌍 Worlds & Experiences:** Survival worlds, seeds, builds, and adventure logs.
  - **🧩 Mods, Shaders & Packs:** Curated recommendations for Mods, Modpacks, Resource Packs, Datapacks, and Shaders.
  - **❓ Community Q&A:** Technical troubleshooting, Redstone guides, and player FAQs.

---

## 📂 Project Structure

```text
craftpedia/
├── .vitepress/
│   └── config.mjs          # VitePress configuration, navigation, and i18n locales
├── public/
│   ├── admin/
│   │   ├── index.html      # Sveltia CMS entry point
│   │   └── config.yml      # CMS collections & fields configuration
│   └── uploads/            # Player-uploaded images and media
├── worlds/                 # [EN] Worlds & Experiences markdown files
├── packs/                  # [EN] Mods, Shaders & Packs markdown files
├── qna/                    # [EN] Community Q&A markdown files
├── my/                     # [MY] Burmese language wiki directory
│   ├── index.md            # Burmese homepage
│   ├── worlds/             # [MY] Worlds & Experiences
│   ├── packs/              # [MY] Mods, Shaders & Packs
│   └── qna/                # [MY] Community Q&A
├── index.md                # English homepage
└── package.json            # Dependencies and build scripts
```

---

## 🚀 Local Development

To run **CraftPedia** locally on your machine:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR-USERNAME/craftpedia.git
   cd craftpedia
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npx vitepress dev --port 3000
   ```
   Open `http://localhost:3000` in your browser.

---

## ☁️ Deployment & Player Login Setup (Netlify)

1. Push this repository to **GitHub**.
2. Import the repository into **Netlify**:
   - **Build command:** `npm run docs:build`
   - **Publish directory:** `.vitepress/dist`
3. Enable Player Authentication:
   - Go to **Project configuration > Identity** and click **Enable Identity**.
   - Set **Registration preferences** to **Open** so players can sign up.
   - Scroll down to **Services > Git Gateway** and click **Enable Git Gateway**.
4. Players can now visit `https://your-site.netlify.app/admin/index.html` to create an account and contribute to the wiki!

---

## 🤝 Contributing

Want to add a new world story, shader recommendation, or guide?
1. Visit the live site and click **✍️ Write / Edit** in the top navigation bar.
2. Sign up or log in with your email.
3. Choose the appropriate category (English or Myanmar) and click **Publish**!
