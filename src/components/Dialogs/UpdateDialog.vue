<template>
    <div>
        <q-card style="width: 300px">
          <q-card-section class="q-pt-none">
            <!-- Update Fields -->
            <div class="text-weight-light text-center text-h6 text-primary">
                Update Details
            </div>

            <q-input v-model="firstName" name="firstName" label="First Name:"/>
            <q-input v-model="lastName" name="lastName" label="Last Name:"/>
            <q-input v-model="phoneNo" type="number" name="phoneNo" label="Phone Number:"/>
            <q-input v-model="email" name="email" label="Email:"/>
            <q-input v-model="address" name="address" label="Address:"/>
            <q-input v-model="bankName" name="bankName" label="Bank Name:"/>
            <q-input v-model="accountNo" type="number" name="accountNo" label="Account Number:"/>
            <span class="text-primary text-center"><small>This Account is registered for all transactions. </small></span>
            
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
                firstName: "Steve",
                lastName: "Anonymous",
                phoneNo: null,
                email: null,
                Address: null,
                bankName: null,
                accountNo: null,
            }
        }
        
    }
</script>

<style scoped>

</style>