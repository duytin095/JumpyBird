import { _decorator, AudioClip, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AudioManager')
export class AudioManager extends Component {

    @property({
        type:AudioClip
    })
    public die:AudioClip;

    @property({
        type:AudioClip
    })
    public wing:AudioClip

    @property({
        type:AudioClip
    })
    public point:AudioClip

    @property({
        type:AudioClip
    })
    public hit:AudioClip

}


