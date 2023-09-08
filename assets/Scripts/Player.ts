import { _decorator, Component, Node, EventTouch, input, Input, log, math, RigidBody2D,Vec3, Vec2, Quat, quat, ValueType } from 'cc';
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


    public velocity:number = 1;
    private upAngle:number = 0.1;
    private downAngle:number = -0.01;


    protected start(): void {
        this.player = this.node;
        this.rig = this.player.getComponent(RigidBody2D);   
    }

    Jump(){
        this.rig.linearVelocity = new Vec2(0, this.velocity);
        this.RotatePLayer(0, 0, this.upAngle);

    }

    update(deltaTime: number) {
        if(this.rig.linearVelocity.y < 0){
            this.RotatePLayer(0, 0, this.node.getRotation().z + this.downAngle);
        }
        input.on(Input.EventType.TOUCH_START, this.Jump, this);
    }

    RotatePLayer(x:number, y:number, z:number){
        this.node.setRotation(new Quat(x, y, z));
    }

}


