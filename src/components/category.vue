<template>
    <div>
        <div id="categories">
            <slot name="categories"></slot>
            <div class="grid-x grid-margin-x">
                <div class="large-1 cell"></div>
                <div class="auto cell">
                    <h2>Rent</h2>
                    <ul v-for="house in rentHouses "  v-bind:key="rentHouses.length">
                        <li>{{ house.name }}</li>
                        <li>{{ house.location}}</li>
                        <li>{{ house.Price }}</li>

                    </ul>
                    <button  @click="changeChoice()">click me to change</button>
                </div>
                <div class="auto cell">
                    <h2>Ownership</h2>
                    <ul v-for="house in ownHouses " v-bind:key="ownHouses.length">
                        <li>{{ house.name }}</li>
                        <li>{{ house.location}}</li>
                        <li>{{ house.Price }}</li>
                    </ul>
                </div>
                <div class="auto cell">
                    <h2>Investments</h2>
                    <ul v-for="house in investHouses " v-bind:key="ownHouses.length">
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
        name: 'category',
        data (){
            return{
                rentHouses: [
                    {
                        name: 'alma',
                        location: 'westlands',
                        Price:'50454534 shillings'
                    },
                    {
                        name: 'Juja apartments',
                        location: 'Juja',
                        Price:'2 million'
                    }
                ],

                ownHouses: [
                    {
                        name:'Thika gardens',
                        location:'Thika ',
                        Price:'15000000 shillings'
                    },
                    {
                        name:'lavington heights',
                        location:'Lavington',
                        Price:'20500000 shillings'
                    },
                ],

                investHouses: [
                    {
                        name:'kahawa condos',
                        location:'kahawa west',
                        Price:'500000 shillings'
                    },
                    {
                        name:'Riara mansions',
                        location:'Riara roadside',
                        Price:'800000 shillings'
                    },
                ],
            }
        }
    }
</script>
<style scoped>
    #categories{
        background-color: cadetblue;
    }
</style>