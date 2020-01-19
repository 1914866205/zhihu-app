<template>
    <div>
        <div class="banner">
            <div id="container">
                <div v-for="(item,index) in recommoned" :key="index">
                    <div id="body">
                        <h3 id="title">{{ item.title}}</h3>
                        <button class="guanzhu">关注专题</button>
                        <img  id="image" :src="item.banner" alt="">
                        <div id="neirong">
                            <small>{{item.introduction}}</small>
                        </div>
                        <p id="fangwen">{{ item.updated}} 更新，{{ item.viewCount }}次浏览...{{item.followersCount}}关注</p>
                    </div>
                </div>
            </div>
        </div>
            <div align="center">
                <button style="border-radius: 25px; height: 62px; background-color: #ffffff; ">
                    <router-link to="/special/all" style="color: #8590a6; font-size: 30px; text-decoration: none;">查看更多专题 ></router-link>
                </button>
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
    #container{
        width: 44%;
        height:98%;
        background-color: white;
        margin-left: 245px;
    }
    #body{
        width: 100%;
        height:200px;
        border-top: 1px solid silver;
        margin-top: 10px;
    }
    #title{
        padding-top: 1px;
        margin-left: 20px;
    }
    .guanzhu{
        padding-top: 1px;
        margin-top: 5px;
        margin-left: 450px;
    }
    #image{
        margin-left: 20px;
        width:28%;
        height:50%;
    }
    #neirong{
        margin-left: 41%;
        margin-top: -95px;
        width: 50%;
    }
    #fangwen{
        margin-top: 25px;
        margin-left: 41%;
    }
</style>