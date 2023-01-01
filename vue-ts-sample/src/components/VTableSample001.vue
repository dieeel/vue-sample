<script setup lang="ts">
import { VueGoodTable } from 'vue-good-table';
import { ref } from 'vue';

const columns = ref([
    {
        label: 'Name',
        field: 'name',
    },
    {
        label: 'Age',
        field: 'age',
        type: 'number',
    },
    {
        label: 'Created On',
        field: 'createdAt',
        type: 'date',
        dateInputFormat: 'yyyy-MM-dd',
        dateOutputFormat: 'MMM do yy',
    },
    {
        label: 'Percent',
        field: 'score',
        type: 'percentage',
    },
]);

const rows = ref([
    { name:"John", age: 20, createdAt: '', score: 0.03343 },
    { name:"Jane", age: 24, createdAt: '2011-10-31', score: 0.03343 },
    { name:"Susan", age: 16, createdAt: '2011-10-30', score: 0.03343 },
    { name:"Chris", age: 55, createdAt: '2011-10-11', score: 0.03343 },
    { name:"Dan", age: 40, createdAt: '2011-10-21', score: 0.03343 },
    { name:"John", age: 20, createdAt: '2011-10-31', score: 0.03343 },
]);
</script>

<template>
    <vue-good-table :columns="columns" :rows="rows" />
</template>
