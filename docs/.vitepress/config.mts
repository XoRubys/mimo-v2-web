import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/docs/xiaomi/mimo/',
  title: "MWAPI",
  description: "MiMo V2 Studio Web API",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '入门指南', link: '/guide/preface' },
      { text: 'API 文档', link: '/api/' },
    ],

    sidebar: [
      {
        text: '入门指南',
        items: [
          { text: '前言', link: '/guide/preface' },
          { text: '错误码', link: '/guide/api-error' },
        ]
      },
      {
        text: 'API 文档',
        items: [
          { text: '概述', link: '/api/' },
          { text: '获取用户信息', link: '/api/user/mi/get' },
          { text: '获取聊天历史', link: '/api/chat/conversation/list' },
          { text: '保存会话', link: '/api/chat/conversation/save' },
          { text: '生成会话标题', link: '/api/chat/conversation/genTitle' },
          { text: '获取对话内容', link: '/api/chat/dialog/list' },
          { text: 'AI 对话', link: '/api/bot/chat' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/xorubys/mimo-v2-web' }
    ]
  }
})
