<template>
  <div class="home">
    <span>
        <div id="Snav">
      <ul>
        <li id="tujian">
            <a><router-link to="/home/recommoned">推荐</router-link></a>
        </li>
        <li id="guanzhu">
            <a><router-link to="/home/explore">关注</router-link></a>
        </li>
        <li id="rebang">
            <a><router-link to="/home/hot">热榜</router-link></a>
        </li>
      </ul>
        </div>
    </span>

      <div id="container">
          <div v-for="(item,index) in recommoned" :key="index">
              <div id="body">
                  <h3 id="title">{{ item.title}}</h3>
                  <img  id="image" :src="item.banner" alt="">
                  <div id="neirong">
                  <small>{{item.introduction}}</small>
                  </div>
                  <p id="fangwen">{{ item.updated}} 更新，{{ item.viewCount }}次浏览</p>
              </div>
              </div>
          </div>
      </div>
</template>

<script>
export default {
  name: 'recommoned',
  data(){
      return{
          recommoned:[]
      };
  },
    created() {
        this.axios.get('http://localhost:8080/api/special').then(res => {
            this.recommoned = res.data.data;
        });
    }
}
</script>
<style>
    #Snav{
        width: 44%;
        height:43px;
        background-color: white;
        border:0px solid silver ;
        margin-top: 15px;
        margin-left: 245px;
    }
    #tujian{
        list-style: none;
        position: absolute;
        font-weight: 600;
        font-synthesis: style;
        left:279px ;
        top:85px ;
    }
    #guanzhu{
        list-style: none;
        position: absolute;
        font-weight: 600;
        font-synthesis: style;
        left:349px ;
        top:85px ;
    }
    #rebang{
        list-style: none;
        position: absolute;
        font-weight: 600;
        font-synthesis: style;
        left:419px ;
        top:85px ;
    }
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
        margin-top: -95px;
        width: 50%;
    }
    #fangwen{
        margin-top: 25px;
        margin-left: 41%;
    }
</style>
