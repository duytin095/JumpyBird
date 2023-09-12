import { _decorator, Button, Component, director, find, Input, Label, log, Node, sys } from 'cc';
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
    private currentScore: number = 0;

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

    showRessult(){       
        console.log('alo');
         
        if(isNaN(parseInt(sys.localStorage.getItem('score')))){
            sys.localStorage.setItem('score', this.currentScore.toString());
            console.log("Yo it NaN");
            
        }else{
            console.log('OPPPPPP');
            this.highScore = Math.max(parseInt(sys.localStorage.getItem('score')), this.currentScore);
            sys.localStorage.setItem('score', this.highScore.toString());
        }

        console.log(this.highScore+" high score");

        
        this.highScoreLabel.string = "High Score: " + parseInt(sys.localStorage.getItem('score'));
        this.highScoreLabel.node.active = true;
        this.restartButton.node.active = true;
    }

}


