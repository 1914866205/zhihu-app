<template>

    <div>
        <div class="roundtable">
            <h3>圆桌</h3>
        </div>
        <div id="container">
            <div v-for="(item,index) in roundtables" :key="index">
                <div id="body">
                    <div :style="{backgroundImage:'url('+item.banner+')'}" style="width:98%;height:200px;background-repeat: no-repeat;background-attachment: scroll;background-position:-140px -20px;">
                    <h3 id="title">{{ item.name}}</h3>
                    </div>
                </div>
                <p id="fangwen">该圆桌被浏览{{ item.visits_count }}次</p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "roundtables",
        data(){
            return {
                roundtables:[]
            };
        },
        created() {
            this.axios.get('http://localhost:8080/api/roundtable/all').then(res=>{
                this.roundtables=res.data.data;
            })
        }
    }
</script>

<style lang="scss" scoped>
    #container{
        width:90%;
        height:100%;
        background-color: white;
        margin-left: 50px;
        display: inline-grid;
        grid-template-columns: repeat(4,24%);
        grid-row-gap: 10px;
        grid-column-gap: 10px;
        grid-auto-flow: row;
        justify-items: stretch;
    }
    #body{
        width: 100%;
        height:170px;
        margin-top: 10px;
    }
    #title{
        color: white;
        padding-top: 120px;
        margin-left: 20px;
    }
    #fangwen{
        margin-left: 15px;
        padding-top: 26px;
    }
</style>