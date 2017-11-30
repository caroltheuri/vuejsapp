<template>
    <div>
        <div id="images">
            <slot name="gallery"></slot>
            <el-row type="flex" class="row-bg" justify="space-around">
               <el-col :span="6">
                   <img src="../assets/investment.jpeg">
                   <p>This house is for rent. (1)</p>
               </el-col>
                <el-col :span="6">
                    <img src="../assets/pexels-photo-323780.jpeg">
                    <p>This house is for ownership. (2)</p>
                </el-col>
                <el-col :span="6">
                    <img src="../assets/rent.jpeg">
                    <p>This house is for investment. (3)</p>
                </el-col>
                <el-col :span="6" id="theme">
                    <p>{{theme}}</p>
                </el-col>
            </el-row>
        </div>
    </div>
</template>
<script>
    import ElHeader from "../../node_modules/element-ui/packages/header/src/main.vue";

    export default{
        components: {ElHeader},
        name:'images',
        props:['theme'],
    }
</script>
<style>
    .el-row {
        margin-bottom: 20px;
    padding-top: 100px;
    }
    .row-bg {
        padding: 40px 0;
        padding-top: 70px;
        background-color: #EDF2FC;
    }

</style>