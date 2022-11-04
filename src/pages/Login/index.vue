<template>
    <div :class="[isSignUp? 'right-panel-active':'','container']">
        <div class="form-container sign-up-container">
            <form action="#">
                <h1>创建账号</h1>
                <span>使用其他方式注册</span>
                <div class="social-container">
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                </div>
                
                <input type="text" placeholder="用户名" autocomplete="off" v-model="user.username"/>
                <input type="email" placeholder="注册邮箱" autocomplete="off" v-model="user.email" @input="checkEmail"/>
                <a v-show="sendAuthCode" class="getCaptchaText" @click="getCaptcha">获取验证码</a>
                <a v-show="!sendAuthCode" class="getCaptchaTextTime">{{auth_time}}秒</a>
                
                <input type="text"  placeholder="邮箱验证码" autocomplete="off" @input="checkCaptcha" v-model="user.code">
                
                <input type="password" placeholder="密码" autocomplete="off" v-model="user.password"/>
                <button class="signUp" @click.prevent="signUp">Sign Up</button>
            </form>
        </div>
        <div class="form-container sign-in-container">
            <form action="#">
                <h1>Coding_Charing</h1>
                
                <div class="social-container">
                    <span>其他登录方式</span>
                    <a href="#" class="social"><i class="fab fa-facebook-f"></i></a>
                    <a href="#" class="social"><i class="fab fa-google-plus-g"></i></a>
                    <a href="#" class="social"><i class="fab fa-linkedin-in"></i></a>
                    
                </div>
                <input type="email" placeholder="用户名" autocomplete="off"/>
                <input type="password" placeholder="密码" autocomplete="off"/>
                <!-- <a href="#">忘记密码</a> -->
                <el-link type="info" @click="forgetPassword">忘记密码</el-link>
                <button @click.prevent="login">登 录</button>
            </form>
        </div>
        <div class="overlay-container">
            <div class="overlay">
                <div class="overlay-panel overlay-left">
                    <h1>欢迎回来!</h1>
                    <p>要与我们保持联系，请使用您的个人信息登录</p>
                    <button class="ghost" @click="isSignUp = false">Sign In</button>
                </div>
                <div class="overlay-panel overlay-right">
                    <h1>您好，朋友!</h1>
                    <p>输入您的个人信息，与我们一起开始旅程</p>
                    <button class="ghost" @click="isSignUp = true">Sign Up</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            isSignUp: true,
            timer:null,
            user: {
                username: '',
                code: '',
                password: '',
                email: '',
            },
            sendAuthCode: true,
            auth_time: 0,
        }
    },
    methods: {
        checkEmail() {
            if (this.timer !== null) {
                clearTimeout(this.timer)
            }
            
            this.timer = setTimeout(() => {
                const regex = new RegExp('^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$');
                if (!regex.test(this.user.email)) {
                    this.$message.error('邮箱格式有误，请重新确认！')
                }
            }, 1000);
        },
        checkCaptcha() {
            if (this.user.code.length > 5) {
                this.user.code = this.user.code.slice(0,5)
            }
            
        },
        getCaptcha() {
            // this.sendAuthCode = false
            // console.log('获取成功！')
            this.sendAuthCode = false;
            this.auth_time = 10;
            let auth_timetimer =  setInterval(()=>{
                this.auth_time--;
                if(this.auth_time <= 0){
                    this.sendAuthCode = true;
                    clearInterval(auth_timetimer);
                }
            }, 1000);
        },
        forgetPassword() {
            this.$message.warning('怎么就忘啦，目前忘记密码还在开发中,请稍等...')
        },
        signUp() {
            this.$message.success('注册成功！') 
        },
        login() {
            console.log('登录成功！')
        }
    }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,800');
@import url('https://use.fontawesome.com/releases/v5.8.1/css/all.css');



h1 {
    font-weight: bold;
    margin: 0;
}

