<template>
    <div>
        <div id="feedback">
            <div class="grid-x grid-margin-x">
                <div class="large-1 cell"></div>
                <div class="auto cell" >
                    <br> <p>Kindly give us a feedback</p> <br>
                    <input :value="msg" @keyup.enter="takemsg"> <br>
                    <span>{{message}}</span>
                    <span>{{msg}}</span>
                </div>



        </div>
    </div>
    </div>
</template>
<script>

export default{
    name: 'footercontent',
    props:[msg],
    data(){
        return{
            message:'',
//            handleMessage(message){
//                alert('handling' + message);
//            },
        }
    },
    methods:{
        takemsg(){
            this.$dispatch('custommsg',this.message);
        },

    },




}
</script>
<style>
   #feedback{
       background-color: cadetblue;
       height: 150px;
   }
</style>