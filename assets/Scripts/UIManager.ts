import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property({
        type:Label
    })
    public currentScoreLable: Label;

    @property({
        type:Label
    })
    public highScoreLabel: Label;

    @property ({
        type:Label
    })
    public tryAgainLable: Label;

    highScore: number = 0;
    currentScore: number;

    protected start(): void {
        this.currentScore = 0;
    }


    UpdateScore(score: number){
        this.currentScore = score;
        this.currentScoreLable.string = ('' + this.currentScore);
    }

    // ResetScore(){
    //     this.UpdateScore(0);
    //     this.HideScore();
    // }

    AddScore(addScore: number){
        this.UpdateScore(this.currentScore + addScore);
    }

    // ShowRessult(){
    //     this.highScore = Math.max(this.highScore, this.currentScore);
    //     this.highScoreLabel.string = "High Score: " + this.highScore;
    //     this.tryAgainLable.node.active = true;
    // }

    // HideScore(){
    //     this.highScoreLabel.node.active = false;
    //     this.tryAgainLable.node.active = false;
    // }

}


