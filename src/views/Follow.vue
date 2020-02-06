<template>
    <div>
        <div>
            <div id="container">
                <div v-for="(item,index) in favorites" :key="index">
                    <div class="body">
                        <p class="mt-3 fontGray margin-left-1">{{item.target.author.name}}回答了问题·{{timestampToTime(item.target.created+1578000000000)}}</p>



                        <img class="link mt-3 margin-left-1 display-inline"style="margin-top: -5px" @click="show(index)" :src="item.target.author.avatar_url">
                        <div v-show="iconarr[index]" style="position:absolute;margin-left: 60px;border-radius:10%;width: 250px;margin-top:-30px;height: 180px;background-color: #f6f6f6;z-index: 200">
                            <img class="link mt-3 margin-left-1 display-inline"style="margin-top:5px;margin-left:10px;idth: 50px;height: 50px" :src="item.target.author.avatar_url">
                            <h2 class=" display-inline margin-left-1" style="margin-top:10px">{{item.target.author.name}}&nbsp</h2>
                            <div style="margin-top: 20px;margin-left: 30px">
                                <span>回答</span>
                                <span style="margin-left: 20px">关注者</span>
                                <span style="margin-left: 20px">文章</span>
                            </div>
                            <div style="margin-top: 10px;margin-left: 30px">
                                <span>回答数</span>
                                <span style="margin-left: 30px">{{item.target.voteup_count}}</span>
                                <span style="margin-left: 30px">{{item.target.comment_count}}</span>
                            </div>
                            <button class="link guanzhu" style="margin-left: 40px">关注他</button>
                            <button class="link guanzhu" style="margin-left: 50px;background-color: #f6f6f6;color: black;border: solid 1px black">私信他</button>
                        </div>




                        <h2 class="mt-3 display-inline margin-left-1">{{item.target.author.name}}&nbsp</h2>
                        <p class="mt-3 display-inline ffontGray">{{item.target.author.headline}}</p>
                        <h3 v-if="item.target.question==null" class="margin-left-1" >{{item.target.title}}</h3>
                        <h3 v-else class="margin-left-1 mb-2" style="margin-top: 8px">{{item.target.question.title}}</h3>
                        <div class="display-flex padding-2" v-if="item.target.thumbnail">
                            <div class="fruid-col-3 mr-3">
                                <img :src="item.target.thumbnail" class="fill tiny-round"/>
                            </div>
                            <p class="fruid-col-9 elilsis-4 margin-left-1">{{item.target.author.name}}:{{item.target.excerpt}}</p>
                        </div>
                        <div class="display-flex padding-2 mb-4" v-else>
                            <p class="margin-left-1 fruid-col-12 elilsis-2">{{item.target.author.name}}:{{item.target.excerpt}}</p>
                        </div>

                        <div style="width: 98%;margin-top: 2px;background-color: white;margin-left: 10px;margin-top: -10px"
                             class="sticky-bar display-flex align-items-center" :class="{active:flags[index]}">
                            <button class="link guanzhu display-inline" style="margin-top: -2px">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="10" height="10">
                                    <path
                                            d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"
                                            fill-rule="evenodd"></path>
                                </svg>
                                赞同&nbsp{{item.target.voteup_count}}K
                            </button>
                            <button class="link guanzhu display-inline" style="margin-top: -2px">
                                <svg fill="currentColor" viewBox="0 0 24 24" width="10"
                                     height="10">
                                    <path d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"
                                          fill-rule="evenodd"></path>
                                </svg>
                            </button>

                            <p class="link display-inline fontGray margin-left-1">
                                ​
                                <svg fill="currentColor" viewBox="0 0 24 24"
                                     width="1.2em" height="1.2em">
                                    <path
                                            d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"
                                            fill-rule="evenodd"></path>
                                </svg>
                                {{item.target.comment_count}}条评论
                            </p>
                            <p class="link display-inline fontGray " style="margin-left: 10px">
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
                            <p class="link display-inline  fontGray" style="margin-left: 8px">
                                <svg
                                        fill="currentColor" viewBox="0 0 24 24"
                                        width="1.2em" height="1.2em">
                                    <path
                                            d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"
                                            fill-rule="evenodd"></path>
                                </svg>
                                收藏
                            </p>
                            <p class="link display-inline  fontGray" style="margin-left: 8px">
                                <svg
                                        class="Zi Zi--Heart Button-zi" fill="currentColor" viewBox="0 0 24 24"
                                        width="1.2em" height="1.2em">
                                    <path
                                            d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"
                                            fill-rule="evenodd"></path>
                                </svg>
                                喜欢
                            </p>
                            <div class="link display-inline  fontGray" v-if="flags[index]" style="margin-left: 8px">
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
                            <p class="link display-inline  fontGray" style="margin-left: 8px">
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
    </div>
</template>
<script>
    export default {
        name: 'recommoned',
        data() {
            return {
                favorites: [],
                flags: [],
                iconarr:[]
            };
        },
        created() {
            // this.axios.get('http://localhost:8080/api/special').then(res => {
            //     this.favorites = res.data.data["favorite"];
            // });
            this.axios.get('/api/follow').then(res => {
                this.favorites = res.data.data.data;
                for (var i = 0; i < this.favorites.length; i++) {
                    //给每篇文章添加一个标记，用来处理展开作者信息，默认为false,表示未展开
                    this.iconarr.splice(i,0,false);
                }
            });

        },
        methods: {
            //展开，收起的切换
            change(index) {
                //将flag数组索引index的项置反，注意splice用法
                //不可以直接给数组元素赋值，那种只是渲染，无法监听flag变化
                this.flags.splice(index, 1, !this.flags[index]);
            },
            show(index) {
                //将flag数组索引index的项置反，注意splice用法
                //不可以直接给数组元素赋值，那种只是渲染，无法监听flag变化
                this.iconarr.splice(index, 1, !this.iconarr[index]);
            },
            // 时间戳转换成时间
            timestampToTime (cjsj) {
                var date = new Date(cjsj) ;//时间戳为10位需*1000，时间戳为13位的话不需乘1000
                var Y = date.getFullYear() + '-';
                var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
                var D = date.getDate() + ' ';
                var h = date.getHours() + ':';
                var m = date.getMinutes() + ':';
                var s = date.getSeconds();
                return Y+M+D+h+m+s;
            }
        }
    }