p {
    font-size: 14px;
    font-weight: 100;
    line-height: 20px;
    letter-spacing: .5px;
    margin: 20px 0 30px;
}

span {
    font-size: 12px;
}

a {
    color: #0e263d;
    font-size: 14px;
    text-decoration: none;
    margin: 15px 0;
}

.container {
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 14px 28px rgba(0, 0, 0, .2), 0 10px 10px rgba(0, 0, 0, .2);
    position: relative;
    overflow: hidden;
    width: 768px;
    /* max-width: 100%; */
    min-height: 580px;
    
    margin: 100px auto;
    
}

.form-container form {
    background: #fff;
    display: flex;
    flex-direction: column;
    padding:  0 50px;
    height: 100%;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.social-container {
    margin: 20px 0;
}

.social-container a {
    border: 1px solid #008ecf;
    border-radius: 50%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    margin: 0 5px;
    height: 40px;
    width: 40px;
}

.form-container input {
    background: #eee;
    border: none;
    padding: 12px 15px;
    margin: 8px 0;
    width: 100%;
}

button {
    border-radius: 20px;
    border: 1px solid #008ecf;
    background: #008ecf;
    color: #fff;
    font-size: 12px;
    font-weight: bold;
    padding: 12px 45px;
    letter-spacing: 1px;
    text-transform: uppercase;
    transition: transform 80ms ease-in;
}

button:hover {
    cursor: pointer;
}
button:active {
    transform: scale(.95);
}

button:focus {
    outline: none;
}

button.ghost {
    background: transparent;
    border-color: #fff;
}

.form-container {
    position: absolute;
    top: 0;
    height: 100%;
    transition: all .6s ease-in-out;
}

.sign-in-container {
    left: 0;
    width: 50%;
    z-index: 2;
}

.sign-up-container {
    left: 0;
    width: 50%;
    z-index: 1;
    opacity: 0;
}

.overlay-container {
    position: absolute;
    top: 0;
    left: 50%;
    width: 50%;
    height: 100%;
    overflow: hidden;
    transition: transform .6s ease-in-out;
    z-index: 100;
}

.overlay {
    background: #ff416c;
    background: linear-gradient(to right, #008ecf, #008ecf) no-repeat 0 0 / cover;
    color: #fff;
    position: relative;
    left: -100%;
    height: 100%;
    width: 200%;
    transform: translateY(0);
    transition: transform .6s ease-in-out;
}

.overlay-panel {
    position: absolute;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0 40px;
    height: 100%;
    width: 50%;
    text-align: center;
    transform: translateY(0);
    transition: transform .6s ease-in-out;
}

.overlay-right {
    right: 0;
    transform: translateY(0);
}

.overlay-left {
    transform: translateY(-20%);
}

/* Move signin to right */
.container.right-panel-active .sign-in-container {
    transform: translateY(100%);
}

/* Move overlay to left */
.container.right-panel-active .overlay-container {
    transform: translateX(-100%);
}

/* Bring signup over signin */
.container.right-panel-active .sign-up-container {
    transform: translateX(100%);
    opacity: 1;
    z-index: 5;
}

/* Move overlay back to right */
.container.right-panel-active .overlay {
    transform: translateX(50%);
}

/* Bring back the text to center */
.container.right-panel-active .overlay-left {
    transform: translateY(0);
}

/* Same effect for right */
.container.right-panel-active .overlay-right {
    transform: translateY(20%);
}

/* .getCaptcha {
    position: relative;
} */
/* .getCaptchaText {
    position: absolute;
    /* right: 78px;
    top: 340px; 
}*/
.getCaptchaText {
    padding: 4px 18px;
    position: absolute;
    right: 42px;
    top: 332px;
}
.getCaptchaText:hover {
    color: #008ecf;
    text-decoration: underline;
    cursor: pointer;
}
.getCaptchaTextTime {
    padding: 4px 18px;
    position: absolute;
    right: 42px;
    top: 332px;
}

.signUp {
    margin-top: 16px;
}
</style>