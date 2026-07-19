import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  collections: {
    blog: collection({
      label: 'Blog',
      slugField: 'title',
      path: 'src/content/blog/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        description: fields.text({
          label: 'Description',
          multiline: true,
        }),
        date: fields.date({ label: 'Date' }),
        tags: fields.array(fields.text({ label: 'Tag' }), {
          label: 'Tags',
          itemLabel: (props) => props.value || 'Tag',
        }),
        draft: fields.checkbox({
          label: 'Draft',
          defaultValue: false,
        }),
        variant: fields.select({
          label: 'Layout variant',
          options: [
            { label: 'Default', value: 'default' },
            { label: 'Interactive', value: 'interactive' },
          ],
          defaultValue: 'default',
        }),
        content: fields.markdoc({ label: 'Content' }),
      },
    }),
  },
});
