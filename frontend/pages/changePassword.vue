<template>
<div class="limiter">
  <div id="login-form" class="container-login100">
    <div class="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
      <form method="post" class="login100-form validate-form flex-sb flex-w" @submit.prevent="changePassword">
        <span class="login100-form-title p-b-10">
          Profile
        </span>
        <div class="p-t-31 p-b-9">
          <span class="txt1">
            Old Password
          </span>
        </div>
        <div class="wrap-input100 validate-input">
          <input class="input100" type="password" v-model="oldPassword" required >
          <span class="focus-input100"></span>
        </div>
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
            Change Password
          </button>
        </div>
      </form>
    </div>
  </div>
</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data () {
    return {
      oldPassword: '',
      newPassword: '',
      newPasswordRepeat: ''
    }
  },
  middleware: ['auth'],
  computed: {
    ...mapState('auth', ['user'])
  },
  methods: {
    validatePassword() {
      if (this.newPassword !== this.newPasswordRepeat) {
        this.$toast.error('New Password repeat is not correct!')
        return false
      }
      return true
    },
    async changePassword() {
      if (this.validatePassword()) {
        try {
          const credentials = {
            old_password: this.oldPassword,
            new_password: this.newPassword
          }
          let response = await this.$axios.put('user/change_password', credentials)
          this.$router.push('/')
          this.$toast.success(response.data.message)
        } catch (e) {
          if (e.response.data.new_password) {
            this.$toast.error(e.response.data.new_password[0])
          } else if (e.response.data.old_password) {
            this.$toast.error(e.response.data.old_password)
          }
        }
      }
    }
  }
}
</script>
<style>
</style>