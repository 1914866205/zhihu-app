<template>
    <div id="Rbody">
    <div id="Rcontainer">
        <div v-for="(item,index) in recommendList" :key="index">
<!--            <div class="Rbody">-->
<!--                <h3 id="title">{{ item.title}}</h3>-->
<!--                <p id="fangwen">{{ item.viewCount }}次浏览</p>-->
<!--                <img id="image" :src="item.banner" alt="">-->
<!--                <div id="neirong">{{item.introduction}}</div>-->

<!--                <div style="margin-top: 7.5%">-->
<!--                    <button class="link guanzhu display-inline">-->
<!--                        <svg fill="currentColor" viewBox="0 0 24 24" width="10" height="10">-->
<!--                            <path-->
<!--                                    d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"-->
<!--                                    fill-rule="evenodd"></path>-->
<!--                        </svg>-->
<!--                        赞同&nbsp{{item.voteup_count}}-->
<!--                    </button>-->
<!--                    <button class="link guanzhu display-inline">-->
<!--                        ​-->
<!--                        <svg  fill="currentColor" viewBox="0 0 24 24" width="10"-->
<!--                              height="10">-->
<!--                            <path-->
<!--                                    d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"-->
<!--                                    fill-rule="evenodd"></path>-->
<!--                        </svg>-->
<!--                    </button>-->

<!--                    <p class="link display-inline margin-left-1 fontGray">-->
<!--                        ​-->
<!--                        <svg fill="currentColor" viewBox="0 0 24 24"-->
<!--                             width="1.2em" height="1.2em">-->
<!--                            <path-->
<!--                                    d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"-->
<!--                                    fill-rule="evenodd"></path>-->
<!--                        </svg>-->
<!--                        {{item.comment_count}}条评论-->
<!--                    </p>-->
<!--                    <p class="link display-inline margin-left-1 fontGray">-->
<!--                        ​-->
<!--                        <svg-->
<!--                                fill="currentColor" viewBox="0 0 24 24"-->
<!--                                width="1.2em" height="1.2em">-->
<!--                            <path-->
<!--                                    d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"-->
<!--                                    fill-rule="evenodd"></path>-->
<!--                        </svg>-->
<!--                        分享-->
<!--                    </p>-->
<!--                    <p class="link display-inline margin-left-1 fontGray">-->
<!--                        <svg-->
<!--                                fill="currentColor" viewBox="0 0 24 24"-->
<!--                                width="1.2em" height="1.2em">-->
<!--                            <path-->
<!--                                    d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"-->
<!--                                    fill-rule="evenodd"></path>-->
<!--                        </svg>-->
<!--                        收藏-->
<!--                    </p>-->
<!--                    <p class="link display-inline margin-left-1 fontGray">-->
<!--                        <svg-->
<!--                                class="Zi Zi&#45;&#45;Heart Button-zi" fill="currentColor" viewBox="0 0 24 24"-->
<!--                                width="1.2em" height="1.2em">-->
<!--                            <path-->
<!--                                    d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"-->
<!--                                    fill-rule="evenodd"></path>-->
<!--                        </svg>-->
<!--                        喜欢-->
<!--                    </p>-->
<!--                    <p class="link display-inline margin-left-1 fontGray">-->
<!--                        <svg-->
<!--                                fill="currentColor" viewBox="0 0 24 24"-->
<!--                                width="1.2em" height="1.2em">-->
<!--                            <path-->
<!--                                    d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"-->
<!--                                    fill-rule="evenodd"></path>-->
<!--                        </svg>-->
<!--                    </p>-->

<!--                </div>-->

<!--            </div>-->

            <div class="Rbody padding-2" style="background-color: white">
                <h3 v-if="item.target.question==null"class="m-2">{{item.target.title}}</h3>
                <h3 v-else class="m-2">{{item.target.question.title}}</h3>
                <div v-if="!flags[index]">
<!--                    flags==false，则!flags==true,则不打开-->
                    <div class="display-flex padding-2" v-if="item.target.thumbnail">
                        <div class="col-3 mr-3">
                            <img :src="item.target.thumbnail" class="fill tiny-round"/>
                        </div>
                        <div class="col-9">
