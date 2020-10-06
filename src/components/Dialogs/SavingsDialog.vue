<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Update Fields -->
            <div class="text-weight-light text-center text-h6 text-primary">
                Save to OneChest
            </div>

            <q-input v-model="project" name="project" label="Project Name?"/>
            <q-input v-model="amount" name="amount" label="How Much?"/>
            <q-select v-model="debit" :options="debitOptions" label="Select Account to Debit:"/>
            
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-primary">
            <q-btn no-caps color="primary" label="Continue" v-close-popup />
          </q-card-actions>
        </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{  
                project: null,              
                amount: null,  
                debit: null,
                debitOptions: ['Bank Acount', 'Wallet']
            }
        }
        
    }
</script>

<style scoped>

</style>