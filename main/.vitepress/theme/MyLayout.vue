<script setup>
import { ref, watch } from 'vue';
import { useRoute } from 'vitepress';
const route = useRoute();
const issi = ref('');
const links = {
  'si': '四圣心源','yao': '中药收藏',
  'post': '文章列表','mi': '修行(保密)','qita':'其它'
};
const updateIssi = () => {
  const pathname = route.path;
  issi.value = pathname.split('/').slice(1,-1).map((segment, index, arr) => {
    const linkText = links[segment] || segment;
    return ` > <a href="/${pathname.split('/').slice(1, index + 2).join('/')}/">${linkText}</a>}`;
  }).join('');
};

watch(() => route.path, updateIssi, { immediate: true });

</script>
<template>
      <div class="my-nav-block">当前位置：🏠 <a href="/">首页</a><span v-html="issi"></span></div>
</template>