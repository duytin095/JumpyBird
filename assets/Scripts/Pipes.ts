import { _decorator, BoxCollider2D, CCFloat, Collider2D, Component, Contact2DType, find, IPhysics2DContact, log, math, Node, PhysicsSystem2D, Vec3} from 'cc';
import { GameManager } from './GameManager';
import { UIManager } from './UIManager';
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
    private speed:number = -0.1;

    @property({
        type:GameManager,
    })
    private gameManager:GameManager;



    private distanceBetweenPipes: number = 300;
    private disappearBound: number = -350;
    

    start() {
        this.pipesNode = this.node;  
        this.gameManager = find("GameManager").getComponent(GameManager);

        if(!this.gameManager){
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


