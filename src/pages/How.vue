<template>
    <div class="bg-grey-4">
        <div class="q-pa-md row justify-center q-gutter-md">
            <q-card class="my-card">
                <img src="images/women.jpeg" style="max-width: 650px" >

                <q-card-section>
                    <div class="text-h5 text-primary">At Project ONE, our most important asset is you. <br> </div>
                    <span class="text-bold"> Your Success is our committment.</span>                    
                </q-card-section>

                <div class="text-center">
                    <span class="text-weight-light text-h5">Become a member of our formidable Support System <br> 
                    Here's how it works!</span>
                </div>

                <q-card-section>                                                          
                    <ul>
                        <li>Sign Up to register. You will automatically be given a unique UserID.</li>
                        <li>Update your profile completely with Contact and Bank details. You will be assigned a Relationship Manager.</li>
                        <li>Members pay a minimum recurring contribution of ₦15,000 or More (multiples of ₦15,000) NON REFUNDABLE from their registered Bank Account via the app.</li>
                        <li>In two months, you are credited ₦50,000 for every multiple of ₦15,000 contributed. i.e. ₦100,000 for ₦30,000 contribution.</li>
                        <li>As part of our policy, You are expected to Re-Contribute immediately you are credited.</li>
                        <li>You cannot contribute less than your last contribution.</li>
                        <li>You can withdraw into your registered Bank Account once credited.</li>
                        <li>Your wallet cannot be empty - You must leave at least 20% of funds credited. xxx</li>
                        <li>That's it! You will have more than enough to undertake whatever project you engage.</li>
                    </ul>

                    <div class="text-center q-px-md q-py-md">                    
                        <q-btn no-caps to="/sign-up" class="q-mr-sm q-mb-sm" color="primary" label="Become A Member"/>      
                    </div>                  
                </q-card-section>

                <div class="text-center">
                    <span class="text-weight-light text-primary text-h5">What's more?...</span>
                </div>

                <q-card-section>                                                          
                    <ul>
                        <li>You can commit to controlled savings for specific projects in your <span class="text-bold">OneChest.</span></li>
                        <li>You can recharge on airtime and buy mobile data.</li>                                             
                    </ul>               
                </q-card-section>

            </q-card>        
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.my-card{
    width: 100%;
    max-width: 650px;
}

a{
    text-decoration: none;
    color: #520131;        
}

</style>