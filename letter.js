class Letter {
  constructor(initPosX, initPosY, initVelocity, value){
    this.initVelocity = initVelocity
    this.velocity = initVelocity
    this.initPosY = initPosY
    this.initPosX = initPosX
    this.positionY = initPosY
    this.positionX = initPosX
    this.time = 0
    this.acceleration = -5
    this.value = value
  }
  setVelocity(){
    this.velocity = this.initVelocity + this.acceleration * this.time
  }
  setPosY(){
    this.positionY = this.initPosY - (this.initVelocity * this.time + 1/2 * this.acceleration * Math.pow(this.time, 2))
  }
  incrementTime(time){
    this.time += time
    this.setVelocity()
    this.setPosY()
  }
}
