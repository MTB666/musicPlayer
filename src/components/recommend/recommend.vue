<template>
    <div class="recommend-wrapper">
        <!-- 轮播图 -->
      <swiper :options="swiperOptionIn" class="swiper-position">
        <swiper-slide v-for='(item) in slider' :key='item.id'>
          <img class="recommand-swiper-img"  v-lazy="item.picUrl">
        </swiper-slide>
        <div class="swiper-pagination-white swiper-pagination-position" slot="pagination"></div>
      </swiper>
      <!-- 热门推荐 -->
      <div class="hot-container">
          <h1 class="hot-name">热门歌单推荐</h1>
          <!-- <loading class="loading" v-if="!hotlist.length"></loading> -->
          <scroll class="hot-scroll">
            <ul class="hot-list">
                <li v-for="(item) in hotlist" :key="item.dissid" @click="goDetails(item)">
                    <div class="hot-pic">
                        <img v-lazy="item.imgurl" alt="">
                    </div>
                    <div class="hot-content">
                        <p class="content-name">{{item.creator.name}}</p>
                        <p class="content-author">{{item.dissname}}</p>
                    </div>
                </li>
            </ul>
          </scroll>
      </div>
      <!-- 热门推荐的详情（基本路由中的子路由） -->
      <transition name="slider">
        <router-view></router-view>
      </transition>
    </div>
</template>
<script>
 import 'swiper/dist/css/swiper.css';
 import {swiper, swiperSlide} from 'vue-awesome-swiper';
//  import Loading from "../base/loading";
 export default {
    name:'recommend',
   data () {
      return {
        slider: [],
        swiperOptionIn: {
            pagination: '.swiper-pagination-white',
            paginationClickable: true,
            autoplay: 3000,
            loop:true,
            speed:300,
            autoplayDisableOnInteraction:false
        }, 
        hotlist:[]
      }
    },
    components:{
        swiper,
        swiperSlide,
        // Loading
    },
    created(){
        // console.log(this.ajax)
         this.$axios.get('/aps/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg?g_tk=5381&uin=0&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&_=1540275028512').then((res)=>{
            // console.log(res)
            this.slider = res.data.data.slider;
            console.log(this.slider)
        }).catch(e=>{
            console.log(e)
        }) 

        this.$axios.get('/apis/lists').then((res)=>{
            this.hotlist=res.data.data.list;
            // console.log(this.hotlist)
        }).catch(e=>{
            console.log(e)
        })
    },
    methods:{
        goDetails(currentItem){
            // console.log(currentItem)
            // this.$router.push({
            //     path:`/home/recommend/${4574438}`
            // })
            /* 
                this.$router.push({
                    path:"/home/recommend/hotdetails",
                    query:{
                        id:4574438
                    }
                })

                在 router的index.js中
                {
                  path:"hotdetails",
                  component:HotDetails
                  name:"hotdetails"
                }
            */
        }
    }

}
</script>
<style lang="scss" >
   .recommend-wrapper{
    .swiper-position {
        position: relative;
        height:128px;
            .recommand-swiper-img {
                width: 100%;
                display: block;
            }
            .swiper-pagination-position {
                position: absolute;
                z-index: 1;
                display: flex;
                flex-direction: row;
                justify-content: center;
                .swiper-pagination-bullet-active{
                    width:15px;
                    border-radius:5px;
                    transition:width 0.2s ease-in-out;
                }
            }
    }
    .hot-container{
           padding:0 20px;
        //    background:red;
           .hot-name{
               padding:20px 0;
               font-size:14px;
               color:#ffb500;
               text-align:center;
           }
           .loading{
               width:100%;
               height:calc(100vh - 275px);
               margin:0 auto;
               img{
                   width:100%;
                   height:100%;
               }
           }
           .hot-scroll{
               width:100%;
               height:calc(100vh - 275px);
               overflow: hidden;
               .hot-list{
               li{
                   display: flex;
                   flex-direction: row;
                   margin-bottom:10px;
                   .hot-pic{
                       width:60px;
                       height:60px;
                       margin-right:20px;
                       img{
                           width:100%;
                           height:100%;
                       }
                   }
                   .hot-content{
                       flex:1;
                       .content-name{
                           font-size:14px;
                           color:#fff;
                           font-weight: 700;
                           line-height:35px;
                       }
                       .content-author{
                           font-size:15px;
                           color:#656565;
                           line-height:20px;
                           width:200px;
                           overflow: hidden;
                           text-overflow: ellipsis;
                           white-space: nowrap;
                       }
                   }  
               }
            }
           }
           
    }
    .slider-enter,.slider-leave-to{
        transform: translateX(-100vw);
        opacity: 0;
    }
    .slider-enter-active,.slider-leave-active{
        transition:all 1s ease-in-out;
    }
    .slider-enter-to,.slider-active{
        transform: translateX(0vw);
        opacity: 1;
    }
   }
</style>
