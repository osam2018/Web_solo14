<template>
      <div> 
            <h2>신청받은 카쉐어링 목록</h2>
                        <transition-group name="list" tag="div"> 
                  <div class="card" v-for="(item, idex) in shareUserList" :key="idex"> 
                              <p>{{item.name}}</p> 
                              <p>{{item.message}}</p> 
                              <p>{{item.phone}}</p> 
                              <p>등록날짜 : {{item.date}}</p> 
                  </div>

            </transition-group>

      </div>
</template>

<script lang="ts">
      import {
            Component,
            Prop,
            Vue
      } from 'vue-property-decorator';
      import ShareUserManager from '../data/ShareUserManager'

      @Component
      export default class Mypage extends Vue {
            public shareUserList = ShareUserManager.getShareUserList();   
            mounted() {}
      }
</script>

<style> 
.el-progress-bar__inner{
      transition: all 0.5s ease; 
}
h2{
          text-align: center;
    margin-bottom: 40px;
}
p{
      font-size: 20px;
    margin-bottom: 10px;
}
</style>