<template>
    <div>
        <slot name="formdetails"></slot>
        <form>
            <div class="grid-x grid-margin-x">
                <div class="large-1 cell"></div>
                <div class="auto cell" >
                    <label>Enter your full name:
                        <input type="text" v-model="message" placeholder="Enter your full name">Hey {{greeting}}

                    </label>

                </div>
                <div class="auto cell">
                    <label>Enter your phone number:
                        <input type="number" v-model.number="phonenumber" placeholder="Enter your phone number" v-on:keyup.enter="confirm">
                    </label>
                </div>

            </div>
        </form>
    </div>
</template>
<script>
    var myMixin={
        methods:{
            confirm (){
                alert("Are you sure this is your number");
            },
        }
        }

    export default{
        name: 'forminput',
        data (){
            return{
                message: '',
                phonenumber: '',

            }
        },
        mixins:[myMixin],

        computed: {
            greeting: function () {
                return this.message + " How are you?"
            }
        },
    }
</script>
<style>

</style>