<template>
  <div>
    <div class="row q-pt-md">
      <!-- <div>
        <span class="shade text-white text-center text-h4 q-pa-md">PROJECT One</span>
      </div> -->


      <div class="col-xs-12 col-sm-5 col-md-5">
        <div class="q-pa-lg">
          <div class="text-primary text-h4 text-bold"> Multipurpose Cooperative Society
          for Financial Stability </div>
          <section>
            <p>Join over 1000+ members with common economic interest to 
              create a support system for our businesses, families and communities. <br><br> </p>
              
              <div class="shader">
                <span class="text-bold"> Project ONE is Not a... <br></span>         
                - Network Marketing Platform. <br>
                - Business Opportunity.<br>
                - Loan or Grant Scheme.<br>
                <span class="text-bold text-primary"> ... IT IS SIMPLY A SUPPORT SYSTEM. </span>              
              </div>
          </section>

          <div class="text-center q-py-md">
            <q-btn no-caps to="/sign-up" class="q-mr-sm" color="primary" label="Create Free Account"/>
            <q-btn no-caps outline to="/how" class="q-mr-sm" color="primary" label="Learn More"/>
          </div>
        </div>
      </div>        
        
      <div class="col-xs-12 col-sm-7 col-md-7">
        <q-img
          src="images/hero.jpg"
          :ratio="16/9"
          spinner-color="primary"
          spinner-size="82px"
        />
      </div>
    </div> 

    <div class="q-px-lg q-pt-md text-center">
      <span class="text-h5 text-primary text-bold">You can take advantage of the platform to achieve the following:</span>
    </div>

<!-- F O U R  Cards -->
    <div class="q-pa-lg row items-start justify-center q-gutter-md">
      <q-card class="my-card">
        <img src="images/businesses.jpeg" style="height: 200px; width: 100%">

        <q-card-section>
          <div class="text-h6">Access Funds for Business</div>
          <div class="text-subtitle2 text-grey-7">Project ONE</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="images/house.jpeg" style="height: 200px; width: 100%">

        <q-card-section>
          <div class="text-h6">Building Project/ House Rent</div>
          <div class="text-subtitle2 text-grey-7">Project ONE</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="images/car.jpeg" style="height: 200px; width: 100%">

        <q-card-section>
          <div class="text-h6">Car Project</div>
          <div class="text-subtitle2 text-grey-7">Project ONE</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>

      <q-card class="my-card">
        <img src="images/school.jpeg" style="height: 200px; width: 100%">

        <q-card-section>
          <div class="text-h6">School Fees</div>
          <div class="text-subtitle2 text-grey-7">Project ONE</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          {{ lorem }}
        </q-card-section>
      </q-card>
    </div>

    <div class="text-center q-px-md q-py-md">
      <q-btn no-caps to="/how" class="q-mr-sm q-mb-sm" color="primary" label="How Project ONE works"/>
      <q-btn no-caps outline to="/sign-up" class="q-mr-sm q-mb-sm" color="primary" label="Create Free Account"/>      
    </div>

    <div class="q-px-lg q-pt-md text-center">
      <span class="text-h5 text-primary text-bold">Some testimonies from members</span>
    </div>

<!-- T E S T I M O N I E S  CARDS-->

    <div class="q-pa-md row justify-center items-start q-gutter-md">
      <q-card class="my-card bg-teal text-white" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="images/woman.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Sally Yohanna</q-item-label>
            <q-item-label caption>
              Business Woman
            </q-item-label>
          </q-item-section>
        </q-item>        

        <q-card-section horizontal>
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe 
            perspiciatis, esse quae ratione, porro maiores debitis corrupti 
            ducimus ipsam hic, obcaecati omnis. Sapiente, magni autem veniam 
            dolorum dolor vel dolore.
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="my-card bg-grey-7 text-white" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="images/man1.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Muhammadu Yusuf</q-item-label>
            <q-item-label caption>
              Banker
            </q-item-label>
          </q-item-section>
        </q-item>        

        <q-card-section horizontal>
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe 
            perspiciatis, esse quae ratione, porro maiores debitis corrupti 
            ducimus ipsam hic, obcaecati omnis. Sapiente, magni autem veniam 
            dolorum dolor vel dolore.
          </q-card-section>
        </q-card-section>
      </q-card>

      <q-card class="my-card bg-teal text-white" flat bordered>
        <q-item>
          <q-item-section avatar>
            <q-avatar>
              <img src="images/woman2.jpg">
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label>Judith Saleh</q-item-label>
            <q-item-label caption>
              Student
            </q-item-label>
          </q-item-section>
        </q-item>        

        <q-card-section horizontal>
          <q-card-section>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe 
            perspiciatis, esse quae ratione, porro maiores debitis corrupti 
            ducimus ipsam hic, obcaecati omnis. Sapiente, magni autem veniam 
            dolorum dolor vel dolore.
          </q-card-section>
        </q-card-section>
      </q-card>
      
            
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageIndex'
}
</script>

<style scoped>
  .shade{  
    text-align: center;
    padding: 10px;
    background-color: rgba(18, 19, 18, 0.562);
    border-radius: 15px 15px 15px 15px;
    margin-bottom: 5px;
    margin-right: 5px;
    transition: 0.4s;   
    margin: 15px; 
  }  
  .shader{  
    color: white;
    padding: 10px;    
    background-color: rgba(3, 109, 91, 0.562);
    border-radius: 0px 15px 0px 15px;
    margin-bottom: 5px;
    margin-right: 5px;
    transition: 0.4s;       
  } 

  .my-card{
    width: 100%;
    max-width: 350px;
  }
</style>