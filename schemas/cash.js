export default {
  name: 'cash',
  title: 'Cash',
  type: 'document',
  fields: [
    {
      name: 'minAmount',
      title: 'Minimum Amount',
      type: 'number',
    },
    {
      name: 'currAmount',
      title: 'Current Amount',
      type: 'number',
    },
    {
      name: 'initAmount',
      title: 'Initial Amount',
      type: 'number',
    },
    {
      name: 'ownedBy',
      title: 'Owned By',
      type: 'reference',
      to: [{type: 'business'}],
    },
  ],
}
