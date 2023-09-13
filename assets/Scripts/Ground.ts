import { _decorator, Component, error, find, game, Node, Vec3 } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {
    private gameManager: GameManager;
    start() {
        this.gameManager = find('GameManager').getComponent(GameManager);
        if (!this.gameManager) {
            console.error('GameManager in ground is NULL');
        }
    }

    update(deltaTime: number) {

        if (this.gameManager.allowPlayerTouch()) {
            this.node.translate(new Vec3(-0.7, 0, 0), 1);
        }

        if (this.node.position.x < -640) {
            this.node.setPosition(new Vec3(640, this.node.position.y, 0));
        }
    }
}


