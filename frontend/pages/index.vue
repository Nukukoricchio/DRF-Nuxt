<template>
  <div>
    <!-- <div class="preloader">
      <div class="lds-ripple">
        <div></div>
        <div></div>
      </div>
    </div> -->
    <!-- /.preloader -->
    <div class="page-wrapper">
      <Header />
      
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

      <section class="service-one" id="features">
        <div class="container">
          <div class="block-title text-center">
            <span class="block-title__bubbles"></span>
            <p>Checkout App Features</p>
            <h3>The Only App You’ll Need</h3>
          </div>
          <!-- /.block-title -->
          <div class="row">
            <div
              class="service-one__col wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="000ms"
            >
              <div class="service-one__single">
                <i class="zimed-icon-responsive"></i>
                <h3>Free Setup</h3>
              </div>
              <!-- /.service-one__single -->
            </div>
            <!-- /.service-one__col -->
            <div
              class="service-one__col wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="100ms"
            >
              <div class="service-one__single">
                <i class="zimed-icon-computer-graphic"></i>
                <h3>Quick Access</h3>
              </div>
              <!-- /.service-one__single -->
            </div>
            <!-- /.service-one__col -->
            <div
              class="service-one__col wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="200ms"
            >
              <div class="service-one__single">
                <i class="zimed-icon-development1"></i>
                <h3>Manage Users</h3>
              </div>
              <!-- /.service-one__single -->
            </div>
            <!-- /.service-one__col -->
            <div
              class="service-one__col wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="300ms"
            >
              <div class="service-one__single">
                <i class="zimed-icon-development"></i>
                <h3>Fully Secured</h3>
              </div>
              <!-- /.service-one__single -->
            </div>
            <!-- /.service-one__col -->
            <div
              class="service-one__col wow fadeInUp"
              data-wow-duration="1500ms"
              data-wow-delay="400ms"
            >
              <div class="service-one__single">
                <i class="zimed-icon-development"></i>
                <h3>Daily Update</h3>
              </div>
              <!-- /.service-one__single -->
            </div>
            <!-- /.service-one__col -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /.service-one -->

      <div class="cta-three">
        <img
          :src="require('~/assets/images/shapes/cta-1-shape-2.png')"
          alt=""
          class="cta-three__shape-2"
        />
        <img
          :src="require('~/assets/images/shapes/cta-1-shape-3.png')"
          alt=""
          class="cta-three__shape-3"
        />
        <div class="container">
          <img
            :src="require('~/assets/images/shapes/cta-1-shape-1.png')"
            alt=""
            class="cta-three__shape-1"
          />
          <img
            :src="require('~/assets/images/mocs/cta-moc-1-1.png')"
            alt=""
            class="cta-three__moc"
          />
          <div class="row justify-content-end">
            <div class="col-lg-6">
              <div class="cta-three__content">
                <div class="block-title text-left">
                  <span class="block-title__bubbles"></span>
                  <p>Checkout App Features</p>
                  <h3>Control Everything From One Application</h3>
                </div>
                <!-- /.block-title -->
                <div class="cta-three__box-wrap">
                  <div class="cta-three__box">
                    <div class="cta-three__box-icon">
                      <i class="zimed-icon-strategy"></i>
                    </div>
                    <!-- /.cta-three__box-icon -->
                    <div class="cta-three__box-content">
                      <h3>Feature Here</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor anagi icdunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                    <!-- /.cta-three__box-content -->
                  </div>
                  <!-- /.cta-three__box -->
                  <div class="cta-three__box">
                    <div class="cta-three__box-icon">
                      <i class="zimed-icon-training"></i>
                    </div>
                    <!-- /.cta-three__box-icon -->
                    <div class="cta-three__box-content">
                      <h3>Feature Here</h3>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor anagi icdunt ut labore et
                        dolore magna aliqua.
                      </p>
                    </div>
                    <!-- /.cta-three__box-content -->
                  </div>
                  <!-- /.cta-three__box -->
                </div>
                <!-- /.cta-three__box-wrap -->
                <a href="#" class="thm-btn cta-three__btn">Discover More</a
                ><!-- /.thm-btn cta-three__btn -->
              </div>
              <!-- /.cta-three__content -->
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </div>
      <!-- /.cta-three -->

      <section class="cta-two">
        <img
          :src="require('assets/images/shapes/cta-2-shape-1.png')"
          alt=""
          class="cta-two__shape-1"
        />
        <img
          :src="require('assets/images/shapes/cta-2-shape-2.png')"
          alt=""
          class="cta-two__shape-2"
        />
        <div class="container">
          <img
            :src="require('assets/images/shapes/cta-2-shape-3.png')"
            alt=""
            class="cta-two__shape-3"
          />
          <img
            :src="require('assets/images/mocs/cta-moc-2-1.png')"
            alt=""
            class="cta-two__moc"
          />
          <div class="row">
            <div class="col-xl-5 col-lg-6">
              <div class="cta-two__content">
                <div class="block-title text-left">
                  <span class="block-title__bubbles"></span>
                  <p>Checkout App Features</p>
                  <h3>Discover the Powerful Tools For Your Repeat Customers</h3>
                </div>
                <!-- /.block-title -->
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry when an unknown printer took a galley of
                  type and scrambled it to make. Lorem ipsum dolor sit amet,
                  consectetur adipisicing elit.
                </p>
                <a href="#" class="thm-btn cta-two__btn">Discover More</a
                ><!-- /.thm-btn cta-two__btn -->
              </div>
              <!-- /.cta-two__content -->
            </div>
            <!-- /.col-lg-5 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /.cta-two -->

      <section class="video-one">
        <div class="container">
          <div class="video-one__box wow fadeInUp" data-wow-duration="1500ms">
            <img
              :src="require('~/assets/images/resources/video-1-1.jpg')"
              alt=""
            />
            <div class="video-one__content">
              <a
                href="https://www.youtube.com/watch?v=aitb---aDYM"
                class="video-popup"
                ><i class="fa fa-play"></i
              ></a>
              <h3>Watch Our Video</h3>
            </div>
          </div>
        </div>
      </section>

      <section class="funfact-one">
        <img
          :src="require('~/assets/images/shapes/pricing-shape-1.png')"
          alt=""
          class="funfact-one__shape-1"
        />
        <img
          :src="require('~/assets/images/shapes/pricing-shape-2.png')"
          alt=""
          class="funfact-one__shape-2"
        />
        <img
          :src="require('~/assets/images/shapes/pricing-shape-3.png')"
          alt=""
          class="funfact-one__shape-3"
        />

        <div class="container">
          <div class="row">
            <div class="col-lg-3 col-md-6">
              <div class="funfact-one__single">
                <h3 class="counter">7842</h3>
                <p>Downloads</p>
              </div>
              <!-- /.funfact-one__single -->
            </div>
            <!-- /.col-lg-3 -->
            <div class="col-lg-3 col-md-6">
              <div class="funfact-one__single">
                <h3 class="counter">6020</h3>
                <p>Likes</p>
              </div>
              <!-- /.funfact-one__single -->
            </div>
            <!-- /.col-lg-3 -->
            <div class="col-lg-3 col-md-6">
              <div class="funfact-one__single">
                <h3 class="counter">360</h3>
                <p>5 Star Rating</p>
              </div>
              <!-- /.funfact-one__single -->
            </div>
            <!-- /.col-lg-3 -->
            <div class="col-lg-3 col-md-6">
              <div class="funfact-one__single">
                <h3 class="counter">200</h3>
                <p>Awards</p>
              </div>
              <!-- /.funfact-one__single -->
            </div>
            <!-- /.col-lg-3 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /.funfact-one -->

      <section class="pricing-one" id="pricing">
        <div class="container">
          <div class="pricing-one__sep"></div>
          <!-- /.pricing-one__sep -->
          <div class="block-title text-center">
            <span class="block-title__bubbles"></span>
            <p>Our Pricing Tables</p>
            <h3>Choose Pricing Plans</h3>
          </div>
          <!-- /.block-title -->
          <ul
            class="list-inline text-center switch-toggler-list"
            role="tablist"
            id="switch-toggle-tab"
          >
            <li class="month active"><a href="#">Monthly</a></li>
            <li>
              <!-- Rounded switch -->
              <label class="switch on">
                <span class="slider round"></span>
              </label>
            </li>
            <li class="year"><a href="#">Yearly</a></li>
          </ul>
          <!-- /.list-inline -->
          <div class="tabed-content">
            <div id="month">
              <div class="row">
                <div class="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
                  <div class="pricing-one__single">
                    <div class="pricing-one__inner">
                      <img
                        :src="
                          require('~/assets/images/shapes/pricing-line-1-1.png')
                        "
                        alt=""
                        class="pricing-one__line"
                      />
                      <img
                        :src="
                          require('~/assets/images/shapes/pricing-icon-1-1.png')
                        "
                        alt=""
                        class="pricing-one__icon"
                      />
                      <h3>$20.00</h3>
                      <p>Basic Pack</p>
                      <ul class="list-unstyled pricing-one__list">
                        <li><i class="fa fa-check"></i> Extra features</li>
                        <li>
                          <i class="fa fa-check"></i> Lifetime free support
                        </li>
                        <li><i class="fa fa-check"></i> Upgrate options</li>
                        <li><i class="fa fa-check"></i> Full access</li>
                      </ul>
                      <!-- /.list-unstyled pricing-one__list -->
                      <a href="#" class="thm-btn pricing-one__btn"
                        >Get Started</a
                      ><!-- /.thm-btn -->
                      <span>Get a Free Trial</span>
                    </div>
                    <!-- /.pricing-one__inner -->
                  </div>
                  <!-- /.pricing-one__single -->
                </div>
                <!-- /.col-lg-4 -->
                <div class="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                  <div class="pricing-one__single">
                    <div class="pricing-one__inner">
                      <img
                        :src="
                          require('assets/images/shapes/pricing-line-1-1.png')
                        "
                        alt=""
                        class="pricing-one__line"
                      />
                      <img
                        :src="
                          require('assets/images/shapes/pricing-icon-1-2.png')
                        "
                        alt=""
                        class="pricing-one__icon"
                      />
                      <h3>$30.00</h3>
                      <p>Standard Pack</p>
                      <ul class="list-unstyled pricing-one__list">
                        <li><i class="fa fa-check"></i> Extra features</li>
                        <li>
                          <i class="fa fa-check"></i> Lifetime free support
                        </li>
                        <li><i class="fa fa-check"></i> Upgrate options</li>
                        <li><i class="fa fa-check"></i> Full access</li>
                      </ul>
                      <!-- /.list-unstyled pricing-one__list -->
                      <a href="#" class="thm-btn pricing-one__btn"
                        >Get Started</a
                      ><!-- /.thm-btn -->
                      <span>Get a Free Trial</span>
                    </div>
                    <!-- /.pricing-one__inner -->
                  </div>
                  <!-- /.pricing-one__single -->
                </div>
                <!-- /.col-lg-4 -->
                <div
                  class="col-lg-4 wow fadeInRight"
                  data-wow-duration="1500ms"
                >
                  <div class="pricing-one__single">
                    <div class="pricing-one__inner">
                      <img
                        :src="
                          require('assets/images/shapes/pricing-line-1-1.png')
                        "
                        alt=""
                        class="pricing-one__line"
                      />
                      <img
                        :src="
                          require('assets/images/shapes/pricing-icon-1-3.png')
                        "
                        alt=""
                        class="pricing-one__icon"
                      />
                      <h3>$40.00</h3>
                      <p>Ultimate Pack</p>
                      <ul class="list-unstyled pricing-one__list">
                        <li><i class="fa fa-check"></i> Extra features</li>
                        <li>
                          <i class="fa fa-check"></i> Lifetime free support
                        </li>
                        <li><i class="fa fa-check"></i> Upgrate options</li>
                        <li><i class="fa fa-check"></i> Full access</li>
                      </ul>
                      <!-- /.list-unstyled pricing-one__list -->
                      <a href="#" class="thm-btn pricing-one__btn"
                        >Get Started</a
                      ><!-- /.thm-btn -->
                      <span>Get a Free Trial</span>
                    </div>
                    <!-- /.pricing-one__inner -->
                  </div>
                  <!-- /.pricing-one__single -->
                </div>
                <!-- /.col-lg-4 -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /#month -->
            <div id="year">
              <div class="row">
                <div class="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
                  <div class="pricing-one__single">
                    <div class="pricing-one__inner">
                      <img
                        :src="
                          require('assets/images/shapes/pricing-line-1-1.png')
                        "
                        alt=""
                        class="pricing-one__line"
                      />
                      <img
                        :src="
                          require('assets/images/shapes/pricing-icon-1-1.png')
                        "
                        alt=""
                        class="pricing-one__icon"
                      />
                      <h3>$99.00</h3>
                      <p>Basic Pack</p>
                      <ul class="list-unstyled pricing-one__list">
                        <li><i class="fa fa-check"></i> Extra features</li>
                        <li>
                          <i class="fa fa-check"></i> Lifetime free support
                        </li>
                        <li><i class="fa fa-check"></i> Upgrate options</li>
                        <li><i class="fa fa-check"></i> Full access</li>
                      </ul>
                      <!-- /.list-unstyled pricing-one__list -->
                      <a href="#" class="thm-btn pricing-one__btn"
                        >Get Started</a
                      ><!-- /.thm-btn -->
                      <span>Get a Free Trial</span>
                    </div>
                    <!-- /.pricing-one__inner -->
                  </div>
                  <!-- /.pricing-one__single -->
                </div>
                <!-- /.col-lg-4 -->
                <div class="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
                  <div class="pricing-one__single">
                    <div class="pricing-one__inner">
                      <img
                        :src="
                          require('assets/images/shapes/pricing-line-1-1.png')
                        "
                        alt=""
                        class="pricing-one__line"
                      />
                      <img
                        :src="
                          require('assets/images/shapes/pricing-icon-1-2.png')
                        "
                        alt=""
                        class="pricing-one__icon"
                      />
                      <h3>$199.00</h3>
                      <p>Standard Pack</p>
                      <ul class="list-unstyled pricing-one__list">
                        <li><i class="fa fa-check"></i> Extra features</li>
                        <li>
                          <i class="fa fa-check"></i> Lifetime free support
                        </li>
                        <li><i class="fa fa-check"></i> Upgrate options</li>
                        <li><i class="fa fa-check"></i> Full access</li>
                      </ul>
                      <!-- /.list-unstyled pricing-one__list -->
                      <a href="#" class="thm-btn pricing-one__btn"
                        >Get Started</a
                      ><!-- /.thm-btn -->
                      <span>Get a Free Trial</span>
                    </div>
                    <!-- /.pricing-one__inner -->
                  </div>
                  <!-- /.pricing-one__single -->
                </div>
                <!-- /.col-lg-4 -->
                <div
                  class="col-lg-4 wow fadeInRight"
                  data-wow-duration="1500ms"
                >
                  <div class="pricing-one__single">
                    <div class="pricing-one__inner">
                      <img
                        :src="
                          require('assets/images/shapes/pricing-line-1-1.png')
                        "
                        alt=""
                        class="pricing-one__line"
                      />
                      <img
                        :src="
                          require('assets/images/shapes/pricing-icon-1-3.png')
                        "
                        alt=""
                        class="pricing-one__icon"
                      />
                      <h3>$299.00</h3>
                      <p>Ultimate Pack</p>
                      <ul class="list-unstyled pricing-one__list">
                        <li><i class="fa fa-check"></i> Extra features</li>
                        <li>
                          <i class="fa fa-check"></i> Lifetime free support
                        </li>
                        <li><i class="fa fa-check"></i> Upgrate options</li>
                        <li><i class="fa fa-check"></i> Full access</li>
                      </ul>
                      <!-- /.list-unstyled pricing-one__list -->
                      <a href="#" class="thm-btn pricing-one__btn"
                        >Get Started</a
                      ><!-- /.thm-btn -->
                      <span>Get a Free Trial</span>
                    </div>
                    <!-- /.pricing-one__inner -->
                  </div>
                  <!-- /.pricing-one__single -->
                </div>
                <!-- /.col-lg-4 -->
              </div>
              <!-- /.row -->
            </div>
            <!-- /#year -->
          </div>
          <!-- /.tabed-content -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /.pricing-one -->

      <section class="app-shot-one" id="app-shots">
        <img
          :src="require('assets/images/shapes/contact-shape-3.png')"
          alt=""
          class="app-shot__shape-1"
        />
        <img
          :src="require('assets/images/shapes/contact-shape-2.png')"
          alt=""
          class="app-shot__shape-2"
        />

        <div class="container-fluid">
          <div class="block-title text-center">
            <span class="block-title__bubbles"></span>
            <p>Checkout App Interface</p>
            <h3>App Screenshots</h3>
          </div>
          <!-- /.block-title -->
          <div
            class="app-shot-one__carousel thm__owl-carousel owl-theme owl-carousel"
            data-options='{ "loop": true, "margin": 43, "nav": false, "dots": true, "autoWidth": false, "autoplay": true, "smartSpeed": 700, "autoplayTimeout": 5000, "autoplayHoverPause": true, "slideBy": 5, "responsive": { "0": { "items": 1 }, "480": { "items": 2 }, "600": { "items": 3 }, "991": { "items": 4 }, "1000": { "items": 5 }, "1200": { "items": 5 } } }'
          >
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-1.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-2.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-3.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-4.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-5.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-1.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-2.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-3.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
            <div class="item">
              <img
                :src="require('assets/images/app-shots/app-shot-1-4.jpg')"
                alt=""
              />
            </div>
            <!-- /.item -->
          </div>
          <!-- /.app-shot-one__carousel owl-theme owl-carousel -->
        </div>
        <!-- /.container-fluid -->
      </section>
      <!-- /.app-shot-one -->

      <section class="blog-one blog-one__home" id="blog">
        <img
          :src="require('~/assets/images/shapes/blog-shape-1-1.png')"
          alt=""
          class="blog-one__shape-1"
        />
        <div class="container">
          <div class="block-title text-center">
            <span class="block-title__bubbles"></span>
            <p>Checkout Latest Posts</p>
            <h3>News & Articles</h3>
          </div>
          <!-- /.block-title -->
          <div class="row">
            <div class="col-lg-4 wow fadeInLeft" data-wow-duration="1500ms">
              <div class="blog-one__single">
                <div class="blog-one__image">
                  <img
                    :src="require('~/assets/images/blog/blog-1-1.jpg')"
                    alt=""
                  />
                </div>
                <!-- /.blog-one__image -->
                <div class="blog-one__content">
                  <ul class="blog-one__meta list-unstyled">
                    <li>
                      <a href="#"><i class="far fa-clock"></i> 20 Feb</a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
                    </li>
                  </ul>
                  <!-- /.blog-one__meta list-unstyled -->
                  <h3>
                    <a href="blog-details.html"
                      >Pre and post launch mobile app marketing pitfalls to
                      avoid</a
                    >
                  </h3>
                  <a href="blog-details.html" class="blog-one__link"
                    ><i class="zimed-icon-right-arrow"></i
                  ></a>
                  <!-- /.blog-one__link -->
                </div>
                <!-- /.blog-one__content -->
              </div>
              <!-- /.blog-one__single -->
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4 wow fadeInUp" data-wow-duration="1500ms">
              <div class="blog-one__single">
                <div class="blog-one__image">
                  <img
                    :src="require('~/assets/images/blog/blog-1-2.jpg')"
                    alt=""
                  />
                </div>
                <!-- /.blog-one__image -->
                <div class="blog-one__content">
                  <ul class="blog-one__meta list-unstyled">
                    <li>
                      <a href="#"><i class="far fa-clock"></i> 20 Feb</a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
                    </li>
                  </ul>
                  <!-- /.blog-one__meta list-unstyled -->
                  <h3>
                    <a href="blog-details.html"
                      >It is all exactly as i said, but i don't like it let's
                      unpack that</a
                    >
                  </h3>
                  <a href="blog-details.html" class="blog-one__link"
                    ><i class="zimed-icon-right-arrow"></i
                  ></a>
                  <!-- /.blog-one__link -->
                </div>
                <!-- /.blog-one__content -->
              </div>
              <!-- /.blog-one__single -->
            </div>
            <!-- /.col-lg-4 -->
            <div class="col-lg-4 wow fadeInRight" data-wow-duration="1500ms">
              <div class="blog-one__single">
                <div class="blog-one__image">
                  <img
                    :src="require('~/assets/images/blog/blog-1-3.jpg')"
                    alt=""
                  />
                </div>
                <!-- /.blog-one__image -->
                <div class="blog-one__content">
                  <ul class="blog-one__meta list-unstyled">
                    <li>
                      <a href="#"><i class="far fa-clock"></i> 20 Feb</a>
                    </li>
                    <li>
                      <a href="#"><i class="far fa-comments"></i> 2 Comments</a>
                    </li>
                  </ul>
                  <!-- /.blog-one__meta list-unstyled -->
                  <h3>
                    <a href="blog-details.html"
                      >I just wanted to give you a heads-up, or this you feel
                      you would</a
                    >
                  </h3>
                  <a href="blog-details.html" class="blog-one__link"
                    ><i class="zimed-icon-right-arrow"></i
                  ></a>
                  <!-- /.blog-one__link -->
                </div>
                <!-- /.blog-one__content -->
              </div>
              <!-- /.blog-one__single -->
            </div>
            <!-- /.col-lg-4 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /.blog-one -->

      <section class="contact-one" id="contact">
        <img
          :src="require('~/assets/images/shapes/contact-shape-1.png')"
          alt=""
          class="contact-one__shape-1"
        />
        <img
          :src="require('~/assets/images/shapes/contact-shape-2.png')"
          alt=""
          class="contact-one__shape-2"
        />
        <img
          :src="require('~/assets/images/shapes/contact-shape-3.png')"
          alt=""
          class="contact-one__shape-3"
        />
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <div class="contact-one__content">
                <div class="contact-one__images">
                  <img
                    :src="require('~/assets/images/resources/contact-1.jpg')"
                    class="wow fadeInUp"
                    data-wow-duration="1500ms"
                    alt=""
                  />
                  <img
                    :src="require('~/assets/images/resources/contact-2.jpg')"
                    class="wow fadeInUp"
                    data-wow-duration="1500ms"
                    alt=""
                  />
                </div>
                <!-- /.contact-one__images -->
                <div class="contact-one__infos">
                  <div class="contact-one__infos-single">
                    <div class="contact-one__infos-icon">
                      <i class="zimed-icon-placeholder"></i>
                    </div>
                    <!-- /.contact-one__infos-icon -->
                    <div class="contact-one__infos-content">
                      <h3>Addresss</h3>
                      <p>
                        20 Broklyn Street, New York. United States of <br />
                        America
                      </p>
                    </div>
                    <!-- /.contact-one__infos-content -->
                  </div>
                  <!-- /.contact-one__infos-single -->
                  <div class="contact-one__infos-single">
                    <div class="contact-one__infos-icon">
                      <i class="zimed-icon-message"></i>
                    </div>
                    <!-- /.contact-one__infos-icon -->
                    <div class="contact-one__infos-content">
                      <h3>Email</h3>
                      <p>
                        <a href="mailto:needhelp@zimed.com"
                          >needhelp@zimed.com</a
                        >
                      </p>
                    </div>
                    <!-- /.contact-one__infos-content -->
                  </div>
                  <!-- /.contact-one__infos-single -->
                  <div class="contact-one__infos-single">
                    <div class="contact-one__infos-icon">
                      <i class="zimed-icon-phone-call"></i>
                    </div>
                    <!-- /.contact-one__infos-icon -->
                    <div class="contact-one__infos-content">
                      <h3>Phone</h3>
                      <p><a href="tel:666-888-0000">666 888 0000</a></p>
                    </div>
                    <!-- /.contact-one__infos-content -->
                  </div>
                  <!-- /.contact-one__infos-single -->
                </div>
                <!-- /.contact-one__infos -->
              </div>
              <!-- /.contact-one__content -->
            </div>
            <!-- /.col-lg-6 -->
            <div class="col-lg-6">
              <div class="contact-one__form-wrap">
                <div class="block-title">
                  <span class="block-title__bubbles"></span>
                  <p>Contact Us Now</p>
                  <h3>Write a Message</h3>
                </div>
                <!-- /.block-title -->
                <form
                  action="assets/inc/sendemail.php"
                  class="contact-form-validated contact-one__form"
                >
                  <div class="row">
                    <div class="col-md-6">
                      <input type="text" name="name" placeholder="Name" />
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6">
                      <input type="text" name="email" placeholder="Email" />
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6">
                      <input type="text" name="subject" placeholder="Subject" />
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-6">
                      <select name="discuss" class="selectpicker">
                        <option value="">Discussion For</option>
                        <option value="">Free Trial</option>
                        <option value="">Busniess Inquery</option>
                      </select>
                    </div>
                    <!-- /.col-md-6 -->
                    <div class="col-md-12">
                      <textarea name="message" placeholder="Message"></textarea>
                      <button
                        type="submit"
                        class="thm-btn contact-one__form-btn"
                      >
                        Send Message
                      </button>
                    </div>
                    <!-- /.col-md-12 -->
                  </div>
                  <!-- /.row -->
                </form>
                <!-- /.contact-one__form -->
                <div class="result"></div>
                <!-- /.result -->
              </div>
              <!-- /.contact-one__form-wrap -->
            </div>
            <!-- /.col-lg-6 -->
          </div>
          <!-- /.row -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /.contact-one -->

      <section class="cta-one">
        <div class="container">
          <div class="cta-one__circle-1"></div>
          <!-- /.cta-one__circle-1 -->
          <div class="cta-one__circle-2"></div>
          <!-- /.cta-one__circle-2 -->
          <div class="cta-one__circle-3"></div>
          <!-- /.cta-one__circle-3 -->
          <div class="cta-one__content text-center">
            <h3>
              Download our App Today & <br />
              Experience Endless Possibilities
            </h3>
            <p>and get started with a free 1 month trial for your business</p>
            <a href="#" class="thm-btn cta-one__btn">Download Our App</a
            ><!-- /.thm-btn cta-one__btn -->
          </div>
          <!-- /.cta-one__content -->
        </div>
        <!-- /.container -->
      </section>
      <!-- /.cta-one -->

      <footer class="site-footer">
        <img
          :src="require('~/assets/images/shapes/footer-shape-1.png')"
          class="site-footer__shape-1"
          alt=""
        />
        <img
          :src="require('~/assets/images/shapes/footer-shape-2.png')"
          class="site-footer__shape-2"
          alt=""
        />
        <img
          :src="require('~/assets/images/shapes/footer-shape-3.png')"
          class="site-footer__shape-3"
          alt=""
        />
        <div class="site-footer__upper">
          <div class="container">
            <div class="row">
              <div class="col-lg-4">
                <div class="footer-widget footer-widget__about">
                  <a class="footer-widget__logo" href="index.html">
                    <img
                      :src="require('assets/images/logo-1-1.png')"
                      width="105"
                      alt="Awesome Image"
                    />
                  </a>
                  <p>
                    Lorem Ipsum is simply dummy text the printing and setting
                    industry. Lorm Ipsum has been the industry's stanard dummy
                    text ever.
                  </p>
                  <p>
                    <a href="mailto:needhelp@zimed.com">needhelp@zimed.com</a>
                    <br />
                    <a href="tel:666-888-0000">666 888 0000</a>
                  </p>
                </div>
                <!-- /.footer-widget -->
              </div>
              <!-- /.col-lg-4 -->
              <div class="col-lg-4">
                <div class="footer-widget footer-widget__links">
                  <h3 class="footer-widget__title">Explore</h3>
                  <div class="footer-widget__links-wrap">
                    <ul class="list-unstyled">
                      <li><a href="#">About us</a></li>
                      <li><a href="#">Our Team</a></li>
                      <li><a href="#">All Features</a></li>
                      <li><a href="#">Our Services</a></li>
                      <li><a href="#">Latest Blog</a></li>
                    </ul>
                    <!-- /.list-unstyled -->
                    <ul class="list-unstyled">
                      <li><a href="#">Help</a></li>
                      <li><a href="#">Support</a></li>
                      <li><a href="#">Contact us</a></li>
                      <li><a href="#">Privacy Policy</a></li>
                      <li><a href="#">Terms & Condition</a></li>
                    </ul>
                    <!-- /.list-unstyled -->
                  </div>
                  <!-- /.footer-widget__links-wrap -->
                </div>
                <!-- /.footer-widget footer-widget__links -->
              </div>
              <!-- /.col-lg-4 -->
              <div class="col-lg-4">
                <div class="footer-widget footer-widget__subscribe">
                  <h3 class="footer-widget__title">Subscribe</h3>
                  <form
                    class="footer-widget__mc-form mc-form"
                    data-url="MAILCHIMP__POPUP__FORM__URL"
                  >
                    <input
                      type="text"
                      name="email"
                      placeholder="Email address"
                    />
                    <button type="submit" class="thm-btn footer-widget__mc-btn">
                      Register Now
                    </button>
                  </form>
                  <div class="mc-form__response"></div>
                  <!-- /.mc-form__response -->
                </div>
                <!-- /.footer-widget footer-widget__subscribe -->
              </div>
              <!-- /.col-lg-4 -->
            </div>
            <!-- /.row -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.site-footer__upper -->
        <div class="site-footer__bottom">
          <div class="container">
            <div class="inner-container">
              <div class="site-footer__social">
                <a class="fab fa-facebook-f" href="#"></a>
                <a class="fab fa-twitter" href="#"></a>
                <a class="fab fa-instagram" href="#"></a>
                <a class="fab fa-pinterest-p" href="#"></a>
              </div>
              <!-- /.site-footer__social -->
              <p>© copyright 2020 by Layerdrops.com</p>
            </div>
            <!-- /.inner-container -->
          </div>
          <!-- /.container -->
        </div>
        <!-- /.site-footer__bottom -->
      </footer>
      <!-- /.site-footer -->
    </div>
    <!-- /.page-wrapper -->
    <a href="#" data-target="html" class="scroll-to-target scroll-to-top">
      <i class="fa fa-angle-up"></i>
    </a>

    <div class="side-menu__block">
      <div class="side-menu__block-overlay custom-cursor__overlay">
        <div class="cursor"></div>
        <div class="cursor-follower"></div>
      </div>
      <!-- /.side-menu__block-overlay -->
      <div class="side-menu__block-inner ">
        <div class="side-menu__top justify-content-end">
          <a href="#" class="side-menu__toggler side-menu__close-btn">
            <img :src="require('assets/images/shapes/close-1-1.png')" alt="" />
          </a>
        </div>
        <!-- /.side-menu__top -->

        <nav class="mobile-nav__container">
          <!-- content is loading via js -->
        </nav>
        <div class="side-menu__sep"></div>
        <!-- /.side-menu__sep -->
        <div class="side-menu__content">
          <p>
            Lorem Ipsum is simply dummy text the printing and setting industry.
            Lorm Ipsum has been the industry's stanard dummy text ever.
          </p>
          <p>
            <a href="mailto:needhelp@zimed.com">needhelp@zimed.com</a> <br />
            <a href="tel:888-999-0000">888 999 0000</a>
          </p>
          <div class="side-menu__social">
            <a class="fab fa-facebook-f" href="#"></a>
            <a class="fab fa-twitter" href="#"></a>
            <a class="fab fa-instagram" href="#"></a>
            <a class="fab fa-pinterest-p" href="#"> </a>
          </div>
        </div>
        <!-- /.side-menu__content -->
      </div>
      <!-- /.side-menu__block-inner -->
    </div>
  </div>
</template>

<script>
import Header from '~/components/home/Header.vue'
// import Banner from '~/components/home/Banner.vue'

export default {
  components: {
    Header
  //   Banner
  }
};
</script>

<style></style>
