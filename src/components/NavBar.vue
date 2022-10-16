<template>
    <div>
        <input type="checkbox" name="" id="menu_control" />
        <div class="header">
            <h1 class="logo">
                <router-link to="/home"><img src="../assets/minecraftLogo.png" alt=""></router-link>
                <!-- <a href="#"><img src="../assets/minecraftLogo.png" alt=""></a> -->
            </h1>
            <label for="menu_control" class="menu_btn">
                <span>選單</span>
            </label>
            <nav>
                <router-link to="/home">HOME</router-link>
                <router-link to="/products">PRODUCT</router-link>
                <router-link to="/shoppingcart">SHOPPING CART</router-link>
                <router-link to="/Contact">CONTACT US</router-link>
            </nav>
        </div>
        
    </div>
</template>

<script>
    export default {
        name:'NavBar'
    }
</script>

<style scoped>

    #menu_control{
        position: absolute;
    }
    .header{
        width: 100%;
        height: 80px;
        margin: auto;
        background-color: #3e3f43;
        position: relative;
        align-items: center;
        display: flex;
        justify-content: center; 
        align-items: center;
    }
    .logo{
        width: 200px;
        position: absolute;
        top: 0;
        bottom: 0;
        margin: auto;
        overflow: hidden;
        /* display: flex; */
        align-items: center;
    }
    .logo img{
        width: 100%;
        overflow: hidden;
        max-height: 80px;
    }
    .menu_btn{
        width: 40px;
        height: 40px;
        background-color: #3e3f43;
        display: block;
        position: absolute;
        top: 20px;
        right: 10px;
        
    }
    .menu_btn span{
        opacity: 0;
    }
    .menu_btn::before{
        content: '';
        position: absolute;
        height: 3px;
        left: 2px;
        width: 36px;
        background-color: #aaa;
        top: 0;
        bottom: 0;
        margin: auto;
        box-shadow: 0px 8px 0px #aaa,
                    0px -8px 0px #aaa;
        transform: translateY(0px);
    }

    nav{
        width: 100%;
        height: calc(100vh - 90px); /* 視窗高度viewport height */
        background-color: rgb(114, 114, 114);
        position: absolute;
        top: 80px;
        left: -100%;
        opacity: 0.7;
        transition: 0.5s;
        text-align: left;
        margin: 0 auto;
    }
    nav a{
        display: block;
        text-decoration: none;
        background-color: #000;
        color: rgb(238, 238, 238);
        padding: 20px 40px;
        border-bottom: 1px solid rgba(255,255,255,0.3);
        font-size: 120%;
        
    }
    #menu_control:checked ~ .header nav{
        left: 0;
    }


    @media screen and (min-width:768px) {
        .menu_btn{
            display: none;
        }
        .header{
            max-width: 1080px;
            width: 100%;
            margin-bottom: 80px;
        }
        nav{
            width: 100%;
            height: 60px;
            top: 40;
            left: 0;
            display: flex;
            justify-content: space-evenly;
            background-color: rgb(56, 56, 56);
        }
        nav a{
            font-size: 15px;
            font-weight: bold;
            /* margin: 0 15px; */
            background-color: transparent;
            border-bottom: none;
            font-size: larger;
        }
        nav a:hover{
            border-bottom: 3px solid rgb(187, 255, 215);
            color: rgb(187, 255, 215);
        }
    }
</style>