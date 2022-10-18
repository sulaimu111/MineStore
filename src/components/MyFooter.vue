<template>
    <div>
        <!-- <div style="height: calc(100vh - 522px);"></div> -->
        <div class="footer">
            <p>power by Jackson Wu</p>
        </div>
    </div>
</template>

<script>
    export default {
        name:'MyFooter'
    }
</script>

<style scoped>
    .footer{
        /* flex: 0; */
        margin-top: 50px;
        color: #fff;
        position: fixed;
        bottom: 0;
        width: 100%;
        z-index: 0;
    }
    .footer p{
        background-color: rgba(211, 211, 211, 0.342);
        padding: 10px 0;
    }


    @media screen and (min-width:768px) {
        .footer{
            width: 1080px;
            margin: auto;
            margin-top: 50px;
            padding-bottom:0;
            left:50%;
            margin-left: -540px;
        }
    }
</style>