import { _decorator, CCFloat, Component, math, Node, Vec3} from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Pipes')
export class Pipes extends Component{
    @property({
        type:CCFloat,
    })
    private speed:number = -0.1;

    private distanceBetweenPipes: number = 300;
    private disappearBound: number = -350;
     
    update() {
        if(GameManager.instance.startGame()){
            this.node.translate(new Vec3(this.speed, 0, 0), 1);
        }
 
        if(this.node.position.x < this.disappearBound){
            let xPos = GameManager.instance.getLastPipeXpos() + this.distanceBetweenPipes;
            let randomYPos = math.randomRange(0, -576);
            this.node.setPosition(xPos, randomYPos, 0);
            GameManager.instance.setLastPipe(this.node);
        }
    }
    
}


