<template>
  <div>
    <div class="header">
      <div class="header-inner">
        <img class="header-logo" src="@/assets/logo.png">
        <div class="header-nav">
          <ul class="nav-list">
            <li>登录</li>
            <li class="nav-pile">|</li>
            <li>注册</li>
            <li class="nav-pile">|</li>
            <li>关于</li>
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
  </div>
</template>

<script>
  export default {
    name: "layout",
    data() {
      return {}
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
