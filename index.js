const w = 300, h = 300

document.body.style.margin = '0px'

const state = { a: [1, 1], s: [[0, 0], [0, 2], [2, 0], [2, 2]], steps: [], index: 0 }

const find_path = ([ox, oy], [dx, dy]) => {
  const res = []
  const x = dx - ox, y = dy - oy
  Array.from(Array(Math.abs(y))).map(() => {
    if (y > 0) res.push([0, +1])
    if (y < 0) res.push([0, -1])
  })
  Array.from(Array(Math.abs(x))).map(() => {
    if (x > 0) res.push([+1, 0])
    if (x < 0) res.push([-1, 0])
  })
  return res
}

const plan_steps = () => Array.from(state.s).map((s) => state.steps.push(find_path(state.a, s)))

const btnPlanSteps = document.createElement('button')
btnPlanSteps.innerText = 'plan steps'
btnPlanSteps.addEventListener('click', () => {
  plan_steps()
  console.log('Steps planned', state.steps)
})

const walk = () => {
  const [[x, y]] = find_path(state.a, state.s[state.index])
  state.a[0] += x
  state.a[1] += y
  if (state.a[0] == state.s[state.index][0] && state.a[1] == state.s[state.index][1]) {
    state.s[state.index] = [-1, -1]
    state.index++
  }
}

const btnWalk = document.createElement('button')
btnWalk.innerText = 'walk'
btnWalk.addEventListener('click', () => {
  walk()
})

const canvas = document.createElement('canvas')
canvas.style.width = w + 'px'
canvas.style.height = h + 'px'
canvas.style.margin = '20px'
canvas.style.boxShadow = '0rem 0rem 0rem 2px #000'

const app = document.getElementById('app')
app.append(canvas)
app.append(btnPlanSteps)
app.append(btnWalk)

const ctx = canvas.getContext('2d')

ctx.lineWidth = 2
ctx.font = '24px monospace'

const drawLines = () => {
  const lines = [
    [100, 0, 100, 300],
    [200, 0, 200, 300],
    [0, 50, 300, 50],
    [0, 100, 300, 100],
  ].map(([mx, my, lx, ly]) => {
    ctx.beginPath()
    ctx.moveTo(mx, my)
    ctx.lineTo(lx, ly)
    ctx.stroke()
    ctx.closePath()
  })
}

const draw_letters = () => {
  Array.from([state.a]).map(([ax, ay]) => {
    ctx.beginPath()
    ctx.strokeText('A', ay * 100 + 42, ax * 50 + 30)
    ctx.closePath()
  })
  Array.from(state.s).map(([sx, sy]) => {
    ctx.beginPath()
    ctx.strokeText('S', sy * 100 + 42, sx * 50 + 30)
    ctx.closePath()
  })
}

const animationFrame = () => {
  ctx.clearRect(0, 0, 300, 300)
  drawLines()
  draw_letters()
  requestAnimationFrame(animationFrame)
}

animationFrame()
