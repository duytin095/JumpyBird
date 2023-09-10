import { _decorator, CCInteger, Component, Node, Prefab, instantiate, AsyncDelegate, math, CCFloat } from 'cc';
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

   @property({
      type:CCFloat
   })
   private lastPipeXPos:number = 400;

   private _isSpawnDone:boolean = false;


   @property({
      type:Node
   })
   private lastPipe:Node = null;




   start(): void {
      //this.spawnNodeAfterSeconds(2);
      let startPos = 400;
      for(let i = 0; i < 3; i++){
         let node = this.spawnNode(startPos);
         startPos += 300;
         if(i == 2){
            this.lastPipe = node;
         }
      }
   }


   protected update(){
       this.getLastPipeXpos();
   }
   public getLastPipeXpos(){
      return this.lastPipe.position.x;
   }

   // async spawnNodeAfterSeconds(time:number){
   //    let pipesToSpawn = 5;
   //    let count = 0;
   //    while(count < pipesToSpawn){
   //       const ad = new AsyncDelegate();
   //       ad.add(() =>{
   //          return new Promise((resolve, reject) => {
   //             setTimeout(() => {
   //                this.spawnNode();
   //                resolve();
   //             }, time * 1000);
   //          })
   //       });
   //       count++;
   //       await ad.dispatch();
   //       if(count == 5){
   //          this._isSpawnDone = true;
   //          console.log('spawn done', this._isSpawnDone);
   //       }
   //    }
   // }

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

   isSpawnDone(){
      return this._isSpawnDone;
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






