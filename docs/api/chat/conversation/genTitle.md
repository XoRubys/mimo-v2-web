# 生成会话标题接口

根据对话内容自动生成简化的会话标题。

## 接口信息

| 项目 | 内容 |
|------|------|
| 接口地址 | `/open-apis/chat/conversation/genTitle` |
| 请求方法 | POST |
| 内容类型 | application/json |

## 请求参数

### 请求头

| 参数名 | 必填 | 说明 |
|--------|------|------|
| Cookie | 是 | 包含 serviceToken、xiaomichatbot_ph、userId 的认证信息 |
| Content-Type | 是 | 固定值：application/json |

### 查询参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| xiaomichatbot_ph | string | 是 | 从 Cookie 中获取的 pH 值，需要 URL 编码 |

### 请求体

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| content | string | 是 | 对话内容，用于生成标题 |

## 请求示例

```http
POST /open-apis/chat/conversation/genTitle?xiaomichatbot_ph=kP7mNqRs9TuVwXyZaBcDeFg%3D%3D HTTP/1.1
Host: aistudio.xiaomimimo.com
Cookie: serviceToken=xxx; xiaomichatbot_ph=xxx; userId=xxx
Content-Type: application/json

{
  "content": "你好 你好呀！今天有什么我可以帮你的吗？"
}
```

## 响应示例

### 成功响应

```json
{
  "code": 0,
  "msg": "成功",
  "data": "你好"
}
```

## 响应参数说明

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 状态码，0 表示成功 |
| msg | string | 响应消息 |
| data | string | 生成的简化标题 |

## 错误码

| 错误码 | 说明 |
|--------|------|
| 0 | 成功 |
| 1001 | 认证失败 |
| 1002 | 参数错误 |

## 注意事项

1. 该接口为公共 API，用于根据对话内容智能生成简化的会话标题
2. `content` 参数通常传入用户的第一条消息和 AI 的回复
3. 生成的标题会简化原始内容，便于用户快速识别会话主题
4. `xiaomichatbot_ph` 参数需要从 Cookie 中获取，并进行 URL 编码

---

<UpdateTime :timestamp="1769832120000" />
