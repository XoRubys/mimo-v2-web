# 获取对话内容接口

获取指定会话中的对话历史内容。

## 接口信息

| 项目 | 内容 |
|------|------|
| 接口地址 | `/open-apis/chat/dialog/list` |
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
| queryParam | object | 是 | 查询参数 |
| queryParam.conversationId | string | 是 | 会话 ID |
| pageInfo | object | 是 | 分页信息 |
| pageInfo.pageNum | number | 是 | 页码，从 1 开始 |
| pageInfo.pageSize | number | 是 | 每页数量 |

## 请求示例

```http
POST /open-apis/chat/dialog/list?xiaomichatbot_ph=kP7mNqRs9TuVwXyZaBcDeFg%3D%3D HTTP/1.1
Host: aistudio.xiaomimimo.com
Cookie: serviceToken=xxx; xiaomichatbot_ph=xxx; userId=xxx
Content-Type: application/json

{
  "queryParam": {
    "conversationId": "pQr9sTu5vWxYzAb3cDeFg7iJkLmN"
  },
  "pageInfo": {
    "pageNum": 1,
    "pageSize": 10
  }
}
```

## 响应示例

### 成功响应

```json
{
  "code": 0,
  "msg": "成功",
  "data": [
    {
      "conversationId": "pQr9sTu5vWxYzAb3cDeFg7iJkLmN",
      "msgId": "7aB3cD9eF5gH1iJ7kL3mN9oP5qR",
      "inputInfo": {
        "query": "你好",
        "multiMedias": []
      },
      "createTime": "2026-04-22 16:38:51",
      "updateTime": "2026-04-22 16:38:54",
      "dialogLogDetailList": [
        {
          "id": 384756,
          "result": "<think>\u0000用户向我打招呼。我应该以友好、亲切的方式回应，不需要自我介绍，直接进入对话。根据规则，我要保持高情商沟通，做到共情、友好、不摆架子。\n\n用户说的是中文"你好"，所以我应该用中文回复。我可以简单回应一下，然后询问有什么可以帮忙的，这样能自然地开启对话。</think>\u0000你好！有什么我可以帮你的吗？",
          "dialogStatus": "success",
          "model": "mimo-v2-flash-studio",
          "modelConfig": "{\"enableThinking\":true,\"model\":\"mimo-v2-flash-studio\",...}",
          "usage": {
            "promptTokens": 157,
            "completionTokens": 79,
            "totalTokens": 236,
            "queryTokens": 77,
            "assistantTokens": 9,
            "reasoningTokens": 70
          },
          "modelCostTime": 912,
          "thinkingCostTime": 968,
          "version": "v2"
        }
      ]
    }
  ]
}
```

## 响应参数说明

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 状态码，0 表示成功 |
| msg | string | 响应消息 |
| data | array | 对话列表 |
| data[].conversationId | string | 会话 ID |
| data[].msgId | string | 消息 ID |
| data[].inputInfo | object | 输入信息 |
| data[].inputInfo.query | string | 用户输入的查询内容 |
| data[].inputInfo.multiMedias | array | 多媒体内容 |
| data[].createTime | string | 创建时间 |
| data[].updateTime | string | 最后更新时间 |
| data[].dialogLogDetailList | array | 对话详情列表 |
| data[].dialogLogDetailList[].id | number | 对话记录 ID |
| data[].dialogLogDetailList[].result | string | AI 回复内容（包含思考过程和最终回复） |
| data[].dialogLogDetailList[].dialogStatus | string | 对话状态，success 表示成功 |
| data[].dialogLogDetailList[].model | string | 使用的模型名称 |
| data[].dialogLogDetailList[].modelConfig | string | 模型配置 JSON 字符串 |
| data[].dialogLogDetailList[].usage | object | Token 使用情况 |
| data[].dialogLogDetailList[].usage.promptTokens | number | 提示词 Token 数 |
| data[].dialogLogDetailList[].usage.completionTokens | number | 生成内容 Token 数 |
| data[].dialogLogDetailList[].usage.totalTokens | number | 总 Token 数 |
| data[].dialogLogDetailList[].usage.queryTokens | number | 查询 Token 数 |
| data[].dialogLogDetailList[].usage.assistantTokens | number | 助手回复 Token 数 |
| data[].dialogLogDetailList[].usage.reasoningTokens | number | 推理 Token 数 |
| data[].dialogLogDetailList[].modelCostTime | number | 模型调用耗时（毫秒） |
| data[].dialogLogDetailList[].thinkingCostTime | number | 思考耗时（毫秒） |
| data[].dialogLogDetailList[].version | string | 版本号 |

## 错误码

| 错误码 | 说明 |
|--------|------|
| 0 | 成功 |
| 1001 | 认证失败 |
| 1002 | 参数错误 |

## 注意事项

1. 该接口用于获取会话中的历史对话记录
2. `result` 字段包含 AI 的思考过程（`<think>` 标签内）和最终回复内容
3. 如需解析 `modelConfig`，需要将其作为 JSON 字符串进行解析
4. `xiaomichatbot_ph` 参数需要从 Cookie 中获取，并进行 URL 编码

---

<UpdateTime :timestamp="1769832120000" />
