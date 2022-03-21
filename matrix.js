const canvas = document.getElementById("canvas")
const ctx = canvas.getContext("2d")

let cw = window.innerWidth
let ch = window.innerHeight


let charArr =["ﾊ", "ﾐ", "ﾋ", "ｰ", "ｳ", "ｼ", "ﾅ", "ﾓ", "ﾆ", "ｻ", "ﾜ", "ﾂ", "ｵ", "ﾘ",
 "ｱ", "ﾎ", "ﾃ", "ﾃ", "ﾏ", "ﾏ", "ｹ", "ﾒ", "ﾒ", "ｴ", "ｶ", "ｷ", "ｷ", "ﾑ", "ﾕ", "ﾗ", "ﾗ",
  "ｾ", "ﾈ", "ｽ", "ﾀ", "ﾇ", "ﾍ","ﾃ", "ﾏ", "ﾏ", "ｹ", "ｹ", "ﾒ", "ｴ", "ｶ"]

let maxCharCount = 100
let fallingCharArr = []
let fontsize = 13
let maxColums = cw/fontsize
canvas.width = cw
canvas.height = ch

let frames = 0


class FallingChar{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    draw(ctx){
        this.value = charArr[Math.floor(Math.random() * (charArr.length - 1))].toUpperCase()
        this.speed = (Math.random() * fontsize * 3)/4 + (fontsize * 3)/4

        ctx.fillStyle = "rgba(0,255,0)"
        ctx.font = fontsize + "px san-serif"
        ctx.fillText(this.value, this.x, this.y)
        this.y += this.speed

        if(this.y > ch){
            this.y = Math.random() * ch/2 -50
            this.x = Math.floor(Math.random() * maxColums) * fontsize
            this.speed = -Math.random() * (fontsize * 3)/ 4 + (fontsize * 3)/ 4
        }
    }
}

let update = () => {
    if(fallingCharArr.length < maxCharCount)
    {
        let fallingChar = new FallingChar(Math.floor(Math.random() * maxColums) * 
        fontsize, (Math.random()*ch)/2 -50)
        fallingCharArr.push(fallingChar)
    }
    ctx.fillStyle = "rgba(0,0,0,0.05)"
    ctx.fillRect(0,0,cw,ch)
    for(let i=0; i< fallingCharArr.length && frames % 2 == 0 ; i++){
        fallingCharArr[i].draw(ctx)
    }

    requestAnimationFrame(update)
    frames++;
}

update();
