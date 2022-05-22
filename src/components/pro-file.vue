<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">پروفایل</h4>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> پروفایل </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <div class="row clearfix">
        <div class="col-lg-4 col-md-12">
          <div class="card">
            <div class="m-b-20">
              <div class="contact-grid">
                <div class="profile-header bg-dark">
                  <div class="user-name">مینا خادملو</div>
                  <div class="name-center">مهندس نرم افزار</div>
                </div>
                <img
                  src="../assets/images/usrbig3.jpg"
                  alt="usrbig3"
                  class="user-img"
                />
                <p>
                  456، خیابان شرقی، منطقه اکتابان،<br />
                  نیویورک
                </p>
                <div>
                  <span class="phone">
                    <i class="fa fa-phone"></i>
                    264-524-2568
                  </span>
                </div>
                <div class="row">
                  <div class="col-4">
                    <h5 class="flw-prof">658</h5>
                    <small> دنبال کردن </small>
                  </div>
                  <div class="col-4">
                    <h5 class="flw-prof">18K</h5>
                    <small> دنبال کننده </small>
                  </div>
                  <div class="col-4">
                    <h5 class="flw-prof">425</h5>
                    <small> پست </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card">
            <ul class="nav nav-tabs" role="tablist">
              <li class="nav-item">
                <a
                  class="nav-link active"
                  id="about-tab"
                  data-toggle="tab"
                  href="#about"
                  role="tab"
                  aria-controls="about"
                  aria-selected="true"
                >
                  درباره
                </a>
              </li>
              <li class="nav-item">
                <a
                  class="nav-link"
                  id="skill-tab"
                  data-toggle="tab"
                  href="#skill"
                  role="tab"
                  aria-controls="skill"
                  aria-selected="true"
                >
                  مهارت ها
                </a>
              </li>
            </ul>
            <div class="tab-content">
              <!-- tab pane 1 -->
              <div
                class="tab-pane active body fade show"
                id="about"
                role="tabpanel"
                aria-labelledby="about-tab"
              >
                <p class="text-default m-t-20">
                  لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است. لورم
                  ایپسوم از سالهای متمادی استاندارد استاندارد صنعت بوده است،
                  زمانی که یک چاپگر ناشناخته با یک نوع کابین از آن استفاده کرد و
                  آن را برای ساختن یک نمونه از نوع نمونه آماده کرد. این نه تنها
                  پنج قرن زنده مانده است، بلکه جهش به شکل گیری الکترونیکی نیز
                  باقی مانده است.
                </p>
                <small class="text-muted"> ادرس ایمیل : </small>
                <p>john@gmail.com</p>
                <hr />
                <small class="text-muted"> تلفن : </small>
                <p>+91 1234567890</p>
                <hr />
              </div>
              <!-- tab pane 2 -->
              <div
                class="tab-pane body fade"
                id="skill"
                role="tabpanel"
                aria-labelledby="skill-tab"
              >
                <ul class="list-unstyled m-t-20">
                  <li>
                    <div>فتوشاپ</div>
                    <div class="progress skill-progress m-b-20">
                      <div
                        class="progress-bar l-bg-green"
                        role="progressbar"
                        aria-valuenow="45"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div>وردپرس</div>
                    <div class="progress skill-progress m-b-20">
                      <div
                        class="progress-bar l-bg-orange"
                        role="progressbar"
                        aria-valuenow="38"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div>Html</div>
                    <div class="progress skill-progress m-b-20">
                      <div
                        class="progress-bar l-bg-cyan"
                        role="progressbar"
                        aria-valuenow="39"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                  <li>
                    <div>انگولار</div>
                    <div class="progress skill-progress m-b-20">
                      <div
                        class="progress-bar l-bg-purple"
                        role="progressbar"
                        aria-valuenow="70"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-8 col-md-12">
          <div class="card">
            <div class="profile-tab-box">
              <div class="p-l-20">
                <ul class="nav">
                  <li class="nav-item tab-all">
                    <a
                      href="#project"
                      data-toggle="tab"
                      class="nav-link active"
                    >
                      درباره من
                    </a>
                  </li>
                  <li class="nav-item tab-all p-r-20">
                    <a href="#usersettings" data-toggle="tab" class="nav-link">
                      تنظیمات
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="tab-content">
            <div
              class="tab-pane active"
              id="project"
              aria-expanded="true"
              role="tabpane1"
            >
              <div class="row clearfix">
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="card project_widget">
                    <div class="header">
                      <h6>درباره</h6>
                    </div>
                    <div class="body">
                      <div class="row">
                        <div class="col-md-3 col-6">
                          <strong> نام کامل </strong>
                          <br />
                          <p class="text-muted">مینا خادملو</p>
                        </div>
                        <div class="col-md-3 col-6">
                          <strong> موبایل </strong>
                          <br />
                          <p class="text-muted">092154698</p>
                        </div>
                        <div class="col-md-3 col-6">
                          <strong> ایمیل </strong>
                          <br />
                          <p class="text-muted">johndeo@example.com</p>
                        </div>
                        <div class="col-md-3 col-6">
                          <strong> موقعیت </strong>
                          <br />
                          <p class="text-muted">ایران</p>
                        </div>
                      </div>
                      <p class="m-t-30">
                        من فارغ التحصیل شدم در هنر از موسسه شناخته شده و مشهور
                        هند - 2000-01، که به دانشگاه وابسته است. من در آزمون های
                        دانشگاهی از همان دانشگاه از سال 1996 تاکنون رتبه بندی
                        کردم.
                      </p>
                      <p class="m-t-30">
                        من فارغ التحصیل شدم در هنر از موسسه شناخته شده و مشهور
                        هند - 2000-01، که به دانشگاه وابسته است. من در آزمون های
                        دانشگاهی از همان دانشگاه از سال 1996 تاکنون رتبه بندی
                        کردم.
                      </p>
                      <p class="m-t-30">
                        من فارغ التحصیل شدم در هنر از موسسه شناخته شده و مشهور
                        هند - 2000-01، که به دانشگاه وابسته است. من در آزمون های
                        دانشگاهی از همان دانشگاه از سال 1996 تاکنون رتبه بندی
                        کردم.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="card project_widget">
                    <div class="header">
                      <h6>تحصیلات</h6>
                    </div>
                    <div class="body">
                      <ul>
                        <li class="mb-1">مدرک کارشناسی ارشد کامپیوتر.</li>
                        <li class="mb-1">مدرک کارشناسی ارشد حسابداری.</li>
                        <li class="mb-1">مدرک کارشناسی ارشد مکانیک.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="card project_widget">
                    <div class="header">
                      <h6>تجربه</h6>
                    </div>
                    <div class="body">
                      <ul>
                        <li class="mb-1">یک سال تجربه به عنوان کارشناسی ارشد استاد از آوریل 2009 تا مارس 2010 در دانشگاه تهران.</li>
                        <li class="mb-1">یک سال تجربه به عنوان کارشناسی ارشد استاد از آوریل 2009 تا مارس 2010 در دانشگاه تهران.</li>
                        <li class="mb-1">یک سال تجربه به عنوان کارشناسی ارشد استاد از آوریل 2009 تا مارس 2010 در دانشگاه تهران.</li>
                        <li class="mb-1">یک سال تجربه به عنوان کارشناسی ارشد استاد از آوریل 2009 تا مارس 2010 در دانشگاه تهران.</li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div class="col-lg-12 col-md-12 col-sm-12">
                  <div class="card project_widget">
                    <div class="header">
                      <h6>کنفرانس ها، دوره ها و کارگاه شرکت کردند</h6>
                    </div>
                    <div class="body">
                      <ul>
                        <li class="mb-1"> لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است. </li>
                        <li class="mb-1"> لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است. </li>
                        <li class="mb-1"> لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است. </li>
                        <li class="mb-1"> لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است. </li>
                        <li class="mb-1"> لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است. </li>
                        <li class="mb-1"> لورم ایپسوم به راحتی متن ساختاری چاپ و نشر صنعت است. </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              class="tab-pane"
              id="usersettings"
              aria-expanded="false"
              role="tabpane1"
            >
            <div class="card">
              <div class="header">
                <h6>
                  <strong> تنظیمات امنیتی </strong>
                </h6>
              </div>
              <div class="body">
                <div class="form-group">
                  <input type="text" class="form-control" placeholder="نام کاربری">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="رمزعبور فعلی">
                </div>
                <div class="form-group">
                  <input type="password" class="form-control" placeholder="رمزعبور جدید">
                </div>
                <button class="btn btn-info btn-save-change"> ذخیره تغییرات </button>
              </div>
            </div>

            <div class="card">
              <div class="header">
                <h6>
                  <strong> تنظیمات حساب </strong>
                </h6>
              </div>
              <div class="body">
                <div class="row clearfix">
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group focused">
                      <input type="text" class="form-control" placeholder="نام اصلی">
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <div class="form-group focused">
                      <input type="text" class="form-control" placeholder="نام خانوادگی ">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div class="form-group focused">
                      <input type="text" class="form-control" placeholder="شهر ">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div class="form-group focused">
                      <input type="text" class="form-control" placeholder="ایمیل">
                    </div>
                  </div>
                  <div class="col-lg-4 col-md-12">
                    <div class="form-group focused">
                      <input type="text" class="form-control" placeholder="کشور">
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group focused">
                      <textarea class="form-control" placeholder="خط ادرس 1" rows="4"></textarea>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <div class="form-group btn-check-pro">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          قابلیت مشاهده برای همه
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                          اعلان های کار جدید
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                    <div class="form-group">
                      <div class="form-check">
                        <label class="form-check-label">
                          <input type="checkbox" class="form-check-input">
                         اعلان درخواست دوست جدید
                          <span class="form-check-sign">
                            <span class="check"></span>
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                  <div class="col-md-12">
                    <button class="btn btn-dark btn-save-change-2"> ذخیره تغییرات </button>
                  </div>
                </div>
              </div>
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
 
};
</script>

<style>
</style>