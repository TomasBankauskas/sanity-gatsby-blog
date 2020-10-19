export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f8d7667a147ed39137d4622',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-3b9o3dj1',
                  apiId: '801a6c4b-28f3-4c2a-9fd1-d8cb6e472c74'
                },
                {
                  buildHookId: '5f8d76678d956d370af71711',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-1tzoqrg5',
                  apiId: '9dcbc75b-7ec1-4a31-a8ab-6b0064beedc6'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/TomasBankauskas/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-1tzoqrg5.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
