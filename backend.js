const fileTransfer = (s, m, c) => {
  const transferred = m.reduce((a, b) => a + b, 0)
  const remaining = s - transferred
  const arrayOfC = [...Array(c).keys()]

  const lastC = arrayOfC.map((_, i) => {
    return m[m.length - (i + 1)]
  })
  const lastCsum = lastC.reduce((a, b) => {
    return a + b
  }, 0)
  const averageOfC = lastCsum / c

  return Math.ceil(remaining / averageOfC)
}

const s = 200
const m = [20, 12, 12, 16]
const c = 2

const test = fileTransfer(s, m, c)
console.log('Your example download will complete in', test + ' seconds.')
