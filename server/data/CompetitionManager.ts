//import Vue from 'vue' 
 
import { Component, Vue } from 'vue-property-decorator';
import {CompetitionInterface} from '../interface'
import axios from 'axios'

const COMPETITION_LIST_LINK = "http://127.0.0.1:12010/api/scrapList" 
class CompetitionManager extends Vue { 
    private list : CompetitionInterface [] = [];  

    constructor (){
        super();
        console.log("CompetitionManager 생성..완료")
    } 
    public getCompetitionList():Promise<CompetitionInterface[]>{ 
        return axios.get(COMPETITION_LIST_LINK).then(response=>{ 
            return response.data
        })
    } 
}
 
export default  new CompetitionManager(); 