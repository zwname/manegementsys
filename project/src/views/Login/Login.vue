<template>
  <div class="login">
    <div class="login-form">
      <div class="title">
        <h2>
          <span class="iconfont icon-houtaiguanlixitong"></span>
          欢迎登陆超市后台管理系统</h2>
      </div>
       <el-form 
       :model="loginFrom" 
       status-icon 
       :rules="rules" 
       ref="loginFrom" 
       label-width="100px" 
       class="demo-ruleForm"
       size="medium"
       >
          <!-- 用户名 -->
          <el-form-item label="账户" prop="username">
            <el-input type="text" v-model="loginFrom.username" autocomplete="off"></el-input>
          </el-form-item>
          <!--密码  -->
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="loginFrom.password" autocomplete="off"></el-input>
          </el-form-item>
          <!-- 确认密码 -->
          <el-form-item label="确认密码" prop="checkp">
            <el-input type="password" v-model="loginFrom.checkp" autocomplete="off"></el-input>
          </el-form-item>
          <!-- 提交 -->
          <el-form-item>
            <el-button type="primary" @click="submitForm()">登陆</el-button>
            <el-button @click="resetForm()">重置</el-button>
          </el-form-item>

        </el-form>
      
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      var checkPwd1= (role,value,callback) =>{
        if(value === ''){
          callback(new Error('请输入密码'))
        } else if(value.length < 5){
          callback(new Error('密码长度不能小于5位'))
        } else{
          if(this.loginFrom.checkp !== ''){
          this.$refs.loginFrom.validateField('checkp')
          }
          callback()
        }
      }
      var checkPwd2 = (rule, value, callback) => {
        // rule是验证规则
        // value 是用户输入的值
        // callback 是执行的函数

        if(value === ''){
          callback(new Error('请再次输入密码'))  // 非空验证 
        } else if(value.length < 5){
          callback(new Error('确认密码的长度不能小于5位!'));  // 长度验证
        } else if (value !== this.loginFrom.password) {
          callback(new Error('两次输入密码不一致!'));  // 密码比对验证
        } else {
          callback(); // 直接调用callback就是通过验证
        }
      };
      return {
        loginFrom: {
          username: '',
          password: '',
          checkp:''
        },
        rules: {
           username: [
            { required: true, message: '请输入账户名称', trigger: 'blur' },
            { min: 3, message: '账户长度不能小于3位', trigger: 'blur' }
          ],
          password: [
            {required: true, validator: checkPwd1, trigger: 'blur' } // 自定义验证规则
          ],
          checkp: [
            {required: true, validator: checkPwd2, trigger: 'blur' }
          ],

        }
      };
    },
    methods: {
      submitForm() {
        this.$refs.loginFrom.validate((valid) => { // 如果所有前端验证通过,valid就是true
          if (valid) {
            alert('通过验证,允许提交!');
            // 收集数据
            const userinfo = { 
              username : this.loginFrom.username,
              password : this.loginFrom.password
            }
            console.log("用户信息:",userinfo)
            // 发送axios给后台
            // 登陆成功后路由跳转
            
            // 由于我们在main.js中引入并使用了路由,所以该路由在每个页面都能使用,
            // 在每个页面的方法中就存在一个$router的对象
            // 直接 使用 this.$router.push('路由配置的路径') 实现跳转
            this.$router.push('/index')
            
          } else {
            console.log('验证出错,不能登陆!!');
            return false;
          }
        });
      },
      resetForm() {
        this.$refs.loginFrom.resetFields();
      }
    }
  }
</script>

<style lang="less">
  @import 'Login.less';
</style>
