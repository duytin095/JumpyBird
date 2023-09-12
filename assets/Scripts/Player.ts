import { _decorator, Component, Node, input, Input, RigidBody2D, Vec2, Quat, CCFloat, Collider2D, find, Contact2DType, PhysicsSystem2D, IPhysics2DContact, ERigidBody2DType, Game, director } from 'cc';
import { UIManager } from './UIManager';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('Player')
export class Player extends Component {

    @property({
        type: Node,
    })
    private player: Node;

    @property({
        type: RigidBody2D,
        tooltip: "Rigidbody on player"
    })
    private rig: RigidBody2D;

    @property({
        type: CCFloat,
    })
    private velocity: number = 1;

    @property({
        type: Collider2D
    })
    private collider: Collider2D;


    private upAngle: number = 0.1;
    private downAngle: number = -0.01;
    private uiManager: UIManager;
    private gameManager: GameManager;


    start(): void {
        this.player = this.node;
        this.rig = this.player.getComponent(RigidBody2D);
        this.rig.type = ERigidBody2DType.Kinematic;


        this.uiManager = find("Canvas/UIManager").getComponent(UIManager);
        if (!this.uiManager) {
            console.error('UIManager in Player is null');
        }

        this.gameManager = find("GameManager").getComponent(GameManager);
        if (!this.gameManager) {
            console.error('GameManager in Player is null');
        }

        this.collider = this.getComponent(Collider2D);
        if (this.collider) {
            this.collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            this.collider.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

        if (PhysicsSystem2D.instance) {
            PhysicsSystem2D.instance.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
            PhysicsSystem2D.instance.on(Contact2DType.END_CONTACT, this.onEndContact, this);
        }

    }

    update(deltaTime: number) {
        if (this.rig.linearVelocity.y < 0) {
            this.rotatePLayer(0, 0, this.node.getRotation().z + this.downAngle);
        }
        input.on(Input.EventType.TOUCH_START, this.jump, this);
    }


    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if(otherCollider.tag == 2){ 
            director.pause();
            this.uiManager.showRessult();
        }
    }
    onEndContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null) {
        if (otherCollider.tag == 1) {
            this.uiManager.addScore(1);
        }
    }


    rotatePLayer(x: number, y: number, z: number) {
        this.node.setRotation(new Quat(x, y, z));
    }

    jump() {
        this.rig.linearVelocity = new Vec2(0, this.velocity);
        this.rotatePLayer(0, 0, this.upAngle);

        if (!this.gameManager.isGameStart()) {
            this.gameManager.startSpawnPipes();
            this.rig.type = ERigidBody2DType.Dynamic;
        }

    }

}


