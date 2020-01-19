<template>
    <div>
        <svg class="Zi Zi--LabelSpecial" style="padding-left:75px;color:#0084ff;}" fill="currentColor" viewBox="0 0 24 24" width="36" height="36"><path d="M7.667 3.667h11.466a1.2 1.2 0 0 1 1.2 1.2v13.066a2.4 2.4 0 0 1-2.4 2.4H6.467V4.867a1.2 1.2 0 0 1 1.2-1.2zM4.2 9.619h1.689v10.714H5.4a2.4 2.4 0 0 1-2.4-2.4V10.82a1.2 1.2 0 0 1 1.2-1.2zm5.178-2.38a.6.6 0 0 0-.6.6v.585a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378zm0 3.57a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h8.044a.6.6 0 0 0 .6-.6v-.585a.6.6 0 0 0-.6-.6H9.378zm0 3.572a.6.6 0 0 0-.6.6v.586a.6.6 0 0 0 .6.6h4.578a.6.6 0 0 0 .6-.6v-.586a.6.6 0 0 0-.6-.6H9.378z" fill-rule="evenodd"></path></svg>
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
             <div :style="{backgroundImage:'url('+item.banner+')'}" style="width:98%;height:200px;background-repeat: no-repeat;background-attachment: scroll;background-position:-140px -20px;">
                <h3 class="title2">{{ item.title}}</h3>
                <button class="guanzhu">关注圆桌</button>
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
    </div>
</template>

<script>
    export default {
        name: "recommoned",
        data(){
            return{
                recommoned:[]
            };
        },created() {
            this.axios.get('http://localhost:8080/api/special').then(res=>{
                this.recommoned=res.data.data;
            })
        }
    }
</script>


<style lang="scss" scoped>
    .container{
        width:90%;
        height:100%;
        background-color: white;
        margin-left: 75px;
        display: inline-grid;
        grid-template-columns: repeat(2,49%);
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        grid-auto-flow: row;
        justify-items: stretch;
    }
    .body{
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
        margin-left: 500px;
        padding: 0;
        font: inherit;
        height: 34px;
        color:#0084ff;
        background-color: rgba(0,132,255,.08);
        width: 88px;
        border-radius: 3px;
        font-size: 14px;
        font-weight: 600;
        font-synthesis: style;
        cursor: pointer;
        background: none;
        background-color: rgba(0, 0, 0, 0);
        border: none;
        outline: none;
        -webkit-appearance: none;
        -moz-appearance: none;
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
</style>