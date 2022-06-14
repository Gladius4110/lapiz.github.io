let canv= document.querySelector('#myCanvas')
let ctx= canv.getContext("2d")
ctx.fillStyle="black"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(90,170)
ctx.lineTo(85,160)
ctx.lineTo(95,160)
ctx.lineTo(90,170)
ctx.stroke()
ctx.fill()

ctx.fillStyle="white"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.moveTo(85,160)
ctx.lineTo(95,160)
ctx.lineTo(100,150)
ctx.lineTo(80,150)
ctx.lineTo(85,160)
ctx.stroke()
ctx.fill()

ctx.fillStyle="yellow"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(80,40,20,110)
ctx.stroke()
ctx.fill()

ctx.fillStyle="#949996"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.rect(80,40,20,10)
ctx.stroke()
ctx.fill()

ctx.fillStyle="#fa526e"
ctx.strokeStyle="black"
ctx.beginPath()
ctx.arc(90,40,10,1*Math.PI,0*Math.PI)
ctx.stroke()
ctx.fill()