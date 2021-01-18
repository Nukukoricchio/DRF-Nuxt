<template>
  <section class="section">
    {{ message }}
    olalalal
  </section>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      message: ''
    }
  },
  mounted() {
    this.test()
  },
  methods: {
    async test() {
      let response = await this.$axios.get('user/protect')
      this.message = response.data.user
      console.log(this.message)
    }
  }
}
</script>