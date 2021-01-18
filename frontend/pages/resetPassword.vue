<template>
<div class="limiter">
  <div id="login-form" class="container-login100">
    <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
      <form method="post" class="login100-form validate-form flex-sb flex-w" @submit.prevent="resetPassword">
        <div class="p-t-13 p-b-9">
          <span class="txt1">
            New Password
          </span>
        </div>
        <div class="wrap-input100 validate-input">
          <input class="input100" type="password" v-model="newPassword" required >
          <span class="focus-input100"></span>
        </div>
        <div class="p-t-13 p-b-9">
          <span class="txt1">
            Repeat New Password
          </span>
        </div>
        <div class="wrap-input100 validate-input">
          <input class="input100" type="password" v-model="newPasswordRepeat" required >
          <span class="focus-input100"></span>
        </div>

        <div class="container-login100-form-btn m-t-17">
          <button class="login100-form-btn" type="submit">
            Reset Password
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
      newPassword: '',
      newPasswordRepeat: ''
    }
  },
  middleware: 'guest',
  methods: {
    validatePassword() {
      if (this.newPassword !== this.newPasswordRepeat) {
        this.$toast.error('New password repeat is not correct!')
        return false
      }
      return true
    },
    async resetPassword() {
      if (this.validatePassword()) {
        try {
          const token = window.location.href.split('=')[1]
          const credentials = {
            password: this.newPassword,
            token: token
          }
          let postUrl = 'user/password_reset/confirm/?token=' + token
          let response = await this.$axios.post(postUrl, credentials)
          if (response.data.status == 'OK') this.$toast.success('Reset passsword successfully!')
          this.$router.push('/login')
        } catch (e) {
          if (e.response.data.password) this.$toast.error(e.response.data.password[0])
        }
      }
    }
  }
}
</script>
<style>
</style>