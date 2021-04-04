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
                  buildHookId: '6069e7daee42b835eec25de6',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gcv8i7a3',
                  apiId: '059e3a80-124d-4dd2-a7b9-d7fafb85c2a7'
                },
                {
                  buildHookId: '6069e7dae04a1a9cb9748248',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-gfepih4d',
                  apiId: '5fdcd7ca-4e11-4bf8-946b-93f33943066e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/bryansayler/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-gfepih4d.netlify.app', category: 'apps'}
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
