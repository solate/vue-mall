<template>
  <div>
    <div class="header">
      <div class="header-inner">
        <router-link :to="{path: '/'}">
          <img class="header-logo" src="@/assets/logo.png">
        </router-link>
        <div class="header-nav">
          <ul class="nav-list">
            <li> {{ username }}</li>
            <li v-if="username!== ''" class="nav-pile">|</li>
            <li v-if="username!== ''" @click="quit">退出</li>
            <li v-if="username=== ''" @click="logClick">登录</li>
            <li class="nav-pile">|</li>
            <li v-if="username=== ''" @click="regClick">注册</li>
            <li v-if="username=== ''" class="nav-pile">|</li>
            <li @click="aboutClick">关于</li>
          </ul>
        </div>
      </div>
    </div>
    <div class="content">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>
    <div class="footer">
      <p>@ 2019 finish MIT</p>
    </div>


    <my-dialog :is-show="isShowAboutDialog" @on-close="closeDialog('isShowAboutDialog')">
      <p>本报告在调研数据的基础上，采用定性与定量相结合的方式深入分析了专车市场发展的驱动因素与阻碍因素、专车市场背后的产业格局、专车企业的竞争格局、用户对专车市场的依赖程度、专车对其他交通工具运力的补充效应等，通过这五个章节的研究反映专车市场的发展态势和面临的问题。报告力求客观、深入、准确地反映中国专车市场发展情况，为政府、企事业单位和社会各界提供决策依据。 </p>
    </my-dialog>

    <my-dialog :is-show="isShowLogDialog" @on-close="closeDialog('isShowLogDialog')">
      <log-form @has-log="onSuccessLog"></log-form>
    </my-dialog>

    <my-dialog :is-show="isShowRegDialog" @on-close="closeDialog('isShowRegDialog')">
      <reg-form></reg-form>
    </my-dialog>

  </div>
</template>

<script>
  import Dialog from './base/dialog'
  import LogForm from './logForm'
  import RegForm from './regForm'
  export default {
    name: "layout",
    components: {
      MyDialog: Dialog,// 不能直接使用Dialog，必须改名，作为html标签会报错
      LogForm,
      RegForm
    },
    data() {
      return {
        isShowAboutDialog: false,
        isShowLogDialog: false,
        isShowRegDialog: false,
        username: '',
      }
    },
    methods: {
      aboutClick () {
        this.isShowAboutDialog = true
      },
      logClick () {
        this.isShowLogDialog = true
      },
      regClick () {
        this.isShowRegDialog = true
      },
      closeDialog (attr) {
        this[attr] = false
      },
      onSuccessLog (data) {
        console.log(data)
        this.closeDialog ('isShowLogDialog')
        this.username = data.username
      }
    }
  }
</script>

<style>

  .header {
    background: #363636;
    color: #b2b2b2;
    height: 90px;
    line-height: 90px;
    width: 100%;
  }

  .header-inner {
    width: 1200px;
    margin: 0 auto;
  }

  .header-logo {
    float: left;
  }

  .header-inner img {
    width: 50px;
    margin-top: 20px;
  }

  .header-nav {
    float: right;
  }

  .header-nav ul {
    overflow: hidden;
  }

  .header-nav li {
    cursor: pointer;
    float: left;
  }

  .nav-pile {
    padding: 0 10px;
  }

  .footer {
    text-align: center;
    width: 100%;
    height: 80px;
    line-height: 80px;
    background: #e3e4e8;
    clear: both;
    margin-top: 30px;
  }

  .container {
    width: 1200px;
    margin: 0 auto;
  }

  .hr {
    height: 1px;
    width: 100%;
    background: #DDDDDD;
  }

  .button {
    background: #4fc08d;
    color: #fff;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
  }

  .button:hover {
    background: #4fc08d;
  }

  .g-form {

  }
  .g-form-line{
    padding: 15px 0;
  }
  .g-form-label {
    width: 100px;
    font-size: 16px;
    display: inline-block;
  }
  .g-form-input {
    display: inline-block;
  }
  .g-form-input input{
    height: 30px;
    width: 200px;
    line-height: 30px;
    vertical-align: middle;
    padding: 0 10px;
    border: 1px solid #ccc;
  }
  .g-form-btn {
    padding-left: 100px ;
  }


</style>
