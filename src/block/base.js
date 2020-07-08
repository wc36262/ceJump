
import blockConf from '../../confs/block-conf'
import { customAnimation } from '../../libs/animation'

export default class BaseBlock {
  constructor (type) {
    this.type = type // cuboid | cylinder
    this.height = blockConf.height
    this.width = blockConf.width
    this.status = 'stop'
    this.scale = 1
  }


  popup () {
    this.instance.position.set(this.x, this.y + 30, this.z)
    customAnimation.to(this.instance.position, 0.5, { x: this.x, y: this.y, z: this.z, ease: 'Bounce.easeOut' })
  }



}