<template>
  <div class="singerWrap">
      <scroll class="singerW" ref="scroll">
          <div>
              <div class="listItemW" v-for="item of singer" ref='sin-list-item'>
                  <h1>{{item.title}}</h1>
                  <ul class="listUlW">
                      <li class="listUlW-item" v-for="itemss of item.items" @click="spanCli(itemss.id)">
                          <img v-lazy="itemss.avatar">
                          <span>{{itemss.name}}</span>
                      </li>
                  </ul>
              </div>
          </div>
      </scroll>
      <div class="rightList">
          <span :class="{active:currentIndex===index}" v-for="(ZM,index) of singer" @click="scroll(index)" ref="rightListItem" >{{ZM.title=="热门"?"热":ZM.title}}</span>
      </div>
      <transition name="slideX">
          <router-view></router-view>
      </transition>
  </div>
</template>

<script>
export default {
  name:"singer",
   data(){
        return {
            singer:[],
            scrollY:0,
            currentIndex: 0
        }
    },
    mounted(){
        this.getSinger()
    },
    methods:{
        spanCli(itemData){
            this.$router.push({
                path:'/omain/singer/singerdetail',
                query:itemData
            })
        },
        getSinger () {
            this.$axios.get('/apis/singer').then(res => {
                // console.log('res111', res.data.data.list)
                this.singer = this._normalLizeSinger(res.data.data.list)
                // console.log('222', this.singer)
            })
        },
        _normalLizeSinger (list) {
            let map = {
                hot: {
                    title: '热门',
                    items: []
                }
            }
            // console.log('hot1', map)
            list.forEach((item, index) => {
                if (index <= 10) {
                    // console.log(index)
                    map.hot.items.push({
                        'name': item.Fsinger_name,
                        'id': item.Fsinger_id,
                        'avatar':  `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
                    })
                    // console.log(map)
                }


                const key = item.Findex
                // console.log('key', key)
                if (!map[key]) {
                    map[key] = {
                        'title': key,
                        items: []
                    }
                }
                map[key].items.push({
                    'name': item.Fsinger_name,
                    'id': item.Fsinger_id,
                    'avatar': `https://y.gtimg.cn/music/photo_new/T001R300x300M000${item.Fsinger_mid}.jpg`
                })
            })
            
            let ret = []
            let hot = []
            for (let key in map) {
                let val = map[key]
                // console.log('val999', val)
                if (val.title.match(/[a-zA-Z]/)) {
                // console.log('ret', ret)
                ret.push(val)

            
                } else if (val.title === '热门') {
                hot.push(val)
                }
            }
            ret.sort((a, b) => {
                return a.title.charCodeAt() - b.title.charCodeAt()
            })

            return hot.concat(ret)
        },
        scroll(index) {
            this.currentIndex = index;
			      let sinlist = this.$refs['sin-list-item'];
            this.$refs.scroll.scrollToElement(sinlist[index],600)
        },
    },
}
</script>

<style lang="scss" scoped>
 .singerWrap{
        flex: 1;
        display: flex;
        flex-direction: column;
        .singerW{
            width:100vw;
            flex:1;
            overflow: hidden;
            .listItemW{
                width:100%;    
                color:#737373;
                h1{width:calc(100% - 17px);padding-left:17px;font-size:15px;line-height:24px;background:#363636;}
                .listUlW{width:calc(100% -26px);padding-left:26px;
                    .listUlW-item{margin-top:17px;display:flex;flex-direction: row;align-items: center;
                        img{width:47px;height:47px;border-radius:100%;margin-right:14px;}
                        span{font-size:13px;}
                    }
                }
            }
        }

        .rightList{position: fixed;bottom:0;right:0;display: flex;flex-direction:column;
            width:20px;background:#1c1c1c;align-items: center;padding-top:19px;border-radius:12px;
            span{margin-bottom:5px;color:#878787;font-size:14px;
            &.active{color:red;}
            }
        }

        .slideX-enter,.slideX-leave-to{
            transform:translateX(100vw);
        }
        .slideX-enter-active,.slideX-leave-active{
            transition: all 0.5s;
        }
        .slideX-enter-to,.slideX-leave{
            transform:translateX(0);
        }

    }
</style>
