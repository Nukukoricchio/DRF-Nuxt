<template>
<div class="limiter">
  <div id="login-form" class="container-login100">
    <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
      <form method="post" class="login100-form validate-form flex-sb flex-w" @submit.prevent="sendEmail">
        <div class="p-t-13 p-b-9">
          <span class="txt1">
            Enter your email:
          </span>
        </div>
       <div class="wrap-input100 validate-input" data-validate = "Username is required">
          <input class="input100" type="email" v-model="email" required >
          <span class="focus-input100"></span>
        </div>
        <div class="container-login100-form-btn m-t-17">
          <button class="login100-form-btn" type="submit">
            Send email
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      email: ''
    }
  },
  middleware: 'guest',
  methods: {
    async sendEmail () {
      try {
        const credentials = {
          email: this.email
        }
        let response = await this.$axios.post('user/password_reset/', credentials)
        if (response.data.status === 'OK') 
          this.$toast.info('We have already send information to your email. Please check!')
      } catch (e) {
        this.$toast.error('Email is not valid!')
      }
    }
  }
}
</script>
<style>
</style>