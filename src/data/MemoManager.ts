import Vue from 'vue'

export enum MEMO_EDIT_STATE {
    ADD = "add", 
    UPDATE = "update"
} 
interface Todo { 
    name: string;
    isDone: boolean;
} 
class MemoManager extends Vue { 
    private list : Todo [] = [{ 
        "name": "Vue.js 공부하기",
        "isDone" : true
    },{ 
        "name": "룰룰루 신나는 Vue.js~",
        "isDone" : true
    }];
    private editState : MEMO_EDIT_STATE = MEMO_EDIT_STATE.ADD; 
    public currentUpdateIndex : number = -1;
    public currentUpdateMemo : string = ""

    constructor (){
        super();
        console.log("memoManager 생성..완료")
    }
    public getMemoList(){
        return this.list; 
    }
    public getMemo(index : number){
        return this.list[index]; 
    }
    public getMemoPercent(trueLength : number = 0){ 
        console.log(trueLength, this.list.length)
        return ~~( trueLength / this.list.length  * 100) 
    }
    
    public startAddMemo(){
        this.editState = MEMO_EDIT_STATE.ADD; 
        this.dispatchChangeEvent();
    }
    //메모를 추가할 때 바뀌었다고 app.vue에게 보내며 수정한다. 
    public addMemo(memo : string){ 
        this.list.push({name : memo, isDone : false});
        this.startAddMemo();
    } 

    //업데이트 시작전.. 인덱스를 설정하는 부분..!
    public startUpdateMemo(index : number){
        this.currentUpdateIndex = index; 
        this.editState = MEMO_EDIT_STATE.UPDATE;  
        this.currentUpdateMemo = this.list[index].name
        this.dispatchChangeEvent(); 
    }

    public updateMemo(newMemo : object){
        console.log(this.list, this.currentUpdateIndex, newMemo)
        Vue.set(this.list, this.currentUpdateIndex, newMemo)
    }
 
    public endUpdateMemo(){
        this.currentUpdateIndex = -1; 
    }

    public dispatchChangeEvent(){
        this.$emit("change", this.editState)
    }

    public deleteMemo(index : number){
        this.list.splice(index, 1);
    }
}

var memoManager = new MemoManager(); 
export default memoManager; 