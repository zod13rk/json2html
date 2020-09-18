import $, { scope as html } from './JSON2HTML'
import './index.css'
import { buildEditableList } from './components/editablelist/editablelist'
import { keys } from '@zodiark/tools/src/tools'

const scope = 'app'

const _index = {}
const elmPathes = {}
function createElmentsFromPath (val, paths) {
  let appPath = scope
  let elmPath = html
  let p, i
  for (var index = 0; index < paths.length; index++) {
    const num = paths[index]
    if (isNaN(num)) {
      p = appPath + ',' + num
      i = _index[p] || (_index[p] = $['|' + appPath] - 1)
      appPath = p
      elmPath += ',' + i
    } else {
      appPath += ',' + num + ',' + paths[++index]
      elmPath += ',' + num
    }
    $[elmPath + ',tag'] = paths[index]
    elmPathes[appPath] = elmPath
    elmPath += ',c'
  }
  $[elmPath] = val
}

$['$' + scope] = (val, ...path) => {
  createElmentsFromPath(val, path.reverse())
}
$['+' + scope] = (val, ...path) => {
  createElmentsFromPath(val, path.reverse())
}

const accounts = buildEditableList($, 'accounts')


const accountColumns = ['نام', 'نام خانوادگی', 'شماره تلفن', 'آدرس', 'ایمیل']
const accountList = [
  ['علی', 'صفری', '۰۹۳۸۵۴۷۲۹۶۲', 'فرهنگیان فاز۲', 'ali_safair4@yahoo.com']
]

// $.app = {
//   article: {
//     header: {
//       h1: 'مدیریت فروشگاه ها',
//       nav: {
//         ul: [
//           'انتقالات',
//           'پرداختی ها',
//           'اجناس',
//           'فروشگاه ها',
//           'افراد',
//           'شرکت ها'
//         ].map(li => ({ li }))
//       }
//     },
//     div: [
//       {
//         article: {
//           header: { h2: 'انتقالات' },
//           div: 'content'
//         }
//       },
//       {
//         article: {
//           header: { h2: 'پرداختی ها' },
//           div: 'content'
//         }
//       },
//       {
//         article: {
//           header: { h2: 'اجناس' },
//           div: 'content'
//         }
//       },
//       {
//         article: {
//           header: { h2: 'فروشگاه ها' },
//           div: 'content'
//         }
//       },
//       {
//         article: {
//           header: { h2: 'افراد' },
//           div: 'content'
//         }
//       },
//       {
//         article: {
//           header: { h2: 'شرکت ها' },
//           div: 'content'
//         }
//       }
//     ]
//   }
// }
