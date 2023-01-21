export default {
  name: 'investmenttransaction',
  title: 'Investment Transaction',
  type: 'document',
  fields: [
    {
      name: 'investmentItem',
      title: 'Investment Item',
      type: 'string',
    },
    {
      name: 'amount',
      Title: 'Amount',
      type: 'number',
    },
    {
      name: 'payment',
      title: 'Payment',
      type: 'string',
      options: {
        list: ['online', 'cash'],
      },
    },
    {
      name: 'date',
      title: 'Date',
      type: 'datetime',
    },
    {
      name: 'receipt',
      title: 'Receipt',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
