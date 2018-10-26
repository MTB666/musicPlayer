<template>
    <div class="hot-details-wrapper">
        <!-- 详情页的头部 -->
        <div class="hot-details-box">
            <div class="hot-details-pic">
                <img v-lazy="songlist.logo" alt="">
            </div>
            <div class="hot-details-wrap">
                <div class="hot-details-blur"></div>
                <div class="hot-details-container">
                    <span class="backIcon"  @click="goback"> 《 </span>
                    <div class="hot-details-name">{{songlist.dissname}}</div>
                </div>
                <div class="hot-details-play">
                    <i class="iconfont icon-bofang"></i> 
                    <span class="playname">随机播放</span>
                </div>
            </div>
        </div>
        <!-- 详情列表 -->
        <scroll class="hot-details-scroll">
            <ul class="hot-details-content">
                <li class="hot-details-item" v-for="(item) in songlist.songlist" :key="item.songid">
                    <p class="content-name">{{item.songname}}</p>
                    <p class="content-author">{{item.albumname}} · {{item.songname}}</p>
                </li>
            <!--   <li class="hot-details-item">
                <p class="content-name">123</p>
                <p class="content-author">123</p>
                </li>
                <li class="hot-details-item">
                <p class="content-name">123</p>
                <p class="content-author">123</p>
                </li> -->
            </ul>
        </scroll>
    </div>
</template>

<script>
export default {
  name:"hot-details",
  data(){
      return {
          songlist:{}
      }
  },
  created(){
      let url=window.location.href.split("/")
      let length=url.length;
      this.ajax.get("../../../../static/data/songList.json").then(res=>{
        //   console.log(res.data);
        let data = res.data.cdlist;
        // console.log(typeof data[0].dissid);
        // console.log(typeof url[length-1])
        data.forEach(item => {
           if(parseInt(url[length-1])===parseInt(item.dissid)){
            //    console.log(item.songlist[0])
            this.songlist = item;
           } 
        });
         
      }).catch(e=>{
          console.log(e)
      });
  /*     this.ajax.get("/apis/hotData").then(res=>{
          console.log(res);
      }).catch(e=>{
          console.log(e)
      }) */
    
  },
  methods:{
      goback(){
        //   this.$router.back();
        this.$router.go(-1)
      }
  }
}
</script>

<style lang="scss" scoped>
    .hot-details-wrapper{
        width:100vw;
        height:100vh;
        position:fixed;
        top:0;
        left:0;
        background:#282828;
        z-index:30;
        .hot-details-box{
            width:100vw;
            height:170px; 
            position:relative;
            .hot-details-pic{
                width:100%;
                height:170px;
                background:skyblue;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .hot-details-wrap{
                position:absolute;
                left:0;
                top:0;
                width:100vw;
                height: 170px;
                .hot-details-blur{
                    position:absolute;
                    left:0;
                    top:0;
                    width:100vw;
                    height: 170px;
                    background: rgba(7, 17, 27, 0.4);
                    filter: blur(10px);
                }
                .hot-details-container{
                    width:100%;
                    position:absolute;
                    top:10px;
                    .backIcon{
                        position:absolute;
                        left:12px;
                        color:#ffb500;
                        font-size:16px;
                    }
                    .hot-details-name{
                        width:150px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        font-size:14px;
                        font-weight: 700;
                        color:#fff;
                        text-align:center;
                        position: absolute;
                        left:50%;
                        margin-left:-75px;
                    
                    }
                }
                .hot-details-play{
                    position:absolute;
                    width:85px;
                    height:25px;
                    padding:0 8px;
                    border:2px solid #ffb500;
                    border-radius:15px;
                    bottom:13px;
                    left:50%;
                    margin-left:-43px;
                    line-height:23px;
                    color:#ffb500;
                    .icon-bofang{
                        display: inline-block;
                        vertical-align: middle;
                        font-size:15px;
                        margin-left:5px;
                        margin-right:5px;
                    }
                    .playname{
                        display: inline-block;
                        vertical-align: middle;
                        font-size:12px;
                    }
                }
            }
          
        }
        .hot-details-scroll{
            height:calc(100vh - 170px);
            overflow: hidden;
            .hot-details-content{
                padding:15px 20px;
                .hot-details-item{
                    margin-bottom: 15px;
                    .content-name{
                        font-size:14px;
                        color:#fff;
                        font-weight: 700;
                        line-height:35px;
                        width:200px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .content-author{
                        font-size:15px;
                        color:#656565;
                        line-height:20px;
                        width:250px;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
               } 
            }
        }
       

    }
</style>
