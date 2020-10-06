<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>

        <!-- <a href="/"><img src="images/logo.png" style=" max-width: 60px; padding-top: 5px;"></a> -->

        <q-toolbar-title class="text-white">
          <router-link to="/" tag="span" style="cursor: pointer"> PROJECT One </router-link>
        </q-toolbar-title>

        <q-space/>

        <q-btn
          class="button"
          flat
          dense
          round
          color="white"
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        
        <q-btn no-caps flat class="gt-xs row" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <div class="column q-mr-md">
            <q-item-label>{{link.label}}</q-item-label>
          </div>
        </q-btn>  

      </q-toolbar>
    </q-header>

    <q-footer>
      <div class="text-center bg-grey-10">
        <div class="text-secondary">PROJECT One</div>        
        <div class="text-grey-6">Copyright 2020</div>                        
        <div class="text-grey-6">Greysoft Technologies</div>                        
      </div>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      :width="250"
      content-class="bg-primary"
    >
      <q-list>
        <q-item-label header class="text-white text-h5 text-weight-light">
          PROJECT One
        </q-item-label>

        <q-item class="text-grey-5" v-for="link in essentialLinks" :key="link.id" :to="link.to" exact clickable>
          <q-item-section avatar>
            <q-icon :name="link.icon"></q-icon>
          </q-item-section>

          <q-item-section>
            <q-item-label>{{link.label}}</q-item-label>
          </q-item-section>
        </q-item>

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MainLayout',

  data () {
    return {
      leftDrawerOpen: false,

      essentialLinks: [
        {
          label: 'Home',
          icon: 'home',
          to: '/'
        },
        {
          label: 'Profile',
          icon: 'person',
          to: '/profile'
        },        
        {
          label: 'How it works',
          icon: 'list',
          to: '/how'
        },
        {
          label: 'Contact Us',
          icon: 'phone',
          to: '/contact'
        },
      ]      
    }
  }
}
</script>

<style scoped>
@media (min-width: 600px){
  .button{
    display: none
  }
}

@media (max-width: 600px){
  #breadcrumbs{
    display: none
  }

  .toolbar-title{
    display: none
  }
}

.q-router-link--exact-active{
  color: white !important;
}

.fixed-bottom{
  position:absolute;
}

a{
    text-decoration: none;     
}

</style>