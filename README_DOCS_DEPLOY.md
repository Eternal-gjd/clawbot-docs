# GitHub Pages 今天上线指南

## 1. 新建 GitHub 仓库

比如：

- 仓库名：`clawbot-docs`

## 2. 把本地项目推上去

```bash
git add .
git commit -m "feat: init vitepress docs site"
git branch -M main
git remote add origin https://github.com/Eternal_gjd/clawbot-docs.git
git push -u origin main
```

## 3. 在 GitHub 开启 Pages

进入：

- `Settings`
- `Pages`
- `Build and deployment`
- Source 选：`GitHub Actions`

## 4. 添加自动部署工作流

新建文件：`.github/workflows/deploy-docs.yml`

内容如下：

```yaml
name: Deploy VitePress site to Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v4

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: 22
          cache: npm

      - name: Install dependencies
        run: npm install

      - name: Build VitePress site
        run: npm run docs:build

      - name: Setup Pages
        uses: actions/configure-pages@v5

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: docs/.vitepress/dist

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

## 5. 再提交一次

```bash
git add .
git commit -m "chore: add github pages deploy workflow"
git push
```

## 6. 你的访问地址

默认会是：

```text
https://eternal_gjd.github.io/clawbot-docs/
```

如果你后面绑定自定义域名，再加 CNAME 就行。

## 7. 如果页面样式错乱

GitHub Pages 放在子路径下，可能需要在 `docs/.vitepress/config.mjs` 里加：

```js
base: '/clawbot-docs/',
```

把 `ddclawbot-docs` 改成你的仓库名。
