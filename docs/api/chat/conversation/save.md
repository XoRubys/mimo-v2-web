# 保存会话接口

创建新会话或修改已有会话的标题。

## 接口信息

| 项目 | 内容 |
|------|------|
| 接口地址 | `/open-apis/chat/conversation/save` |
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
| conversationId | string | 是 | 会话 ID，不存在时创建新会话，存在时修改标题 |
| title | string | 是 | 会话标题 |
| type | string | 是 | 会话类型，固定值为 `chat` |

## 请求示例

### 创建新会话

```http
POST /open-apis/chat/conversation/save?xiaomichatbot_ph=kP7mNqRs9TuVwXyZaBcDeFg%3D%3D HTTP/1.1
Host: aistudio.xiaomimimo.com
Cookie: serviceToken=xxx; xiaomichatbot_ph=xxx; userId=xxx
Content-Type: application/json

{
  "conversationId": "pQr9sTu5vWxYzAb3cDeFg7iJkLmN",
  "title": "新对话",
  "type": "chat"
}
```

### 修改会话标题

```http
POST /open-apis/chat/conversation/save?xiaomichatbot_ph=kP7mNqRs9TuVwXyZaBcDeFg%3D%3D HTTP/1.1
Host: aistudio.xiaomimimo.com
Cookie: serviceToken=xxx; xiaomichatbot_ph=xxx; userId=xxx
Content-Type: application/json

{
  "conversationId": "pQr9sTu5vWxYzAb3cDeFg7iJkLmN",
  "title": "修改后的标题",
  "type": "chat"
}
```

## 响应示例

### 成功响应

```json
{
  "code": 0,
  "msg": "成功",
  "data": {
    "id": 562847,
    "creator": "8372946150",
    "createTime": "2026-03-08 14:52:19",
    "updater": "8372946150",
    "updateTime": "2026-03-08 14:52:19",
    "title": "新对话",
    "conversationId": "pQr9sTu5vWxYzAb3cDeFg7iJkLmN",
    "deleteFlag": 0,
    "type": "chat"
  }
}
```

## 响应参数说明

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 状态码，0 表示成功 |
| msg | string | 响应消息 |
| data | object | 会话数据 |
| data.id | number | 记录 ID |
| data.creator | string | 创建者用户 ID |
| data.createTime | string | 创建时间 |
| data.updater | string | 更新者用户 ID |
| data.updateTime | string | 最后更新时间 |
| data.title | string | 会话标题 |
| data.conversationId | string | 会话唯一标识 |
| data.deleteFlag | number | 删除标记，0 表示未删除 |
| data.type | string | 会话类型 |

## 错误码

| 错误码 | 说明 |
|--------|------|
| 0 | 成功 |
| 1001 | 认证失败 |
| 1002 | 参数错误 |

## 注意事项

1. 当 `conversationId` 不存在时，会创建一个新的会话
2. 当 `conversationId` 已存在时，会修改该会话的标题
3. `type` 字段固定值为 `chat`
4. `xiaomichatbot_ph` 参数需要从 Cookie 中获取，并进行 URL 编码

---

<UpdateTime :timestamp="1769832120000" />
