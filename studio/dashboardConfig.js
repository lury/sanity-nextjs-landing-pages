export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5f4428c07d14cf94dcbbba58',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-zho44qwd',
                  apiId: 'f256e30b-5c04-40ad-b554-f507914e3d34'
                },
                {
                  buildHookId: '5f4428c17d14cfa4cfbbb9d8',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-3ub3fp4i',
                  apiId: '7f070752-472c-4cd0-906c-72224c124421'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/lury/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-3ub3fp4i.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
