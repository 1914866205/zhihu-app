<template>
    <div>
        <svg  style="padding-left:75px;color:#0084ff;}" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z" fill-rule="evenodd"></path></svg>
        <span style="margin-left: 12px;font-size: 25px;font-weight: 600;font-synthesis: style;">最新专题</span>
        <div class="banner">
            <div class="container">
                <div v-for="(item,index) in recommoned" :key="index">
                    <div class="body">
                        <button class="guanzhu">关注专题</button>
                        <h3 class="title">{{ item.title}}</h3>
                        <img  class="image" :src="item.banner" alt="">
                        <div class="neirong">
                            <small>{{item.introduction}}</small>
                        </div>
                        <p class="fangwen">{{ item.viewCount }}次浏览 {{item.followersCount}}关注</p>
                    </div>
                </div>
            </div>

        </div>
            <div align="center" style="padding-top: 10px">
                <button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
                    <router-link to="/special/all" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多专题 ></router-link>
                </button>
            </div>
        <svg class="Zi Zi--LabelRoundtable" style="padding-left:75px;color:#0084ff;"fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z" fill-rule="evenodd"></path></svg>
        <span style="margin-left: 12px;font-size: 25px;font-weight: 600;font-synthesis: style;">圆桌讨论</span>
        <div>
        <div class="container">
             <div v-for="(item,index) in recommoned" :key="index">
            <div class="body">
             <div :style="{backgroundImage:'url('+item.banner+')'}" style="width:700px;height:200px;background-repeat: no-repeat;background-attachment: scroll;background-position:-140px -20px;">
                <button class="guanzhu2">关注圆桌</button>
                <h3 class="title2">{{ item.title}}</h3>
                <div class="neirong2">
                    <small>{{item.introduction}}</small>
                </div>
            </div>
        </div>
            </div>
        </div>
            <div align="center" style="padding-top: 10px">
                <button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
                    <router-link to="/special/roundtable" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多圆桌 ></router-link>
                </button>
            </div>
        </div>
        <div>
            <div style="padding-left:75px"><svg fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="color: #0084ff">
                <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path>
            </svg>
                <span style="margin-left: 12px;font-size: 25px;font-weight: 600;font-synthesis: style;">热门收藏夹</span>
               </div>
            <div class="container">
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
            <div align="center" style="padding-top: 10px">
                <button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
                    <router-link to="/special/favorite" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多收藏 ></router-link>
                </button>
            </div>
        </div>


    </div>
</template>

<script>
    export default {
        name: "recommoned",
        data(){
            return{
                recommoned:[],
                favorited:[]
            };
        },created() {
            this.axios.get('http://localhost:8080/api/special').then(res=>{
                this.recommoned=res.data.data["special"];
                this.favorited=res.data.data["favorite"];
            });
        }
    }
</script>
<style lang="scss" scoped>
    .container{
        width:90%;
        height:100%;
        margin-left: 75px;
        display: inline-grid;
        grid-template-columns: repeat(2,49%);
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        grid-auto-flow: row;
        justify-items: stretch;
    }
    .body{
        background-color: white;
        width: 100%;
        height:260px;
        border-top: 1px solid silver;
        margin-top: 10px;
    }
    .title{
        width: 70%;
        padding-top: 1px;
        margin-left: 20px;
    }
    .title2{
        width: 70%;
        padding-top: 1px;
        margin-left: 20px;
        color: white;
    }
    .guanzhu{
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
        float: right;
    }
    .guanzhu2{
        width: 80px;
        height: 34px;
        background-color: rgba(0,132,255,.08);
        border: solid 0 lightgray;
        color: #0084ff;
        font: inherit;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        font-synthesis: style;
        margin-left: 585px;
    }




    .image{
        margin-left: 20px;
        width:28%;
        height:59%;
    }
    .neirong{
        margin-left: 41%;
        margin-top: -125px;
        width: 50%;
    }
    .neirong2{
        margin-left: 1%;
        width: 50%;
        color: white;
    }
    .fangwen{
        padding-top: -105px;
        margin-left: 41%;
    }



    .title{
        margin-top: 3px;
        margin-left: 22px;
    }
    .icon{
        margin-top: 1px;
        margin-left: 22px;
    }
    .creator_name{
        margin-left:70px;
        margin-top:-35px;
    }
    .followers{
        margin-left: 200px;
        margin-top:-37px;
    }
    .wenzhang{
        margin-left: 295px;
        margin-top: -185px;
        height: 90%;
        border-left: solid 1px darkgray;
    }
    .question_title{
        margin-top: 8px;
        margin-left: 22px;
    }
    .answer_content{
        margin-left: 22px;
        font-style: oblique;
        margin-top: 2px;
        width: 92%;
        height: 50px;
    }
    .liuliang{
        margin-top: -23px;
        margin-left: 22px;
    }
    .shoucangnum{
        margin-top: -13px;
        margin-left: 20px;
    }
</style>