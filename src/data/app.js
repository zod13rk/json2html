
const basicProps = ['name', 'phoneNumbers', 'address', 'email']

export const props = {
  store: ['ownerId', ...basicProps],
  account: [...basicProps],
  stuff: ['name', 'cost', 'price', 'proDate', 'expDate', 'companyId'],
  company: [...basicProps, 'website', 'tel', 'fax'],
  shipment: ['storeIdA', 'storeIdB', 'stuffId', 'amount', 'date'],
  payment: ['storeIdA', 'storeIdB', 'amount', 'date']
}

export const navs = [
  'انتقالات',
  'پرداختی ها',
  'اجناس',
  'فروشگاه ها',
  'افراد',
  'شرکت ها'
]
