export function isValidUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

export function isExtenal (path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
