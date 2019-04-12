<template>
  <div id="index">
    <el-container class="container">
      <el-aside class="aside" style="width: 250px">
        <el-menu default-active="1" :default-openeds="['1']" background-color="#545c64" text-color="#fff">
          <el-submenu index="1">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-setting">&nbsp;&nbsp;系统管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/systeminfo"><el-menu-item>系统信息</el-menu-item></router-link>
              <router-link to=""><el-menu-item>系统配置</el-menu-item></router-link>
            </div>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-edit">&nbsp;&nbsp;会员管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/usermanage"><el-menu-item>会员列表</el-menu-item></router-link>
              <router-link to="/index/useradd"><el-menu-item>会员添加</el-menu-item></router-link>
            </div>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-edit">&nbsp;&nbsp;账号管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/accountmanage"><el-menu-item>账号列表</el-menu-item></router-link>
              <router-link to="/index/accountadd"><el-menu-item>账号添加</el-menu-item></router-link>
              <router-link to="/index/passwordupdate"><el-menu-item>修改密码</el-menu-item></router-link>
            </div>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-goods">&nbsp;&nbsp;分类管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/passwordupdate"><el-menu-item>分类列表</el-menu-item></router-link>
              <router-link to="/index/passwordupdate"><el-menu-item>分类添加</el-menu-item></router-link>
            </div>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-goods">&nbsp;&nbsp;商品管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/goodsmanage"><el-menu-item>商品列表</el-menu-item></router-link>
              <router-link to="/index/goodsadd"><el-menu-item>商品添加</el-menu-item></router-link>
            </div>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-goods">&nbsp;&nbsp;进货管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/stockmanage"><el-menu-item>库存管理</el-menu-item></router-link>
              <router-link to="/index/stockadd"><el-menu-item>库存添加</el-menu-item></router-link>
            </div>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-menu">&nbsp;&nbsp;统计管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/salestatistics"><el-menu-item>销售统计</el-menu-item></router-link>
              <router-link to="/index/stockstatistics"><el-menu-item>进货统计</el-menu-item></router-link>
            </div>
          </el-submenu>
          <el-submenu index="8">
            <template slot="title">
              <h3 class="font">
              <i class="el-icon-menu">&nbsp;&nbsp;出货管理</i>
              </h3>
            </template>
            <div class="xuxiang">
              <router-link to="/index/shipmentlist"><el-menu-item>销售列表</el-menu-item></router-link>
              <router-link to="/index/goodsOutStock"><el-menu-item>商品出库</el-menu-item></router-link>
              <router-link to="/index/orderreturn"><el-menu-item>商品退货</el-menu-item></router-link>
            </div>
          </el-submenu>
        </el-menu>
      </el-aside>
      <el-container class="content">
        <el-header class="head" style="height: 100px">
        <h2 class="title">欢迎您: Admin</h2>
         <!-- <p ></p>{{ mes }} -->
        </el-header>
        <el-main class="main">
          <router-view></router-view>
        </el-main>
        <el-footer class="foot">
          <p>@2019超市管理系统</p>
        </el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data (){
    return{
      isCollapse: true,
      'mes':'查看详细的系统信息'
    }
  }
};
</script>

<style lang="less">
@import "Index.less";
</style>
