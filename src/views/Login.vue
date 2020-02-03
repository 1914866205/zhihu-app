<template>
    <div>
        <div class="login-bar tx-center Loginbody">
            <router-link style="border: 0px" to="/">
                <img src="../assets/image/zhihuicon.jpg" class="logo"/>
            </router-link>

            <div class="Lbody">
            </div>
            <div class="Lcon">
                <div class="display-inline"><span> 社交帐号登录</span>
                    <span><div class="display-inline padding-left-5"><svg viewBox="0 0 20 19" class="Icon Login-socialIcon Icon--wechat"
                                                        style="fill: rgb(96, 200, 77); height: 18px; width: 18px;"
                                                        width="18" height="18" aria-hidden="true"><title></title><g><path fill-rule="evenodd"
                        d="M.224 18.667s4.24-1.825 4.788-2.056C13.03 20.14 20 14.715 20 8.9 20 3.984 15.523 0 10 0S0 3.984 0 8.898c0 1.86.64 3.585 1.737 5.013-.274.834-1.513 4.757-1.513 4.757zM6.167 8.96c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272zm7.583 0c.69 0 1.25-.57 1.25-1.27 0-.703-.56-1.272-1.25-1.272s-1.25.57-1.25 1.27c0 .703.56 1.272 1.25 1.272z"></path></g></svg>微信</div><div
                        class="display-inline padding-left-2"><svg width="18" height="18" viewBox="0 0 18 20"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        class="display-inline"
                                                        style="fill: rgb(80, 200, 253); height: 18px; width: 18px;"
                                                        aria-hidden="true"><title></title><g><title>QQ</title><path
                        d="M9.003 0c-2.265 0-6.29 1.364-6.29 7.325V8.52S.55 12.96.55 15.474c0 .665.17 1.025.28 1.025.115 0 .903-.485 1.75-2.073 0 0-.18 2.197 1.903 3.967 0 0-1.77.495-1.77 1.182 0 .686 4.078.43 6.29 0 2.24.425 6.287.687 6.287 0 0-.688-1.768-1.182-1.768-1.182 2.085-1.77 1.905-3.967 1.905-3.967.845 1.588 1.634 2.072 1.746 2.072.11 0 .283-.36.283-1.026 0-2.514-2.166-6.954-2.166-6.954V7.325C15.29 1.365 11.268 0 9.003 0z"
                        fill-rule="evenodd"></path></g></svg>QQ</div><div class="display-inline padding-left-2"><svg
                        viewBox="0 0 22 18" class="padding-left-2"
                        style="fill: rgb(251, 102, 34); height: 18px; width: 18px;" width="18" height="18"
                        aria-hidden="true"><title></title><g><g fill-rule="evenodd">     <path
                        d="M14.518.06s-.87.644.03 1.71c0 0 6.287-1.19 5.69 6.33 0 0 1.05 1.13 1.674-.31 0 .002 1.44-8.584-7.394-7.73zM4.883 13.17s.038 2.584 3.326 2.584c3.657 0 3.683-2.98 3.683-2.98S12.1 9.67 8.687 9.61c-3.863-.07-3.804 3.56-3.804 3.56zM7.41 14.21c-.668 0-1.214-.447-1.214-.998 0-.55.543-.998 1.215-.998.67 0 1.213.447 1.213.998 0 .55-.54.998-1.212.998z"></path>     <path
                        d="M4.317 4.52C-2.603 10.353.873 14.85.873 14.85c.57 1.01 3.382 3.1 8.596 3.1 5.21 0 9.314-3.628 9.314-6.44 0-2.813-2.918-2.714-2.918-2.714 1.04-1.554.19-2.65.19-2.65-1.684-2.118-5.404-.16-5.407-.158.772-1.717.11-2.797.11-2.797C8.932.66 4.317 4.52 4.317 4.52zm10.448 7.79s-.467 4.16-6.447 4.16c-5.745 0-5.82-3.322-5.842-3.712 0 0-.073-4.423 6.58-4.654 5.94-.204 5.71 4.207 5.71 4.207zM18.65 7.045s1.018-4.37-3.864-3.818c0 0-.628.58.09 1.346 0 0 2.602-.58 2.397 2.598 0 0 .715.885 1.376-.125z"></path>   </g></g></svg>微博</div></span>
                </div>
            </div>
            <div class="Ldown">
                <div>
                    <svg width="20" height="20" fill="currentColor" style="padding-right: 10px">
                        <g fill="none" fill-rule="evenodd">
                            <path fill="#0084FF"
                                  d="M15.234 0C18.125 0 20 1.875 20 4.766v10.468C20 18.125 18.125 20 15.234 20H4.766C1.875 20 0 18.125 0 15.234V4.766C0 1.875 1.875 0 4.766 0h10.468z"></path>
                            <path d="M0 0h20v20H0z"></path>
                            <path fill="#FFF"
                                  d="M10.313 10.352c0-.012-.004-1.036-.328-1.055h-2.26a48.42 48.42 0 0 0 .095-3.164h2.21c0-.003.084-.982-.37-.977H5.837c.15-.563.34-1.15.566-1.758 0 0-1.039 0-1.393.937-.146.386-.57 1.87-1.325 3.388.254-.028 1.095-.05 1.59-.963.091-.255.109-.289.222-.627h1.246c0 .452-.051 2.897-.072 3.164H4.414c-.507.019-.672 1.043-.672 1.055h2.832c-.19 2.15-1.209 3.972-3.058 5.413.884.253 1.766-.04 2.202-.43 0 0 .992-.906 1.536-3.004l2.33 2.817s.342-1.166-.053-1.734c-.328-.387-1.212-1.434-1.589-1.814l-.631.504a7.686 7.686 0 0 0 .34-1.752h2.662zM10.898 5v9.441h1.015l.334 1.145 1.82-1.144h2.144V5h-5.313zm4.258 8.398h-1.214l-1.212.782-.22-.782h-.518V6.016h3.164v7.382z"></path>
                        </g>
                    </svg>
                    下载知乎 App
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Login.vue",
        data() {
            return {}
        },
        created() {
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

        }

        .Lcon {
            width: 25%;
            height:7%;
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

    }
</style>