<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Update Fields -->
            <div class="text-weight-light text-center text-h6 text-primary">
                Wallet TopUp
            </div>

            <q-input v-model="amount" name="amount" label="How Much?"/>
            <q-input v-model="phoneNo" type="number" name="phoneNo" label="Phone Number:"/>
            <q-input v-model="email" name="email" label="Email:"/>
            <q-input v-model="bankName" name="bankName" label="Bank Name:"/>
            <q-input v-model="accountNo" type="number" name="accountNo" label="Account Number:"/>
            <span class="text-primary text-center"><small>Your Wallet will be credited from this Account.</small></span>
            
          </q-card-section>

          <q-card-actions align="right" class="bg-white text-primary">
            <q-btn color="primary" label="Save" v-close-popup />
          </q-card-actions>
        </q-card>
    </div>
</template>

<script>
    export default {
        data(){
            return{  
                amount: null,              
                phoneNo: "08066558899",
                email: "test@gmail.com",
                bankName: "GT Bank",
                accountNo: "0025866987",
            }
        }
        
    }
</script>

<style scoped>

</style>