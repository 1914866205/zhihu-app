<template>
    <div>
        <div class="nav-bar fill-white mb-2 shadow">
            <transition name="nav-bar">
                <div class="container row" v-if="fixed">
                    <div class="margin-left-2 display-inline" style="width: 10%">
                        <svg viewBox="0 0 200 91" style="fill: #0084ff; width:78px;height: 45px; aria-hidden:true">
                            <path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                                  fill-rule="evenodd"></path>
                        </svg>
                    </div>
                    <ul class=" padding-top-3" style="width:25%">
                        <li class="display-inline margin-left-1 title link ">
                            <router-link :class="{Navactive : $route.path.substr(1,1)=='h'}" to="/Home">首页</router-link>

                        </li>
                        <li class="display-inline title margin-left-2 link">
                            <router-link :class="{Navactive : $route.path.substr(1,1)=='E'}" to="/Explore">发现
                            </router-link>
                        </li>
                        <li class="display-inline title margin-left-2 link">
                            <router-link :class="{Navactive : $route.path.substr(1,1)=='q'}" to="/question/waiting">
                                等你来答
                            </router-link>
                        </li>
                    </ul>
                    <div class="margin-left-n5 display-inline" style="width: 26%">
                        <!--                <input class="display-inline padding-top-3" id="search" type="text" placeholder="  波音 737MAX 发现新问题">-->
                        <!--                设置html的contentEditable="true"时，即可开启该元素的编辑模式-->
                        <div class=" search-box mr-2 ml-1" @click="popUp= !popUp" contenteditable="true">请输入关键词</div>
                        <transition name="fade">
                            <div class="display-inline search-container border" v-if="popUp">
                                <a href="" class="border-bottom d-block">知乎热搜</a><br>
                                <a href="" class="grey border-bottom d-block">全国确诊14411例</a><br>
                                <a href="" class="grey border-bottom d-block">武汉红十字会</a><br>
                                <a href="" class="grey border-bottom d-block">英国正式脱欧</a><br>
                                <a href="" class="grey border-bottom d-block">20020202</a><br>
                                <a href="" class="grey border-bottom d-block">直接捐赠武汉医院</a><br>
                                <a href="" class="border-bottom d-block">搜索历史</a><br>
                                <a href="" class="grey border-bottom d-block">口罩处理</a>
                            </div>
                        </transition>
                        <!--                    <button class="link display-inline" style="margin-left:68.5%;border-radius: 20%;z-index: 121;" aria-label="搜索" type="button">-->
                        <svg class="link margin-left-n5" style="position: absolute;margin-top: 10px" fill="currentColor"
                             viewBox="0 0 24 24" width="28" height="29">
                            <path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                                  fill-rule="evenodd"></path>
                        </svg>
                        <!--                    </button>-->
                    </div>
                        <button class="display-inline" type="button" id="Ntiwen">提问</button>
                    <div class="display-inline   " style="width: 20%;margin-left: 2%;margin-top: -3%">
                        <button class="title display-inline link margin-left-1" type="button" id="tongzhi"
                                aria-haspopup="true" aria-expanded="false"
                                aria-owns="Popover27-content"><span style="display: inline-flex; align-items: center;">​<svg
                                fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path
                                d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z"></path></svg></span>
                        </button>
                        <button  class="title display-inline link" type="button" style="margin-left: 10%" id="lianxi"
                                 aria-haspopup="true" aria-expanded="false"
                                 aria-owns="Popover28-content"><span style="display: inline-flex; align-items: center;">​<svg
                                fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path
                                d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z"
                                fill-rule="evenodd"></path></svg></span>
                        </button>
                        <!--                    用户头像   如果已登录，则显示用户头像，否则显示登录-->
                        <!--                        <a class="title display-inline link " style="margin-left: 30%">-->
                        <!--                            <router-link to="/login">登录</router-link>-->
                        <!--                        </a>-->






                        <img :src="user.avatar" v-if="this.$store.state.token" width="30" height="30" class="tiny-round link ml-5" @click="show=!show"/>
                        <!--                                        <img src="https://pic1.zhimg.com/v2-4673ae105cb32dbc5471e77660eaf950_im.jpg" v-if="token" width="30" height="30" class="tiny-round link ml-5" @click="show=!show"/>-->

                        <span v-else class="link ml-5"><router-link to="/login" @click="changetoken">登录</router-link></span>


                        <transition name="fade">
                            <ul class="fill-white border shadow profile-box" style="width: 120px;height: 100px"  v-if="show">
                                <li class="display-flex align-items-center mb-1">
                                    <svg class="grey-icon mr-2" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                                d="M15.417 12.923c-.376.653-.837 1.281-.763 1.863.292 2.273 5.562 1.77 6.78 3.048.566.595.566.664.566 4.164-6.611-.07-13.363 0-20 0 .027-3.5 0-3.478.62-4.164 1.303-1.44 6.581-.715 6.78-3.133.045-.545-.38-1.114-.763-1.778C6.511 9.233 5.697 2 12 2s5.422 7.443 3.417 10.923z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <router-link to="'/people/'+user.url">我的主页</router-link>
                                </li>
                                <li class="display-flex align-items-center mb-1">
                                    <svg class="grey-icon mr-2" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                                d="M15.075 15.388l-3.024 3.024a4.041 4.041 0 0 0-1.014 1.697l-.26.868C7.844 20.986 4.91 21 2 21c.026-3.325 0-3.304.59-3.956 1.237-1.368 6.251-.68 6.44-2.976.043-.518-.36-1.06-.725-1.69C6.285 8.87 5.512 2 11.5 2c5.988 0 5.15 7.072 3.246 10.378-.357.62-.795 1.217-.724 1.77.073.571.477.958 1.053 1.24zm5.402 1.672c.523.55.523.646.523 3.94a535.11 535.11 0 0 0-4.434-.028l3.911-3.912zm-7.88 2.699c.111-.37.312-.705.584-.978l4.76-4.76a.291.291 0 0 1 .412 0l1.626 1.626a.291.291 0 0 1 0 .411l-4.76 4.76c-.272.273-.608.474-.978.585l-1.96.588a.219.219 0 0 1-.272-.272l.589-1.96zm9.157-6.742a.839.839 0 0 1 0 1.187l-.94.94a.28.28 0 0 1-.395 0l-1.563-1.563a.28.28 0 0 1 0-.395l.94-.94a.839.839 0 0 1 1.187 0l.771.771z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <router-link to="/creator">创作者中心</router-link>
                                </li>
                                <li class="display-flex align-items-center mb-1">
                                    <svg class="grey-icon mr-2" fill="currentColor" viewBox="0 0 24 24" width="16" height="16">
                                        <path
                                                d="M2 11.999c0-2.756 1.154-5.417 3.167-7.3a1.266 1.266 0 0 1 1.73 1.847 7.396 7.396 0 0 0-2.367 5.453c0 4.119 3.35 7.47 7.47 7.47 4.119 0 7.47-3.351 7.47-7.47a7.41 7.41 0 0 0-2.279-5.37 1.266 1.266 0 0 1 1.76-1.819A9.923 9.923 0 0 1 22 12c0 5.513-4.486 10-10 10s-10-4.487-10-10zm8.699-.482V3.26a1.26 1.26 0 1 1 2.52 0v8.257a1.26 1.26 0 1 1-2.52 0z"
                                                fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                    <!--                                                    <a @click.prevent.stop="logout($event)" href="#">退出</a>-->
                                    <a @click.prevent.stop="logout($event)" href="#">退出</a>
                                </li>
                            </ul>
                        </transition>










                    </div>
                </div>
            </transition>
            <transition name="hide-bar">
                <div class="container row justify-content-around hide-bar" v-if="fixed_home">
                    <div class="display-flex align-items-center col-1" style="width: 15%">
                        <svg viewBox="0 0 200 91" class="blue-icon link " width="64" height="30"
                             @click="$router.push('/home')">
                            <g>
                                <path
                                        d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                                        fill-rule="evenodd"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <ul class="fruid-col-1 row ">
                        <li style="margin-left: 10%">
                            <router-link to="/home/recommened">推荐</router-link>
                        </li>
                        <li style="margin-left: 10%">
                            <router-link to="/home/follow">关注</router-link>
                        </li>
                        <li style="margin-left: 10%">
                            <router-link to="/home/hot">热榜</router-link>
                        </li>
                        <div class="display-flex" style="margin-left:10%">
                            <input class="search-box" placeholder="请输入关键字"></input>
                            <button class="blue-txt-btn" style="width: 60px;margin-top: 10px;margin-left: 10px">提问
                            </button>
                        </div>
                    </ul>

                </div>
            </transition>

            <transition name="hide-bar">
                <div class="container row justify-content-around hide-bar" v-if="fixed_explore">
                    <div class="display-flex align-items-center col-1" style="width: 15%">
                        <svg viewBox="0 0 200 91" class="blue-icon link " width="64" height="30"
                             @click="$router.push('/home')">
                            <g>
                                <path
                                        d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                                        fill-rule="evenodd"
                                ></path>
                            </g>
                        </svg>
                    </div>
                    <ul class="fruid-col-1 row">
                        <li style="margin-left:7%">
                            <a href="#zxzt">最新专题</a>
                        </li>
                        <li style="margin-left: 7%">
                            <a href="#yztl">圆桌讨论</a>
                        </li>
                        <li style="margin-left: 7%">
                            <a href="#rmscj">热门收藏夹</a>
                        </li>
                        <li style="margin-left: 7%">
                            <a href="#zl">专栏</a>
                        </li>
                        <div class="display-flex" style="margin-left:10%">
                            <input class="search-box" placeholder="请输入关键字"></input>
                            <button class="blue-txt-btn" style="width: 60px;margin-top: 10px;margin-left: 10px">提问
                            </button>
                        </div>
                    </ul>
                </div>
            </transition>
        </div>
        <router-view/>
    </div>
