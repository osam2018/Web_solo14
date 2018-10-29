import { Component, Vue } from 'vue-property-decorator';
import {EvaluationInterface} from '../interface'  
class EvaluationManager extends Vue { 
    private list : EvaluationInterface [] = [
        {
            "name":"공군기상단", 
            "place":"충남 계룡대로 663", 
            "placeStar":5, 
            "personStar":5, 
            "diffStar":5, 
            "evaluation":"아주 참 좋습니다. 자유도도 높구요. 최고에요! 일은 좀 어렵습니다.", 
            "date":"20181025", 
        }, 
        {
            "name":"공군기상단", 
            "place":"충남 계룡대로 663", 
            "placeStar":5, 
            "personStar":5, 
            "diffStar":5, 
            "evaluation":"아주 참 좋습니다. 자유도도 높구요. 최고에요! 일은 좀 어렵습니다.", 
            "date":"20181025", 
        }, 
        {
            "name":"공군기상단", 
            "place":"충남 계룡대로 663", 
            "placeStar":5, 
            "personStar":5, 
            "diffStar":5, 
            "evaluation":"아주 참 좋습니다. 자유도도 높구요. 최고에요! 일은 좀 어렵습니다.", 
            "date":"20181025", 
        }, 
        {
            "name":"공군기상단", 
            "place":"충남 계룡대로 663", 
            "placeStar":5, 
            "personStar":5, 
            "diffStar":5, 
            "evaluation":"아주 참 좋습니다. 자유도도 높구요. 최고에요! 일은 좀 어렵습니다.", 
            "date":"20181025", 
        } 
    ]; 
    constructor (){
        super();
        console.log("EvaluationManager 생성..완료")
    }
    public getEvalList(){ 
        return this.list; 
    } 
    public addEvalList(obj : EvaluationInterface){ 
        this.list.push(obj)
        return this.list; 
    }  

}
 
export default new EvaluationManager(); 