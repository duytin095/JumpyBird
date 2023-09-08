import { _decorator, Component, Node, input, Input, log, math, RigidBody2D, Vec2, Quat, CCFloat } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property({
        type:Node,
    })
    private player:Node;

    @property({
        type:RigidBody2D,
        tooltip: "Rigidbody on player"
    })
    private rig:RigidBody2D; 

    @property({
        type:Number,
        tooltip: "player's velocity"
    })


    @property({
        type:CCFloat,
    })
    public velocity:number = 1;


    private upAngle:number = 0.1;
    private downAngle:number = -0.01;


    start(): void {
        this.player = this.node;
        this.rig = this.player.getComponent(RigidBody2D);  
        console.log("player idx" + this.player.getSiblingIndex());    
    }

    update(deltaTime: number) {
        if(this.rig.linearVelocity.y < 0){
            this.rotatePLayer(0, 0, this.node.getRotation().z + this.downAngle);
        }
        input.on(Input.EventType.TOUCH_START, this.jump, this);
    }

    rotatePLayer(x:number, y:number, z:number){
        this.node.setRotation(new Quat(x, y, z));
    }

    jump(){
        this.rig.linearVelocity = new Vec2(0, this.velocity);
        this.rotatePLayer(0, 0, this.upAngle);
    }

}


