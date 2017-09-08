<template>
    <li>
      <a :href="href" class="item-link item-content">
        <div class="item-media">
            <img :src="img" width="25">
        </div>
        <div class="item-inner">
          <div class="item-title-row">
            <div class="item-title">{{title}}</div>
            <div class="item-after">{{text}}</div>
          </div>
        </div>
      </a>
    </li>
</template>
<script>
    export default{
        props:['img','text','href','title']
    }
</script>
<style>
    
</style>