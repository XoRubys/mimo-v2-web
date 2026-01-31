# API 文档

本文档包含小米 Web AI 的所有 API 接口说明。

::: warning 数据声明
本文档中所有请求示例和响应示例的数据均为根据真实数据改编模拟，**并非真实数据**。实际调用接口时，请使用您自己账号获取的真实数据。
:::

## 接口列表

- [获取用户信息](./user/mi/get) - 获取当前登录用户的详细信息
- [获取聊天历史](./chat/conversation/list) - 获取用户的聊天会话历史列表
- [保存会话](./chat/conversation/save) - 创建新会话或修改会话标题
- [生成会话标题](./chat/conversation/genTitle) - 根据对话内容自动生成简化标题
- [获取对话内容](./chat/dialog/list) - 获取指定会话中的对话历史内容
- [AI 对话](./bot/chat) - 与 AI 进行对话（SSE 流式响应）

## 通用说明

### 请求格式

所有 API 请求都需要在请求头中携带 Cookie 认证信息：

```http
Cookie: serviceToken=your_service_token; xiaomichatbot_ph=your_ph_value; userId=your_user_id
Content-Type: application/json
```

### 响应格式

API 响应统一返回 JSON 格式：

```json
{
  "code": 0,
  "message": "success",
  "data": {}
}
```

### 错误处理

当接口调用失败时，会返回相应的错误码和错误信息。详见 [错误码](../guide/api-error) 文档。

<UpdateTime :timestamp="1769758720000" />