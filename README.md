# MiMo Web API 文档

[![VitePress](https://img.shields.io/badge/VitePress-1.6.3-646CFF?logo=vite)](https://vitepress.dev/)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

> 小米 AI 助手 MiMo Web 版本的 API 接口文档，基于逆向工程整理。

## 📚 在线文档

**[https://xorubys.github.io/mimo-v2-web/](https://xorubys.github.io/mimo-v2-web/)**

## 🚀 项目简介

本项目整理了小米 AI 助手 MiMo Web 版本的 API 接口文档，包括：

- 🔐 用户认证接口
- 💬 会话管理接口
- 🤖 AI 对话接口（SSE 流式响应）

所有接口数据均基于真实接口逆向分析，请求和响应示例中的数据为虚拟模拟数据。

## 📖 接口列表

| 接口 | 路径 | 说明 |
|------|------|------|
| 获取用户信息 | `/open-apis/user/mi/get` | 获取当前登录用户的详细信息 |
| 获取聊天历史 | `/open-apis/chat/conversation/list` | 获取用户的聊天会话历史列表 |
| 保存会话 | `/open-apis/chat/conversation/save` | 创建新会话或修改会话标题 |
| 生成会话标题 | `/open-apis/chat/conversation/genTitle` | 根据对话内容自动生成简化标题 |
| 获取对话内容 | `/open-apis/chat/dialog/list` | 获取指定会话中的对话历史内容 |
| AI 对话 | `/open-apis/bot/chat` | 与 AI 进行对话（SSE 流式响应） |

## 🛠️ 本地开发

```bash
# 克隆项目
git clone https://github.com/xorubys/mimo-v2-web.git
cd mimo-v2-web

# 安装依赖
npm install

# 启动开发服务器
npm run docs:dev

# 构建文档
npm run docs:build

# 预览构建结果
npm run docs:preview
```

## 📁 项目结构

```
docs/
├── .vitepress/          # VitePress 配置
│   ├── config.mts       # 站点配置
│   └── theme/           # 自定义主题
├── api/                 # API 文档
│   ├── index.md         # API 概述
│   ├── user/mi/get.md   # 获取用户信息
│   ├── chat/conversation/
│   │   ├── list.md      # 获取聊天历史
│   │   ├── save.md      # 保存会话
│   │   └── genTitle.md  # 生成会话标题
│   ├── chat/dialog/
│   │   └── list.md      # 获取对话内容
│   └── bot/
│       └── chat.md      # AI 对话
├── guide/               # 入门指南
│   ├── preface.md       # 前言
│   └── api-error.md     # 错误码
└── index.md             # 首页
```

## ⚠️ 免责声明

1. 本项目仅供学习研究使用，不得用于商业用途
2. 使用本项目提供的 API 接口需遵守小米相关服务条款
3. 本项目中的数据示例均为虚拟模拟数据，非真实数据
4. 如因使用本项目造成任何损失，作者不承担任何责任

## 📄 许可证

[MIT](LICENSE) License © 2026 [xorubys](https://github.com/xorubys)

---

<p align="center">
  <a href="https://github.com/xorubys/mimo-v2-web">GitHub</a> •
  <a href="https://xorubys.github.io/mimo-v2-web/">在线文档</a>
</p>
