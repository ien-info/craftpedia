import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "CraftPedia",
  description: "Minecraft Player Wiki for Worlds, Mods, Shaders & Q&A",

  // ဘာသာစကား ၂ မျိုး သတ်မှတ်ခြင်း (i18n)
  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        // English nav ထဲတွင် အောက်ပါအတိုင်း ပြင်ပါ
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Worlds', link: '/worlds/welcome' },
          { text: 'Mods & Packs', link: '/packs/welcome' },
          { text: 'Q&A', link: '/qna/welcome' },
          { text: '✍️ Write / Edit', link: '/admin/index.html', target: '_blank' }
        ],
        sidebar: [
          {
            text: '🌍 Worlds & Experiences',
            items: [{ text: 'Welcome', link: '/worlds/welcome' }]
          },
          {
            text: '🧩 Mods, Shaders & Packs',
            items: [{ text: 'Recommended Packs', link: '/packs/welcome' }]
          },
          {
            text: '❓ Community Q&A',
            items: [{ text: 'FAQ & Guides', link: '/qna/welcome' }]
          }
        ]
      }
    },
    my: {
      label: 'မြန်မာ (Myanmar)',
      lang: 'my',
      link: '/my/',
      themeConfig: {
        // Myanmar nav ထဲတွင် အောက်ပါအတိုင်း ပြင်ပါ
        nav: [
          { text: 'ပင်မစာမျက်နှာ', link: '/my/' },
          { text: 'Worlds', link: '/my/worlds/welcome' },
          { text: 'Mods & Packs', link: '/my/packs/welcome' },
          { text: 'အမေးအဖြေ', link: '/my/qna/welcome' },
          { text: '✍️ စာရေးမည်', link: '/admin/index.html', target: '_blank' }
        ],
        sidebar: [
          {
            text: '🌍 Worlds & Experiences',
            items: [{ text: 'မိတ်ဆက် (Welcome)', link: '/my/worlds/welcome' }]
          },
          {
            text: '🧩 Mods, Shaders & Packs',
            items: [{ text: 'အကြံပြု Pack များ', link: '/my/packs/welcome' }]
          },
          {
            text: '❓ Q&A (အမေးအဖြေ)',
            items: [{ text: 'မေးလေ့ရှိသော မေးခွန်းများ', link: '/my/qna/welcome' }]
          }
        ]
      }
    }
  },

  themeConfig: {
    search: {
      provider: 'local'
    }
  }
})