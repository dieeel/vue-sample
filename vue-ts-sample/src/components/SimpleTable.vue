<template>
    <v-table theme="dark">
        <thead>
            <tr>
                <th v-for="(label, key) in header" :key="key">{{ label }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(item, index) in items" :key="item.no">
                <td v-for="(label, key) in header" :key="'td'+key+item.no">{{item[key]}}</td>
            </tr>
        </tbody>
    </v-table>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const header = ref({
    no:'No',
    name:'Name',
    email:'E-Mail'
})
const items = ref([
    {no:1, name:'Daiki', email:'daiki@hoge.net'},
    {no:2, name:'Naoki', email:'naoki@hoge.net'},
    {no:3, name:'Yuki', email:'yuki@hoge.net'},
    {no:4, name:'Aoi', email:'aoi@hoge.net'},
])
</script>
