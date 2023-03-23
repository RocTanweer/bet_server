export default {
  name: 'withdraw',
  title: 'Withdraw',
  type: 'document',
  fields: [
    {
      name: 'withdrawerName',
      title: 'Withdrawer Name',
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
