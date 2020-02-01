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
            <div align="center" style="padding-top: 3%">
                <button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
                    <router-link to="/special/all" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多专题 ></router-link>
                </button>
            </div>
        <svg class="Zi Zi--LabelRoundtable" style="padding-left:75px;color:#0084ff;"fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M12 21.333a9.333 9.333 0 1 1 0-18.666 9.333 9.333 0 0 1 0 18.666zm-.66-11.287c.332.385.609.77.775 1.21.055-.054.665-.99.72-1.706.055-.385.126-1.616-.443-2.367-.443-.496-1.219-.77-1.884-.55a1.788 1.788 0 0 0-1.33 2.036c.887.276 1.607.771 2.161 1.377zm-1.33 1.541c.443-.055.941-.11 1.44 0 0-.055-.484-.936-1.108-1.486-.665-.496-1.33-.973-2.216-.771-.72.11-1.723.77-1.55 2.092.11.606.553 1.101 1.162 1.321.61-.605 1.44-1.046 2.272-1.156zm2.714.165c.056 0 1.164.055 1.828-.165.72-.275 1.412-.68 1.773-1.541.11-.276.23-1.248-.443-1.872-.72-.716-1.717-.716-2.438-.165.222.825.063 1.966-.11 2.532-.103.348-.333.88-.61 1.211zm-1.44.55c-.056 0-1.33.056-1.828.221-.72.275-1.447.668-1.773 1.541-.11.276-.21 1.26.443 1.872.665.661 1.718.661 2.438.11-.295-.811-.166-1.761.055-2.477.166-.495.388-.936.665-1.266zm5.041-.99c-.665.605-1.44.99-2.327 1.211-.443.055-.941.11-1.44 0 0 .055.554.991 1.108 1.431.665.496 1.385.771 2.216.771.72-.11 1.678-.692 1.551-2.092-.055-.605-.554-1.101-1.108-1.321zm-3.656 2.642a3.475 3.475 0 0 1-.776-1.156c-.055.055-.665.991-.72 1.707-.055.385-.101 1.506.499 2.312.443.496 1.218.77 1.883.55.887-.275 1.496-1.1 1.33-2.036a5.38 5.38 0 0 1-2.216-1.377z" fill-rule="evenodd"></path></svg>
        <span style="margin-left: 12px;font-size: 25px;font-weight: 600;font-synthesis: style;">圆桌讨论</span>
        <div>
        <div class="container">
             <div v-for="(item,index) in roundtables" :key="index">
            <div class="body">
                <div ref="box">
                <button class="guanzhu2" ref="btn">关注圆桌</button>
                <h3 class="title2">{{ item.name}}</h3>
                 <img ref="bgImg" :src=item.banner style="width:700px;height:200px;background-repeat: no-repeat;background-attachment: scroll;background-position:-140px -20px;"/>
                <div ref="mask1"></div>
                <div ref="mask2"></div>
                </div>
                <div class="neirong2">
                    <img :src="roundtables.tinyBanner">
                </div>
                <p class="margin-left-1" style="color: white">{{ item.visitsCount }}次浏览<br> {{item.includeCount}}人参与</p>

            </div>
            </div>
        </div>
            <div align="center" style="padding-top: 5%">
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
            <div align="center" style="padding-top:3%">
                <button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
                    <router-link to="/special/favorite" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多收藏 ></router-link>
                </button>
            </div>
        </div>

        <div>
            <div style="padding-left:75px"><svg fill="currentColor" viewBox="0 0 24 24" width="36" height="36" style="color: #0084ff">
                <path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm4.043-15.524a.745.745 0 0 0-1.053.017l-6.857 7.071 2.237 2.17 6.857-7.071a.743.743 0 0 0-.016-1.052l-1.168-1.135zm-9.028 9.476l-.348 1.381 1.37-.39 1.274-.36-1.973-1.916-.323 1.285z" fill-rule="evenodd"></path>            </svg>
                <span style="margin-left: 12px;font-size: 25px;font-weight: 600;font-synthesis: style;">专栏</span>
            </div>
            <div class="columns_container">
                <div v-for="(item,index) in columns" :key="index">
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
            </div>
            <div align="center" style="padding-top: 10px">
                <button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
                    <router-link to="/columns" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多专栏></router-link>
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
                favorited:[],
                columns:[],
                roundtables:[],
                dominant:'',
                secondary:''
            };
        },created() {
            this.axios.get('http://localhost:8080/api/special').then(res=>{
                this.recommoned=res.data.data["special"];
                this.favorited=res.data.data["favorite"];
                this.columns=res.data.data["columns"];
                this.roundtables=res.data.data["roundtable"];
                //等页面渲染完成后再做处理
                this.$nextTick(()=>{
                    //获得循环中的引用对象，都将会是数组的形式
                    let boxArr=this.$refs.box;
                    let imgArr=this.$refs.bgImg;
                    let btnArr=this.$refs.btn;
                    let mask1Arr=this.$refs.mask1;
                    let mask2Arr=this.$refs.mask2;
              //遍历，对每个对象进行处理
                    for (var i = 0,len=boxArr.length;i<len; i++){
                        let box=boxArr[i];
                        let img=imgArr[i];
                        let btn=btnArr[i];
                        let mask1=mask1Arr[i];
                        let mask2=mask2Arr[i];
                        //第三方库，可以获取图片的主色，次色等
                        RGBaster.colors(img,{
                            success:function (payload) {
                                //主色
                                this.dominant=payload.dominant;
                                this.secondary=payload.secondary;
                                console.log('主色：'+payload.dominant);
                                //去掉rgb外层字母,括号，得到数字
                                let  str=payload.dominant.substring(4,payload.dominant.length-1);
                                //按逗号分隔，得到字符串数组
                                let strArr=str.split(',');
                                //分别获得r,g,b的值，并转为整型
                                let r=parseInt(strArr[0]);
                                let g=parseInt(strArr[1]);
                                let b=parseInt(strArr[2]);
                                //console.log(r+"=>"+g+"=>"+b);
                                //定义两个透明度的值
                                let color1='rgba(${r}),${g},${b},${a1})';
                                let color2='rgba(${r}),${g},${b},${a2})';
                                console.log('颜色1：'+color1);
                                console.log('颜色2：'+color2);
                                //圆桌卡片顶部整宽部分背景色设置为图片主色
                                box.style.backgroundColor=this.dominant;
                                //右侧logo覆盖两层蒙版，使用以下渐变色规则
                                mask1.style.background='linear-gradient(to right,'+this.dominant+'0%,'+color1+'100%)';
                                mask2.style.background='linear-gradient(to right,'+color2+'0%,'+color1+'100%)';
                                //关注按钮的文字颜色，使用图片主色
                                btn.style.color=this.dominant;






                            }
                        })
                    }


                })
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
        grid-row-gap: 8%;
        grid-column-gap:2%;
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
        margin-top: 5%;
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
        margin-top: -20%;
        width: 50%;
        color: white;
    }
    .fangwen{
        padding-top: -105px;
        margin-left: 41%;
    }



    .title{
        margin-top: 2%;
        margin-left: 22px;
    }
    .icon{
        margin-top: 1%;
        margin-left: 22px;
    }
    .creator_name{
        margin-left:70px;
        margin-top:-4%;
    }
    .followers{
        margin-left: 200px;
        margin-top:-3%;
    }
    .wenzhang{
        margin-left: 295px;
        margin-top: -185px;
        height: 90%;
        border-left: solid 1px darkgray;
    }
    .question_title{
        margin-top: 2%;
        margin-left: 22px;
    }
    .answer_content{
        margin-left: 22px;
        font-style: oblique;
        margin-top:3%;
        width: 92%;
        height: 50px;
    }
    .liuliang{
        margin-top: 3%;
        margin-left: 22px;
    }
    .shoucangnum{
        margin-top: 1%;
        margin-left: 20px;
    }
    .columns_container{
        width:100%;
        height:100%;
        margin-left: 75px;
        display: inline-grid;
        grid-template-columns: repeat(4,20%);
        grid-column-gap: 45px;
        grid-auto-flow: row;
        justify-items: stretch;
    }
    .columns_body{
        align-self: center;
        background-color: white;
        height: 360px;
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
</style>