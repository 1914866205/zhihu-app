<template>
    <div>
    <div class="nav fill-white mb-2 shadow">
        <div class="container row">
            <div class="margin-left-2 display-inline" style="width: 10%">
                <svg viewBox="0 0 200 91" style="fill: #0084ff; width:78px;height: 45px; aria-hidden:true">
                    <path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z"
                          fill-rule="evenodd"></path>
                </svg>
            </div>
            <ul class=" padding-top-3" style="width:25%" >
                <li  class="display-inline margin-left-1 title link ">
                        <router-link :class="{Navactive : $route.path.substr(1,1)=='h'}" to="/Home">首页</router-link>

                </li>
                <li  class="display-inline title margin-left-2 link">
                        <router-link  :class="{Navactive : $route.path.substr(1,1)=='E'}" to="/Explore">发现</router-link>
                </li>
                <li  class="display-inline title margin-left-2 link">
                        <router-link  :class="{Navactive : $route.path.substr(1,1)=='q'}" to="/question/waiting">等你来答</router-link>
                </li>
            </ul>
            <div class="margin-left-n5 display-inline" style="width: 25%">
                <input class="display-inline padding-top-3" id="search" type="text" placeholder="  波音 737MAX 发现新问题">
                <button class="display-inline link" style="margin-left:75.5%;margin-top:12px;border-radius: 20%" aria-label="搜索" type="button">
                    <svg fill="currentColor" viewBox="0 0 24 24" width="28" height="29">
                        <path d="M17.068 15.58a8.377 8.377 0 0 0 1.774-5.159 8.421 8.421 0 1 0-8.42 8.421 8.38 8.38 0 0 0 5.158-1.774l3.879 3.88c.957.573 2.131-.464 1.488-1.49l-3.879-3.878zm-6.647 1.157a6.323 6.323 0 0 1-6.316-6.316 6.323 6.323 0 0 1 6.316-6.316 6.323 6.323 0 0 1 6.316 6.316 6.323 6.323 0 0 1-6.316 6.316z"
                              fill-rule="evenodd"></path>
                    </svg>
                </button>
                <button class="display-inline"style="margin-left: 2%" type="button"  id="tiwen">提问</button>
            </div>
            <div class="display-inline padding-top-2 " style="width: 20%;padding-left: 5%">
                    <button class="title display-inline link margin-left-1" type="button" id="tongzhi" aria-haspopup="true" aria-expanded="false"
                            aria-owns="Popover27-content"><span style="display: inline-flex; align-items: center;">​<svg
                            fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path
                            d="M4.523 15.076l.804-6.757a6.753 6.753 0 0 1 4.945-5.7 1.823 1.823 0 0 1 3.623 0 6.753 6.753 0 0 1 4.945 5.7l.804 6.757a2.293 2.293 0 0 0 1.712 2.108 1.093 1.093 0 0 1-.297 2.15H3.108a1.093 1.093 0 0 1-.297-2.15 2.293 2.293 0 0 0 1.712-2.108zM12.083 23a2.758 2.758 0 0 1-2.753-2.509.229.229 0 0 1 .232-.24h5.043a.229.229 0 0 1 .232.24 2.759 2.759 0 0 1-2.753 2.51z"></path></svg></span>
                    </button>
                    <button class="title display-inline link" type="button" style="margin-left: 10%" id="lianxi" aria-haspopup="true" aria-expanded="false"
                            aria-owns="Popover28-content"><span style="display: inline-flex; align-items: center;">​<svg
                            fill="currentColor" viewBox="0 0 24 24" width="22" height="22"><path
                            d="M11 2c5.571 0 9 4.335 9 8 0 6-6.475 9.764-11.481 8.022-.315-.07-.379-.124-.78.078-1.455.54-2.413.921-3.525 1.122-.483.087-.916-.25-.588-.581 0 0 .677-.417.842-1.904.064-.351-.14-.879-.454-1.171A8.833 8.833 0 0 1 2 10c0-3.87 3.394-8 9-8zm10.14 9.628c.758.988.86 2.009.86 3.15 0 1.195-.619 3.11-1.368 3.938-.209.23-.354.467-.308.722.12 1.073.614 1.501.614 1.501.237.239-.188.562-.537.5-.803-.146-1.495-.42-2.546-.811-.29-.146-.336-.106-.563-.057-2.043.711-4.398.475-6.083-.927 5.965-.524 8.727-3.03 9.93-8.016z"
                            fill-rule="evenodd"></path></svg></span>
                    </button>
                    <a class="title display-inline link " style="margin-left: 30%"><router-link to="/login">登录</router-link></a>
            </div>
        </div>
    </div>
    <router-view/>
    </div>
</template>
<script>
    export default {
        name: "nav",
        data() {
            return {
            };
        },
        created() {
        }
    }
</script>

<style land="scss" scoped>
    @import url("../assets/css/ZhihuStyle.css");

    .nav {
        position: -webkit-sticky;
        position: sticky;
        top: 0;
        z-index: 1000;
        height:50px;
    }
 ul li a{
        color:#aaa;
        font-size: 16px;
    }
     ul li  .router-link-active{
        color:black;
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
        padding-top:3px;
        border-radius: 5px;
        border: solid darkgray 0px;
        background-color: #f6f6f6;
        min-width: 100px;
    }
    #tiwen{
        position: absolute;
        border-radius: 5px;
        top:6px;
        color: white;
        border: solid  darkgray 0px;
        background-color: #0084ff;
        width: 60px;
        height: 34px;
        cursor: pointer;
    }
    .Navactive{
        color: black;
        border-bottom: solid 10px dodgerblue;
    }

</style>