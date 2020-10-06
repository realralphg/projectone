<template>
    <div class="q-pa-sm row items-start q-gutter-sm justify-center bg-grey-7">
        <q-card class="my-card">
            <q-img src='images/dollar3.jpg' />

            <q-card-section>
                <div class="row text-weight-light">
                    <div class="col-6">
                        <span class="text-h5">Hi Steve,</span> <br>
                        <span>(P-00035-PL)</span>
                    </div>
                    <div class="text-right col-6 q-pt-sm">
                        <span>Wallet: #{{wallet}} </span> <br>
                        <span>OneChest: #{{onechest}} </span>
                    </div>                    
                </div>

                <div class="q-pt-lg">
                    <div class="row justify-center">                        
                        <q-btn no-caps rounded color="primary" @click="updateDialog=true" label="Update Profile" />
                    </div>

                    <div class="row justify-center q-mt-lg">
                        <div class="click col-4 text-center">
                            <q-icon @click="contributions=true" name="money" size="30px" color="primary"/> <br>
                            <span>Contributions</span><br>
                            <small>(Wallet)</small>
                        </div>
                        <div class="click col-4 text-center">
                            <q-icon @click="savings=true" name="credit_card" size="30px" color="primary"/><br>
                            <span>Savings</span><br>
                            <small>(OneChest)</small>
                        </div>
                         <div class="click col-4 text-center">
                             <q-icon @click="airtime=true" name="smartphone" size="30px" color="primary"/><br>
                             <span>Airtime/Data</span><br>
                             <small>(Mobile)</small>
                        </div>                                                
                    </div>                   
                </div>
            </q-card-section>

            <q-card-section class="q-pt-none text-center">
                <q-knob
                :min="1"
                :max="60"                
                :step="10"
                v-model="value"
                show-value
                size="150px"
                :thickness="0.18"
                color="primary"
                track-color="lime-3"
                class="text-lime q-ma-md"
                />
            </q-card-section>

            <q-separator color="grey" />

            <q-card-actions>
                <q-space/>                
                <q-btn no-caps @click="topup=true" color="primary"> Topup Wallet </q-btn>                
                <q-btn no-caps @click="withdraw=true" outline color="primary"> Withdraw </q-btn>                
            </q-card-actions>
        </q-card>

        <!-- Dialogs -->
        <q-dialog v-model="updateDialog">
            <UpdateDialog/>
        </q-dialog>

        <q-dialog v-model="topup">
            <TopupDialog />
        </q-dialog>

        <q-dialog v-model="withdraw">
            <WithdrawDialog />
        </q-dialog>

        <q-dialog v-model="contributions">
            <ContributionsDialog />
        </q-dialog>

        <q-dialog v-model="savings">
            <SavingsDialog />
        </q-dialog>

        <q-dialog v-model="airtime">
            <AirtimeDialog />
        </q-dialog>                
    </div>
</template>

<script>
import UpdateDialog  from '../components/Dialogs/UpdateDialog'
import TopupDialog  from '../components/Dialogs/TopupDialog'
import WithdrawDialog  from '../components/Dialogs/WithdrawDialog'
import ContributionsDialog  from '../components/Dialogs/ContributionsDialog'
import SavingsDialog  from '../components/Dialogs/SavingsDialog'
import AirtimeDialog  from '../components/Dialogs/AirtimeDialog'
    export default {
        components: {
            UpdateDialog,
            TopupDialog,
            WithdrawDialog,
            ContributionsDialog,
            SavingsDialog,
            AirtimeDialog   
        },

        data(){
            return{
                wallet: 150000,
                onechest: 20000,
                value: 53,
                stars: 4,
                vipStatus: '',
                updateDialog: false,
                withdraw: false,
                topup: false,
                contributions: false,
                savings: false,
                airtime: false,
            }
        },

        computed: {
          
        },

    }
</script>

<style scoped>
.my-card{
    width: 100%;
    max-width: 400px;
    
}

.click{
    cursor: pointer;
}

</style>
