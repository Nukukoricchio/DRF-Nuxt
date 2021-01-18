<template>
<div class="limiter">
  <div id="login-form" class="container-login100">
    <div class="wrap-login100 p-l-110 p-r-110 p-t-20 p-b-20">
      <form method="post" class="login100-form validate-form flex-sb flex-w" @submit.prevent="register">
        <span class="login100-form-title p-b-30">
          Sign Up
        </span>
        <div class="p-t-31 p-b-9">
          <span class="txt1">
            Email
          </span>
        </div>
        <div class="wrap-input100 validate-input" data-validate = "Username is required">
          <input class="input100" type="email" name="email" v-model="email" required >
          <span class="focus-input100"></span>
        </div>
        <div class="p-t-13 p-b-9">
          <span class="txt1">
            Password
          </span>
        </div>
        <div class="wrap-input100 validate-input" data-validate = "Password is required">
          <input class="input100" type="password" name="password" v-model="password" required >
          <span class="focus-input100"></span>
        </div>
        <div class="p-t-13 p-b-9">
          <span class="txt1">
            Password Repeat
          </span>
        </div>
        <div class="wrap-input100 validate-input" data-validate = "Password is required">
          <input class="input100" type="password" name="password" v-model="passwordRepeat" required >
          <span class="focus-input100"></span>
        </div>

        <div class="container-login100-form-btn m-t-17">
          <button class="login100-form-btn" type="submit">
            Sign Up
          </button>
        </div>

        <div class="w-full text-center p-t-55">
          <span class="txt2">
            Have account?
          </span>
          <nuxt-link to="/login" class="txt2 bo1">Sign In</nuxt-link>
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
      email: '',
      password: '',
      passwordRepeat: ''
    }
  },
  middleware: 'guest',
  methods: {
    validatePassword() {
      if (this.password !== this.passwordRepeat) {
        this.$toast.error('Password repeat is not correct!')
        return false
      }
      return true
    },
    async register() {
      if (this.validatePassword()) {
        try {
          let response = await this.$axios.post('user/register', {
            email: this.email,
            password: this.password
          })
          this.$toast.success(response.data.message)
          await this.$auth.loginWith('local', {
            data: {
              email: this.email,
              password: this.password
            }
          })
          this.$router.push('/')
          this.$toast.success(response.data.message)
        } catch (e) {
          if (e.response.data.email) {
            this.$toast.error(e.response.data.email)
          } else if (e.response.data.password) {
            this.$toast.error(e.response.data.password[0])
          }
        }
      }
    }
  }
}
</script>
