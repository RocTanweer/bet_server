export default {
  name: 'investmenttransaction',
  title: 'Investment Transaction',
  type: 'document',
  fields: [
    {
      name: 'investmentItem',
      title: 'Investment Item',
      type: 'reference',
      to: [{type: 'investmentItem'}],
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
      name: 'receipt',
      title: 'Receipt',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}
