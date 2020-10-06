<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Update Fields -->
            <div class="text-weight-light text-center text-h6 text-primary">
                Airtime & Data Bundle
            </div>

            <q-select v-model="category" :options="categoryOptions" label="Select Category:"/>
            <q-select v-model="network" :options="networkOptions" label="Select a Network:"/>
            <q-input v-model="amount" type="number" label="Amount:"/>            
            <q-input v-model="phoneNo" type="number" label="Phone Number:"/>            

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
                category: null,
                categoryOptions: ['Airtime', 'Data'],
                network: null,                
                networkOptions: ['MTN', 'Etisalat', 'GLo', 'Airtel'], 
                amount: null,             
                phoneNo: null,                
            }
        }
        
    }
</script>

<style scoped>

</style>