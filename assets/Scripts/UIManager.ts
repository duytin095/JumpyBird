import { _decorator, Component, find, Input, Label, Node } from 'cc';
import { GameManager } from './GameManager';
const { ccclass, property } = _decorator;

@ccclass('UIManager')
export class UIManager extends Component {
    @property({
        type:Label
    })
    private currentScoreLable: Label;

    @property({
        type:Label
    })
    private highScoreLabel: Label;

    @property ({
        type:Label
    })
    private tryAgainLable: Label;


    private highScore: number = 0;
    private currentScore: number;

    start(){
        this.currentScore = 0;
    }

    UpdateScore(score: number){
        this.currentScore = score;
        this.currentScoreLable.string = ('' + this.currentScore);
    }

    AddScore(addScore: number){
        this.UpdateScore(this.currentScore + addScore);
    }

    // ResetScore(){
    //     this.UpdateScore(0);
    //     this.HideScore();
    // }

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


