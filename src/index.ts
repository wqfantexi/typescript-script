import {SocketManager} from './rpcmgr'
import * as ReadLine from 'readline'
class Hello
{
    constructor()
    {

    }

    savHello()
    {
        console.log('hello')
    }
}

let obj = new Hello();
obj.savHello();


const sm = new SocketManager();


const rl = ReadLine.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  rl.question('你认为 Node.js 中文网怎么样', (answer:any) => {
    // 对答案进行处理
    console.log(`多谢你的反馈：${answer}`);
  
    rl.close();
  });