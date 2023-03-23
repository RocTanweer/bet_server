export default {
  name: 'expense',
  title: 'Expense',
  type: 'document',
  fields: [
    {
      name: 'expenseItem',
      title: 'Expense Item',
      type: 'reference',
      to: [{type: 'expenseItem'}],
    },
    {
      name: 'amount',
      title: 'Amount',
      type: 'number',
    },
    {
      name: 'paymentMode',
      title: 'Payment Mode',
      type: 'string',
      options: {
        list: ['online', 'offline'],
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
    {
      name: 'ownedBy',
      title: 'Owned By',
      type: 'reference',
      to: [{type: 'business'}],
    },
  ],
}
