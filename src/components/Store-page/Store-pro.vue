<template>
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

</template>

<script>
export default {

}
</script>

<style>

</style>