<template>
<div id='new'>
  <h1 v-if="display" v-bind:style="styleObject1"> <strong> House For Sale </strong></h1>
  <hr>
  <div class="content">
    <p v-bind:style="{style:font-size + 'px'}">We are a company that offer houses for varios reasons and they are: </p>
    <ol>
      <li v-for='house in types'>
        {{house.houses}}
      </li>
    </ol>
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
          <div class="large-6 cell">
            <label>Enter your full name:
                <input type="text" v-model="message" placeholder="Enter your full name">Hey {{message}}
              </label>
          </div>
          <div class="large-6 cell">
            <label>Enter your phone number:
                <input type="number" v-model.number="phonenumber" placeholder="Enter your phone number">
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
    <a class="button primary" v-on:click="subt()">Submit</a>
  </div>
</div>
</template>

<script>
export default {
  name: 'new',
  data() {
    return {
      styleObject1: {
        color: 'IndianRed',
        align: 'center'
      },
      types: [{
          houses: 'House for Rent'
        },
        {
          houses: 'House for Ownership'
        },
        {
          houses: 'House for Investment'
        }
      ],
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
