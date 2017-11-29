<template>
    <div>
        <div id="categories">
            <slot name="categories"></slot>
            <div class="grid-x grid-margin-x">
                <div class="large-1 cell"></div>
                <div class="auto cell">
                    <h2>Rent</h2>
                    <ul v-for="house in rentDiscounts "  v-bind:key="rentHouses.length">
                        <li>{{ house.name }}</li>
                        <li>{{ house.location}}</li>
                        <li>{{ house.Price }}</li>

                    </ul>
                    <button  @click="changeChoice()">click me to change</button>
                </div>
                <div class="auto cell">
                    <h2>Ownership</h2>
                    <ul v-for="house in ownDiscounts " v-bind:key="ownHouses.length">
                        <li>{{ house.name }}</li>
                        <li>{{ house.location}}</li>
                        <li>{{ house.Price }}</li>
                    </ul>
                </div>
                <div class="auto cell">
                    <h2>Investments</h2>
                    <ul v-for="house in investDiscounts " v-bind:key="ownHouses.length">
                        <li>{{ house.name }}</li>
                        <li>{{ house.location}}</li>
                        <li>{{ house.Price }}</li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>
<script>
    export default{
        computed:{
       rentHouses(){
           return this.$store.state.rentHouses
       },
            ownHouses(){
                return this.$store.state.ownHouses
            },
            investHouses(){
                return this.$store.state.investHouses
            },
            rentDiscounts(){
                return this.$store.getters.rentDiscounts
            },
            ownDiscounts(){
                return this.$store.getters.ownDiscounts
            },
            investDiscounts(){
                return this.$store.getters.investDiscounts
            }

        },
        name: 'category',
        data (){
            return{

            }
        }
    }
</script>
<style scoped>
    #categories{
        background-color: cadetblue;
    }
</style>