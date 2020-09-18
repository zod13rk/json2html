const { createRouter } = require('@zodiark/tools')
const $ = createRouter()
export const scope = 'html'
const _elms = { [scope]: document.body }

export default $

const createPath = (prop, index, ...path) =>
  path.length === 0 ? index : createPath(...path) + ',' + index

$['$' + scope] = (val, prop, index, ...path) => {
  const parentPath = createPath(...path, undefined, scope)
  const parent = _elms[parentPath]
  const elmPath = parentPath + ',' + index
  let elm
  switch (prop) {
    case 'tag':
      elm = _elms[elmPath] = document.createElement(val)
      parent.insertBefore(elm, parent.children[index])
      break
    case 'c':
      elm = _elms[elmPath]
      elm.appendChild(document.createTextNode(val))
      break
    default:
      if (prop[0] === '$') elm.addEventListener(prop.slice(1), val)
      else elm.setAttribute(prop, val)
      break
  }
}
$['_' + scope] = (val, prop, ...path) => {
  if (prop === 'tag') {
    const elmPath = scope + ',' + path.joinR()
    const elm = _elms[elmPath]
    if (elm && elm.parentNode) {
      elm.parentNode.removeChild(elm)
      _elms[elmPath] = undefined
    }
  }
}
$['+' + scope] = function (val, prop, ...path) {
  if (prop === 'tag') return
  const elmPath = createPath(prop, ...path, '', scope)
  const elm = _elms[elmPath]
  switch (prop) {
    case 'c':
      elm.firstChild.nodeValue = val
      break
    default:
      elm.setAttribute(prop, val)
      break
  }
}
