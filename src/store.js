import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);
export const store = new Vuex.Store({
    state: {
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
});