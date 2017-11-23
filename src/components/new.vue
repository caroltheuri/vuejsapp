<template>
<div id='new'>
  <h1 v-if="display" :style="styleObject1"> <strong> House For Sale </strong></h1>
  <hr>
  <div class="content">
    <p v-bind:style="{style:font-size + 'px'}">We are a company that offer houses for various reasons and they are: </p>
    <ol>
      <li v-for='house in types'>
        {{house.houses}}
      </li>
    </ol>
      <!--  -->
  </div>
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
  <div id="images">
    <div class="card" style="width: 300px;">
      <img src="../assets/investment.jpeg">
      <div class="card-section">
        <p>This house is for rent. (1)</p>
      </div>
    </div>
    <div class="card" style="width: 300px;">
      <img src="../assets/ownership.jpeg">
      <div class="card-section">
        <p>This house is for ownership. (2)</p>
      </div>
    </div>
    <div class="card" style="width: 300px;">
      <img src="../assets/rent.jpeg">
      <div class="card-section">
        <p>This house is for investment. (3)</p>
      </div>
    </div>
  </div>
  <div id="form">
    <form>
      <div class="grid-container">
        <div class="grid-x grid-padding-x">
          <div class="large-6 cell" >
            <label>Enter your full name:
                <input type="text" v-model="message" placeholder="Enter your full name">Hey {{message}}

              </label>
              {{ reversedMessage }}
          </div>
          <div class="large-6 cell">
            <label>Enter your phone number:
                <input type="number" v-model.number="phonenumber" placeholder="Enter your phone number" v-on:keyup.enter="confirm()">
              </label>
          </div>
        </div>
      </div>
    </form>

    <h2>Select the purpose of the house below</h2>
    <select v-model="selected" id="options">
      <option v-for="choice in choices" v-bind:value="choice.value">
       {{choice.number}}
      </option>
    </select>
      <p v-show="ok">{{ok}}</p>
      <input type="radio" id="one" value="first" v-model="picked">
      <label for="one">Employment</label>
      <br>
      <input type="radio" id="two" value="second" v-model="picked2">
      <label for="two">Family business</label><br>
      <input type="radio" id="three" value="third" v-model="picked3">
      <label for="three">Self-employed</label>
      <br>

      <p v-if="showEmploymentMessage"></p>
      <p v-if-else="showFamilyMessage"></p>
      <!--<p v-else="showSelfMessage"></p>-->
      <p>You must have an income</p>
      <span>Picked: {{ picked }}</span>
      <span>Picked: {{ picked2}}</span>
      <span>Picked: {{ picked3 }}</span>

    <a class="button primary" @click="subt()">Submit</a>
  </div>


</div>
  <!--<div>-->
    <!--<p>How would you rate us?</p>-->
    <!--<span v-for="x in 10">{{n}}</span>-->
  <!--</div>-->



</template>

<script>
export default {
  name: 'new',
  data() {
    return {
        showEmploymentMessage : false,
        showFamilyMessage: false,
        showSelfMessage: false,

      styleObject1: {
        color: 'IndianRed',
        align: 'center'
      },
      types: [{
          houses: 'House for Rent',

        },
        {
          houses: 'House for Ownership',
        },
        {
          houses: 'House for Investment',
        }
      ],

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
        ok:'What is your source of income',
        message: '',
      phonenumber: '',
      display: true,
      selected: "1",
      choices: [{
          number: 'Rent',
          value: '1'

        },
        {
          number: 'Ownership',
          value: '2'
        },
        {
          number: 'Investment',
          value: '3'
        }
      ]
    }


  },
  methods: {
    subt: function() {
      alert("we have received your details we will contact you on" + this.phonenumber);
    },
      confirm: function(){
        alert("Are you sure this is your number");
      },
    changeChoice :function(){
       vue.set(this.types.houses, 1, 'mortgage');
    },

    picked:function(){
        picked: 'You must have an income';
        picked2: 'You must have an income 22';
        picked3:'You must have an income33';

    }
  },
    computed: {

        reversedMessage: function () {
            return this.message + " How are you?"
        }
    }
}
</script>
<style lang="css">
h1{
    text-align:center;

}
.content {
    margin-left: 10%;
}
#images{
height:50%;
width:50%;
margin-left: 20%;

}
#form{
  margin-left:10%;
}
#option{
  padding-right:30%;

}
</style>
