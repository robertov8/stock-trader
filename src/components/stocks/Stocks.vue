<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
    import Stock from './Stock';
    
    export default {
        name: 'Stocks',
        computed: {
            stocks() {
                return this.$store.getters.stocks;
            }
        },
        components: { Stock }
    };
</script>

<style scoped>

</style>