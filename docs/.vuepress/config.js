module.exports = {
    title: '基于VuePress的个人博客项目',
    description: '绝赞开发中，这里是临时的主页面',
    head: [
        ['link', {
            rel: 'icon',
            href: '/favicon.ico'
        }]
    ],
    dest: './docs/.vuepress/dist',
    ga: '',
    evergreen: true,

    themeConfig: {
        nav: [
          { text: '主页', link: '/' },
          { text: '导航', link: '/guide/' },
          {
            text: '分类',
            items: [
              { text: '全部', link: '/categories/' },
              { text: '后端', link: '/categories/backend/' },
              { text: '前端', link: '/categories/frontend/' }
            ]
          },
          { text: 'Github', link: 'https://github.com/Lim9er' },
        ]

    }
};

