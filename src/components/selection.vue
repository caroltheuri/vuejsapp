<template>
    <div>
        <div class="grid-x grid-margin-x">
            <div class="large-1 cell"></div>
            <div class="auto cell">
                <el-select v-model="value" id="options">
                    <el-option v-for="choice in choices"
                               :key="choice.value"
                               :label="choice.label"
                               :value="choice.value"
                    >
                    </el-option>
                </el-select>
    </div>
            <div class="auto cell">
                <el-date-picker size="large"
                        v-model="value1"
                        type="date"
                        placeholder="Pick a day">
                </el-date-picker>
            </div>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'selection',
        data(){
            return{
                display: true,
                choices: [{
                    value: 'Rent',
                    label: 'Rent'

                },
                    {
                        value: 'Ownership',
                        label: 'Ownership'
                    },
                    {
                        value: 'Investment',
                        label: 'Investment'
                    }],
                    value:'',
                value1: '',
            }
        }
    }
</script>
<style></style>