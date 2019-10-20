<template>
    <v-layout row wrap>
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock" />
    </v-layout>
</template>

<script>
    import { mapGetters } from 'vuex';
    import Stock from './Stock';
    
    export default {
        name: 'Portfolio',
        computed: {
            ...mapGetters({ stocks: 'stockPortfolio' })
        },
        components: { Stock }
    };
</script>

<style scoped>

</style>