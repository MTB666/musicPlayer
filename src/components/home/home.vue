<template>
    <div class="home">
        <my-header></my-header>
        <router-view></router-view>
    </div>
</template>
<script>
import myHeader from '../header/header';
export default {
 name: 'home',
 components:{
   myHeader
 }
}
</script>
<style lang="scss" scoped></style>