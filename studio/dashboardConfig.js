export default {
  widgets: [
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
                  buildHookId: '6197906971ef9ce5b05ae223',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-acmecbf3',
                  apiId: '9a53caaa-347d-4a09-8904-97e72c41eb3d'
                },
                {
                  buildHookId: '61979069b47741022352bc60',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-kci9xuye',
                  apiId: 'bf737899-4164-4ab9-9ea1-49831ec923d7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Marremurten/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-kci9xuye.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
