import { Component, Vue } from 'vue-property-decorator';
import {ShareUserInterface} from '../interface'  
class ShareUserManager extends Vue { 
    private list : ShareUserInterface [] = [
        {
            "name":"주홍철중위", 
            "phone":"010-9352-9632", 
            "message":"이번에 다리를 다쳐서 ㅠㅠ 계룡대 1정문에서 코스모스까지 태워주세요!", 
            "date":"20181025",  
        },         {
            "name":"주홍철중위", 
            "phone":"010-9352-9632", 
            "message":"이번에 다리를 다쳐서 ㅠㅠ 계룡대 1정문에서 코스모스까지 태워주세요!", 
            "date":"20181025",  
        },         {
            "name":"주홍철중위", 
            "phone":"010-9352-9632", 
            "message":"이번에 다리를 다쳐서 ㅠㅠ 계룡대 1정문에서 코스모스까지 태워주세요!", 
            "date":"20181025",  
        }, 
    ]; 
    constructor (){
        super();
        console.log("ShareUserManager 생성..완료")
    }
    public getShareUserList(){ 
        return this.list; 
    } 
    public addShareUserList(obj : ShareUserInterface){ 
        this.list.push(obj)
        return this.list; 
    }  

}
 
export default new ShareUserManager(); 