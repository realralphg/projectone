<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Update Fields -->
            <div class="text-weight-light text-center text-h6 text-primary">
                Make New Contribution
               <br> <span> <small> Wallet: #{{wallet}} </small></span> 
            </div>
        
            <q-select v-model="slot" :options="slotOptions" label="Select Slot:"/>
            
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
                wallet: 150000,
                project: null,              
                amount: null,  
                slot: null,
                slotOptions: ['1slot = 15,000', '2slots = 30,000', '3slots = 45,000']
            }
        }
        
    }
</script>

<style scoped>

</style>