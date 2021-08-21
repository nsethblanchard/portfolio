
export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    field: [
        {
            name: 'title',
            type: 'string',
        },
        {
            name: 'date',
            type: 'datetime',
        },
        {
            name: 'place',
            type: 'string',
        },
        {
            name: 'description',
            type: 'text',
        },
        {
            name: 'projectType',
            title: 'Project type',
            type: 'string',
            options: {
                list: [
                    {value: 'personal', title: 'Personal'},
                ]
            }
        },

    ]
}