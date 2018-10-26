<template>
    <div class="scroll" ref="wrapper">
        <slot></slot>
    </div>
</template>

<script>
import scroll from 'better-scroll';
export default {
    name:"scroll",
    props:{
        scrollY:{
            type:Boolean,
            default:true
        },
        scrollX:{
            type:Boolean,
            default:false
        },
        click:{
            type:Boolean,
            default:true
        },
        probeType:{
            type:Number,
            default:0
        }
    },
    mounted(){
        let wrapper = this.$refs.wrapper
		this.scroll = new scroll(wrapper,{
            click: this.click,
            probeType: this.probeType
        })
        //监听滚动事件
        this.scroll.on('scroll',position => {
            //scroll组件不关心你要干嘛,只需要把你想要的信心给你,也就是派发scroll事件,如果你想获取实时的滚动位置你来监听这个事件即可,position就是实时滚动的位置,是个对象,{x: 0 ,y: 0}   y是个负值
            this.$emit('scroll',position)
        })
        
    },
    methods:{
		//滚动到指定元素
		scrollToElement(...args) {
			this.scroll && this.scroll.scrollToElement(...args)
		}
	}
}
</script>

