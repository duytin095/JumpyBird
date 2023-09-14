import { _decorator, Component, Vec3 } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {
    update(deltaTime: number) {
        if (GameManager.instance.isPlayerAbleToMove()) {
            this.node.translate(new Vec3(-0.7, 0, 0), 1);
        }

        if (this.node.position.x < -640) {
            this.node.setPosition(new Vec3(640, this.node.position.y, 0));
        }
    }
}


