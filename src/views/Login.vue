<template>
    <div>
        <div class="login-bar tx-center">
            <router-link  style="border: 0px"to="/">
                <img src="../assets/image/zhihuicon.jpg" class="logo"/>
            </router-link>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login.vue",
        data(){
            return {}
        },
        created() {}
    }
</script>

<style lang="scss" scoped>
    .login-bar{
        background-image: url("../assets/image/知乎.png");
        background-color:#b8e5f8;
        background-size: cover;
        width: 100%;
        height: 100vh;
        overflow: auto;
        .logo{
            width: 208px;
            height: 135px;
            margin-left: 40%;
            margin-top: 30px;
        }
    }
</style>