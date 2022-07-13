<template>
    <!-- <div
        v-for="(item, index) in iconUrls"
        :key="index"
    >
        <img
            :src="item"
            alt=""
        >
    </div> -->
    <div
        v-for="(item, index) in iconUrlsBundle"
        :key="index"
    >
        <SvgIcon
            :name="item"
            color="pink"
            width="100"
        />
    </div>
    <!-- <div
        p="y-2 x-4"
        border="2 rounded blue-200"
    >
        {{ title }}
    </div>
    <button
        bg="blue-400 hover:blue-500 dark:blue-500 dark:hover:blue-600"
        text="sm white"
        font="mono light"
        p="y-2 x-4"
        border="2 rounded blue-200"
    >
        Button
    </button> -->
</template>

<script setup lang="ts">
    import { reactive } from 'vue';
    import init from '../../utils/wasm/fib.wasm';
    import Worker from './example.js?worker';
    import SvgIcon from '../SvgIcon/index.vue';
    // 1.初始化Worker实例
    const worker = new Worker();
    // 2.主线程监听worker的信息
    // worker.addEventListener('message', (e) => {
    //     console.log(e);
    // });

    const icons = import.meta.globEager('../../assets/icons/logo*.svg');


    // const iconUrls = reactive(Object.keys(icons));

    const iconUrlsBundle = reactive(Object.keys(icons).map(mod => {
        const fileName = mod.split('/').pop();
        const [svgName] = (fileName as string).split('.');
        return svgName;
    }));

    const props = defineProps({
        title: {
            type: String,
            default: ''
        }
    });
    const a = 12;

    type FibFunc = (num: number) => number;

    init({}).then(exports => {
        const fibFunc = exports.fib as FibFunc;
        console.log('Fib result: ', fibFunc(10));
    });
</script>

<style lang="scss">
</style>
