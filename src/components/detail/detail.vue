<template>
    <div class="tetail">
        <div class="pic">
            <div class="mask"></div>
            <h5 class="ellipsis">{{datail.dissname}}</h5>
            <i class="iconfont icon-fanhui" @click="back"></i>
            <img :src="datail.logo">
            <div class="sjbo">
                <i class="iconfont icon-bofang"></i>
                <span>随机播放全部</span>
            </div>
        </div>

        <scroll class="detailScroll">
            <ul class="geqList">
                <li class="item" v-for="itemDat of datail.songlist">
                    <h2 class="ellipsis">{{itemDat.songname}}</h2>
                    <p class="ellipsis">{{itemDat.albumname}}</p>
                </li>
            </ul>
        </scroll>

    </div>
</template>
<script>
export default {
    name:'tetail',
    data(){
        return {
            Gqlist:[1,2,3,4,5,6,7,8,9,10],
            datail:{}
        }
    },
    mounted(){
        this.getDatap()
    },
    methods:{
        back(){
            this.$router.back();
        },
        getDatap(){
            this.$axios.get('/apis/detail').then(req=>{
                // console.log(req.data.cdlist);
                this.datail = req.data.cdlist[0]
            }).catch(err => {
                console.log(err)
            })  
        }
    }
}
</script>
<style lang="scss">
    .tetail{
        position: fixed;
        top:0;left:0;
        width:100vw;
        height:100vh;
        z-index: 1000;
        background:#282828;
       .pic{
            position: relative;
            width:100%;
            height:307px;
            margin-bottom:10px;
           .mask{
               position: absolute;
               top:0; left:0;
               width:100%;
               height:307px;
               background:rgba(0,0,0,0.5);
           }
           i{position:absolute;left:20px;top:10px;font-size:30px;color:#ffff08;}
           h5{position:absolute;left:0;top:14px;width:100%;text-align:center;font-size:24px;color:#fff;font-weight:500;}
           img{width:100%;height:100%;}
           .sjbo{display:flex; flex-direction:row; align-items: center; justify-content: center;position:absolute;left:50%;bottom:24px;margin-left:-83px;width:164px;height:36px;border:1px solid #ffff08;border-radius:25px 25px;color:#ffff08;font-size:16px;
                i{position:static;font-size:22px;margin-right:5px;}
           }
       }

        .detailScroll{
            width:100%;
            height:calc(100% - 317px);
            overflow:hidden;
            .geqList{list-style:none;width:calc(100% -34px);padding-left:34px;
                .item{margin-top:30px;font-size:15px;
                    h2{width:100%;color:#fff;font-weight:500;}
                    p{width:100%;color:#a7a7a7;}
                }
            }
        }

    }
</style>


