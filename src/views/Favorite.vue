<template>

    <div>
        <div class="favorite">
            <div style="padding-left:250px;margin-top: 10px;width: 100%;height:100px;background-color: white">
               <div style="padding-top: 20px">
                <svg fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="color: #0084ff">
                <path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path>
            </svg>
                <span style="margin-left: 12px;font-size: 25px;font-weight: 600;font-synthesis: style;">热门收藏夹</span>
               </div>
            </div>
        </div>
        <div id="containerfa">
            <div v-for="(item,index) in favorites" :key="index">
                <div class="shoucang">
                    <h2 class="title">{{ item.title}}</h2>
                    <img class="icon" :src="item.creator_avatar">
                    <h2 class="creator_name">{{item.creator_name}}&nbsp创建</h2>
                    <button class="guanzhu">关注收藏夹</button>
                    <h5 class="followers">{{item.followers}}&nbsp人关注</h5>
                    <div class="wenzhang">
                    <h4 class="question_title">{{item.question_title}}</h4>
                    <h5 class="answer_content">{{item.answer_author_name}}:{{item.answer_content}}</h5>
                    <h5 class="liuliang">回答 {{item.voteup_count}} 赞同.{{item.comment_count}}评论</h5>
                    <h4 class="shoucangnum">已收藏{{item.total_count}}条内容&nbsp&nbsp></h4>
                    </div>
                </div>
        </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "favorite",
        data(){
            return {
                favorites:[]
            };
        },
        created() {
            this.axios.get('http://localhost:8080/api/favorite/all').then(res=>{
                this.favorites=res.data.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
    #containerfa{
        width:70%;
        height:100%;
        margin-left: 250px;
        margin-top: 10px;
        display: inline-grid;
        grid-template-columns: repeat(1,100%);
        grid-row-gap: 20px;
    }
    .shoucang{
        width:100%;
        height: 200px;
        padding-top: 10px;
        background-color: white;
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
        margin-top: -25px;
        margin-left: 25px;
    }
    .title{
        margin-top: 28px;
        margin-left: 25px;
    }
    .icon{
        margin-top: 1px;
        margin-left: 25px;
    }
    .creator_name{
        margin-left:70px;
        margin-top:-35px;
    }
    .followers{
        margin-left: 175px;
        margin-top:-25px;
    }
    .wenzhang{
        margin-left: 295px;
        margin-top: -185px;
        height: 90%;
        border-left: solid 1px darkgray;
    }
    .question_title{
        margin-top: 48px;
        margin-left: 40px;
    }
    .answer_content{
        margin-left: 40px;
        font-style: oblique;
        width: 92%;
    }
    .liuliang{
        margin-top: -17px;
        margin-left: 40px;
    }
    .shoucangnum{
        margin-top: -13px;
        margin-left: 40px;
    }
</style>