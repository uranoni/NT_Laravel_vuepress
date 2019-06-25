module.exports = {
    title: 'Laravel tutorial',
    description: 'Just playing around',
    themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guild', link: '/guide/' },
          { text: 'Env', link: '/env/' },
          { text: 'Laravel Site', link: 'https://laravel.com/' },
        ],
        sidebar: {
            '/guide/': [
                '',
                'blade',
                'migrate'
            ],
            '/env/': [
                '',
                'mac',
                'windows',
                'mysql'
            ]
        }
  }
}