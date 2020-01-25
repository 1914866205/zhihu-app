<template>
    <div>
            <div style="color: #8590a6;height: 50px">
                <div style="padding-left: 210px;">
                        <svg viewBox="0 0 200 91" style="fill: #0084ff; width:64px;height: 30px; aria-hidden:true;padding-top: 10px"><path d="M53.29 80.035l7.32.002 2.41 8.24 13.128-8.24h15.477v-67.98H53.29v67.978zm7.79-60.598h22.756v53.22h-8.73l-8.718 5.473-1.587-5.46-3.72-.012v-53.22zM46.818 43.162h-16.35c.545-8.467.687-16.12.687-22.955h15.987s.615-7.05-2.68-6.97H16.807c1.09-4.1 2.46-8.332 4.1-12.708 0 0-7.523 0-10.085 6.74-1.06 2.78-4.128 13.48-9.592 24.41 1.84-.2 7.927-.37 11.512-6.94.66-1.84.785-2.08 1.605-4.54h9.02c0 3.28-.374 20.9-.526 22.95H6.51c-3.67 0-4.863 7.38-4.863 7.38H22.14C20.765 66.11 13.385 79.24 0 89.62c6.403 1.828 12.784-.29 15.937-3.094 0 0 7.182-6.53 11.12-21.64L43.92 85.18s2.473-8.402-.388-12.496c-2.37-2.788-8.768-10.33-11.496-13.064l-4.57 3.627c1.363-4.368 2.183-8.61 2.46-12.71H49.19s-.027-7.38-2.372-7.38zm128.752-.502c6.51-8.013 14.054-18.302 14.054-18.302s-5.827-4.625-8.556-1.27c-1.874 2.548-11.51 15.063-11.51 15.063l6.012 4.51zm-46.903-18.462c-2.814-2.577-8.096.667-8.096.667s12.35 17.2 12.85 17.953l6.08-4.29s-8.02-11.752-10.83-14.33zM199.99 46.5c-6.18 0-40.908.292-40.953.292v-31.56c1.503 0 3.882-.124 7.14-.376 12.773-.753 21.914-1.25 27.427-1.504 0 0 3.817-8.496-.185-10.45-.96-.37-7.24 1.43-7.24 1.43s-51.63 5.153-72.61 5.64c.5 2.756 2.38 5.336 4.93 6.11 4.16 1.087 7.09.53 15.36.277 7.76-.5 13.65-.76 17.66-.76v31.19h-41.71s.88 6.97 7.97 7.14h33.73v22.16c0 4.364-3.498 6.87-7.65 6.6-4.4.034-8.15-.36-13.027-.566.623 1.24 1.977 4.496 6.035 6.824 3.087 1.502 5.054 2.053 8.13 2.053 9.237 0 14.27-5.4 14.027-14.16V53.93h38.235c3.026 0 2.72-7.432 2.72-7.432z" fill-rule="evenodd"></path></svg>
                </div>
                  <div style="padding-left:1100px;margin-top: -35px;width: 120px">
                        <button type="button" style="background-color: #fbfcfc;color: #0084ff;border: solid 1px #0084ff;"><svg fill="currentColor" viewBox="0 0 24 24" width="24" height="24"><path d="M18.453 7.992l-1.833-1.65.964-.978a1.223 1.223 0 0 1 1.73-.012l.005.006a1.24 1.24 0 0 1 .007 1.748l-.873.886zm-1.178 1.194l-5.578 5.66-1.935.697a.393.393 0 0 1-.504-.504l.697-1.935 5.488-5.567 1.832 1.65zM7.58 5.848l5.654.006-1.539 1.991-3.666.012A1.02 1.02 0 0 0 7 8.868v7.993c0 .558.46 1.01 1.029 1.01l7.941-.01c.568 0 1.03-.453 1.03-1.012v-4.061l2-1.442v6.002c0 1.397-1.2 2.501-2.62 2.501H7.574C6.153 19.85 5 18.717 5 17.32V8.35c0-1.397 1.16-2.502 2.58-2.502z"></path></svg>写文章</button>
                  </div>
                <div class="dropdown" style="margin-top: -55px;">
                    <button class="dropbtn">...</button>
                    <div class="dropdown-content">
                        <a href="">草稿</a>
                        <a href="">我的文章</a>
                        <a href="">专栏·发现</a>
                    </div>
                </div>
            </div>
        <router-view/>
        <img src="../assets/image/cobj.jpg" width="1683px" height="440px">
        <a target="_blank" type="button" class="write" href="">开始写文章</a>
        <center style="margin-top: 50px">
        <a target="_blank" type="button" href=""style="color: green;">申请开通专栏&nbsp></a>
        </center>
        <center style="margin-top: 5px">
        <h3>专栏·发现</h3>
    </center>
        <div class="columns_container">
            <div v-for="(item,index) in favorited" :key="index">
                <div class="body">
                    <h2 class="title">{{ item.title}}</h2>
                    <button class="guanzhu">关注收藏夹</button>
                    <img class="icon" :src="item.creator_avatar">
                    <h2 class="creator_name">{{item.creator_name}}&nbsp创建</h2>
                    <h5 class="followers">{{item.followers}}&nbsp人关注</h5>
                    <h4 class="question_title">{{item.question_title}}</h4>
                    <h5 class="answer_content">{{item.answer_author_name}}:{{item.answer_content}}</h5>
                    <h5 class="liuliang">回答 {{item.voteup_count}} 赞同.{{item.comment_count}}评论</h5>
                    <h4 class="shoucangnum">已收藏{{item.total_count}}条内容&nbsp&nbsp></h4>  </div>
            </div>
        </div>
        <div>
            <div class="columns_container2">
                <div v-for="(item,index) in columns" :key="index" v-if="index>=begin&&index<=end">
                    <div class="columns_body">
                        <a :href = "item.url" class="columns_icon"><img class="columns_img" :src="item.image_url"/></a>
                        <h2 class="columns_title">{{ item.title}}</h2>
                        <h5 class="columns_followers">{{item.followers}}&nbsp关注，{{item.articles_count}}文章</h5>
                        <h4 class="columns_description">{{item.description}}</h4>
                        <h4 style="margin-left:240px;margin-top: -50px">...</h4>
                        <center >
                            <button class="columns_into">进入专栏</button>
                        </center>
                    </div>
                </div>
            <a target="_blank" type="button" class="write" style="margin-top: 900px;"@click="become">换一换</a>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Columns.vue",
        data(){
            return{
                begin:0,
                end:7,
                columns:[]
            };
        },created() {
            this.axios.get('http://localhost:8080/api/columns/all').then(res=>{
                this.columns=res.data.data;
            });
        },methods:{
            become(){
                if (this.end>=this.columns.length){
                    this.begin=0;
                    this.end=7;
                } else{
                    this.begin=this.begin+8;
                    this.end=this.end+8;
                }
            }
        }
    }
