<template>
      <div class="competion-wrap">
            <el-input v-model="search" placeholder="찾을 공모전을 입력해주세요."></el-input>
            <transition-group name="list" tag="div">

                  <div class="card" v-for="(item, idex) in filteredcompetitionList" :key="idex">
                        <div class="left">
                              <img :src="setImg(item.belong)">
                              <p>{{item.belong}}</p>
                        </div>
                        <div class="right">
                              <h2><a :href="item.link">{{item.title}}</a></h2>
                              <p>{{item.date}}</p>
                        </div>
                  </div>

            </transition-group>

      </div>
</template>

<script lang="ts">
      //무한 스크롤
      import {
            Component,
            Prop,
            Vue
      } from 'vue-property-decorator';
      import {
            CompetitionInterface
      } from '../interface/'
      //데이터를 가져온다. axios request 를 통해 가져온다. 
      //api를 만든다. api 를 만들어서 그 api에서 가져오는 형식으로 해보자. 
      import CompetitionManager from '../data/CompetitionManager'
      @Component
      export default class Competition extends Vue {
            //computed 매핑
            public competitionList: CompetitionInterface[] = []
            public search: string = ""
            public async fetchCompetitionList() {
                  this.competitionList = await CompetitionManager.getCompetitionList()
            }
            public setImg(belong: string) {
                  if (belong === "육군") {
                        return require("../assets/army.jpg")
                  } else if (belong === "공군") {
                        return require("../assets/airforce.jpg")
                  } else if (belong === "해군") {
                        return require("../assets/navy.jpg")
                  } else if (belong === "국방부") {
                        return require("../assets/logo.jpg")
                  }
            }
            mounted() {
                  this.fetchCompetitionList()
            }
            get filteredcompetitionList() {
                  return this.competitionList.filter(competition => {
                        return competition.title.includes(this.search);
                  })
            }
      }
</script>

<style scoped> 

      .card {
            text-align: center;
            padding: 16px;
            margin-bottom: 10px;
            box-shadow: 0 10px 6px -6px #777;
            background: #fff;
            transition: all .5s ease;
            display: flex;
            justify-content: center;
            align-items: center;

      }

      .card img {
            width: 50px;
      }

      .card a {
            color: #2f3543;
      }

      .card a:hover {
            color: #ffb033;
      }

      .left {
            flex: 1;
      }

      .right {
            flex: 5;
      }

      .el-progress-bar__inner {
            transition: all 0.5s ease;
      }

      .competion-wrap {
            width: 50%;
            margin: 0 auto;
            height: 90%;
      }

      .el-input {
            margin-bottom: 10px;
      }
</style>