export default {
  name: 'revenue',
  title: 'Revenue',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'reference',
      to: [{type: 'product'}],
    },
    {
      name: 'units',
      title: 'Units',
      type: 'number',
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
      name: 'ownedBy',
      title: 'Owned By',
      type: 'reference',
      to: [{type: 'business'}],
    },
  ],
}
