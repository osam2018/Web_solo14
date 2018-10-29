<template>
    <el-main class="about">
        <h4>편리함을 더하다. 카쉐어링</h4>
        <p>
            영내콜택시로는 한계가 있습니다.
            출퇴근이나 항상 가는 곳은 정해져있습니다.
            같은 간부끼리 정답게 카쉐어링을 하면서 인맥과 편리를 다질 수 있습니다.
        </p>
        <h4>공유성을 더하다. 공모전 / 대회</h4>
        <p>
            육군, 공군, 해군은 공모전이나 대회를 많이 엽니다만
            홍보가 부족합니다.
            육, 해, 공 국방부까지 모든 공지사항을 스크래핑하여 제공합니다.
        </p>
        <h4>오픈성을 늘리다. 부대평가</h4>
        <p>
            더이상 부대를 나무위키만을 보고 가지 않습니다.
            실제 병사, 간부들이 겪은 부대평가들을 모아 부대선택시 좀
            더 오픈된 환경속에서 선택하는 것을 도와 줍니다.
        </p>
    </el-main>

</template>

<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator';
    import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

    @Component({

    })
    export default class Home extends Vue {}
</script>

<style scoped>
    .about {
        line-height: 30px;
    }
</style>