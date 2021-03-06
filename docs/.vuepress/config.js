module.exports = {
  lang: 'zh-CN',
  title: ' ',
  description: '分享当下，总结过去',
  base: '/',
  head: [
    // favicon
    [
      'link',
      {
        rel: 'icon',
        href: '/images/logo.png',
      },
    ],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    search: false,

    nav: [
      { text: '攀大指南', link: '/guide/' },
      { text: '文章', link: '/article/' },
      { text: '留言板', link: '/board/'},
    ],

    sidebar: {
      '/guide/': [
        '',
        'a',
        'b',
      ],
      '/article/': [
        '',
        '1',
        '2',
        '3',
        '4',
        '5',
      ],
    },
    
    lastUpdated: true,
    repo: 'hululushp/tobackrise',
    docsDir: 'docs',
    docsBranch: 'main',
    editLinks: true,
  }
}