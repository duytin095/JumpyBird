import { _decorator, Component, Node, Prefab, instantiate, math } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
   @property({
      type: Prefab
   })
   private pipePrefab: Prefab = null;

   @property({
      type: Node
   })
   private canvas: Node;

   @property({
      type: Node
   })
   private lastPipe: Node = null;

   @property({
      type: Number,
   })
   public speed: number = 300;

   private _isGameStart: boolean = false;


   getLastPipeXpos() {
      return this.lastPipe.position.x;
   }

   setLastPipe(_lastPipe: Node) {
      this.lastPipe = _lastPipe;
      return this.lastPipe;
   }

   spawnPipe(xPos: number) {
      let node = instantiate(this.pipePrefab);
      let randomYPos = math.randomRange(0, -576);
      node.parent = this.canvas;
      node.setPosition(xPos, randomYPos, 0);
      node.setSiblingIndex(3);
      return node;
   }

   startSpawnPipes() {
      this._isGameStart = true;
      let spawnPos = 400;
      let maxPipeToSpawn = 4;
      for (let i = 0; i < maxPipeToSpawn; i++) {
         let node = this.spawnPipe(spawnPos);
         spawnPos += 300;

         if (i == maxPipeToSpawn - 1) {
            this.lastPipe = node;
         }
      }
   }

   isGameStart(){
      return this._isGameStart;
   }


}






