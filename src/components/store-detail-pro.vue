<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">جزیئات محصول</h4>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> فروشگاه </a>
              </li>
              <li class="breadcrumb-item">جزیئات محصول</li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <!-- start details pro -->
      <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="card">
            <div class="body">
              <!-- start details pro breadcrumb-->
              <div class="block-header block-header-2">
                <div class="row">
                  <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                    <ul class="breadcrumb breadcrumb-style">
                      <li class="bcrumb-1">
                        <a href="#"> خانه </a>
                      </li>
                      <li class="bcrumb-2">
                        <a href="#"> مبلمان </a>
                      </li>
                      <li class="bcrumb-3">
                        <a href="#"> صندلی </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <!-- end details pro breadcrumb -->
              <!-- start details pro body -->
              <div class="card-body">
                <div class="product-store">
                  <div class="row">
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div class="product-gallery">
                        <div class="product-gallery-thumbnails">
                          <ol class="thumbnails-list list-unstyled">
                            <li @mouseover="pro(img)" v-for="img in images" :key="img">
                              <img :src="img" alt="p2" />
                            </li>
                            <!-- <li>
                              <img src="../assets/images/p3.jpg" alt="p3" />
                            </li>
                            <li>
                              <img src="../assets/images/p4.jpg" alt="p4" />
                            </li>
                            <li>
                              <img src="../assets/images/p5.jpg" alt="p5" />
                            </li>
                            <li>
                              <img src="../assets/images/p6.jpg" alt="p6" />
                            </li> -->
                          </ol>
                        </div>
                        <div class="product-gallery-featured">
                          <img :src="imgmain" alt="" />
                        </div>
                      </div>
                    </div>
                    <div class="col-xl-6 col-lg-6 col-md-12 col-sm-12">
                      <div class="product-payment-details">
                        <p class="last-sold text-muted">
                          <small> 145 مورد فروخته شد </small>
                        </p>
                        <h4 class="product-title">
                          صندلی متالیک چوبی در چرم سیاه
                        </h4>
                        <h2 class="product-price display-4">70000 تومان</h2>

                        <p>
                          <i class="fa fa-credit-card text-success"></i>
                          <strong>
                            بدون هزینه انتشار 19165 تومان در ماه
                          </strong>
                        </p>

                        <p>
                          <i class="fa fa-swatchbook col-cyan"></i>
                          <strong>
                            بانک ارائه می دهد 10٪ تخفیف فوری در مسترکارت برای
                            اولین پرداخت آنلاین
                          </strong>
                        </p>

                        <p>
                          <i class="fa fa-bookmark col-red"></i>
                          <strong>
                            شریک پیشنهاد خرید این لپ تاپ و گرفتن 2 سال گارانتی
                            تمدید @ ₹2999
                          </strong>
                        </p>

                        <p>
                          <i class="fa fa-credit-card text-success"></i>
                          <strong>
                            بدون هزینه انتشار 19165 تومان در ماه
                          </strong>
                        </p>

                        <label for="quant" class="active"> تعداد </label>
                        <input
                          type="number"
                          name="quantity"
                          min="1"
                          class="form-control mb-5 input-lg"
                          placeholder="مقدار را انتخاب کنید"
                        />
                        <button
                          type="button"
                          class="btn btn-warning waves-effect ml-1"
                        >
                          <i class="fa fa-cart-plus"></i>
                          <span> افزودن به سبد خرید </span>
                        </button>
                        <button type="button" class="btn btn-info waves-effect">
                          <i class="fa fa-bolt"></i>
                          <span> خرید حالا </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- end details pro body -->
            </div>
          </div>
        </div>
      </div>
      <!-- end details pro -->
      <!-- start property pro -->
      <div class="row">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="body">
              <!-- start nav tabs -->
              <ul class="nav nav-tabs tab-nav-right" id="mytab" role="tablist">
                <li class="nav-item">
                  <a
                    class="nav-link active nav-pro"
                    id="home-tab"
                    data-toggle="tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    ویژگی ها
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="profile-tab"
                    data-toggle="tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    توضیحات
                  </a>
                </li>
                <li class="nav-item">
                  <a
                    class="nav-link"
                    id="contact-tab"
                    data-toggle="tab"
                    href="#contact"
                    role="tab"
                    aria-controls="contact"
                    aria-selected="false"
                  >
                    پرسش و پاسخ
                  </a>
                </li>
              </ul>
              <!-- end nav tabs -->
              <!-- start tab content  -->
              <div class="tab-content" id="myTabContent">
                <div
                  class="tab-pane fade show active"
                  id="home"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                >
                  <div class="product-description">
                    <h2 class="mb-5 property-pro">ویژگی ها</h2>
                    <div class="row mb-5 col-attr">
                      <div class="col-lg-10 justify-content-center">
                      <table class="table table-borderless">
                      <thead class="">
                        <tr>
                          <th> برند </th>
                          <th> ابعاد </th>
                          <th> وزن </th>
                          <th> گارانتی </th>
                          <th> جنس </th>
                          <th> ارتفاع </th>
                          <th> عرض </th>
                          <th> عمق </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td> برند خادملو </td>
                          <td>  H 32 X W  </td>
                          <td> 5 کیلو </td>
                          <td> 24 ماه گارانتی </td>
                          <td> اهن </td>
                          <td> 32 اینچ </td>
                          <td> 18 اینچ </td>
                          <td> 19 اینچ </td>
                        </tr>
                      </tbody>
                      </table>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- tab pane 2 -->
                <div
                  class="tab-pane fade"
                  id="profile"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                >
                  <div class="product-description">
                    <h2 class="mb-5 property-pro">توضیحات</h2>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد. در این صورت می توان امید داشت که تمام و دشواری
                      موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد
                      وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
                      سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
                      قرار گیرد. !
                    </p>
                    <p>
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
                      درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می
                      طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه
                      ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی
                      ایجاد کرد.
                    </p>
                  </div>
                </div>
                <!-- tab pane 3 -->
                <div
                  class="tab-pane fade tab-pane-3"
                  id="contact"
                  role="tabpanel"
                  aria-labelledby="contact-tab"
                >
                  <b class="faq-pro mt-5"> پرسش و پاسخ </b>
                  <div class="product-faq">
                    <p class="text-muted">چه اطلاعاتی نیاز دارید؟</p>
                  </div>
                  <div class="product-comments">
                    <h5 class="mb-2 pro-com">یا از فروشگاه دیوید بخواهید</h5>
                    <form class="form-inline mb-5">
                      <textarea
                        id=""
                        cols="50"
                        rows="2"
                        class="form-control mr-4"
                        placeholder="یک سوال بنویس"
                      ></textarea>
                      <button class="btn btn-lg btn-primary">پرسیدن</button>
                    </form>
                    <h5 class="mb-5">اخرین سوالات</h5>
                    <ol class="list-unstyled last-question-list">
                      <li>
                        <i class="fa fa-comment"></i>
                        <span>
                          سلام دیوید، آیا می توانم با کارت اعتباری پرداخت کنم؟
                        </span>
                      </li>
                      <li>
                        <i class="fa fa-comment"></i>
                        <span>
                          آیا می توانم آن را به آدرس دیگری ارسال کنم؟
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>
              </div>
              <!-- end tab content  -->
            </div>
          </div>
        </div>
      </div>
      <!-- end property pro -->
      <!-- start more pro -->
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="card-body">
              <div class="product-store">
                <div class="row">
                  <div class="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                    <h3 class="mb-5">بیشتر از فروشگاه جان</h3>
                    <div class="recommended-items card-deck">
                      <div class="card">
                        <img
                          src="../assets/images/p2.jpg"
                          alt="p2"
                          class="card-img-top"
                        />
                        <div class="card-body">
                          <h5 class="card-title">55000 تومان</h5>
                          <span class="text-muted">
                            <small> صندلی متالیک چوبی </small>
                          </span>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="../assets/images/p3.jpg"
                          alt="p2"
                          class="card-img-top"
                        />
                        <div class="card-body">
                          <h5 class="card-title">55000 تومان</h5>
                          <span class="text-muted">
                            <small> صندلی متالیک چوبی </small>
                          </span>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="../assets/images/p4.jpg"
                          alt="p2"
                          class="card-img-top"
                        />
                        <div class="card-body">
                          <h5 class="card-title">55000 تومان</h5>
                          <span class="text-muted">
                            <small> صندلی متالیک چوبی </small>
                          </span>
                        </div>
                      </div>
                      <div class="card">
                        <img
                          src="../assets/images/p5.jpg"
                          alt="p2"
                          class="card-img-top"
                        />
                        <div class="card-body">
                          <h5 class="card-title">55000 تومان</h5>
                          <span class="text-muted">
                            <small> صندلی متالیک چوبی </small>
                          </span>
                        </div>
                      </div>
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
import { reactive, ref } from '@vue/reactivity';
export default {
 setup(){
   const imgmain = ref(require('../assets/images/p2.jpg'))
   const images = reactive([
     'https://s6.uupload.ir/files/p1_kmf4.jpg',
     'https://s6.uupload.ir/files/p2_ruok.jpg',
     'https://s6.uupload.ir/files/p3_y2t4.jpg',
     'https://s6.uupload.ir/files/p4_39ow.jpg',
     'https://s6.uupload.ir/files/p6_hl4z.jpg'
   ])

    function pro(img){
      this.imgmain=img
  }
   return{
     imgmain,images,pro
   }
 }
    
 
};
</script>

<style>
</style>