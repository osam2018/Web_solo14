<template>
      <div class="evaluation">

            <el-input v-model="search" placeholder="찾을 부대를 입력해주세요."></el-input>
            <transition-group name="list" tag="div">
                  <div class="card" v-for="(item, idex) in filteredevalList" :key="idex">
                        <img :src="setImg(item.name)">
                        <p class="name">{{item.name}}</p>
                        <p class="include">{{item.place}}</p>
                        <p class="include">시설</p> 
                        <el-rate v-model="item.placeStar" disabled show-score text-color="#ff9900" score-template="{value} 점">
                        </el-rate>
                        <p class="include">사람들</p>  
                        <el-rate v-model="item.personStar" disabled show-score text-color="#ff9900" score-template="{value} 점">
                        </el-rate>
                        
                        <p class="include">업무난이도</p>   
                        <el-rate v-model="item.diffStar" disabled show-score text-color="#ff9900" score-template="{value} 점">
                        </el-rate> 
                        <p class="date">{{item.date}}</p> 
                        <p>{{item.evaluation}}</p> 
                        <el-button @click="showApplyEval(item.name)">후기쓰기</el-button>
                  </div>
            </transition-group>
            <div class="cardFixed" v-if="showCard">
                  <div class="card">
                        <img :src="setImg(applyName)">
                        <p class="name">{{applyName}}</p>
                        <p class="name">시설</p> 
                        <el-rate v-model="applyPlaceStar" show-score text-color="#ff9900" score-template="{value} 점">
                        </el-rate>
                        <p class="name">사람들</p>  
                        <el-rate v-model="applyPersonStar" show-score text-color="#ff9900" score-template="{value} 점">
                        </el-rate>
                        <p class="name">업무난이도</p>   
                        <el-rate v-model="applyDiffStar" show-score text-color="#ff9900" score-template="{value} 점">
                        </el-rate>
                        <el-input v-model="applyEvaluation">

                        </el-input>
                        <el-button @click="applyEval()">후기쓰기</el-button>
                        <el-button @click="cancelApplyEval()">취소</el-button>
                  </div>
            </div>
      </div>
</template>

<script lang="ts">
      import {
            Component,
            Prop,
            Vue
      } from 'vue-property-decorator';
      import EvaluationManager from '../data/EvaluationManager'
      import {
            EvaluationInterface
      } from '../interface';
      @Component
      export default class Evalution extends Vue {
            public search: string = "";
            public showCard: boolean = false;
            public evalList = EvaluationManager.getEvalList();
            public applyName: string = "";
            public applyPlaceStar: number = 5;
            public applyPersonStar: number = 5;
            public applyDiffStar: number = 5;
            public applyEvaluation: string = "";

            public showApplyEval(name: string) {
                  this.showCard = true;
                  this.applyName = name;
            }
            public setImg(name : string){
                  if (name == "공군 기상단") {
                        return require("../assets/mark/공군기상단.jpg")
                  }
                  return require("../assets/mark/공군기상단.jpg") 
            }
            public setApplyPlace(name : string) {
                  if (name == "공군 기상단") {
                        return "충남 계룡대로 663";
                  }
                  return "충남 계룡대로 663";
            }
            public setDate() {
                  const d = new Date();
                  const YYYY = ("00" + d.getFullYear()).slice(-2)
                  const MM = ("00" + d.getMonth() + 1).slice(-2)
                  const DD = ("00" + d.getDate()).slice(-2)
                  return `${YYYY}${MM}${DD}` 
            }
            public cancelApplyEval(){ 
                  this.showCard = false;
            }
            public async applyEval() {
                  //나중에는 서버에 요청할것이기 때문에  
                  const place : string = this.setApplyPlace(this.applyName);
                  const obj: EvaluationInterface = {
                        name: this.applyName,
                        place: place,
                        placeStar: this.applyPlaceStar,
                        personStar: this.applyPersonStar,
                        diffStar: this.applyDiffStar,
                        evaluation: this.applyEvaluation,
                        date: this.setDate(),
                  }
                  this.evalList = await EvaluationManager.addEvalList(obj);

                  this.showCard = false;
            }
            mounted() {}

            get filteredevalList() {
                  return this.evalList.filter(evaluation => {
                        return evaluation.name.includes(this.search);
                  })
            }
      }
</script>

<style scoped>
.evaluation{ 
    padding: 0 50px;
    overflow-y: scroll;
} 

.card img{
          width: 200px;
}
      .cardFixed {    
            top: 0;
    left: 0;
            position: fixed;
            width: 100vw;
            height: 100vh;
            background: rgba(0, 0, 0, 0.6);
            display: flex;
            justify-content: center;
            align-items: center;
      }
</style>