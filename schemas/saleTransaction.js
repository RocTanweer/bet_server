export default {
  name: 'saleTransaction',
  title: 'Sale Transaction',
  type: 'document',
  fields: [
    {
      name: 'saleItem',
      title: 'Sale Item',
      type: 'string',
    },
    {
      name: 'unit',
      title: 'Unit',
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
  ],
}
