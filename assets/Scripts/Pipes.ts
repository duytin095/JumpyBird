import { _decorator, CCFloat, Component, find, Game, math, Node, Vec3} from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Pipes')
export class Pipes extends Component{

    @property({
        type:Node,
    })
    public pipesNode:Node;

    @property({
        type:CCFloat,
    })
    public speed:number = -3;

    @property({
        type:GameManager
    })
    private gameManager:GameManager;

    start() {
        this.pipesNode = this.node;  
        this.gameManager = find("GameManager").getComponent(GameManager);
        if(this.gameManager == null){
            let game = new Game;
            game.pause();
        }
    }
    update(deltaTime: number) {
        this.pipesNode.translate(new Vec3(this.speed, 0, 0), 1);
 
        if(this.pipesNode.position.x < -350){
            this.pipesNode.setPosition(this.gameManager.getLastPipeXpos() + 300 , math.randomRange(0, -576), 0);
            this.gameManager.setLastPipe(this.pipesNode);
        }
    }
}


