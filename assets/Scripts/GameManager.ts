import { _decorator, CCInteger, Component, Node } from 'cc';
import { Ground } from './Ground';
import { UIManager } from './UIManager';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
   @property({
        type:Ground,
   })

   public ground: Ground

   @property({
      type:UIManager
   })
   public uiManager: UIManager;

   @property({
    type: CCInteger
   })
   public speed: number = 300;

   @property({
    type:CCInteger
   })
   public pipeSpeed:number = 200;

   onload(){

   }

   initListener(){

   }
   startGame(){
    
   }
}






