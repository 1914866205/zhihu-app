<template>
    <div>
        <div class="login-bar tx-center Loginbody">
<!--            <router-link style="border: 0px" to="/">-->
<!--                <img @click="login" src="../assets/image/zhihuicon.jpg" class="logo"/>-->
<!--            </router-link>-->
                <img src="../assets/image/zhihuicon.jpg" class="logo"/>

            <div class="Lbody">
                <div>
                    <p class="display-inline link" :class="{now : !action}" style="margin-left: -100px" @click="change">
                        免密码登录</p>
                    <p class="display-inline link margin-left-2" :class="{now : action}" @click="change">密码登录</p>
                    <div v-show="!action">
                        <br>
                        <select class="display-inline" v-model="selected" name="fruit"
                                style="margin-left: -10px;margin-right:10px;margin-top:35px;width: 120px;height: 20px">
                            <!--                            <option value="86" disabled>中国 +86</option>-->
                            <!--                            <option value="852">中国香港 +852</option>-->
                            <!--                            <option value="853">中国澳门 +853</option>-->
                            <!--                            <option value="886">中国台湾 +886</option>-->
                            <option v-for="item in options" :value="item.value">{{item.name}}</option>
                        </select>
                        <input class="display-inline" style="border-bottom:solid 2px black;width: 200px;height:20px"
                               placeholder="手机号"/>
                        <br>
                        <br>
                        <input class="display-inline"
                               style="border-bottom:solid 2px black;width: 200px;height:20px;margin-top: 20px"
                               placeholder="输入6位短信验证码"/>
                        <a class="link margin-left-1" style="font-size: 15px;color: #0c89ff">获取短信验证码</a>
                        <br>
                        <br>
                        <a class="link " style="margin-left: 210px;font-size: 15px;color: #bbb4bf">接收语音验证码</a>

                    </div>

                    <div v-show="action">
                        <br>
                        <br>
                        <input v-model="username" class="display-inline"
                               style="border-bottom:solid 2px black;width:80%;height:20px"
                               placeholder="手机号或邮箱"/>
                        <br>
                        <br>
                        <br>
                        <!--                        <input @change="getpassword"  type="password" class="display-inline"-->
                        <input v-model="password" type="password" class="display-inline"
                               style="border-bottom:solid 2px black;width:75%;height:20px" placeholder="密码"/>
                        <button tabindex="-1" type="button" class="Button SignFlow-switchPassword Button--plain">
                            <svg width="24" height="20" viewBox="0 0 24 24"
                                 class="Icon SignFlow-switchPasswordIcon Icon--inconspicuous"
                                 style="vertical-align: middle; height: 20px; width: 24px;" aria-hidden="true">
                                <title></title>
                                <g><title>Inconspicuous</title>
                                    <path d="M17.007 11.504c0 .65-.13 1.26-.36 1.83l3 3.073S23 14.136 23 11.504C23 8.008 17.255 4 11.995 4c-1.4 0-2.741.25-3.982.701l2.161 2.16c.57-.23 1.18-.36 1.831-.36a5.004 5.004 0 0 1 5.002 5.003zM2.57 4.342l2.067 2.075C3.499 7.258 1 9.119 1 11.504c0 3.336 5.79 7.503 11.005 7.503 1.55 0 3.031-.3 4.382-.84l.42.42 2.125 2.118s.782.571 1.314 0-.074-1.305-.074-1.305L3.955 3.183s-.76-.742-1.385-.19c-.626.554 0 1.35 0 1.35zm4.963 4.96l1.55 1.552c-.05.21-.08.43-.08.65 0 1.66 1.341 3.001 3.002 3.001.22 0 .44-.03.65-.08l1.551 1.551c-.67.33-1.41.53-2.2.53a5.004 5.004 0 0 1-5.003-5.002c0-.79.2-1.53.53-2.201zm4.312-.78l3.151 3.152.02-.16c0-1.66-1.34-3.001-3.001-3.001l-.17.01z"
                                          fill-rule="evenodd"></path>
                                </g>
                            </svg>
                        </button>
                        <br>
                        <br>
                        <a class="link " style="margin-left:-10px;font-size: 15px;color: #0c89ff">海外手机号登录</a>
                        <a class="link " style="margin-left:130px;font-size: 15px;color: #bbb4bf">忘记密码？</a>
                    </div>
                </div>
                <br>
                <br>
                <button class="loginbtn" @click="login">注册/登录</button>
                <br>
                <br>
                <div style="background-color: #f6f6f6;height: 80px">
                    <br>
                    <a class="display-inline"
                       style="margin-left: 75px;font-size: 15px;color:dodgerblue">注册机构号</a>
                    <p class="display-inline"
                       style="margin-left:-300px;margin-top:10px;font-size: 13px;color: #8591a7">
                        未注册手机验证后自动登录</p>
                    <br>

                    <p style="margin-left:-35px;font-size: 13px;color: #8591a7">注册即代表同意《知乎协议》《隐私保护指引》</p>
                </div>

            </div>
            <div class="Lcon">
                <div class="display-inline"><span> 社交帐号登录</span>
                    <span><div class="link display-inline padding-left-5"><svg viewBox="0 0 20 19"
                                                                               class="Icon Login-socialIcon Icon--wechat"
                                                                               style="fill: rgb(96, 200, 77); height: 18px; width: 18px;"
                                                                               width="18" height="18"
                                                                               aria-hidden="true"><title></title><g><path
                            fill-rule="evenodd"
                            d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z"></path></g></svg>微信</div><div
                            class="display-inline padding-left-2"><svg width="18" height="18" viewBox="0 0 18 20"
                                                                       xmlns="http://www.w3.org/2000/svg"
                                                                       class="link display-inline"
                                                                       style="fill: rgb(80, 200, 253); height: 18px; width: 18px;"
                                                                       aria-hidden="true"><title></title><g><title>QQ</title><path
                            d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z"
                            fill-rule="evenodd"></path></g></svg>QQ</div><div
                            class="link display-inline padding-left-2"><svg
                            viewBox="0 0 22 18" class="padding-left-2"
                            style="fill: rgb(251, 102, 34); height: 18px; width: 18px;" width="18" height="18"
                            aria-hidden="true"><title></title><g><g fill-rule="evenodd">     <path
                            d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"></path>     <path
                            d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z"></path>   </g></g></svg>微博</div></span>
                </div>
            </div>
            <div class="Ldown">
                <div>
                    <svg class="link display-inline" width="20" height="20" fill="currentColor"
                         style="padding-right: 10px">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#0084FF"
                                  d="M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"></path>
                            <path d="M0 0h20v20H0z"></path>
                            <path fill="#FFF"
                                  d="M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"></path>
                        </g>
                    </svg>
                    <p class="link display-inline">
                        下载知乎 App
                    </p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login.vue",
        data() {

            return {
                options: [{name: '中国 +86', value: 1}, {name: '中国香港 +852', value: 2}, {
                    name: '中国澳门 +853',
                    value: 3
                }, {name: '中国台湾 +886', value: 4}],
                selected: 1,
                action: false,
                username: "",
                password: "",
                email: "",
            }
        },
        created() {
        }, methods: {
            change() {
                this.action = !this.action;
            },
            // getpassword:function(e){
            //     alert(e.target.value);
            // },
            login() {
                var mogex = /[1-9][0-9]{10}/;
                var emgex = /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
                if (mogex.test(this.username) || emgex.test(this.username)) {
                    // $.ajax({
                    //     url: "/",
                    //     type: "post",
                    //     data: {
                    //         "username":this.username,
                    //         "password":this.password,
                    //     },
                    //     dataType: 'json',
                    //     success: function (stock) {
                    //         if (stock == null) {
                    //             return;
                    //         } else {
                    //             this.$router.push({path: '/'});
                    //         }
                    //     }
                    // });
                    if (this.username===this.$store.state.user.mobile || this.username===this.$store.state.user.email){
                        if (this.password===this.$store.state.user.password) {
                            this.$router.push({path: '/'});
                        } else {
                            alert("账号或密码错误");
                        }
                    } else {
                        alert("账号或密码错误");
                    }
                } else {
                    alert("手机号或邮箱格式错误");
                }
                this.$store.state.token = !this.$store.state.token;

            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url("../assets/css/ZhihuStyle.css");

    .Loginbody {
        height: 100%;
        text-align: center;
        background-color: #4d7c93;
        position: relative;
    }

    .login-bar {
        background-image: url("../assets/image/知乎.png");
        background-color: #b8e5f8;
        background-size: cover;
        width: 100%;
        height: 100vh;
        overflow: auto;

        .logo {
            width: 208px;
            height: 135px;
            margin-top: 30px;
        }

        .Lbody {
            width: 25%;
            height: 45%;
            border-radius: 3%;
            background-color: white;
            margin: auto;
            font-weight: 400;
            font-size: 18px;
            padding-top: 1.5%;
        }

        .Lcon {
            width: 25%;
            height: 7%;
            border-radius: 3%;
            color: gray;
            background-color: white;
            margin: auto;
            padding-top: 1.5%;
            margin-top: 5%;
        }

        .Ldown {
            width: 25%;
            height: 5%;
            border-radius: 3%;
            color: blue;
            background-color: white;
            margin: auto;
            margin-top: 2%;
            padding-top: 10px;
        }

        p:hover {
            font-weight: 800;
        }

        .now {
            border-bottom: solid 5px dodgerblue;
        }

        .loginbtn {
            border-radius: 5px;
            top: 6px;
            color: white;
            border: solid darkgray 0px;
            background-color: #0084ff;
            width: 300px;
            height: 34px;
            cursor: pointer;
        }
    }
</style>
