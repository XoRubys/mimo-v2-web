# 获取用户信息接口

获取当前登录用户的详细信息。

## 接口信息

| 项目 | 内容 |
|------|------|
| 接口地址 | `/open-apis/user/mi/get` |
| 请求方法 | GET |
| 内容类型 | application/json |

## 请求参数

### 请求头

| 参数名 | 必填 | 说明 |
|--------|------|------|
| Cookie | 是 | 包含 serviceToken、xiaomichatbot_ph、userId 的认证信息 |

## 请求示例

```http
GET /open-apis/user/mi/get HTTP/1.1
Host: aistudio.xiaomimimo.com
Cookie: serviceToken=xxx; xiaomichatbot_ph=xxx; userId=xxx
```

## 响应示例

### 成功响应

```json
{
  "code": 0,
  "msg": "成功",
  "data": {
    "userId": "8372946150",
    "userCode": "9k3m7p2q-r8s4-1",
    "userName": "蓝月旅人",
    "avatar": "https://cdn.cnbj1.fds.api.mi-img.com/user-avatar/aB9x_Y-zKlm789+NoPqRsTuVwXyZ-37d91e48.jpg",
    "isChildAccount": false,
    "watermark": "+Xk9mNpQr5StUvWxYzAbCdEf==",
    "isAgreed": true,
    "idc": "China",
    "bannedStatus": "NOT_BANNED"
  }
}
```

## 响应参数说明

| 参数名 | 类型 | 说明 |
|--------|------|------|
| code | number | 状态码，0 表示成功 |
| msg | string | 响应消息 |
| data | object | 用户数据 |
| data.userId | string | 用户 ID |
| data.userCode | string | 用户唯一编码 |
| data.userName | string | 用户昵称 |
| data.avatar | string | 用户头像 URL |
| data.isChildAccount | boolean | 是否为子账号 |
| data.watermark | string | 水印信息 |
| data.isAgreed | boolean | 是否同意协议 |
| data.idc | string | 数据中心区域 |
| data.bannedStatus | string | 账号状态，NOT_BANNED 表示正常 |

## 状态码

| 状态码 | 说明 |
|--------|------|
| 0 | 成功 |

## 注意事项

1. 该接口用于获取当前登录用户的基本信息
2. 请求时必须携带有效的 Cookie 认证信息
3. `watermark` 字段可能用于后续请求的数据水印验证

---

<UpdateTime :timestamp="1769832120000" />
