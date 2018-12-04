import {ParamItem, ExcuteTemplate, ExcuteTemplateMgr} from './excute'
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

let mgr = new ExcuteTemplateMgr();
mgr.loadFromPath('./dist/mgr.json')
let tmp = new ExcuteTemplate('ping', 'ping');
let param = new ParamItem();
param.name = 'site';
param.param = 'www.baidu.com';
param.prefix = '-t'
param.required = true;
tmp.Param.push(param);

mgr.appendScript(tmp);

mgr.saveToPath('./dist/mgr2.json')
let obj = new Hello();
obj.savHello();