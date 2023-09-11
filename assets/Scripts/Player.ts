import { _decorator, Component, Node, input, Input, log, math, RigidBody2D, Vec2, Quat, CCFloat, Collider2D, find, Contact2DType, PhysicsSystem2D, IPhysics2DContact } from 'cc';
import { UIManager } from './UIManager';
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

    @property({
        type:Collider2D
    })
    private collider:Collider2D;


    private upAngle:number = 0.1;
    private downAngle:number = -0.01;
    private uiManager:UIManager;


    start(): void {
        this.player = this.node;
        this.rig = this.player.getComponent(RigidBody2D);  
        
        
        this.uiManager = find("Canvas/UIManager").getComponent(UIManager);
        if(!this.uiManager) {
            console.error('UIManager in Pipes is null');
            
        }

        // Registering callback functions for a single collider
        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this.collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            this.collider.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            this.collider.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

        // Registering global contact callback functions
        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.PRE_SOLVE, this.onPreSolve, this);
            PhysicsSystem2D.instance.on(Contact2DType.POST_SOLVE, this.onPostSolve, this);
        }

    }

    update(deltaTime: number) {
        if(this.rig.linearVelocity.y < 0){
            this.rotatePLayer(0, 0, this.node.getRotation().z + this.downAngle);
        }
        input.on(Input.EventType.TOUCH_START, this.jump, this);
    }

    onBeginContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when two colliders begin to contact
        
    }
    onEndContact (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called once when the contact between two colliders just about to end.
        if(otherCollider.tag == 1){
            //add score
            // update UI
            console.log(otherCollider.name);
            this.uiManager.AddScore(1);
          }
        
    }
    onPreSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called every time collider contact should be resolved
    }
    onPostSolve (selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        // will be called every time collider contact should be resolved
    }


    rotatePLayer(x:number, y:number, z:number){
        this.node.setRotation(new Quat(x, y, z));
    }

    jump(){
        this.rig.linearVelocity = new Vec2(0, this.velocity);
        this.rotatePLayer(0, 0, this.upAngle);
    }




}


