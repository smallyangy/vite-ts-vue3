<template>
    <Header title="哈哈哈哈" />
    <div class="text-center">
        Hello
    </div>
    <!-- 方式一 -->
    <!-- <img src="@assets/share-img.png">
    <div class="share-img" />
    <img :src="shareImg">
    <circleImg />
    <img
        src="@assets/test.png"
        alt=""
    > -->
</template>

<script setup lang="ts">
    import { ref } from 'vue';
    import Header from './components/Header/index.vue';
    import img1 from '@assets/share-img.png';
    import circleImg from './assets/circle.svg?component';
    import { version } from '../package.json';

    const shareImg = ref('');
    setTimeout(() => {
        // 方式三
        shareImg.value = img1;
    }, 0);
</script>

<style lang="scss">
    .share-img {
        width: 800px;
        height: 600px;

        // 方式二
        background: url("@assets/share-img.png");
    }
</style>
