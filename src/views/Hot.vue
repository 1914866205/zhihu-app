<template>
    <div id="body">
        <div>
            <div id="Hcontainer">
<!--                    //动态样式绑定  如果cur==index  添加class  active-->
                <div class="Tnav" style="justify-content: space-around">

                    <div v-for="(item,index) in tabTitle"@click="change(index)" :class="{Hactive:cur==index}":key="index">
                            <button class="btntitle mt-1" >{{item}}</button>
                </div>
                </div>
                <div v-for="(item,index) in columns" :key="index">
                    <div id="bodyH">
                        <h1 class="display-inline Hindex padding-right-3 padding-left-3" :class="{top:index<3}">{{1+index}}</h1>
                        <h2 class="display-inline Ht">{{ item.title}}</h2>
                        <p class="Hd">{{item.description}}</p>
                        <h2 style="margin-left: 7%">...</h2>
                        <img class="Himg" :src="item.image_url" alt="">
                        <div style="margin-left: 5%;margin-top: 2px">
                        <p class="link display-inline margin-left-1 fontGray">
                            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><defs><linearGradient id="id-2014200654-a" x1="63.313%" x2="46.604%" y1="-13.472%" y2="117.368%"><stop offset="2.35%" stop-color="#EC471E"></stop><stop offset="100%" stop-color="#FF6DC4"></stop></linearGradient></defs><path fill="url(#id-2014200654-a)" d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z" fill-rule="evenodd"></path></svg>                            {{ item.followers }}关注人数</p>
                        <p class="link display-inline margin-left-1 fontGray">
                            <svg fill="currentColor" viewBox="0 0 24 24"
                                    width="1.2em" height="1.2em">
                                <path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path>
                            </svg>
                            分享
                        </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'Hot',
        data() {
            return {
                tabTitle:['全站','科学','数码','体育','时尚','影视','校园','汽车'],
                category:['total','science','digital','sport','fashion','film','shcool','car'],
                tabContent:[[],[],[],[],[],[],[],[]],
                cur:0,
                columns: []
            };
        },
        created() {
            this.axios.get('http://localhost:8080/api/columns/all').then(res => {
                this.columns = res.data.data;
                this.tabContent.splice(0,0,res.data.data.data);
            });
        },methods:{
            change(index){
                this.cur=index;
                //取出对应的参数数组的值
                let param=this.category[index];
                //发起对应的参数数组的值
                this.axios.get('/api/hot-lists'+param).then(res=>{
                    this.tabContent.splice(index,0,res.data.date.data);
                });
                //全部
                if (param=='total'){
                    this.$router.push('/home/hot');
                } else {
                    this.$router.push('/home/hot?list='+param);
                }
            }
        }
    }
</script>
<style>
    @import url("../assets/css/ZhihuStyle.css");

    /*.body {*/
    /*    width: 100%;*/
    /*    height: 200px;3        border-top: 1px solid silver;*/
    /*    margin-top: 10px;*/
    /*}*/
    #Hcontainer {
        width: 46%;
        height: 90%;
        margin-top:-58.3%;
        background-color: white;
        margin-left: 14.5%;
    }

    .Tnav{
        flex: auto;
        width: 46%;
        height:80px;
        margin-top: -6%;
        background-color: white;
        position: absolute;
        display: inline-grid;
        grid-template-columns: repeat(4, 21%);
        grid-row-gap: 1.5%;
        grid-template-rows: repeat(2,45%);
        grid-auto-flow: row;
        justify-items: center;
    }
    .Ht{
        width: 100%;
        padding-top: 3%;
        margin-left: 7%;
    }

    .Himg{
        margin-top: -8%;
        margin-left: 70%;
        width: 200px;
        height: 100px;
    }

    .Hd{
        padding-top: 1%;
        margin-left: 7%;
        max-height: 20px;
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-line;
    }
    .Hindex{
        margin-top: 3%;
        margin-left: 2px;
    }
#bodyH{
    width: 100%;
    height:70px;
    border-top: 1px solid silver;
    margin-top: 15%;
}
    .top{
        color: orangered;
    }
    .btntitle{
        width: 100px;
        height: 34px;
        display: inline-block;
        background-color: rgba(0,132,255,.08);
        border: solid 0 lightgray;
        color: black;
        font: inherit;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        font-synthesis: style;
        float: right;
        cursor: pointer;
    }
    .Hactive{
        background-color: #b8e5f8;
        border: 0;
    }
</style>