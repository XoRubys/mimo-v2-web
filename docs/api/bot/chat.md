# 对话接口

与 AI 进行对话，采用 SSE（Server-Sent Events）流式响应方式返回 AI 回复内容。

## 接口信息

| 项目 | 内容 |
|------|------|
| 接口地址 | `/open-apis/bot/chat` |
| 请求方法 | POST |
| 内容类型 | application/json |
| 响应类型 | text/event-stream (SSE) |

## 请求参数

### 请求头

| 参数名 | 必填 | 说明 |
|--------|------|------|
| Cookie | 是 | 包含 serviceToken、xiaomichatbot_ph、userId 的认证信息 |
| Content-Type | 是 | 固定值：application/json |
| Accept | 是 | 固定值：text/event-stream |

### 查询参数

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| xiaomichatbot_ph | string | 是 | 从 Cookie 中获取的 pH 值，需要 URL 编码 |

### 请求体

| 参数名 | 类型 | 必填 | 说明 |
|--------|------|------|------|
| msgId | string | 是 | 消息唯一标识，由客户端生成 |
| conversationId | string | 是 | 会话 ID，用于保持上下文 |
| query | string | 是 | 用户输入的消息内容 |
| isEditedQuery | boolean | 是 | 是否为编辑后的查询 |
| modelConfig | object | 是 | 模型配置参数 |
| modelConfig.enableThinking | boolean | 是 | 是否启用思考模式 |
| modelConfig.temperature | number | 是 | 温度参数，控制随机性 |
| modelConfig.topP | number | 是 | Top P 采样参数 |
| modelConfig.webSearchStatus | string | 是 | 联网搜索状态，可选值：disabled/enabled |
| modelConfig.model | string | 是 | 使用的模型名称 |
| multiMedias | array | 是 | 多媒体内容，无则为空数组 |

## 请求示例

```http
POST /open-apis/bot/chat?xiaomichatbot_ph=kP7mNqRs9TuVwXyZaBcDeFg%3D%3D HTTP/1.1
Host: aistudio.xiaomimimo.com
Cookie: serviceToken=xxx; xiaomichatbot_ph=xxx; userId=xxx
Content-Type: application/json
Accept: text/event-stream

{
  "msgId": "8fD2gH4jK6lM8nP0qR4sT6uV8wX",
  "conversationId": "pQr9sTu5vWxYzAb3cDeFg7iJkLmN",
  "query": "今天天气怎么样",
  "isEditedQuery": false,
  "modelConfig": {
    "enableThinking": false,
    "temperature": 0.8,
    "topP": 0.95,
    "webSearchStatus": "disabled",
    "model": "mimo-v2-flash-studio"
  },
  "multiMedias": []
}
```

## 响应格式

接口采用 SSE（Server-Sent Events）流式响应，每条消息格式如下：

```
id:{消息ID}
event:{事件类型}
data:{JSON数据}

```

### 事件类型说明

| 事件类型 | 说明 |
|----------|------|
| dialogId | 返回对话 ID |
| message | 返回 AI 生成的文本内容 |
| usage | 返回 Token 使用情况 |
| finish | 对话结束标记 |

## 响应示例

### dialogId 事件

```
id:8fD2gH4jK6lM8nP0qR4sT6uV8wX
event:dialogId
data:{"content":"384756"}
```

### message 事件

```
id:8fD2gH4jK6lM8nP0qR4sT6uV8wX
event:message
data:{"type":"text","content":"今"}
```

### usage 事件

```
id:8fD2gH4jK6lM8nP0qR4sT6uV8wX
event:usage
data:{"promptTokens":142,"completionTokens":8,"totalTokens":150,"nativeUsage":{"completion_tokens":8,"prompt_tokens":142,"total_tokens":150,"completion_tokens_details":{"reasoning_tokens":0}}}
```

### finish 事件

```
id:8fD2gH4jK6lM8nP0qR4sT6uV8wX
event:finish
data:{"content":"[DONE]"}
```

## 响应参数说明

### message 事件 data 字段

| 参数名 | 类型 | 说明 |
|--------|------|------|
| type | string | 内容类型，固定为 text |
| content | string | AI 生成的文本片段 |

### usage 事件 data 字段

| 参数名 | 类型 | 说明 |
|--------|------|------|
| promptTokens | number | 提示词 Token 数 |
| completionTokens | number | 生成内容 Token 数 |
| totalTokens | number | 总 Token 数 |
| nativeUsage | object | 原始使用量数据 |
| nativeUsage.completion_tokens | number | 生成内容 Token 数 |
| nativeUsage.prompt_tokens | number | 提示词 Token 数 |
| nativeUsage.total_tokens | number | 总 Token 数 |
| nativeUsage.completion_tokens_details | object | 生成 Token 详情 |
| nativeUsage.completion_tokens_details.reasoning_tokens | number | 推理 Token 数 |

## 错误码

| 错误码 | 说明 |
|--------|------|
| 0 | 成功 |
| 1001 | 认证失败 |
| 1002 | 参数错误 |
| 1003 | 模型调用失败 |

## 注意事项

1. 该接口使用 SSE 流式响应，需要客户端支持 EventSource 或类似机制
2. AI 回复内容会通过多个 `message` 事件分段返回，需要客户端拼接完整内容
3. `msgId` 需要由客户端生成，建议使用 UUID 或随机字符串
4. `conversationId` 用于保持对话上下文，新对话需要先生成会话 ID
5. `modelConfig.model` 可选值包括：`mimo-v2-flash-studio` 等
6. `xiaomichatbot_ph` 参数需要从 Cookie 中获取，并进行 URL 编码

---

<UpdateTime :timestamp="1769832120000" />
