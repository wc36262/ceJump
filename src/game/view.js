
import GamePage from '../pages/game-page'
import GameOverPage from '../pages/game-over-page'
import Event from '../utils/event'

class GameView {
  constructor() {

  }
  
  showGameOverPage() {
    this.gameOverPage.show()
  }

  showGamePage() {
    this.gameOverPage.hide()
    this.gamePage.restart()
    this.gamePage.show()
  }

  restartGame() {
    this.gamePage.restart()
  }

  initGameOverPage (callbacks) {
    this.gameOverPage = new GameOverPage(callbacks)
    this.gameOverPage.init({
      scene: this.gamePage.scene
    })
   }

  //  initGameOverPage (callbacks) {
  //   this.gameOverPage = new GameOverPage(callbacks)
  //   this.gameOverPage.init({
  //     camera: this.gamePage.scene.camera.instance,
  //     scene: this.gamePage.scene.instance
  //   })
  // }


  initGamePage(callbacks) {
    this.gamePage = new GamePage(callbacks)
    this.gamePage.init()
  }
}

export default new GameView()