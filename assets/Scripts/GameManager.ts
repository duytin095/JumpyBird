import { _decorator, CCInteger, Component, Node, Prefab, instantiate, math, CCFloat } from 'cc';
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
   private uiManager: UIManager;

   @property({
      type:Prefab
   })
   private pipePrefab:Prefab = null;

   @property({
      type:Node
   })
   private canvas:Node;

   @property({
      type:Node
   })
   private lastPipe:Node = null;

   @property({
      type:Number,
   })
   public speed:number = 300;


   start(): void {
      let startPos = 400;
      for(let i = 0; i < 3; i++){
         let node = this.spawnNode(startPos);
         startPos += 300;
         if(i == 2){
            this.lastPipe = node;
         }
      }
   }

   public getLastPipeXpos(){
      return this.lastPipe.position.x;
   }

   spawnNode(xPos:number){
      let node = instantiate(this.pipePrefab);
      let randomYPos = math.randomRange(0, -576);
      node.parent = this.canvas;
      node.setPosition(xPos,randomYPos,0);
      node.setSiblingIndex(4);
      return node;
   }


   setLastPipe(_lastPipe:Node){
      this.lastPipe = _lastPipe;
      return this.lastPipe;
   }

}






