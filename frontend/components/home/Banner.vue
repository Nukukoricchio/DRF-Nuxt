<template>
  <section class="banner-one" id="banner">
    <img
      :src="require('~/assets/images/shapes/banner-shapes-1-1.png')"
      alt=""
      class="banner-one__shape-1"
    />
    <img
      :src="require('~/assets/images/shapes/banner-shapes-1-2.png')"
      alt=""
      class="banner-one__shape-2"
    />

    <img
      :src="require('~/assets/images/shapes/banner-shapes-1-4.png')"
      alt=""
      class="banner-one__shape-4"
    />
    <img
      :src="require('assets/images/shapes/banner-shapes-1-5.png')"
      alt=""
      class="banner-one__shape-5"
    />
    <img
      :src="require('~/assets/images/shapes/banner-shapes-1-6.png')"
      alt=""
      class="banner-one__shape-6"
    />
    <img
      :src="require('~/assets/images/shapes/banner-shapes-1-7.png')"
      alt=""
      class="banner-one__shape-7"
    />

    <div class="container">
      <img
        :src="require('~/assets/images/shapes/banner-shapes-1-3.png')"
        alt=""
        class="banner-one__shape-moc-1"
      />
      <img
        :src="require('~/assets/images/mocs/banner-moc-1-1.png')"
        alt=""
        class="banner-one__moc"
      />
      <div class="row">
        <div class="col-lg-7">
          <div class="banner-one__content">
            <p class="banner-one__tag-line">
              Welcome to SEO Business <a href="#">free trial</a>
            </p>
            <h3>
              We help achieve <br />
              biggest goals
            </h3>
            <p>
              We are committed to providing our customers with exceptional
              service <br />
              while offering our employees the best training.
            </p>
            <a
              href="#contact"
              data-target="#contact"
              class="thm-btn banner-one__btn scroll-to-target"
              >Get Started</a
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>
<style></style>