</script>

<style scoped>
    .write{
        color:#444;
        left: 46%;
        line-height: 36px;
        position: absolute;
        top: 503px;
        width: 120px;
        font-size: 14px;
        text-align: center;
        cursor: pointer;
        border: 1px solid;
        border-radius: 3px;
    }
    .dropdown {
        width: 50px;
        position: relative;
        margin-left: 1300px;
        padding-top: 35px;
    }

    .dropdown-content {
        display: none;
        position: absolute;
        min-width: 160px;
        box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    }

    .dropdown-content a {
        color: black;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
    }

    .dropdown-content a:hover {background-color: #f1f1f1}

    .dropdown:hover .dropdown-content {
        display: block;
    }

    .dropdown:hover .dropbtn {
        background-color: #8590a6;
    }
    .dropbtn{
        margin-top: -10px;
    }
    .columns_body{
        align-self: center;
        height: 360px;
        background-color: white;
    }
    .columns_title{
        text-align: center;
    }
    .columns_img{
        margin-left: 100px;
        margin-top: 10px;
        border-radius: 50%;
        width: 100px;
        height: 100px;
    }
    .columns_followers{
        text-align: center;
        color: darkgray;
    }
    .columns_description{
        max-height: 20px;
        width: 70%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-line;
        margin: 30px;
    }
    .columns_into{
        width: 120px;
        height: 34px;
        background-color: rgba(0,132,255,.08);
        border: solid 0 lightgray;
        color: #0084ff;
        font: inherit;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        font-synthesis: style;
        margin-bottom: 10px;
    }
    .columns_container2{
        width:100%;
        height:820px;
        margin-left: 75px;
        display: inline-grid;
        grid-template-columns: repeat(4,20%);
        grid-template-rows: repeat(2,44%);
        grid-column-gap: 45px;
        grid-row-gap: 20px;
        grid-auto-flow: row;
        justify-items: stretch;
    }
</style>