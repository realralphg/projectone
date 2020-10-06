<template>
  <div class="q-pa-sm row justify-center">
    <div class="q-gutter-md" style="max-width: 500px">
        <div class="q-pt-lg text-weight-light text-h4 text-primary" >
            Sign Up Form
        </div>
      <form @submit.prevent="onSignUp">
          <q-input v-model="email" name="email" label="Email"/>
          <q-input v-model="password" type="password" name="password" label="Password" />
          <q-input v-model="confirmPassword" type="password" name="confirmPassword" label="Confirm Password" />
          <small class="text-red">{{comparePasswords}}</small>

        <q-space/>
        <div class="q-mt-sm row justify-right">
            <q-btn type="submit" no-caps color="primary" :disabled="!formIsValid"  >Sign Up</q-btn>
        </div>
      </form>
    </div>

      <div class="text-primary text-center q-pa-md">
        <span>Please Update Profile Details as soon as registration is complete.</span>
      </div>
  </div>
</template>

<script>

export default {

  name: 'SignUp',
  data () {
    return {
      email: '',
      password: '',
      confirmPassword: ''
    }
  },

  computed: {
    formIsValid () {
      return this.email !== '' &&
            this.password !== '' &&
            this.confirmPassword !== ''
    },

    comparePasswords () {
      return this.password !== this.confirmPassword ? 'Password Mismatch' : ''
    }
  },

  methods: {
    onSignUp () {
      this.$router.push("/profile")
    }
  }

}
</script>

<style scoped>

</style>
