import { each } from '@zodiark/tools/src/tools'
import $ from '../JSON2HTML'

export const scope = 'app-data'
export const actions = {}

const scopes = {
  store: 'store',
  account: 'account',
  stuff: 'stuff',
  company: 'company',
  shipments: 'shipments',
  payments: 'payments'
}
export function listActions (s) {
  return {
    add (o, path = '') { $[$[scope + ',' + s + ',' + $[scope + ',' + s + ',' + path + '__id']++]] = o },
    remove (path) { delete $[scope + ',' + s + ',' + path] },
    edit (o, path) { $[scope + ',' + s + ',' + path] = o },
    get (path) { return $[scope + ',' + s + ',' + path] },
    getAll () { return $[scope + ',' + s] }
  }
}
each(s => {
  $[scope + ',' + s + '__id'] = 0
  actions[s] = listActions(s)
}, scopes)
