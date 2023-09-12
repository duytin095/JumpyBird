import { _decorator, Button, Component, director, find, Input, Label, Node, sys } from 'cc';
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
        type:Button
    })
    private restartButton: Button;


    private highScore: number = 0;
    private currentScore: number;

    start(){
        this.currentScore = 0;
        this.restartButton.node.on(Node.EventType.TOUCH_START, (reloadGame:void) =>{
            director.loadScene('Game');
            director.resume();
        });
    }

    protected onLoad(): void {
        
    }
 

    updateScore(score: number){
        this.currentScore = score;
        this.currentScoreLable.string = ('' + this.currentScore);
    }

    addScore(addScore: number){
        this.updateScore(this.currentScore + addScore);
    }

    
    // ResetScore(){
    //     this.UpdateScore(0);
    //     this.HideScore();
    // }

    showRessult(){
        this.highScore = Math.max(parseInt(sys.localStorage.getItem('score')), this.currentScore);
        sys.localStorage.setItem('score', this.highScore.toString());

        console.log('high score>>>:>: ' + sys.localStorage.getItem('score'));

        let temp = sys.localStorage.getItem('score');
        //console.log('temp: ' + temp);
        
        this.highScoreLabel.string = "High Score: " + temp;
        this.highScoreLabel.node.active = true;
        this.restartButton.node.active = true;
    }
    // HideScore(){
    //     this.highScoreLabel.node.active = false;
    //     this.tryAgainLable.node.active = false;
    // }

}


