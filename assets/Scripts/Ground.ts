import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Ground')
export class Ground extends Component {
    start() {

    }

    update(deltaTime: number) {
        this.node.translate(new Vec3(-0.7, 0 , 0), 1);
        if(this.node.position.x < -640){
            this.node.setPosition(new Vec3(640, this.node.position.y, 0));
        }
    }
}


