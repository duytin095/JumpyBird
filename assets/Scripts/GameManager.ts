import { _decorator, CCInteger, Component, Node, Prefab, instantiate, director, Canvas } from 'cc';
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
    type: CCInteger
   })
   public speed: number = 300;

   @property({
    type:CCInteger
   })
   private pipeSpeed:number = 200;



   start(): void {
      let node = instantiate(this.pipePrefab);
      node.parent = this.canvas;
      
      node.setPosition(400,0,0);
      node.setSiblingIndex(4);
      console.log('pipe idx '+node.getSiblingIndex());
   }

   onload(){

   }

   initListener(){

   }
   startGame(){
    
   }

   spawnPrefabs(){
      
   }
}






