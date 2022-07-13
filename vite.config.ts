import { defineConfig, normalizePath, loadEnv } from 'vite';
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
import svgLoader from 'vite-svg-loader';
import viteImagemin from 'vite-plugin-imagemin';
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons';

// 全局scss文件的路径
// 用normalizePath解决路径问题
const variableScssPath = normalizePath(path.resolve('./src/variable.scss'));

// https://vitejs.dev/config/
export default defineConfig(({command, mode}) => {
    const env = loadEnv(mode, process.cwd());
    return {
        // 手动指定项目根目录位置
        root: path.join(__dirname, 'src'),
        build: {
            // 打包路径
            outDir: path.join(__dirname, 'dist')
        },
        resolve: {
            // 别名配置
            alias: {
                '@assets': path.join(__dirname, 'src/assets'),
            }
        },
        define: {
            'import.meta.env.app': env
        },
        plugins: [
            vue(),
            svgLoader(),
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
            // 图片压缩
            viteImagemin({
                // 无损压缩配置，无损压缩下图片质量不会变差
                optipng: {
                    optimizationLevel: 7
                },
                // 有损压缩配置，有损压缩下图片质量可能会变差
                pngquant: {
                    quality: [0.6, 0.8],
                },
                // svg优化
                svgo: {
                    plugins: [
                        { name: 'removeViewBox' },
                        { name: 'removeEmptyAttrs', active: false }
                    ]
                }
            }),
            // svg雪碧图
            createSvgIconsPlugin({
                iconDirs: [ path.join(__dirname, 'src/assets/icons') ]
            })
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
    }
});
