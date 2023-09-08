import { _decorator, Component, Node, Vec3,} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Pipes')
export class Pipes extends Component {

    @property({
        type:Node,
    })
    public pipesNode:Node;

    @property({
        type:Number,
    })
    public speed:number = 1;

    start() {
        
    }

    update(deltaTime: number) {
        this.node.translate(new Vec3(-1.2,0,0), 1);
    }
}


