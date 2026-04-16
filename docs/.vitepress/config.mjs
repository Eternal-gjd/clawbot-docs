export default {
  base: '/clawbot-docs/',
  title: 'ddClawBot Docs',
  description: 'OpenClaw / AI 工具 / 命令手册',
  lang: 'zh-CN',
  cleanUrls: true,
  themeConfig: {
    siteTitle: 'ddClawBot Docs',
    nav: [
      { text: '首页', link: '/' },
      { text: 'OpenClaw CLI 手册', link: '/openclaw-cli-command-reference' },
      { text: 'Hermes开源实战指南', link: '/hermes-open-source-guide' }
    ],
    sidebar: [
      {
        text: '文档',
        items: [
          { text: '首页', link: '/' },
          { text: 'OpenClaw CLI 命令参考手册', link: '/openclaw-cli-command-reference' },
          { text: 'OpenAI Codex 安装配置指南', link: '/openai-codex-installation' },
          { text: 'Hermes开源实战指南', link: '/hermes-open-source-guide' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/Eternal_gjd/clawbot-docs' }
    ],
    footer: {
      message: 'Built with VitePress',
      copyright: '© 2026 ddClawBot'
    },
    search: {
      provider: 'local'
    }
  }
}