</template>
<script>
    export default {
        name: "nav",
        data() {
            return {
                //token是在服务端产生的。
                // 如果前端使用用户名/密码向服务端请求认证，
                // 服务端认证成功，那么在服务端会返回token 给前端。
                // 前端可以在每次请求的时候带上 token 证明自己的合法地位
                token:this.$store.state.token,
                user:this.$store.state.user,
                fixed: true,
                fixed_home: false,
                fixed_explore: false,
                show: false,
                popUp: false
            };
        },
        /*
        * vue生命周期mounted和created的区别:
        * created:在模板渲染成html前调用，
        * 即通常初始化某些属性值，然后再渲染成视图。
            mounted:在模板渲染成html后调用，
            * 通常是初始化页面完成后，
            * 再对html的dom节点进行一些需要的操作。
        *
        *
        * */
        mounted() {
            //设置等到页面产生滚动才执行监听
            this.$nextTick(function () {
                window.addEventListener('scroll', this.onScroll);
            })
        },
        created() {
        },
        methods: {
            profile(url) {
                this.$router.push('/people/' + url);
            },
            onScroll() {
                //只监听路由是/home/*的滚动，首页的几个子路由页面滚动导航栏才变化，其他页面导航条不变
                //var是全局变量  let是块变量
                var str = JSON.stringify(this.$route.path);
                if (str.indexOf('/home') == 1) {
                    //取得滚动的起点，也就是文档流的底部
                    //取得滚动条位置
                    let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
                    let header_height = null;
                    //取得顶部nav-bar元素的高度
                    if (document.getElementsByName('nav-bar')[0]) {
                        header_height = document.getElementsByClassName('nav-bar')[0].offsetHeight;
                    }
                    //如果当前滚动点小于顶部导航高度，fix保持为true，导航栏不变；
                    //如果超出高度，fix变为false，当前导航会被另一个导航替代
                    //用scrolled的是否在0-52px范围来决定fixed的真假
                    //用fixed的true和false来切换两个导航条的显示
                    // this.fixed = scrolled <= header_height
                    this.fixed = scrolled <= 152;
                    if (!this.fixed) {
                        //如果一级导航栏关闭
                        this.fixed_explore = false;
                        this.fixed_home = true;
                    }
                    if (this.fixed){
                        this.fixed_explore = false;
                        this.fixed_home = false;
                    }
                } else if (str.indexOf('/Explore') == 1) {
                    let scrolled = document.documentElement.scrollTop || document.body.scrollTop;
                    let header_height = null;
                    if (document.getElementsByName('nav-bar')[0]) {
                        header_height = document.getElementsByClassName('nav-bar')[0].offsetHeight;
                    }
                    this.fixed = scrolled <= 152;
                    if (!this.fixed) {
                        //如果一级导航栏关闭
                        this.fixed_home = false;
                        this.fixed_explore = true;
                    }
                    if (this.fixed){
                        this.fixed_explore = false;
                        this.fixed_home = false;
                    }
                }
            },
            logout(event) {
                this.token = '';
                this.show = false;
                this.$store.commit('setToken', '');
            }
        }
    };
