<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vitepress';
const route = useRoute();
const issi = ref('');
const links = {
  'si': '四圣心源',
  'yao': '中药收藏',
  'post': '文章列表',
  'mi': '修行(保密)'
};
const updateIssi = () => {
  const pathname = route.path;
  issi.value=`
  <span v-for="(segment, index) in path.split('/').slice(1)" :key="index">
    <a :href="'/' + path.split('/').slice(0, index + 1).join('/')">{{ links[segment]||segment }}</a>
    <span v-if="index < path.split('/').length - 2"> > </span>
    </span>`;
};

watch(() => route.path, updateIssi, { immediate: true });

</script>
<template>
      <div class="my-nav-block">当前位置：🏠 <a href="/">首页</a> > <span v-html="issi"></span></div>
</template>