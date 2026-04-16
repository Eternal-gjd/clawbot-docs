# OpenClaw CLI 命令参考手册

> 版本：2026-03  
> 适合对象：刚开始用 OpenClaw，或者想快速查命令的人。

## 这页是干嘛的

这是一份按模块整理的 OpenClaw CLI 速查手册，目标不是覆盖所有细节，而是让你先找到命令入口，再继续深挖。

---

## 1. 安装与初始化

### 首次安装后常用

```bash
openclaw setup
openclaw onboard
openclaw configure
openclaw --version
```

- `openclaw setup`：初始化配置和工作区
- `openclaw onboard`：交互式引导
- `openclaw configure`：重新进入配置向导
- `openclaw --version`：查看版本

---

## 2. 配置管理

```bash
openclaw config get <path>
openclaw config set <path> <value>
openclaw config unset <path>
openclaw config file
openclaw config validate
```

常见例子：

```bash
openclaw config set gateway.mode local
openclaw config set gateway.bind loopback
```

---

## 3. 健康检查

```bash
openclaw doctor
openclaw health
openclaw status
```

- `openclaw doctor`：最实用，优先跑这个
- `openclaw health`：看 Gateway 健康
- `openclaw status`：看会话与最近接收者状态

---

## 4. Gateway 管理

```bash
openclaw gateway start
openclaw gateway stop
openclaw gateway restart
openclaw gateway status
```

前台运行：

```bash
openclaw gateway run
```

---

## 5. Agent 管理

```bash
openclaw agent --message "你好"
openclaw agents list
openclaw agents add
openclaw agents delete <id>
```

---

## 6. 频道管理

```bash
openclaw channels list
openclaw channels status
openclaw channels add
openclaw channels login
openclaw channels logout
```

例子：

```bash
openclaw channels add --channel telegram --token "<Bot Token>"
openclaw channels add --channel discord --token "<Bot Token>"
```

---

## 7. 模型管理

```bash
openclaw models list
openclaw models status
openclaw models set <model>
openclaw models scan
```

别名管理：

```bash
openclaw models aliases list
openclaw models aliases add
openclaw models aliases remove
```

---

## 8. Skills 与 Plugins

```bash
openclaw skills list
openclaw skills info <name>
openclaw skills check

openclaw plugins list
openclaw plugins info <id>
openclaw plugins install <path|.tgz|npm-spec>
openclaw plugins enable <id>
openclaw plugins disable <id>
```

---

## 9. 消息操作

```bash
openclaw message send
openclaw message edit
openclaw message delete
openclaw message poll
openclaw message react
```

---

## 10. 记忆

```bash
openclaw memory status
openclaw memory index
openclaw memory search "<query>"
```

---

## 11. 日志

```bash
openclaw logs
openclaw logs --follow
openclaw logs --limit 200
openclaw logs --json
```

---

## 12. 定时任务

```bash
openclaw cron status
openclaw cron list
openclaw cron add
openclaw cron run <id>
openclaw cron rm <id>
```

---

## 13. 浏览器控制

```bash
openclaw browser start
openclaw browser status
openclaw browser open <url>
openclaw browser snapshot
openclaw browser screenshot
openclaw browser pdf
```

---

## 14. 节点与设备

```bash
openclaw nodes status
openclaw nodes describe <node>
openclaw nodes notify
openclaw nodes run
openclaw nodes invoke
```

---

## 15. 安全相关

```bash
openclaw security audit
openclaw secrets reload
openclaw sandbox
```

---

## 16. 其他常见命令

```bash
openclaw sessions
openclaw backup create
openclaw backup verify
openclaw docs
openclaw dashboard
openclaw tui
```

---

## 17. 全局选项

```bash
--dev
--profile <name>
--no-color
--update
```

---

## 18. 最常用的一组命令

如果你只记一页，记这几个就够了：

```bash
openclaw doctor
openclaw status
openclaw gateway status
openclaw channels status
openclaw models status
openclaw skills list
openclaw logs --follow
```

---

## 19. 建议用法

### 新手排错顺序

1. `openclaw doctor`
2. `openclaw status`
3. `openclaw gateway status`
4. `openclaw channels status`
5. `openclaw logs --follow`

### 改配置后的习惯

- 先 `config validate`
- 再 `gateway restart`
- 再看 `status / logs`

---

## 20. 后续可以继续扩展

你可以把这页继续做成：

- 更完整的参数表
- 按场景分类的教程
- FAQ
- 常见报错排查
- 安装指南

如果你想长期做内容，这种结构很适合继续往下长。
