module.exports = {
    extends: [
        // standard 规则集合
        'stylelint-config-standard',
        // 'stylelint-config-html/vue',
        // standard 规则集合的 scss 版本
        'stylelint-config-standard-scss',
        // .vue文件规则
        'stylelint-config-recommended-vue/scss',
        // 样式属性顺序规则
        'stylelint-config-recess-order'
    ],
    rules: {
        "indentation": [ 4, { "baseIndentLevel": 1 } ],
        'selector-pseudo-element-no-unknown': [
            true,
            {
                ignorePseudoElements: ['v-deep']
            }
        ],
        // 'number-leading-zero': 'never',
        // 'no-descending-specificity': null,
        // 'font-family-no-missing-generic-family-keyword': null,
        // 'selector-type-no-unknown': null,
        // 'at-rule-no-unknown': null,
        // 'no-duplicate-selectors': null,
        'no-empty-source':null,
        // 'selector-pseudo-class-no-unknown': [true, { ignorePseudoClasses: ['global'] }]
    }
}
