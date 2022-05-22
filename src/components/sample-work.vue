<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">نمونه کارها</h4>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> نمونه کارها </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="card">
            <div class="body">
              <div class="bootstrap snippet">
                <section class="gray-bg list-group">
                  <div class="categories">
                    <ul
                      class="nav nav-pills mb-3"
                      id="pills-tab"
                      role="tablist"
                    >
                      <li class="nav-item">
                        <a
                          class="nav-link active"
                          id="pills-home-tab"
                          data-toggle="pill"
                          href="#pills-home"
                          role="tab"
                          aria-controls="pills-home"
                          aria-selected="true"
                        >
                          همه دسته بندی ها
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="pills-profile-tab"
                          data-toggle="pill"
                          href="#pills-profile"
                          role="tab"
                          aria-controls="pills-profile"
                          aria-selected="false"
                          ref="web"
                          @click="web"
                        >
                          طراحی وب
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="pills-contact-tab"
                          data-toggle="pill"
                          href="#pills-contact"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                          ref="app"
                          @click="app"
                        >
                          برنامه ها
                        </a>
                      </li>
                      <li class="nav-item">
                        <a
                          class="nav-link"
                          id="pills-contact-tab"
                          data-toggle="pill"
                          href="#pills-contact"
                          role="tab"
                          aria-controls="pills-contact"
                          aria-selected="false"
                          ref="psd"
                        >
                          پی اس دی
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="projects-container scrollimation">
                    <div class="row">
                      <article
                        class="col-md-4 col-sm-6 portfolio-item web-design"
                      >
                        <div class="portfolio-thumb in">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post4.jpg"
                              alt="post4"
                              class="img-responsive img-center"
                            />
                            <span class="project-title"> عنوان1 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="enlarge">
                            <i class="fa fa-expand fa-fw"></i>
                          </a>
                          <a href="#" class="link">
                            <i class="fa fa-eye fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article class="col-md-4 col-sm-6 portfolio-item">
                        <div class="portfolio-thumb in" ref="webportfolio2">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post5.jpg"
                              alt="post5"
                              class="img-responsive img-center"
                              ref="imgweb2"
                            />
                            <span class="project-title"> عنوان 2 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="link centered">
                            <i class="fa fa-eye fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article class="col-md-4 col-sm-6 portfolio-item">
                        <div class="portfolio-thumb in" ref="webportfolio3">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post6.jpg"
                              alt="post6"
                              class="img-responsive img-center"
                              ref="imgweb3"
                            />
                            <span class="project-title"> عنوان 3 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="link centered">
                            <i class="fa fa-expand fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article
                        class="col-md-4 col-sm-6 portfolio-item web-design"
                      >
                        <div class="portfolio-thumb in" ref="webportfolio4">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post7.jpg"
                              alt="post7"
                              class="img-responsive img-center"
                              ref="imgweb4"
                            />
                            <span class="project-title" ref="title">
                              عنوان4
                            </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="enlarge">
                            <i class="fa fa-expand fa-fw"></i>
                          </a>
                          <a href="#" class="link">
                            <i class="fa fa-eye fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article
                        class="col-md-4 col-sm-6 portfolio-item web-design"
                      >
                        <div class="portfolio-thumb in" ref="webportfolio5">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post8.jpg"
                              alt="post8"
                              class="img-responsive img-center"
                              ref="imgweb5"
                            />
                            <span class="project-title"> عنوان5 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="enlarge">
                            <i class="fa fa-expand fa-fw"></i>
                          </a>
                          <a href="#" class="link">
                            <i class="fa fa-eye fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article
                        class="col-md-4 col-sm-6 portfolio-item web-design"
                      >
                        <div class="portfolio-thumb in">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post9.jpg"
                              alt="post9"
                              class="img-responsive img-center"
                            />
                            <span class="project-title"> عنوان6 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="enlarge">
                            <i class="fa fa-expand fa-fw"></i>
                          </a>
                          <a href="#" class="link">
                            <i class="fa fa-eye fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article
                        class="col-md-4 col-sm-6 portfolio-item web-design"
                      >
                        <div class="portfolio-thumb in">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post11.jpg"
                              alt="post11"
                              class="img-responsive img-center"
                            />
                            <span class="project-title"> عنوان7 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="enlarge">
                            <i class="fa fa-expand fa-fw"></i>
                          </a>
                          <a href="#" class="link">
                            <i class="fa fa-eye fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article class="col-md-4 col-sm-6 portfolio-item">
                        <div class="portfolio-thumb in" ref="webportfolio8">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post12.jpg"
                              alt="post12"
                              class="img-responsive img-center"
                              ref="imgweb8"
                            />
                            <span class="project-title"> عنوان 8 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="link centered">
                            <i class="fa fa-eye fa-fw"></i>
                          </a>
                        </div>
                      </article>
                      <article class="col-md-4 col-sm-6 portfolio-item">
                        <div class="portfolio-thumb in" ref="webportfolio9">
                          <a href="#" class="main-link">
                            <img
                              src="../assets/images/post13.jpg"
                              alt="post13"
                              class="img-responsive img-center"
                              ref="imgweb9"
                            />
                            <span class="project-title"> عنوان 9 </span>
                            <span class="overlay-mask"></span>
                          </a>
                          <a href="#" class="link centered">
                            <i class="fa fa-expand fa-fw"></i>
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    web() {
      this.$refs.imgweb2.classList.add("catimg");
      this.$refs.imgweb4.classList.add("catimg");
      this.$refs.imgweb3.classList.remove("catimg");
      this.$refs.webportfolio3.classList.remove("boxcatimg");
    },
    app() {
      this.$refs.imgweb2.classList.remove("catimg");
      this.$refs.imgweb4.classList.remove("catimg");
      this.$refs.webportfolio2.classList.remove("boxcatimg");
      this.$refs.imgweb3.classList.add("catimg");
      this.$refs.webportfolio3.classList.add("boxcatimg");
    },
  },
};
</script>

<style>
</style>