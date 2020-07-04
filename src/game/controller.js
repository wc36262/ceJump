import gameView from './view'
import gameModel from './model'

class GameController {
  constructor() {
    this.gameView = gameView
    this.gameModel = gameModel
    this.gameModel.stageChanged.attach((sender, args) => {
      const stageName = args.stage
      switch (stageName) {
        case 'game-over':
          this.gameView.showGameOverPage()
          break
        case 'game':
          this.gameView.showGamePage()
          break
        default:
      }
    })
  }

  // 游戏中的页面， 游戏结束的页面
  initPages() {
    const gamePageCallbacks = {
      showGameOverPage: () => {
        this.gameModel.setStage('game-over')
      }
    }

    const gameOverPageCallbacks = () => {
      this.gameModel.setStage('game')
    }

    this.gameView.initGameOverPage(gameOverPageCallbacks)
    this.gameView.initGamePage(gamePageCallbacks)
  }

}

export default new GameController()