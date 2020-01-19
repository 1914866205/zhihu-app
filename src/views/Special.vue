<template>

    <div>
        <div class="special">
            <h3>全部专题</h3>
        </div>
        <div id="container">
            <div v-for="(item,index) in specials" :key="index">
                <div id="body">
                    <h3 id="title">{{ item.title}}</h3>
                    <img  id="image" :src="item.banner" alt="">
                    <div id="neirong">
                        <small>{{item.introduction}}</small>
                    </div>
                </div>
                    <p id="fangwen">{{ item.updated.substring(0,10)}} {{item.updated.substring(11,19)}} 更新，{{ item.viewCount }}次浏览</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "special",
        data(){
            return {
                specials:[]
            };
        },
        created() {
            this.axios.get('http://localhost:8080/api/special/all').then(res=>{
                this.specials=res.data.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
    #container{
        width: 44%;
        height:100%;
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
    #image{
        margin-left: 20px;
        width:28%;
        height:50%;
    }
    #neirong{
        margin-left: 41%;
        margin-top: -105px;
        width: 50%;
    }
    #fangwen{
        margin-left: 15px;
    }
</style>