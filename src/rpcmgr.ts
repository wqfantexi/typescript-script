//管理所有的远程调用
import socketIo  from 'socket.io'
import {ParamItem, ExcuteTemplate, ExcuteTemplateMgr} from './excute'
import {rpcname} from './rpcname'




export class SocketManager
{
    io:socketIo.Server;
    ScriptMgr:ExcuteTemplateMgr;
    scriptPath='./dist/mgr2.json';
    constructor()
    {
        this.io = socketIo(52333);
        this.ScriptMgr = new ExcuteTemplateMgr();
        this.ScriptMgr.loadFromPath(this.scriptPath);
        this.listen();
    }

    listen()
    {
        this.io.on('connection', (socket)=>{
            console.log(socket.id);
            console.log('接收到客户端连接');
            
            socket.on('req_get_script', ()=>{
                const jsonScript = JSON.stringify(this.ScriptMgr.ArrScript);
                socket.emit(rpcname.resp_get_script, jsonScript);
            });
    

            socket.on(rpcname.req_add_script, (script:string)=>{
                let item = new ExcuteTemplate();
                item.loadFromJson(script);
                this.ScriptMgr.appendScript(item);
                this.ScriptMgr.saveToPath(this.scriptPath);
                socket.emit(rpcname.resp_add_script, 'success');
            });
        });
    }
}