</script>
<style>
    @import url("../assets/css/ZhihuStyle.css");

    #container {
        width: 46%;
        height: 90%;
        margin-top: -60.3%;
        margin-left: 14.5%;
        background-color: white;
    }

    .body {
        width: 100%;
        height: 200px;
        border-top: 1px solid silver;
        margin-top: 6%;
    }

    .margin-left-1 {
        margin-left: 3%;
    }

    .ffontGray {
        font-style: inherit;
        margifn-bottom: 6px;
        color: #8590a6;
        height: 24px;
        font-size: 15px;
    }

    .guanzhu {
        height: 34px;
        padding: 3px;
        background-color: rgba(0, 132, 255, .08);
        border: solid 0 lightgray;
        color: #0084ff;
        font: inherit;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        font-synthesis: style;
        margin-left: 2%;
        margin-top: 2%;
    }
</style>

<!--                        <h2 class="margin-left-1 mt-3">{{item.target.question_title}}</h2>-->
<!--                        <h3 class="margin-left-1 mt-3 " style="width: 90%">{{item.answer_content}}</h3>-->
<!--                        <button class="link guanzhu display-inline "style="margin-left: 8%">-->
<!--                            <svg fill="currentColor" viewBox="0 0 24 24" width="10" height="10">-->
<!--                                <path-->
<!--                                        d="M2 18.242c0-.326.088-.532.237-.896l7.98-13.203C10.572 3.57 11.086 3 12 3c.915 0 1.429.571 1.784 1.143l7.98 13.203c.15.364.236.57.236.896 0 1.386-.875 1.9-1.955 1.9H3.955c-1.08 0-1.955-.517-1.955-1.9z"-->
<!--                                        fill-rule="evenodd"></path>-->
<!--                            </svg>-->
<!--                            赞同&nbsp{{item.target.voteup_count}}-->
<!--                        </button>-->
<!--                        <button class="link guanzhu display-inline">-->
<!--                            ​-->
<!--                            <svg  fill="currentColor" viewBox="0 0 24 24" width="10"-->
<!--                                 height="10">-->
<!--                                <path-->
<!--                                        d="M20.044 3H3.956C2.876 3 2 3.517 2 4.9c0 .326.087.533.236.896L10.216 19c.355.571.87 1.143 1.784 1.143s1.429-.572 1.784-1.143l7.98-13.204c.149-.363.236-.57.236-.896 0-1.386-.876-1.9-1.956-1.9z"-->
<!--                                        fill-rule="evenodd"></path>-->
<!--                            </svg>-->
<!--                        </button>-->
<!--                        <p class="link display-inline  fontGray">-->
<!--                            ​-->
<!--                            <svg fill="currentColor" viewBox="0 0 24 24"-->
<!--                                 width="1.2em" height="1.2em">-->
<!--                                <path-->
<!--                                        d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z"-->
<!--                                        fill-rule="evenodd"></path>-->
<!--                            </svg>-->
<!--                            {{item.comment_count}}条评论-->
<!--                        </p>-->
<!--                        <p class="link display-inline  fontGray"style="margin-left: 8px">-->
<!--                            ​-->
<!--                            <svg-->
<!--                                    fill="currentColor" viewBox="0 0 24 24"-->
<!--                                    width="1.2em" height="1.2em">-->
<!--                                <path-->
<!--                                        d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z"-->
<!--                                        fill-rule="evenodd"></path>-->
<!--                            </svg>-->
<!--                            分享-->
<!--                        </p>-->
<!--                        <p class="link display-inline  fontGray"style="margin-left: 8px">-->
<!--                            <svg-->
<!--                                    fill="currentColor" viewBox="0 0 24 24"-->
<!--                                    width="1.2em" height="1.2em">-->
<!--                                <path-->
<!--                                        d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z"-->
<!--                                        fill-rule="evenodd"></path>-->
<!--                            </svg>-->
<!--                            收藏-->
<!--                        </p>-->
<!--                        <p class="link display-inline  fontGray"style="margin-left: 8px">-->
<!--                            <svg-->
<!--                                    class="Zi Zi&#45;&#45;Heart Button-zi" fill="currentColor" viewBox="0 0 24 24"-->
<!--                                    width="1.2em" height="1.2em">-->
<!--                                <path-->
<!--                                        d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z"-->
<!--                                        fill-rule="evenodd"></path>-->
<!--                            </svg>-->
<!--                            喜欢-->
<!--                        </p>-->
<!--                        <p class="link display-inline  fontGray"style="margin-left: 8px">-->
<!--                            <svg-->
<!--                                  fill="currentColor" viewBox="0 0 24 24"-->
<!--                                    width="1.2em" height="1.2em">-->
<!--                                <path-->
<!--                                        d="M5 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm7 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"-->
<!--                                        fill-rule="evenodd"></path>-->
<!--                            </svg>-->
<!--                        </p>-->
