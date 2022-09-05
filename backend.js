const fileTransfer = (s, m, c) => {
  if (s <= 0 || isNaN(s)) return -1;
  if (c < 0 || isNaN(c)) return -1;
  if (!m?.length) return -1;

  const transferred = m.reduce((a, b) => a + b, 0)
  const remaining = s - transferred

  if (remaining == 0) return 0;

  const arrayOfC = [...Array(c).keys()]
  const lastC = arrayOfC.map((_, i) => {
    return m[m.length - (i + 1)] ?? 0
  })
  const lastCsum = lastC.reduce((a, b) => {
    return a + b
  }, 0)
  const averageOfC = lastCsum / c
  const timeRemaining = Math.ceil(remaining / averageOfC)

  if (timeRemaining === Infinity) return -1;
  if (isNaN(timeRemaining)) return -1;

  return timeRemaining
}

const s = 200
const m = [20, 12, 12, 16]
const c = 2

const test = fileTransfer(s, m, c)
console.log('Your example download will complete in', test + ' seconds.')
