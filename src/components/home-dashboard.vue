<template>
  <section class="content" :class="themebdy">
    <div class="container-fluid" :class="themebdy">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">داشبورد</h4>
              </li>
              <li class="breadcrumb-item bcrumb-1">
                <a href="#">
                  خانه
                </a>
                
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> داشبورد </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <!-- start chart 1 -->
      <div class="row">
        <div class="col-lg-3 col-md-6">
  <div class="banner-card total-card">
    <div class="chartjs-size-monitor">
      <div class="chartjs-size-monitor-shrink"></div>
    </div>
    <div class="card-block">
      <div class="text-center p-t-20">
        <h4 class="titl-chrt"> مجموع فروش </h4>
        <p class="m-0">4000</p>
      </div>
    </div>
    <area-chart
      :id='bnr'
      :colors="['#fd7e14']"
      class="chartjs-render-monitor mylinechart"
      :data="{
        '2010': 28,
        '2011': 35,
        '2012': 36,
        '2013': 48,
        '2014': 46,
        '2015': 42,
        '2016': 60,
      }"
    ></area-chart>
  </div>
        </div>
        <div class="col-lg-3 col-md-6">
  <div class="banner-card total-card">
    <div class="chartjs-size-monitor">
      <div class="chartjs-size-monitor-shrink"></div>
    </div>
    <div class="card-block">
      <div class="text-center p-t-20">
        <h4 class="titl-chrt"> بازدیدکنندگان </h4>
        <p class="m-0">2180</p>
      </div>
    </div>
    <area-chart
      :id='bnr'
      :colors="['#007bff']"
      class="chartjs-render-monitor mylinechart"
      :data="{
        '2010': 28,
        '2011': 35,
        '2012': 36,
        '2013': 48,
        '2014': 46,
        '2015': 42,
        '2016': 60,
      }"
    ></area-chart>
  </div>
        </div>
        <div class="col-lg-3 col-md-6">
  <div class="banner-card total-card">
    <div class="chartjs-size-monitor">
      <div class="chartjs-size-monitor-shrink"></div>
    </div>
    <div class="card-block">
      <div class="text-center p-t-20">
        <h4 class="titl-chrt"> سفارشات </h4>
        <p class="m-0">1256</p>
      </div>
    </div>
    <area-chart
      :id='bnr'
      :colors="['#6f42c1']"
      class="chartjs-render-monitor mylinechart"
      :data="{
        '2010': 28,
        '2011': 35,
        '2012': 36,
        '2013': 48,
        '2014': 46,
        '2015': 42,
        '2016': 60,
      }"
    ></area-chart>
  </div>
        </div>
        <div class="col-lg-3 col-md-6">
  <div class="banner-card total-card">
    <div class="chartjs-size-monitor">
      <div class="chartjs-size-monitor-shrink"></div>
    </div>
    <div class="card-block">
      <div class="text-center p-t-20">
        <h4 class="titl-chrt"> سود </h4>
        <p class="m-0">2168</p>
      </div>
    </div>
    <area-chart
      :id='bnr'
      :colors="['#20c997']"
      class="chartjs-render-monitor mylinechart"
      :data="{
        '2010': 28,
        '2011': 35,
        '2012': 36,
        '2013': 48,
        '2014': 46,
        '2015': 42,
        '2016': 60,
      }"
    ></area-chart>
  </div>
        </div>
      </div>
      <!-- end chart 1 -->
      <div class="row clearfix">
        <!-- start line chart -->
        <div class="col-xl-8 col-lg-8 col-md-12 col-sm-12">
          <linechart class="" />
        </div>
        <!-- end line chart  -->
        <!-- start progress  -->
        <div class="col-xl-4 col-lg-4 col-md-12 col-sm-12">
          <div class="plain-card">
            <div class="card-inner">
              <h6 class="text-dark m-b-10">گزارش فروش</h6>
              <div class="row">
                <div class="col col-block">
                  <label class="font-14"> امروز </label>
                  <p>1,358</p>
                </div>
                <div class="col col-block">
                  <label class="font-14"> این هفته </label>
                  <p>1,808</p>
                </div>
                <div class="col col-block">
                  <label class="font-14"> این ماه </label>
                  <p>2,358</p>
                </div>
              </div>
              <div class="progress">
                <div class="progress-bar l-bg-cyan">70%</div>
              </div>
            </div>
          </div>
          <div class="plain-card">
            <div class="card-inner">
              <h6 class="text-dark m-b-10">گزارش فروش</h6>
              <div class="row">
                <div class="col col-block">
                  <label class="font-14"> امروز </label>
                  <p>1,139</p>
                </div>
                <div class="col col-block">
                  <label class="font-14"> این هفته </label>
                  <p>2,568</p>
                </div>
                <div class="col col-block">
                  <label class="font-14"> این ماه </label>
                  <p>2,358</p>
                </div>
              </div>
              <div class="progress">
                <div class="progress-bar l-bg-purple">70%</div>
              </div>
            </div>
          </div>
        </div>
        <!-- end progress  -->
      </div>
      <div class="row clearfix">
        <!-- start task info  -->
        <div class="col-xs-12 col-sm-12 col-md-8 col-lg-8">
          <div class="card">
            <div class="header">
              <h6>
                <strong> سفارشات اخیر </strong>
              </h6>
              <ul class="header-dropdown">
                <li class="dropdown">
                  <a
                    href="#"
                    class=""
                    role="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <ul
                    class="pull-right dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li class="dropdown-item">
                      <a href="#"> اقدام </a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#"> اقدامی دیگر </a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#"> چیز دیگری اینجا </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="tableBody">
              <div class="table-responsive">
                <table class="table table-hover dashboard-task-infos">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>نام</th>
                      <th>ایتم</th>
                      <th>وضعیت</th>
                      <th>مقدار</th>
                      <th>پیشرفت</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td class="table-img">
                        <img src="../assets/images/user1.jpg" alt="usser1" />
                      </td>
                      <td>میناخادملو</td>
                      <td>ایفون ایکس</td>
                      <td>
                        <span class="label bg-green shadow-style">
                          قرارداده شد
                        </span>
                      </td>
                      <td>2</td>
                      <td>
                        <div class="progress shadow-style">
                          <div
                            class="progree-bar width-per-62 l-bg-green"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-img">
                        <img src="../assets/images/user5.jpg" alt="usser5" />
                      </td>
                      <td>میناخادملو</td>
                      <td>پیکسل2</td>
                      <td>
                        <span class="label l-bg-purple shadow-style">
                          ارسال شده
                        </span>
                      </td>
                      <td>3</td>
                      <td>
                        <div class="progress shadow-style">
                          <div
                            class="progree-bar width-per-62 l-bg-green"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-img">
                        <img src="../assets/images/user4.jpg" alt="usser4" />
                      </td>
                      <td>میناخادملو</td>
                      <td>وان پلاس</td>
                      <td>
                        <span class="label l-bg-orange shadow-style">
                          در انتظار
                        </span>
                      </td>
                      <td>2</td>
                      <td>
                        <div class="progress shadow-style">
                          <div
                            class="progree-bar width-per-72 l-bg-orange"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-img">
                        <img src="../assets/images/user3.jpg" alt="usser3" />
                      </td>
                      <td>میناخادملو</td>
                      <td>Galaxy</td>
                      <td>
                        <span class="label l-bg-cyan shadow-style">
                          تحویل داده شد
                        </span>
                      </td>
                      <td>1</td>
                      <td>
                        <div class="progress shadow-style">
                          <div class="progree-bar width-per-62 l-bg-cyan"></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-img">
                        <img src="../assets/images/user2.jpg" alt="usser2" />
                      </td>
                      <td>میناخادملو</td>
                      <td>ایفون ایکس</td>
                      <td>
                        <span class="label bg-green"> قرارداده شد </span>
                      </td>
                      <td>2</td>
                      <td>
                        <div class="progress">
                          <div
                            class="progree-bar width-per-62 l-bg-green"
                          ></div>
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td class="table-img">
                        <img src="../assets/images/user4.jpg" alt="usser4" />
                      </td>
                      <td>میناخادملو</td>
                      <td>وان پلاس</td>
                      <td>
                        <span class="label l-bg-orange shadow-style">
                          در انتظار
                        </span>
                      </td>
                      <td>2</td>
                      <td>
                        <div class="progress shadow-style">
                          <div
                            class="progree-bar width-per-72 l-bg-orange"
                          ></div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <!-- end task info  -->
        <!-- start usage  -->
        <!-- <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
          <div class="card">
            <div class="header">
              <h6>
                <strong> درامد </strong>
                کل
              </h6>
              <ul class="header-dropdown">
                <li class="dropdown">
                  <a
                    href="#"
                    class=""
                    role="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <ul
                    class="pull-right dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li class="dropdown-item">
                      <a href="#"> اقدام </a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#"> اقدامی دیگر </a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#"> چیز دیگری اینجا </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="body">
              <div class="body text-center">
                <div class="chartjs-size-monitor">
                  <div class="chartjs-size-monitor-expand"></div>
                  <div class="chartjs-size-monitor-shrink"></div>
                </div>
                <h4 class="m-b-20">تعداد بازدیدکنندگان</h4>
                <h6 class="m-b-30">5,659,105</h6>
                <div class="m-t-25">
                  <div class="chart chart-bar2">
                  </div>
                </div>
                <h4 class="m-t-30">میزان رضایتمندی</h4>
                <h6 class="m-t-10">میانگین 36%</h6>
              </div>
            </div>
          </div>
        </div> -->
        <!-- end usage  -->
      </div>
      <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <div class="card">
            <div class="header">
              <h6>
                <strong> نظرات </strong>
                جدید
              </h6>
              <ul class="header-dropdown">
                <li class="dropdown">
                  <a
                    href="#"
                    class=""
                    role="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <i class="fa fa-ellipsis-v"></i>
                  </a>
                  <ul
                    class="pull-right dropdown-menu"
                    aria-labelledby="dropdownMenuButton"
                  >
                    <li class="dropdown-item">
                      <a href="#"> اقدام </a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#"> اقدامی دیگر </a>
                    </li>
                    <li class="dropdown-item">
                      <a href="#"> چیز دیگری اینجا </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
            <div class="body">
              <div class="slimscrolldiv box-recent-comment">
                <div class="recent-comment">
                  <div class="notice-board">
                    <div class="table-img">
                      <img
                        src="../assets/images/user6.jpg"
                        alt="user6"
                        class="notice-object"
                      />
                    </div>
                    <div class="notice-body">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ.
                      </p>
                      <small class="text-muted"> آرش خادملو | 1 سات پیش </small>
                    </div>
                  </div>
                  <div class="notice-board">
                    <div class="table-img">
                      <img
                        src="../assets/images/user4.jpg"
                        alt="user4"
                        class="notice-object"
                      />
                    </div>
                    <div class="notice-body">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ.
                      </p>
                      <small class="text-muted"> آرش خادملو | 1 سات پیش </small>
                    </div>
                  </div>
                  <div class="notice-board">
                    <div class="table-img">
                      <img
                        src="../assets/images/user2.jpg"
                        alt="user1"
                        class="notice-object"
                      />
                    </div>
                    <div class="notice-body">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ.
                      </p>
                      <small class="text-muted"> آرش خادملو | 1 سات پیش </small>
                    </div>
                  </div>
                  <div class="notice-board">
                    <div class="table-img">
                      <img
                        src="../assets/images/user3.jpg"
                        alt="user3"
                        class="notice-object"
                      />
                    </div>
                    <div class="notice-body">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ.
                      </p>
                      <small class="text-muted"> آرش خادملو | 1 سات پیش </small>
                    </div>
                  </div>
                  <div class="notice-board">
                    <div class="table-img">
                      <img
                        src="../assets/images/user4.jpg"
                        alt="user4"
                        class="notice-object"
                      />
                    </div>
                    <div class="notice-body">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ.
                      </p>
                      <small class="text-muted"> آرش خادملو | 1 سات پیش </small>
                    </div>
                  </div>
                  <div class="notice-board">
                    <div class="table-img">
                      <img
                        src="../assets/images/user5.jpg"
                        alt="user5"
                        class="notice-object"
                      />
                    </div>
                    <div class="notice-body">
                      <p>
                        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت
                        چاپ.
                      </p>
                      <small class="text-muted"> آرش خادملو | 1 سات پیش </small>
                    </div>
                  </div>
                </div>
                <div class="slimscrollbar"></div>
                <div class="slimscrollrail"></div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
          <!-- <div class="card">
            <div class="chat">
              <div class="chat-header clearfix">
                <img src="../assets/images/user5.jpg" alt="user5">
                <div class="chat-about">
                  <div class="chat-with"> میناخادملو </div>
                  <div class="chat-num-messages"> 3 پیام جدید </div>
                </div>
              </div>
              <div class="slimscrolldiv"></div>
              <div class="chat-message clearfix">
                <div class="form-group"></div>
              </div>
            </div>
          </div> -->
          <div class="card">
            <div class="chat">
              <div class="chat-header clearfix">
                <img src="../assets/images/user2.jpg" alt="user2" />
                <div class="chat-about">
                  <div class="chat-with">مینا خادملو</div>
                  <div class="chat-num-messages">2 پیام جدید</div>
                </div>
              </div>
              <div class="slimscrolldiv2 slimscrolldiv">
                <div class="chat-history chat-history2">
                  <ul>
                    <li class="clearfix">
                      <div class="message-data text-left">
                        <span class="message-data-time">
                          10:10 صبح، امروز
                        </span>
                        <span class="message-data-name"> مینا </span>
                      </div>
                      <div class="message other-message">
                        سلام رابرت، چطوری؟ کار شما چجور پیش می ره؟
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="message-data text-right">
                        <span class="message-data-name"> رابرت </span>
                        <span class="message-data-time">
                          10:12 صبح، امروز
                        </span>
                      </div>
                      <div class="message my-message">
                        سلام کارهای ما عالی پیش میره
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="message-data text-right">
                        <span class="message-data-name"> رابرت </span>
                        <span class="message-data-time">
                          10:14 صبح، امروز
                        </span>
                      </div>
                      <div class="message my-message">
                        برنامتون برای تعطیلات چیه ؟
                      </div>
                    </li>
                    <li class="clearfix">
                      <div class="message-data text-left">
                        <span class="message-data-time">
                          10:16 صبح، امروز
                        </span>
                        <span class="message-data-name"> مینا </span>
                      </div>
                      <div class="message other-message">
                        نمیدونم فعلا باید راجبش فک کنم
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="chat-message2 chat-message clearfix">
                <div class="form-group">
                  <div class="form-line">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="متن را اینجا وارد کنید..."
                    />
                  </div>
                </div>
                <div class="chat-upload">
                  <button
                    class="
                      btn btn-circle
                      mr-1
                      waves-effect waves-circle
                      bg-deep-orange2
                    "
                  >
                    <i class="fa fa-smile-o"></i>
                  </button>
                  <button
                    class="
                      btn btn-circle
                      waves-effect waves-circle
                      bg-deep-orange2
                    "
                  >
                    <i class="fa fa-paperclip"></i>
                  </button>
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
import Linechart from './Home-page/Line-chart.vue';
export default {
  components: {Linechart},
  data(){
    return{
      themebdy : 'lightbody'
    }
  },
  
 
};
</script>

<style>
</style>