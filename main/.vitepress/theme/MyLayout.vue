<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vitepress';
const route = useRoute();
const issi = ref('');
const links = {
  '/si/': '四圣心源',
  '/yao/': '中药收藏',
  '/post/2025/': '文章列表(≤2025年)',
  '/post/2026/': '文章列表(2026年)',
  '/mi/': '修行(个人收藏，禁止非法传播)'
};
const updateIssi = () => {
  const pathname = route.path;
  for (const [prefix, name] of Object.entries(links)) {
    if (pathname.startsWith(prefix)) {
      issi.value = `<a href="${prefix}">${name}</a>`;
      return;
    }
  }
  issi.value='其它';
};

watch(() => route.path, updateIssi, { immediate: true });

</script>
<template>
      <div class="my-nav-block">当前位置：🏠 <a href="/">首页</a> ｜→｜ <span v-html="issi"></span></div>
</template>