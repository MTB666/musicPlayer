<template>
    <div class="header-wrapper">
        <!-- 头部 music player -->
        <div class="header">
            <div class="header-icon">
                <i class="iconfont icon-bofang"></i>
                <span class="header-title">music player</span>
            </div>
            <div class="user"><i class="iconfont icon-user"></i></div>
        </div>
        <!-- 基本路由 -->
        <ul class="header-list">
            <li><router-link to="recommend">推荐</router-link></li>
            <li><router-link to="singer">歌手</router-link></li>
            <li><router-link to="rankpage">排行</router-link></li>
            <li><router-link to="search">搜索</router-link></li>
        </ul>  .
        .
    </div>
</template>
<script>
export default {
 name: 'my-header'
}
</script>
<style lang="scss" scoped>
 .header-wrapper{
    width:100vw;
    height:auto;
    padding-top:7px;
    margin-bottom:20px;
    .header{
        width:100vw;
        display:flex;
        flex-direction: row;
        height:27px;
        color:#ffb500;
    //  background: #fff;
        align-items:center;
        .header-icon{
            flex:1;
            text-align:center;
            .icon-bofang{
                font-size:27px;
                vertical-align: middle;
                margin-right:20px;
            }
            .header-title{
            font-size:17px;
            vertical-align: middle;
            font-weight:800;
            }
        }
        .user{
        //  width:27px;
        //  height:27px;
            text-align: center;
            margin-right:10px;
            margin-top:-2px;
            .icon-user{
                font-size:27px;
            }
        }
    }
    .header-list{
        display: flex;
        flex-direction: row;
        font-size:13px;
        justify-content: space-around;
        align-items: center;
        height:11px;
        margin-top:23px;
        li{ 
            a{
            color:#595959;
            padding-bottom:10px;
            border-bottom:3px solid #282828;
            font-weight:800;
            }
            .router-link-exact-active {
                border-bottom:3px solid #ffb500;
                color:#ffb500;
            }
        }
    }
 }
</style>

