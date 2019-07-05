
<template>
  <div>
     <router-view/>
     <FooterGuide v-if="$route.meta.isShowFooter"></FooterGuide>
  </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from './components/FooterGuide/FooterGuide'

  export default {
   components:{
     FooterGuide,
   }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>


</style>


