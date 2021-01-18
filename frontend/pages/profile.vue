<template>
  <div class="limiter">
    <div id="login-form" class="container-login100">
      <div class="wrap-login100 p-l-110 p-r-110 p-t-20 p-b-20">
        <form method="post" class="login100-form validate-form flex-sb flex-w" @submit.prevent="register">
          <span class="login100-form-title p-b-30">
            Profile
          </span>
          <div>
            <span class="txt1">
              Email:
            </span>
            {{ user }}
          </div>
          <div class="w-full text-center p-t-55">
            <span class="txt2">
              Wanna change password?
            </span>
            <nuxt-link to="/changepassword" class="txt2 bo1">Click</nuxt-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  middleware: ['auth'],
  data() {
    return {
      email: ''
    }
  },
  computed: {
    ...mapState('auth', ['user'])
  }
}
</script>
<style>
</style>