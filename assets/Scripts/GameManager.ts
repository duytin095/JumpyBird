import { _decorator, CCInteger, Component, Node, Prefab, instantiate, math, CCFloat } from 'cc';
import { Ground } from './Ground';
import { UIManager } from './UIManager';
const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
   @property({
      type: Ground,
   })
   public ground: Ground

   @property({
      type: UIManager
   })
   private uiManager: UIManager;

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

   public isGameStart: boolean = false;


   start(): void {

   }


   public getLastPipeXpos() {
      return this.lastPipe.position.x;
   }

   spawnNode(xPos: number) {
      let node = instantiate(this.pipePrefab);
      let randomYPos = math.randomRange(0, -576);
      node.parent = this.canvas;
      node.setPosition(xPos, randomYPos, 0);
      node.setSiblingIndex(3);
      return node;
   }


   setLastPipe(_lastPipe: Node) {
      this.lastPipe = _lastPipe;
      return this.lastPipe;
   }

   startGame() {
      this.isGameStart = true;
      let startPos = 400;
      let maxPipeToSpawn = 4;
      for (let i = 0; i < maxPipeToSpawn; i++) {
         let node = this.spawnNode(startPos);
         startPos += 300;
         if (i == maxPipeToSpawn - 1) {
            this.lastPipe = node;
         }
      }
   }


}






