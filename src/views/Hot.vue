<template>
    <div id="body">
        <div>
            <!--            <div id="Hcontainer">-->
            <!--&lt;!&ndash;                    //动态样式绑定  如果cur==index  添加class  active&ndash;&gt;-->
            <!--                <div class="Tnav" style="justify-content: space-around">-->
            <!--                    <div v-for="(item,index) in tabTitle"@click="change(index)" :class="{Hactive:cur==index}":key="index">-->
            <!--                            <button class="btntitle mt-1" >{{item}}</button>-->
            <!--                </div>-->
            <!--            </div>-->

            <!--顶部tab导航栏-->
            <ul class="tab-tatle border-bottom">
                <li v-for="(title,index) in tabTitle" @click="change(index)"
                    :class="{ active : cur===index}" :key="index">
                    {{title}}
                </li>
            </ul>


            <!--                <div v-for="(item,index) in columns" :key="index">-->
            <!--                    <div id="bodyH">-->
            <!--                        <h1 class="display-inline Hindex padding-right-3 padding-left-3" :class="{top:index<3}">{{1+index}}</h1>-->
            <!--                        <h2 class="display-inline Ht">{{ item.title}}</h2>-->
            <!--                        <p class="Hd">{{item.description}}</p>-->
            <!--                        <h2 style="margin-left: 7%">...</h2>-->
            <!--                        <img class="Himg" :src="item.image_url" alt="">-->
            <!--                        <div style="margin-left: 5%;margin-top: 2px">-->
            <!--                        <p class="link display-inline margin-left-1 fontGray">-->
            <!--                            <svg fill="currentColor" viewBox="0 0 24 24" width="18" height="18"><defs><linearGradient id="id-2014200654-a" x1="63.313%" x2="46.604%" y1="-13.472%" y2="117.368%"><stop offset="2.35%" stop-color="#EC471E"></stop><stop offset="100%" stop-color="#FF6DC4"></stop></linearGradient></defs><path fill="url(#id-2014200654-a)" d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z" fill-rule="evenodd"></path></svg>                            {{ item.followers }}关注人数</p>-->
            <!--                        <p class="link display-inline margin-left-1 fontGray">-->
            <!--                            <svg fill="currentColor" viewBox="0 0 24 24"-->
            <!--                                    width="1.2em" height="1.2em">-->
            <!--                                <path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path>-->
            <!--                            </svg>-->
            <!--                            分享-->
            <!--                        </p>-->
            <!--                        </div>-->
            <!--                    </div>-->
            <!--                </div>-->

            <!--切换内容区-->
            <div>
                <!-- v-if 为false时直接不执行，v-show为false时执行，但不显示(display:none)
                 cur是当前显示页面的索引
                 当当前显示页面的索引等于index，显示这页，其余页隐藏
                 -->

                <div v-for="(content,index) in tabContent" v-show="cur == index" :key="index">
                    <div v-for="(item,index1) in content" :key="index1">

                        <div v-if="!item.children[0].thumbnail" class="display-flex padding-3">
                            <!--                            <h3 class="light-grey" :class="{top:index1<3}">{{index1 + 1}}</h3>-->
                            <!--                            <div class="margin-left-3">-->
                            <!--                                <a :href="'https://www.zhihu.com/question/'+item.target.id" target="_blank"-->
                            <!--                                   class="">{{item.target.title}}</a>-->
                            <!--                                <p class=" ">{{item.target.excerpt}}</p>-->
                            <!--                                <ul class="">-->
                            <!--                                    <li class="light-grey">-->
                            <!--                                        <svg class="grey-icon" viewBox="0 0 24 24" width="18" height="18">-->
                            <!--                                            <path-->
                            <!--                                                    d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"-->
                            <!--                                                    fill-rule="evenodd"-->
                            <!--                                            ></path>-->
                            <!--                                        </svg>-->
                            <!--                                        {{item.detail_text}}-->
                            <!--                                    </li>-->
                            <!--                                    <li class="light-grey">-->
                            <!--                                        <svg class="grey-icon" viewBox="0 0 24 24" width="1.2em" height="1.2em">-->
                            <!--                                            <path-->
                            <!--                                                    d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"-->
                            <!--                                                    fill-rule="evenodd"-->
                            <!--                                            ></path>-->
                            <!--                                        </svg>-->
                            <!--                                        分享-->
                            <!--                                    </li>-->
                            <!--                                </ul>-->
                            <!--                            </div>-->
                        </div>
                        <div v-else class="hotbody">
                            <h1 class="display-inline light-grey" style="margin-top: 1%;margin-left: 4%"
                                :class="{top:index1<3}">
                                {{index1 + 1}}</h1>
                            <!--                                <a> 标签的 target 属性规定在何处打开链接文档。
                                                            _blank 浏览器总在一个新打开、未命名的窗口中载入目标文档。
                            -->
                            <a style=" color: black" :href="'https://www.zhihu.com/question/'+item.target.id"
                               target="_blank">
                                <h3 class="hottitle">{{ item.target.title}}</h3>
                                <p class="hotdec">{{item.target.excerpt}}</p>
                            </a>
                            <img class="hotimg" :src="item.children[0].thumbnail" width="180px" height="105px">

                            <ul class="hotcon">
                                <li class="light-grey">
                                    <svg class="grey-iconr" viewBox="0 0 24 24" width="18" height="18">
                                        <path
                                                d="M14.553 20.78c.862-.651 1.39-1.792 1.583-3.421.298-2.511-.656-4.904-2.863-7.179.209 2.291.209 3.73 0 4.314-.41 1.143-1.123 1.983-1.91 2.03-1.35.079-2.305-.512-2.863-1.774-.676 1.25-.782 2.556-.318 3.915.31.906.94 1.684 1.89 2.333C7.144 20.131 5 17.336 5 14.022c0-2.144.898-4.072 2.325-5.4.062 2.072.682 3.598 2.13 4.822-.67-1.112-.734-2.11-.734-3.517 0-3.253 2.067-6.007 4.913-6.927a7.35 7.35 0 0 0 2.157 4.918C17.722 9.214 19 11.463 19 14.022c0 3.073-1.844 5.7-4.447 6.758z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    {{ item.detail_text }}
                                    <svg class="grey-icon margin-left-1" viewBox="0 0 24 24" width="1.2em" height="1.2em">
                                        <path
                                                d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    分享
                                </li>
                            </ul>
                        </div>

                    </div>

                    <h3 style="margin-left: 30%;margin-top: 10px">没有更多内容</h3>
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
                tabTitle: ['全站', '科学', '数码', '体育', '时尚', '影视', '校园', '汽车'],
                category: ['total', 'science', 'digital', 'sport', 'fashion', 'film', 'shcool', 'car'],
                tabContent: [[], [], [], [], [], [], [], []],
                cur: 0,
                columns: []
            };
        },
        created() {
            // this.axios.get('http://localhost:8080/api/columns/all').then(res => {
            //     this.columns = res.data.data;
            //     this.tabContent.splice(0,0,res.data.data.data);
            // });

            this.axios.get('/api/hot-lists/total').then(res => {
                this.tabContent.splice(0, 0, res.data.data.data);
            });
        }, methods: {
            change(index) {
                this.cur = index;
                //取出对应的参数数组的值
                let param = this.category[index];
                //发起对应的参数数组的值
                this.axios.get('/api/hot-lists/' + param).then(res => {
                    this.tabContent.splice(index, 0, res.data.data.data);
                });
                // 全部
                if (param == 'total') {
                    this.$router.push('/home/hot');
                } else {
                this.$router.push('/home/hot?list=' + param);
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
        margin-top: -51%;
        background-color: white;
        margin-left: 14.5%;
    }

    .Tnav {
        flex: auto;
        width: 46%;
        height: 80px;
        margin-top: -6%;
        background-color: white;
        position: absolute;
        display: inline-grid;
        grid-template-columns: repeat(4, 21%);
        grid-row-gap: 1.5%;
        grid-template-rows: repeat(2, 45%);
        grid-auto-flow: row;
        justify-items: center;
    }

    .Ht {
        width: 100%;
        padding-top: 3%;
        margin-left: 7%;
    }

    .Himg {
        margin-top: -8%;
        margin-left: 70%;
        width: 200px;
        height: 100px;
    }

    .Hd {
        padding-top: 1%;
        margin-left: 7%;
        max-height: 20px;
        width: 60%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-line;
    }

    .Hindex {
        margin-top: 3%;
        margin-left: 2px;
    }

    #bodyH {
        width: 100%;
        height: 70px;
        border-top: 1px solid silver;
        margin-top: 15%;
    }

    .top {
        color: orangered;
    }

    .btntitle {
        width: 100px;
        height: 34px;
        display: inline-block;
        background-color: rgba(0, 132, 255, .08);
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

    .Hactive {
        background-color: #b8e5f8;
        border: 0;
    }

    .tab-tatle {
        display: flex;
        align-items: center;
        height: 40px;
        width: 44.5%;
        padding: 0.625rem;
        margin-top: -67%;
        margin-left: 14.5%;
        background-color: #fff;

    }

    .tab-tatle li {
        width: 68px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        border-radius: 2px;
        margin: 8px;
        border-color: #f6f6f6;
        color: #646464;
        cursor: pointer;
    }

    .tab-tatle .active {
        background-color: #e6feff;
        color: #0c89ff;
    }


    .top {
        color: #fc9300;
    }

    .no-more:before,
    .no-more:after {
        content: '';
        display: inline-block;
        width: 24px;
        height: 1px;
        margin: 0 10px;
        /*设置元素的垂直对齐方式。
        说明 该属性定义行内元素的基线相对于
        该元素所在行的基线的垂直对齐。
        允许指定负长度值和百分比值*/
        vertical-align: middle;
        background-color: #d3d3d3;
    }

    .mt-2 {
        cursor: pointer;
    }

    .mt-2 :hover {
        color: #646464;
    }

    .hotbody {
        width: 46%;
        height: 150px;
        margin-left: 14.5%;
        margin-top: 1%;
        background-color: white;
    }

    .hottitle {
        display: inline-block;
        font-size: 14px;
        width: 60%;
        margin: 3%;
        /*text-overflow: inherit;*/
    }

    .hotdec {
        width: 60%;
        margin-left: 9%;
        font-size: 14px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
    }

    .hotimg {
        margin-left: 72%;
        margin-top: -11%;
        border-radius: 5%;
    }

    li {
        list-style: none;
    }

    .hotcon {
        margin-left: 9%;
        width: 400px;
        margin-top: -2%;
    }
</style>
