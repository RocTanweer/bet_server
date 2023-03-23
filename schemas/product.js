export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'unit',
      title: 'Unit',
      type: 'string',
    },
    {
      name: 'pricePerUnit',
      title: 'Price/Unit',
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