<!--                            如果有图，文字占4行-->
                            <p class="elilsis-4 padding-right-2" style="width: 92%">{{item.target.author.name}}:{{item.target.excerpt}}</p>
                           <span class="read-more link" @click="change(index)">
                            <span class="deep-blue">阅读全文</span>
                            <svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
									<path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                                            fill-rule="evenodd"></path>
								</svg>
                           </span>
                        </div>
                    </div>
                    <div class="display-flex padding-2" v-if="!item.target.thumbnail">
                        <div class="col-12 ">
                            <!--                            如果无图，文字占2行-->
                            <p class="elilsis-2 padding-right-2" style="width: 92%">{{item.target.author.name}}:{{item.target.excerpt}}</p>
                            <span class="read-more link" @click="change(index)">
                            <span class="deep-blue">阅读全文</span>
                            <svg class="deep-blue-icon" viewBox="0 0 24 24" width="24" height="24">
									<path d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                                          fill-rule="evenodd"></path>
								</svg>
                           </span>
                        </div>
                    </div>
                </div>

                <!--点击"阅读全文"显示-->
                <div v-if="flags[index]" class="padding-2">
                    <div class="display-inline">
                        <img :src="item.target.author.avatar_url" class="avatar mr-2"/>
                        <h4 class="mr-2">{{item.target.author.name}}</h4>
                        <span>{{item.target.author.headline}}</span>
                    </div>
                    <p class="light-grey  mt-2 mb-2">{{item.target.voteup_count}}人赞同了该回答</p>
                    <div v-html="item.target.content"class="justify-content-around"></div>
                </div>


                    <div style="width: 98%;margin-top: 2px;background-color: white" class="sticky-bar display-flex align-items-center" :class="{active:flags[index]}">
                    <button class="link guanzhu display-inline" style="margin-top: -2px" >
                        <svg fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
                            <path
                                    d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                                    fill-rule="evenodd"></path>
                        </svg>
                        赞同&nbsp{{item.target.voteup_count}}
                    </button>
                    <button class="link guanzhu display-inline" style="margin-top: -2px">
                        <svg  fill="currentColor" viewBox="0 0 24 24" width="10"
                              height="10">
                            <path d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                                    fill-rule="evenodd"></path>
                        </svg>
                    </button>

                    <p class="link display-inline margin-left-1 fontGray">
                        ​
                        <svg fill="currentColor" viewBox="0 0 24 24"
                             width="1.2em" height="1.2em">
                            <path
                                    d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                                    fill-rule="evenodd"></path>
                        </svg>
                        {{item.target.comment_count}}条评论
                    </p>
                    <p class="link display-inline margin-left-1 fontGray">
                        ​
                        <svg
                                fill="currentColor" viewBox="0 0 24 24"
                                width="1.2em" height="1.2em">
                            <path
                                    d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"
                                    fill-rule="evenodd"></path>
                        </svg>
                        分享
                    </p>
                    <p class="link display-inline margin-left-1 fontGray">
                        <svg
                                fill="currentColor" viewBox="0 0 24 24"
                                width="1.2em" height="1.2em">
                            <path
                                    d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                                    fill-rule="evenodd"></path>
                        </svg>
                        收藏
                    </p>
                    <p class="link display-inline margin-left-1 fontGray">
                        <svg
                                class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24"
                                width="1.2em" height="1.2em">
                            <path
                                    d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
                                    fill-rule="evenodd"></path>
                        </svg>
                        喜欢
                    </p>
                        <div class="link display-inline margin-left-1 fontGray" v-if="flags[index]">
                        <span class="read-more link" @click="change(index)">
                            <svg class="grey-icon up" viewBox="0 0 24 24" width="24" height="24">
                                <path
                                        d="M12 13L8.285 9.218a.758.758 0 0 0-1.064 0 .738.738 0 0 0 0 1.052l4.249 4.512a.758.758 0 0 0 1.064 0l4.246-4.512a.738.738 0 0 0 0-1.052.757.757 0 0 0-1.063 0L12.002 13z"
                                        fill-rule="evenodd"
                                ></path>
                            </svg>
                            <p class="display-inline">
                            收起
                        </p>
                        </span>
                        </div>
                    <p class="link display-inline margin-left-1 fontGray">
                        <svg
                                fill="currentColor" viewBox="0 0 24 24"
                                width="1.2em" height="1.2em">
                            <path
                                    d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"
                                    fill-rule="evenodd"></path>
                        </svg>
                    </p>

                    </div>

            </div>


        </div>
    </div>
    </div>
</template>
<script>
    export default {
        name: 'recommened',
        data() {
            return {
                recommendList: [],
                flags:[]
            };
        },
        mounted(){
            window.addEventListener('scroll',this.scrollToTop);
        },
        created() {
            // this.axios.get('http://localhost:8080/api/special').then(res => {
            //     this.recommenedList = res.data.data["special"];
            this.axios.get('/api/recommend').then(res => {
                this.recommendList = res.data.data.data;
                //定义一个正则规则，用来处理富文本中的图片
                const regex=new RegExp('<img','gi');
                for (var i = 0; i < this.recommendList.length; i++) {
                    //给每篇文章添加一个标记，用来处理展开全文，默认为false,表示未展开全文
                    this.recommendList[i].target.content=this.recommendList[i].target.content.replace(regex,'<img style="max-width:100%;height:auto"');
                }
            });
        },
        methods:{
            //展开，收起的切换
            change(index){
                //将flag数组索引index的项置反，注意splice用法
                //不可以直接给数组元素赋值，那种只是渲染，无法监听flag变化
                this.flags.splice(index,1,!this.flags[index]);
            }
        }
    }
</script>
<style>
    @import url("../assets/css/ZhihuStyle.css");

    #Rcontainer {
        width: 46%;
        height: 100%;
        margin-left: 14.5%;
    }

    .Rbody {
        width: 98%;
        height: auto;
        margin-top: 3%;
        border-bottom: solid 1px white;
    }

    #title {
        width: 100%;
        padding-top: 2%;
        margin-left: 2%;
    }

    #image {
        padding-top: 2%;
        margin-left: 2%;
        width: 28%;
        height: 50%;
    }

    #neirong {
        margin-left: 38%;
        margin-top: -14%;
        width: 50%;
        font-size: 15px;
    }

    #fangwen {
        margin-top: 1px;
        margin-left: 80%;
    }

</style>