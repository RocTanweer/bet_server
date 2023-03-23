export default {
  name: 'investment',
  title: 'Investment',
  type: 'document',
  fields: [
    {
      name: 'investerName',
      title: 'Invester Name',
      type: 'string',
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'note',
      title: 'Note',
      type: 'text',
    },
    {
      name: 'ownedBy',
      title: 'Owned By',
      type: 'reference',
      to: [{type: 'business'}],
    },
  ],
}
