<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
    
        <v-sheet color="primary" :elevation="6" class="pa-2">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">Você pode Salvar & Carregar os Dados</span>
        </v-sheet>
    
        <v-sheet color="success" :elevation="6" class="pa-2 mt-3 darken-1">
            <v-icon class="white--text mr-3">info</v-icon>
            <span class="headline white--text font-weight-light">Click em 'Finalizar Dia' para iniciar um novo dia!</span>
        </v-sheet>
        
        <v-divider class="my-4" />
        
        <p class="display-1"><strong>Seu Saldo: </strong> {{ funds }}</p>
    </div>
</template>

<script>
    export default {
        name: 'Home',
        computed: {
            funds() {
                return this.$store.getters.funds;
            }
        }
    };
</script>

<style scoped>

</style>