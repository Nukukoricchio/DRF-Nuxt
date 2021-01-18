<template>
  <header class="main-nav__header-one ">
    <nav class="header-navigation stricky">
      <div class="container">
        <div class="main-nav__logo-box">
          <a href="index.html" class="main-nav__logo">
            <img :src="require('~/assets/images/logo-1-1.png')" width="105" alt="Awesome Image" />
          </a>
          <a href="#" class="side-menu__toggler">
            <i class="fa fa-bars"></i>
          </a>
        </div>
        <div class="main-nav__main-navigation">
          <ul class="one-page-scroll-menu main-nav__navigation-box">
            <li class="current scrollToLink">
              <a href="#">Home</a>
            </li>
            <li class="scrollToLink">
              <a href="#">Features</a>
            </li>
            <li class="scrollToLink">
              <a href="#">Pricing</a>
            </li>
            <li class="scrollToLink">
              <nuxt-link to="/app">App</nuxt-link>
            </li>
            <!-- <li class="scrollToLink">
              <nuxt-link to="/protect">Protected</nuxt-link>
            </li> -->
            <li class="dropdown scrollToLink">
              <a href="#">Blog</a>
              <ul>
                <li><a href="#">Blog Page</a></li>
                <li><a href="#">Blog Details</a></li>
              </ul>
            </li>
            <li class="scrollToLink" v-if="loggedIn">
              <nuxt-link to="/profile">Profile</nuxt-link>
            </li>
          </ul>
        </div>
        <div class="main-nav__right">
          <span class="thm-btn header__btn scroll-to-target" @click="logout" v-if="loggedIn">
            Logout
          </span>
          <nuxt-link class="thm-btn header__btn scroll-to-target" to='/login' v-else>
            LogIn
          </nuxt-link>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState('auth', ['loggedIn', 'user'])
  },
  methods: {
    async logout () {
      await this.$auth.logout()
    }
  }
}
</script>
<style>
</style>
