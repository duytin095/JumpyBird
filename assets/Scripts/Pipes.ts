import { _decorator, CCFloat, Component, find, math, Node, Vec3} from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Pipes')
export class Pipes extends Component{

    @property({
        type:Node,
    })
    private pipesNode:Node;

    @property({
        type:CCFloat,
    })
    private speed:number = -3;

    @property({
        type:GameManager,
    })
    private gameManager:GameManager;

    private distanceBetweenPipes: number = 300;
    private disappearBound: number = -350;

    start() {
        this.pipesNode = this.node;  
        this.gameManager = find("GameManager").getComponent(GameManager);

        if(this.gameManager == null){
            console.error('GameManager in Pipes is null')
        }
    }
    update() {
        this.pipesNode.translate(new Vec3(this.speed, 0, 0), 1);
 
        if(this.pipesNode.position.x < this.disappearBound){
            let xPos = this.gameManager.getLastPipeXpos() + this.distanceBetweenPipes;
            let randomYPos = math.randomRange(0, -576);

            this.pipesNode.setPosition(xPos, randomYPos, 0);
            this.gameManager.setLastPipe(this.pipesNode);
        }
    }
}


