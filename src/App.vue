<template>

    <el-container id="app">
        <el-header class="header">
            <div id="nav">
                <el-menu :default-active="activePage" class="el-menu-demo" mode="horizontal" @select="handleSelect">
                    <el-menu-item index=""><img src="./assets/logo.jpg">국방매니저</el-menu-item>
                    <el-menu-item index="share">카쉐어링</el-menu-item>
                    <el-menu-item index="competition">공모전 / 대회</el-menu-item>
                    <el-menu-item index="evaluation">부대 평가</el-menu-item>
                    <el-badge :value="value" class="item"> 
                        <el-menu-item index="myPage">중위 주홍철님 환영합니다.</el-menu-item>
                    </el-badge>
                </el-menu>
            </div>
        </el-header>
        <router-view @getShare="increaseBadge"/>
    </el-container>
</template>
<script lang="ts">
    import {
        Component,
        Vue
    } from 'vue-property-decorator';
    @Component({

    })
    export default class Home extends Vue {
        public value: number = 0;
        public activePage: string = "home";
        handleSelect(key: string, keyPath: string) {
            this.$router.replace("/" + key);
        }
        public increaseBadge(name : string){
            console.log(name + "에게 카쉐어링이 신청되었습니다.")
            this.value++;
        }
    }
</script>

<style>
.el-main{
    width: 500px;
}
.el-badge{
    position:absolute !important;
    top:0;
    right:0;
    
}
.el-badge__content.is-fixed{
    top:14px !important;
}
    .el-message-box {
        font-family: 'Kakao'
    }

    .list-enter-active,
    .list-leave-active {
        transition: all .5s;
    }

    .list-enter,
    .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }

    @font-face {
        font-family: 'Kakao';
        font-style: normal;
        font-weight: 400;
        src: local('Kakao Regular'), local('KakaoOTF Regular'),
            url(./assets/fonts/KakaoOTF-bRg.eot) format('eot'),
            url(./assets/fonts/KakaoOTF-bRg.woff2) format('woff2'),
            url(./assets/fonts/KakaoOTF-bRg.woff) format('woff'),
            url(./assets/fonts/KakaoOTF-bRg.otf) format('opentype');
    }

    @font-face {
        font-family: 'Kakao';
        font-style: normal;
        font-weight: 200;
        src: local('Kakao Light'), local('KakaoOTF Light'),
            url(./assets/fonts/KakaoOTF-aLt.eot) format('eot'),
            url(./assets/fonts/KakaoOTF-aLt.woff2) format('woff2'),
            url(./assets/fonts/KakaoOTF-aLt.woff) format('woff'),
            url(./assets/fonts/KakaoOTF-aLt.otf) format('opentype');
    }

    * {
        margin: 0 auto;
        box-sizing: border-box
    }

    a {
        text-decoration: none;
    }

    body {
        margin: 0 auto;
        overflow: hidden;
    }

    #app {
        font-family: 'Kakao', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        width: 100vw;
        height: 100vh;
        background: #eee;
    }

    .el-header {
        margin-bottom: 50px;
    }

    .el-header,
    .el-footer {
        background-color: #B3C0D1;
        color: #333;
        text-align: center;
        line-height: 60px;
        width: 100%;
        background-color: #2f3543;
        color: #2f3543;
    }

    .el-aside {
        background-color: #D3DCE6;
        color: #333;
    }

    .el-main {
        color: #333;
        text-align: center;
    }

    .el-menu-item>img {
        width: 50px;
    }

    .el-menu-item:last-child {
        position: absolute;
        right: 0;
    }

    body>.el-container {
        margin-bottom: 40px;
    }
</style>