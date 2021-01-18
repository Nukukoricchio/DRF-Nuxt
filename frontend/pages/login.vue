<template>
<div class="limiter">
  <div id="login-form" class="container-login100">
    <div class="wrap-login100 p-l-110 p-r-110 p-t-20 p-b-20">
      <form method="post" class="login100-form validate-form flex-sb flex-w" @submit.prevent="login">
        <span class="login100-form-title p-b-53">
          Sign In With
        </span>
        <button type="button" class="btn-face m-b-20" @click.stop="loginWithFacebook">
          <i class="fab fa-facebook"></i>
          Facebook
        </button>
        <button class="btn-google m-b-20" @click.stop="loginWithGoogle" type="button">
          <img :src="require('~/static/vendor/images/icon-google.png')" alt="GOOGLE">
          Google
        </button>
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
          <nuxt-link to="/forgetpassword" class="txt2 bo1 m-l-5">
            Forgot?
          </nuxt-link>
        </div>
        <div class="wrap-input100 validate-input" data-validate = "Password is required">
          <input class="input100" type="password" name="password" v-model="password" required >
          <span class="focus-input100"></span>
        </div>
        <div class="container-login100-form-btn m-t-17">
          <button class="login100-form-btn" type="submit">
            Sign In
          </button>
        </div>
        <div class="w-full text-center p-t-55">
          <span class="txt2">
            Not a member?
          </span>
          <nuxt-link class="txt2 bo1" to="/signup">Sign Up</nuxt-link>
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
      password: ''
    }
  },
  middleware: 'guest',
  methods: {
    async login () {
      let date = new Date()
      date.setTime(date.getTime() + (7 * 24 * 60* 60 * 1000))
      let expires = date.toUTCString()
      document.cookie = "auth.strategy=local; expires=" + expires + "; path=/"
      localStorage.setItem('auth.strategy', 'local')
      try {
        const credentials = {
          email: this.email,
          password: this.password
        }
        const response = await this.$axios.post('auth/token', credentials)
        await this.$auth.setToken('local', 'Bearer ' + response.data.access)
        await this.$auth.setRefreshToken('local', response.data.refresh)
        this.$axios.setHeader('Authorization', 'Bearer ' + response.access)
        await this.$auth.setUserToken(response.data.access)
        location.reload()
        //this.$router.push('/')
      } catch (e) {
        this.$toast.error('Username or Password not valid!')
      }
    },
    async loginWithGoogle () {
      try {
        await this.$auth.loginWith('google')
        this.$router.push('/')
      } catch(e) {
        console.log(e.response.data)
      }
    },
    async loginWithFacebook() {
      await this.$auth.loginWith('facebook')
    }
  }
}
</script>
