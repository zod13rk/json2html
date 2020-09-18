export function buildEditableList ($, path) {
  let lastIndex = 0
  return {
    add (o) { $[path + ',' + lastIndex++] = o },
    remove (id) { delete $[path + ',' + id] },
    edit (id, o) { $[path + ',' + id] = o },
    getList () { return $[path] }
  }
}