</script>

<style type="scss" scoped>
    @import url("../assets/css/ZhihuStyle.css");
    .nav-bar {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1000;
        height: 52px;
    }
    ul li a {
        color: #aaa;
        font-size: 16px;
    }
    ul li .router-link-active {
        color: black;
        font-weight: 600;
    }
    #search {
        text-align: center;
        position: absolute;
        font-weight: 600;
        font-synthesis: style;
        margin-left: 3%;
        width: 16%;
        height: 30px;
        margin-top: 11px;
        padding-top: 3px;
        border-radius: 5px;
        border: solid darkgray 0px;
        background-color: #f6f6f6;
        min-width: 100px;
    }
    .search-box {
        display: inline-block;
        width: 300px;
        /*行高和高度一致可以单行垂直居中*/
        height: 35px;
        line-height: 35px;
        margin-top: 2%;
        padding-left: 0.625rem;
        color: #8c97ac;
        background-color: #f6f6f6;
        border: 1px solid #ddd;
        margin-left: 2%;
        border-radius: 3px;
    }
    .search-container {
        position: absolute;
        top: 58px;
        right: 29%;
        width: 20%;
        line-height: 28px;
        border-radius: 5px;
        padding: 5px 10px 15px 15px;
        /*z-index 属性设置元素的堆叠顺序。
        拥有更高堆叠顺序的元素总是会处于堆叠顺序较低的元素的前面。
         注释:元素可拥有负的 z-index 属性值*/
        z-index: 130;
        background-color: #fff;
    }
    #Ntiwen {
        border-radius: 5px;
        color: white;
        border: solid darkgray 0px;
        background-color: #0084ff;
        width: 60px;
        height: 34px;
        margin-left:72%;
        margin-top: -40px;
        cursor: pointer;
    }
    /*个人中心菜单*/
    .profile-box {
        position: fixed;
        top: 60px;
        right: 5%;
        width: 150px;
        height: 155px;
        line-height: 28px;
        border-radius: 5px;
        padding: 15px 10px 10px 30px;
        z-index: 120;
    }
    a {
        position: relative;
    }
    .hide-bar {
        position: absolute;
        top: 0;
        left: 10%;
        right: 10%;
        height: 52px;
        line-height: 50px;
    }
    .hide-bar .router-link-active {
        font-weight: 500;
        color: #007aff;
        font-size: 16px;
    }
    .hide-bar .router-link-active:after {
        /*设置元素不透明级别*/
        opacity: 0;
    }
    .Navactive {
        color: black;
        border-bottom: solid 10px dodgerblue;
    }
    /*导航条进入/离开的动画效果和过渡*/
    .nar-bar-enter-active,
    .nar-bar-leave-active {
        transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    }
    .hide-bar-enter,
    .hide-bar-leave-to {
        transform: translateY(52px);
        opacity: 0;
    }
    /*个人中心的div动画*/
    .fade-enter-active {
        transition: all 0.2s ease-in;
    }
    .fade-leave-active {
        transition: add 0.2s ease-out;
    }
    .fade-enter,
    .fade-leave-to {
        transform: translateY(-20px);
        opacity: 0;
    }
</style>
