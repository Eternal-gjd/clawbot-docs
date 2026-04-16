# OpenAI Codex 安装配置指南

> 来源：ctok.ai 页面整理版
> 适合对象：想快速安装和配置 Codex CLI 的用户

## 这页讲什么

这是一份面向实操的 OpenAI Codex 安装配置说明，整理了安装方式、环境变量、配置文件位置，以及一些需要注意的风险点。

---

## 1. OpenAI Codex 是什么

OpenAI Codex 是 OpenAI 提供的 AI 编程助手，可用于：

- 代码生成和补全
- 代码解释
- 文档生成
- 编程问答
- 多语言开发辅助

---

## 2. 系统要求

### 基础要求

- Windows 10/11 / macOS 10.14+ / Linux Ubuntu 18.04+
- Python 3.7+
- 稳定网络
- 可用的 OpenAI API 访问凭证

### 推荐配置

- 8GB 以上内存
- 稳定代理或网络环境
- VS Code / PyCharm 等现代编辑器

---

## 3. 安装方式

### 方式一：npm 全局安装

```bash
npm install -g @openai/codex
```

### 方式二：Homebrew 安装（macOS）

```bash
brew install codex
```

### 方式三：下载二进制文件

去 GitHub Releases 下载对应平台版本，然后：

```bash
chmod +x codex
sudo mv codex /usr/local/bin/
```

---

## 4. 验证安装

```bash
codex --version
codex
```

页面里还提到一个高级参数：

```bash
codex --dangerously-bypass-approvals-and-sandbox
```

### 风险提醒

这个参数会绕过审批和沙盒限制，只有你明确知道自己在做什么时再用。默认不要开。

---

## 5. 环境变量配置

### PowerShell

```powershell
$env:OPENAI_BASE_URL = "你的url"
$env:OPENAI_API_KEY = "你的令牌"
```

### CMD

```cmd
set OPENAI_BASE_URL=你的url
set OPENAI_API_KEY=你的令牌
```

### CMD 永久设置

```cmd
setx OPENAI_BASE_URL "你的url"
setx OPENAI_API_KEY "你的令牌"
```

### macOS / Linux

```bash
# 临时设置
export OPENAI_BASE_URL="你的url"
export OPENAI_API_KEY="你的令牌"

# 永久写入 shell 配置
echo 'export OPENAI_BASE_URL="你的url"' >> ~/.bashrc
echo 'export OPENAI_API_KEY="你的令牌"' >> ~/.bashrc

source ~/.bashrc
```

---

## 6. Codex 配置文件

### `~/.codex/config.toml`

```toml
model_provider = "crs"
model = "gpt-5-codex"
model_reasoning_effort = "high"
disable_response_storage = true
preferred_auth_method = "apikey"

[model_providers.crs]
name = "crs"
base_url = "你的url"
wire_api = "responses"
```

### `~/.codex/auth.json`

```json
{
  "OPENAI_API_KEY": "你的API密钥"
}
```

---

## 7. 使用建议

### 默认建议

- 先用正常模式启动 `codex`
- 先确认 `OPENAI_BASE_URL` 和 `OPENAI_API_KEY` 正常
- 只有真的需要时再改 `config.toml`
- 不要默认启用危险参数

### 如果你在用中转 API

重点确认这几个点：

1. 这个服务是否兼容 OpenAI Responses API
2. `base_url` 是否要求带 `/v1`
3. 模型名是不是 `gpt-5-codex`
4. 密钥格式是否符合服务商要求

---

## 8. 常见问题

### 安装后找不到命令

检查全局 npm bin 目录是否在 PATH 里。

### 配了环境变量还是认证失败

优先检查：

- key 是否填错
- base_url 是否填错
- 中转站是否支持 Codex 所需接口

### 命令能启动但请求失败

大概率是模型名、接口协议或 base_url 不匹配。

---

## 9. 相关链接

- [OpenAI 官方文档](https://platform.openai.com/docs)
- [Codex Guide](https://platform.openai.com/docs/guides/code)
- [API Reference](https://platform.openai.com/docs/api-reference)
- [OpenAI Codex Releases](https://github.com/openai/codex/releases)

---

## 10. 一句话建议

如果你只是想先跑起来：

1. 装 `@openai/codex`
2. 配 `OPENAI_BASE_URL` 和 `OPENAI_API_KEY`
3. 跑 `codex --version`
4. 再决定要不要补 `~/.codex/config.toml`
