class LetterView {
  constructor(letter){
    this.letter = letter
    this.el = document.createElement('div')
    this.el.className = 'letter'
    this.el.innerHTML = letter.value
    this.intervalID = null
    this.intervalLength = 20
    this.setPosition()
    this.setInMotion()
    this.falling = true
    this.bounceCounter = 0
    window.addEventListener('resize', () => {
      this.setInMotion();
    })
    this.el.addEventListener('click', (evt) => {
      this.toggleMotion();
    })
  }
  toggleMotion(){
    this.intervalID ? this.stopMotion() : this.setInMotion()
  }
  stopMotion(){
    clearInterval(this.intervalID)
    this.intervalID = null
  }
  setPosition(){
    const cssText = `left: ${this.letter.postionX}px; top: ${this.letter.positionY}px;`
    this.el.style.cssText = `left: ${this.letter.positionX}px; top: ${this.letter.positionY}px;`
  }
  render(){
    document.body.append(this.el)
  }
  setInMotion(){
    if (!this.intervalID){
      this.intervalID = setInterval(() => {
        this.prevValue = parseFloat(this.letter.positionY)
        this.letter.incrementTime(.15)
        this.checkBounce()
        this.setPosition()
      }, this.intervalLength)
    }
  }
  checkBounce(){
    if(this.letter.positionY >= window.innerHeight - 25 && this.isFalling()){
      this.letter.velocity = -.98 * this.letter.velocity
      this.letter.initVelocity = this.letter.velocity
      this.letter.time = 0
      this.letter.initPosY = window.innerHeight - 25
      this.bounceCounter++
      this.isBottom()
      if (!this.bounceCounterTimeoutId){
        this.bounceCounterTimeoutId = setTimeout(() => {
          this.bounceCounter = 0
          this.bounceCounterTimeoutId = null
        }, 2000)
      }
    }
  }
  isFalling(){
    return this.prevValue < this.letter.positionY
  }
  stopBall(){
    clearInterval(this.intervalID)
    this.intervalID = null
  }
  isBottom(){
    if(this.bounceCounter > 9){
      this.stopBall()
    }
  }
}
