import { h } from 'vue';
import DefaultTheme from 'vitepress/theme-without-fonts';
import MyLayout from './MyLayout.vue';
import './my-fonts.css';


export default {
    extends: DefaultTheme,
    Layout() {
        return h(DefaultTheme.Layout, null, {
            'doc-before': () => h(MyLayout)
        })
    }
}