<template>
  <div class="login">
    <el-row style="margin-top: 260px;z-index: 1;">
      <el-col >
        <el-card class="login-box" style="width:400px;margin:0 auto" v-loading="" element-loading-background="rgba(0, 0, 0, 0.8)">
          <el-form ref="userInfo" :model="userInfo" :rules="loginRules">
            <h1 class="title">web-admin</h1>
            <el-form-item>
              <el-input type="text" v-model="userInfo.username" auto-complete="off" placeholder="请输入用户名..."
                        suffix-icon="el-icon-bell"></el-input>
            </el-form-item>
            <el-form-item>
              <el-input type="password" v-model="userInfo.password" auto-complete="off" placeholder="请输入密码..."
                        suffix-icon="el-icon-edit"></el-input>
            </el-form-item>
            <el-form-item>
              <!--<el-button type="primary" @click="login" :loading="$store.state.loading" class="pull-right"></el-button>-->
              <el-button type="primary" @click="handleLogin"  class="pull-right"
                         style="width:100%">登录
              </el-button>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import {isValidUsername} from '../utils/validate'

export default {
  name: 'Login',
  data () {
    const validateUsername = (role, value, callback) => {
      if (isValidUsername(value)) {
        callback(new Error('请输出正确的用户名'))
      } else {
        callback()
      }
    }
    const validatePass = (role, value, callback) => {
      if (value.length <= 5) {
        callback(new Error('密码长度不能小于5位'))
      } else {
        callback()
      }
    }
    return {
      userInfo: {
        username: 'admin',
        password: '123456'
      },
      // form rule
      loginRules: {
        username: [{ required: true, trigger: 'blur', validator: validateUsername }],
        password: [{ required: true, trigger: 'blur', validator: validatePass }]
      },
      loading: false,
      pwdType: 'password',
      redirect: undefined
    }
  },
  methods: {
    handleLogin () {
      // 表单验证
      this.$refs.userInfo.validate(valid => {
        if (valid) {
          this.loading = true
          this.$store.dispatch('/user/login', this.userInfo).then(() => {
            this.loading = false
            this.$router.push({ path: this.redirect || '/' })
          }).catch(() => {
            this.loading = false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    }
  }
}
</script>

<style>
  .login {
    background: url(../assets/banner.png) no-repeat scroll center center / cover;
    background-size: 100% 100%;
    width: 100%;
    height: 100%;
    position: fixed;
  }

  .login-box {
    background: #ffffff;
    border: none;
  }

  .login-box .title {
    color: #000000;
    text-align: center;
  }
</style>
