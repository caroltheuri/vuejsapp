<template>
<div>
    <el-row type="flex" class="row-bg" justify="space-around">
        <el-col :span="6">
    <p v-show="ok">{{ok}}</p>
            <el-radio label="You must have savings of more than a 100,000 shillings" v-model="radio" border>Employment</el-radio>
    <br><br>
            <el-radio label="You must have savings of more than a 400,000 shillings" v-model="radio" border>Family business</el-radio>
    <br><br>
            <el-radio label="You must have savings of more than a 700,000 shillings" v-model="radio" border>Self-employed</el-radio>
            <br><br>
            <el-button type="success" @click="subt()" round>Submit</el-button>

        </el-col>
        <el-col :span="6">
    <span id="cash">{{radio}}</span>
           </el-col>
        <br>


    </el-row>
</div>



</template>
<script>
    export default{
             name: 'requirement',
            data() {
                return {
                    ok:'What is your source of income',

                    radio:[
                    ],
                }
            },
        methods:{
            subt() {
                alert("we have received your details we will contact you on" + this.phonenumber);
            },
        },
        }

</script>
<style>
#cash{
    font-size: 40px;
    color: lightcoral;
}
</style>