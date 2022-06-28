import { defineConfig, normalizePath } from 'vite';
// 引入 path 包注意两点:
// 1. 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
// 2. tsconfig.node.json 中设置 `allowSyntheticDefaultImports: true`，以允许下面的 default 导入方式
import path from 'path';
import vue from '@vitejs/plugin-vue';
import autoprefixer from 'autoprefixer';
import windi from 'vite-plugin-windicss';
import cssnano from 'cssnano'; // css压缩
import viteEslint from 'vite-plugin-eslint';
import viteStylelint from '@amatlash/vite-plugin-stylelint';

// 全局scss文件的路径
// 用normalizePath解决路径问题
const variableScssPath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig({
    // 手动指定项目根目录位置
    root: path.join(__dirname, 'src'),
    build: {
        // 打包路径
        outDir: path.join(__dirname, 'dist')
    },
    plugins: [
        vue(),
        windi({
            scan: {
                dirs: ['.'], // 当前目录下所有文件
                fileExtensions: ['vue', 'js', 'ts'] // 同时启用扫描vue/js/ts
            },
            config: {
                attributify: true, // 开启attributify
                shortcuts: {
                    'flex-c': 'flex justify-center items-center'
                }
            }
        }),
        viteEslint(),
        viteStylelint({
            // 对某些文件排除
            exclude: /windicss|node_modules/
        }),
    ],
    // css 相关配置
    css: {
        preprocessorOptions: {
            scss: {
                // additionalData 的内容会在每个scss文件的开头自动注入
                additionalData: `@import "${variableScssPath}";`
            }
        },
        modules: {
            // 一般我们可以通过generateScopedName属性来对生成的类名进行自定义
            // 其中，name表示当前文件名，local表示类名
            generateScopedName: '[name]__[local]__[hash:base64:5]'
        },
        // 进行PostCSS配置
        postcss: {
            plugins: [
                autoprefixer({
                    // 指定目标浏览器
                    overrideBrowserslist: ['Chrome > 40', 'ff > 31', 'ie 11']
                }),
                // css压缩
                cssnano({
                    preset: 'default'
                })
            ]
        }
    }
});
