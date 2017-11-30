<template>
    <div>
        <div id="feedback">
            <div class="grid-x grid-margin-x">
                <div class="large-1 cell"></div>
                <div class="auto cell" >
                    <br> <p>Kindly give us a feedback</p> <br>
                    <el-input type="textarea" @keyup.enter="response()"  :autosize="{ minRows: 2, maxRows: 3}"> </el-input><br>
                    <span>{{message}}</span>
                </div>



        </div>
    </div>
    </div>
</template>
<script>

export default{
    name: 'footercontent',
    props:['message'],

    data(){
        return{


        }
    },
    methods:{
        response(){
          alert("thankyou we will put your feedback into consideration")
        },
        takemsg(){
            this.$dispatch('custommsg',this.message);
        },

    },




}
</script>
<style>
   #feedback{
       font-size: 20px;
       background-color: cadetblue;
       height: 300px;
       padding: 30px;
   }
</style>