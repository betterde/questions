module.exports = {
  title: '提问的智慧',
  description: '植根于内心的修养，无需提醒的自觉，以约束为前提的自由，为他人着想的善良。',
  serviceWorker: true,
  markdown: {
    lineNumbers: true
  },
  locales: {
    '/': {
      lang: '中文',
      title: '提问的智慧',
      description: '植根于内心的修养，无需提醒的自觉，以约束为前提的自由，为他人着想的善良。'
    },
    '/en/': {
      lang: 'English',
      title: 'How To Ask Questions The Smart Way',
      description: 'It is rooted in self-cultivation, self-consciousness without reminder, freedom with restraint as the premise, and kindness with consideration for others.'
    }
  },
  themeConfig: {
    sidebarDepth: 3,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '简体中文',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: {
          '/content/': genSidebarConfig('目录')
        }
      },
      '/en/': {
        label: 'English',
        selectText: 'English',
        serviceWorker: {
          updatePopup: {
            message: "New content is available.",
            buttonText: "Refresh"
          }
        },
        sidebar: {
          '/en/content/': genSidebarConfig('Catalogue')
        }
      }
    }
  }
};

function genSidebarConfig (title) {
  return [
    {
      title,
      collapsable: false,
      children: [
        'statement',
        'introduction',
        'pre-questions',
        'asking'
      ]
    }
  ]
}
