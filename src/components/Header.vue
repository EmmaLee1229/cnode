<template>
    <div class="header">
        <router-link :to="{
            name:'root'
        }">
            <img src="../assets/cnodejs_light.svg" alt="">
        </router-link>
        <ul>
            <router-link :to="{
            name:'root'
        }">
            <li><a href="#">首页</a></li>
            </router-link>
            <li><a href="#">新手入门</a></li>
            <li><a href="#">API</a></li>
            <li><a href="#">关于</a></li>
            <li><a href="#">注册</a></li>
            <li><a href="#">登陆</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>
.header {
    background: #5c5555;
    height: 50px;
}
img {
    max-width: 120px;
    margin-top: 10px;
    margin-left: 40px;
}
ul {
   list-style: none;
    float: right;
    margin-right: 10px;
}
li {
    display: inline-block;
    padding: 1px 15px;
}
a {
    text-decoration: none;
    color: #ccc;
    font-size: 14px;
    text-shadow: none;
}
</style>