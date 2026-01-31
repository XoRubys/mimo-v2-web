# 获取聊天历史记录接口

获取用户的聊天会话历史列表。

## 接口信息

| 项目 | 内容 |
|------|------|
| 接口地址 | `/open-apis/chat/conversation/list` |
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
| pageInfo | object | 是 | 分页信息 |
| pageInfo.pageNum | number | 是 | 页码，从 1 开始 |
| pageInfo.pageSize | number | 是 | 每页数量 |

## 请求示例

```http
POST /open-apis/chat/conversation/list?xiaomichatbot_ph=kP7mNqRs9TuVwXyZaBcDeFg%3D%3D HTTP/1.1
Host: aistudio.xiaomimimo.com
Cookie: serviceToken=xxx; xiaomichatbot_ph=xxx; userId=xxx
Content-Type: application/json

{
  "pageInfo": {
    "pageNum": 1,
    "pageSize": 20
  }
}
```

## 响应示例

### 成功响应

```json
{
  "code": 0,
  "msg": "成功",
  "data": {
    "total": 1,
    "pageNum": 1,
    "dataList": [
      {
        "id": 847291,
        "creator": "8372946150",
        "createTime": "2026-02-14 09:23:17",
        "updater": "8372946150",
        "updateTime": "2026-02-14 09:45:33",
        "title": "周末旅行计划",
        "conversationId": "pQr9sTu5vWxYzAb3cDeFg7iJkLmN",
        "deleteFlag": 0,
        "type": "chat"
      }
    ]
  }
}
```

## 响应参数说明

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 状态码，0 表示成功 |
| msg | string | 响应消息 |
| data | object | 分页数据 |
| data.total | number | 总记录数 |
| data.pageNum | number | 当前页码 |
| data.dataList | array | 会话列表 |
| data.dataList[].id | number | 记录 ID |
| data.dataList[].creator | string | 创建者用户 ID |
| data.dataList[].createTime | string | 创建时间 |
| data.dataList[].updater | string | 更新者用户 ID |
| data.dataList[].updateTime | string | 最后更新时间 |
| data.dataList[].title | string | 会话标题 |
| data.dataList[].conversationId | string | 会话唯一标识 |
| data.dataList[].deleteFlag | number | 删除标记，0 表示未删除 |
| data.dataList[].type | string | 会话类型，chat 表示普通对话 |

## 状态码

| 状态码 | 说明 |
|--------|------|
| 0 | 成功 |

## 注意事项

1. `xiaomichatbot_ph` 参数需要从 Cookie 中获取，并进行 URL 编码
2. 会话列表按 `updateTime` 倒序排列，最新的会话排在前面
3. `conversationId` 用于后续获取会话详情或继续对话

---

<UpdateTime :timestamp="1769832120000" />
