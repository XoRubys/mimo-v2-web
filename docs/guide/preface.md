# 入门指南

欢迎来到 MWAPI 文档系统！本指南将帮助你了解如何使用这个文档系统。

::: warning 重要声明
本文档是通过抓包分析整理的小米 Web AI 功能接口文档，**非官方文档**，仅供学习研究使用。请勿用于商业用途或任何非法用途。
:::

## 关于本项目

本项目通过抓包分析小米 Web AI 的功能接口，整理出了相关的 API 调用方式。这些接口并非公开的官方 API，可能会随时变更或失效。

### 使用说明

- 本文档仅供学习和研究目的
- 请勿用于商业用途
- 请勿滥用接口，以免对原服务造成影响
- 接口可能会随时变更，请以实际情况为准

## 接口分类

根据抓包分析，小米 Web AI 的接口主要分为以下几类：

### 文本生成接口
用于生成文本内容，包括对话、写作、翻译等功能。

如果你已经了解了接口的调用方式，可以直接通过 HTTP 请求调用接口。

## 基础配置

### 基础 URL

所有 API 请求的基础 URL 为：

```
https://aistudio.xiaomimimo.com
```

### 请求头配置

调用接口时，需要在请求头中包含以下必要信息：

| 请求头 | 说明 | 示例 |
|--------|------|------|
| `Cookie` | 包含认证信息的 Cookie | `serviceToken=xxxxxx; xiaomichatbot_ph=xxxxxx; userId=xxxxxx` |
| `Content-Type` | 请求体格式 | `application/json` |

### 认证信息获取

小米 Web AI 使用自定义的 Cookie 认证机制，而非标准的 Bearer Token 格式。**Cookie 通过小米账号登录后自动获取**。

获取步骤：

1. 打开浏览器，访问小米 Web AI 页面
2. **使用小米账号登录**
3. 登录成功后，按 F12 打开浏览器开发者工具
4. 切换到 Network（网络）标签
5. 在页面中进行任意操作（如发送对话），找到 API 请求
6. 在请求头中找到 `Cookie`，复制其中的 `serviceToken`、`xiaomichatbot_ph` 和 `userId` 值

**Cookie 格式示例：**

```
Cookie: serviceToken=your_service_token; xiaomichatbot_ph=your_ph_value; userId=your_user_id; ...
```

::: warning 注意
- Cookie 通过**小米账号登录**后自动获取，无需手动构造
- 认证信息通常具有时效性，过期后需要重新登录获取
- 请确保同时包含 `serviceToken`、`xiaomichatbot_ph` 和 `userId`，缺一不可
:::

## 注意事项

::: danger 接口变更
由于这些接口是非公开的官方 API，小米可能会随时调整或关闭这些接口。如果发现接口无法使用，请以实际情况为准。
:::

::: info 接口限制
部分接口可能需要特定的认证信息或参数，这些信息需要通过抓包获取。文档中可能不会包含所有必要的认证信息。
:::

::: tip 学习目的
请将本文档作为学习资料，了解 Web AI 的实现原理和接口设计思路，而不是用于生产环境。
:::

## 贡献

如果你在使用过程中发现了新的接口或有更详细的使用方法，欢迎提交 Issue 或 Pull Request。

::: info
请注意，本文档中记录的 API 接口是通过抓包分析得出的，可能存在不完整或不准确的情况。如有问题，欢迎提交 Issue 或 Pull Request。
:::

<UpdateTime :timestamp="1769758720000" />