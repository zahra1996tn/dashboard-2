<template>
  <nav class="navbar" id="navbar" :class="[purpl,bl]">
    <div class="container-fluid" id="hnavtop">
      <div class="navbar-header" id="navheadright"  :class="[theme,widthnavright]">
        <a href="#" onclick="terurn false;" class="bars" @click="closesidebarres()">
          <i class="fa fa-navicon icon-bars"></i>
        </a>
        <a href="#" class="navbar-brand" id="logoname" :class="[widthnavright]">
          <img src="./assets/images/logo.png" />
          <span class="logo-name" :class="[themetext]"> کوشارایان </span>
        </a>
        <a href="#" class="navbar-brand" id="logonameres" >
          <img src="./assets/images/logo.png" />
        </a>
        <a
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          href="#collapserighrnav"
          role="button"
          aria-expanded="false"
          aria-controls="collapserighrnav"
        >
          <i class="fa fa-exchange exchange-icon"></i>
        </a>
      </div>
      <div class="collapse" id="collapserighrnav">
        <div class="card card-body">
          <ul class="navtopr">
            <li class="fullscreen li-top">
              <a
                role="button"
                href="#"
                class="js-right-sidebar"
                @click="togglenavleft()"
              >
                <i class="nav-hdr-btn ti-layout-grid2 fa fa-th-large itop"></i>
              </a>
            </li>

            <li class="dropdow user_profile li-top">
              <div class="dropdown-tgle">
                <a
                  data-toggle="collapse"
                  href="#collapseExampleuser1"
                  role="button"
                  aria-expanded="true"
                  aria-controls="collapseExampleuser1"
                >
                  <img src="./assets/images/usrbig.jpg" />
                </a>
              </div>
              <ul
                class="collapse dropdown-menu pulldown"
                id="collapseExampleuser1"
              >
                <li class="body">
                  <ul class="user_dw_menu1 user_dw_menu">
                    <li>
                      <a href="#">
                        <i class="material-icons fa fa-user"> </i>
                        پروفایل
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i
                          class="material-icons fa fa-exclamation-triangle"
                        ></i>
                        بازخورد
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="material-icons fa fa-question-circle"></i>
                        راهنما
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <i class="material-icons fa fa-power-off"></i>
                        خروج
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li class="dropdown-noti li-top">
              <a
                data-toggle="collapse"
                href="#collapseExample01"
                role="button"
                aria-expanded="false"
                aria-controls="collapseExample01"
                class="js-right-sidebar"
              >
                <i class="nav-hdr-btn ti-layout-grid2 fa fa-bell-o itop"></i>
                <span class="notify notifytop"></span>
                <span class="heartbeattop heartbeat"></span>
              </a>
              <ul class="dropdown-menu collapse" id="collapseExample01">
                <li class="npm header">اطلاعیه ها</li>
                <li class="body belltab">
                  <div class="slimscrolldiv">
                    <ul class="menu">
                      <li>
                        <a href="#">
                          <span class="table-img msg-user">
                            <img src="./assets/images/user1.jpg" />
                          </span>
                          <span class="menu-info">
                            <span class="menu-title"> مینا خادملو </span>
                            <span class="menu-desc">
                              <i class="material-icons fa fa-clock">
                                14 دقیقه پیش
                              </i>
                            </span>
                            <span class="menu-desc">
                              لطفا ایمیل خود را جک کنید.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="table-img msg-user">
                            <img src="./assets/images/user1.jpg" />
                          </span>
                          <span class="menu-info">
                            <span class="menu-title"> مینا خادملو </span>
                            <span class="menu-desc">
                              <i class="material-icons fa fa-clock">
                                14 دقیقه پیش
                              </i>
                            </span>
                            <span class="menu-desc">
                              لطفا ایمیل خود را جک کنید.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="table-img msg-user">
                            <img src="./assets/images/user1.jpg" />
                          </span>
                          <span class="menu-info">
                            <span class="menu-title"> مینا خادملو </span>
                            <span class="menu-desc">
                              <i class="material-icons fa fa-clock">
                                14 دقیقه پیش
                              </i>
                            </span>
                            <span class="menu-desc">
                              لطفا ایمیل خود را جک کنید.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="table-img msg-user">
                            <img src="./assets/images/user1.jpg" />
                          </span>
                          <span class="menu-info">
                            <span class="menu-title"> مینا خادملو </span>
                            <span class="menu-desc">
                              <i class="material-icons fa fa-clock">
                                14 دقیقه پیش
                              </i>
                            </span>
                            <span class="menu-desc">
                              لطفا ایمیل خود را جک کنید.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="table-img msg-user">
                            <img src="./assets/images/user1.jpg" />
                          </span>
                          <span class="menu-info">
                            <span class="menu-title"> مینا خادملو </span>
                            <span class="menu-desc">
                              <i class="material-icons fa fa-clock">
                                14 دقیقه پیش
                              </i>
                            </span>
                            <span class="menu-desc">
                              لطفا ایمیل خود را جک کنید.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="table-img msg-user">
                            <img src="./assets/images/user1.jpg" />
                          </span>
                          <span class="menu-info">
                            <span class="menu-title"> مینا خادملو </span>
                            <span class="menu-desc">
                              <i class="material-icons fa fa-clock">
                                14 دقیقه پیش
                              </i>
                            </span>
                            <span class="menu-desc">
                              لطفا ایمیل خود را جک کنید.
                            </span>
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span class="table-img msg-user">
                            <img src="./assets/images/user1.jpg" />
                          </span>
                          <span class="menu-info">
                            <span class="menu-title"> مینا خادملو </span>
                            <span class="menu-desc">
                              <i class="material-icons fa fa-clock">
                                14 دقیقه پیش
                              </i>
                            </span>
                            <span class="menu-desc">
                              لطفا ایمیل خود را جک کنید.
                            </span>
                          </span>
                        </a>
                      </li>
                    </ul>
                    <div class="slimscrollbar"></div>
                    <div class="slimscrollrail"></div>
                  </div>
                </li>
                <li class="footer1 footer">
                  <a href="#"> مشاهده تمام اطلاعیه ها </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="collapse navbar-collapse mynav-head" id="mynavhead"  :class="iconnav">
        <!-- left menu nav -->
        <ul class="nav navbar-navnavbar-left">
          <li id="iconnav">
            <a
              class="sidemenu-collapse"
              @click="closesidebar()"
            >
              <i class="fa fa-align-right nav-hdr-btn ti-align-left"></i>
            </a>
          </li>
        </ul>
        <!-- right menu nav -->
        <ul class="nav navbar-navnavbar-right" id="navtop" :class='navtop' >
          <li class="fullscreen">
            <a href="#" class="js-right-sidebar" v-fullscreen.teleport="options">
              <i class="nav-hdr-btn ti-layout-grid2 fa fa-arrows-alt"></i>
            </a>
          </li>
          <li class="dropdown-noti">
            <a
              data-toggle="collapse"
              href="#collapseExample0"
              role="button"
              aria-expanded="false"
              aria-controls="collapseExample0"
              class="js-right-sidebar"
            >
              <i class="nav-hdr-btn ti-layout-grid2 fa fa-bell-o"></i>
              <span class="notify"></span>
              <span class="heartbeat"></span>
            </a>
            <ul class="dropdown-menu collapse" id="collapseExample0">
              <li class="header">اطلاعیه ها</li>
              <li class="body belltab">
                <div class="slimscrolldiv">
                  <ul class="menu">
                    <li>
                      <a href="#">
                        <span class="table-img msg-user">
                          <img src="./assets/images/user1.jpg" />
                        </span>
                        <span class="menu-info">
                          <span class="menu-title"> مینا خادملو </span>
                          <span class="menu-desc">
                            <i class="material-icons fa fa-clock">
                              14 دقیقه پیش
                            </i>
                          </span>
                          <span class="menu-desc">
                            لطفا ایمیل خود را جک کنید.
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="table-img msg-user">
                          <img src="./assets/images/user1.jpg" />
                        </span>
                        <span class="menu-info">
                          <span class="menu-title"> مینا خادملو </span>
                          <span class="menu-desc">
                            <i class="material-icons fa fa-clock">
                              14 دقیقه پیش
                            </i>
                          </span>
                          <span class="menu-desc">
                            لطفا ایمیل خود را جک کنید.
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="table-img msg-user">
                          <img src="./assets/images/user1.jpg" />
                        </span>
                        <span class="menu-info">
                          <span class="menu-title"> مینا خادملو </span>
                          <span class="menu-desc">
                            <i class="material-icons fa fa-clock">
                              14 دقیقه پیش
                            </i>
                          </span>
                          <span class="menu-desc">
                            لطفا ایمیل خود را جک کنید.
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="table-img msg-user">
                          <img src="./assets/images/user1.jpg" />
                        </span>
                        <span class="menu-info">
                          <span class="menu-title"> مینا خادملو </span>
                          <span class="menu-desc">
                            <i class="material-icons fa fa-clock">
                              14 دقیقه پیش
                            </i>
                          </span>
                          <span class="menu-desc">
                            لطفا ایمیل خود را جک کنید.
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="table-img msg-user">
                          <img src="./assets/images/user1.jpg" />
                        </span>
                        <span class="menu-info">
                          <span class="menu-title"> مینا خادملو </span>
                          <span class="menu-desc">
                            <i class="material-icons fa fa-clock">
                              14 دقیقه پیش
                            </i>
                          </span>
                          <span class="menu-desc">
                            لطفا ایمیل خود را جک کنید.
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="table-img msg-user">
                          <img src="./assets/images/user1.jpg" />
                        </span>
                        <span class="menu-info">
                          <span class="menu-title"> مینا خادملو </span>
                          <span class="menu-desc">
                            <i class="material-icons fa fa-clock">
                              14 دقیقه پیش
                            </i>
                          </span>
                          <span class="menu-desc">
                            لطفا ایمیل خود را جک کنید.
                          </span>
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span class="table-img msg-user">
                          <img src="./assets/images/user1.jpg" />
                        </span>
                        <span class="menu-info">
                          <span class="menu-title"> مینا خادملو </span>
                          <span class="menu-desc">
                            <i class="material-icons fa fa-clock">
                              14 دقیقه پیش
                            </i>
                          </span>
                          <span class="menu-desc">
                            لطفا ایمیل خود را جک کنید.
                          </span>
                        </span>
                      </a>
                    </li>
                  </ul>
                  <div class="slimscrollbar"></div>
                  <div class="slimscrollrail"></div>
                </div>
              </li>
              <li class="footer">
                <a href="#"> مشاهده تمام اطلاعیه ها </a>
              </li>
            </ul>
          </li>
          <li class="dropdow user_profile">
            <div class="dropdown-tgle">
              <a
                data-toggle="collapse"
                href="#collapseExampleuser"
                role="button"
                aria-expanded="true"
                aria-controls="collapseExampleuser"
              >
                <img src="./assets/images/usrbig.jpg" />
              </a>
            </div>
            <ul
              class="collapse dropdown-menu pulldown"
              id="collapseExampleuser"
            >
              <li class="body">
                <ul class="user_dw_menu">
                  <li>
                    <a href="#">
                      <i class="material-icons fa fa-user"> </i>
                      پروفایل
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="material-icons fa fa-exclamation-triangle"></i>
                      بازخورد
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="material-icons fa fa-question-circle"></i>
                      راهنما
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i class="material-icons fa fa-power-off"></i>
                      خروج
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li class="fullscreen">
            <a href="#" class="js-right-sidebar" @click="togglenavleft()">
              <i class="nav-hdr-btn ti-layout-grid2 fa fa-th-large"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- side right -->
  <div>
    <aside id="leftsidebar" class="sidebar" ref="hovsid" :class="[asideres,widthnavrightres]" @mouseover="hoverside">
      <div class="menu" id="mnu" ref="mnu" :class="[theme,widthnavright]">
        <div class="slimscrolldiv">
          <ul class="list" id="accordion">
            <li>
              <div class="sidebarprofile clearfix">
                <div class="profile-img">
                  <img src="./assets/images/usrbig.jpg" alt="profile" id="" />
                </div>
                <div class="profile-info">
                  <h3 :class="themetext">مینا خادملو</h3>
                  <p :class="themetext">خوش امدید !</p>
                </div>
              </div>
            </li>
            <li class="active" id="headingOne">
              <router-link to="/" class="menu-toggle waves-effect waves-block">
                <i
                  class="fa fa-home menu-icon ti-home"
                  id="icon1"
                  :class="themetext"
                ></i>
                <span id="h1" :class="themetext"> خانه </span>
              </router-link>
            </li>
            <li>
              <a
                class="menu-toggle toggled waves-effect waves-block"
                data-toggle="collapse"
                data-target="#collapsetwo"
                aria-expanded="true"
                aria-controls="collapsetwo"
                :class="themetext"
              >
                <i class="menu-icon fa fa-shopping-cart"></i>
                <span id="h2" :class="[themetext]"> فروشگاه </span>
              </a>
              <ul
                id="collapsetwo"
                aria-labelledby="headingtwo"
                data-parent="#accordion"
                class="collapse ml-menu"
              >
                <li>
                  <router-link
                    to="/product"
                    class="waves-effect waves-block"
                    :class="themetext"
                  >
                    محصولات
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/detailsproduct"
                    class="waves-effect waves-block"
                    :class="themetext"
                  >
                    جزئیات محصول
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="menu-toggle toggled waves-effect waves-block"
                data-toggle="collapse"
                data-target="#collapsethree"
                aria-expanded="true"
                aria-controls="collapsethree"
                :class="themetext"
              >
                <i class="menu-icon fa fa-folder-open-o" :class="themetext"></i>
                <span id="h3" :class="themetext"> مدیریت محتوا </span>
              </a>
              <ul
                id="collapsethree"
                aria-labelledby="headingthree"
                data-parent="#accordion"
                class="collapse ml-menu"
              >
                <li>
                  <router-link
                    to="/projects"
                    class="waves-effect waves-block"
                    :class="themetext"
                  >
                    مدیریت پروژه ها
                  </router-link>
                </li>
                <li>
                  <router-link
                    to="/tags"
                    class="waves-effect waves-block"
                    :class="themetext"
                  >
                    مدیریت تگ ها
                  </router-link>
                </li>
                <li>
                  <router-link to="/categories" class="waves-effect waves-block">
                      مدیریت دسته بندی ها
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <a
                class="menu-toggle toggled waves-effect waves-block"
                data-toggle="collapse"
                data-target="#collapsethreee"
                aria-expanded="true"
                aria-controls="collapsethreee"
                :class="themetext"
              >
                <i class="menu-icon fa fa-user-circle" :class="themetext"></i>
                <span id="h3" :class="themetext"> مدیریت کاربران </span>
              </a>
              <ul
                id="collapsethreee"
                aria-labelledby="headingthreee"
                data-parent="#accordion"
                class="collapse ml-menu"
              >
                <li>
                  <router-link
                    to="/users"
                    class="waves-effect waves-block"
                    :class="themetext"
                  >
                    کاربران
                  </router-link>
                </li>
              </ul>
            </li>
            <li>
              <router-link to="/profile" class="waves-effect waves-block">
                <i
                  class="menu-icon fa fa-user align-middle"
                  :class="themetext"
                ></i>
                <span id="h4" :class="themetext"> پروفایل </span>
              </router-link>
            </li>
            <li>
              <router-link class="waves-effect waves-block" to="/chat">
                <i
                  class="menu-icon fa fa-pencil-square-o align-middle"
                  :class="themetext"
                ></i>
                <span id="h5" :class="themetext"> چت </span>
              </router-link>
            </li>
            <li>
              <router-link to="/samplework" class="waves-effect waves-block">
                <i
                  class="menu-icon fa fa-hdd-o align-middle"
                  :class="themetext"
                ></i>
                <span id="h6" :class="themetext"> نمونه کارها </span>
              </router-link>
            </li>
          </ul>
          <div class="slimscrollbar"></div>
          <div class="slimscrollrail"></div>
        </div>
      </div>
      <!-- nav right resp -->
      <div class="menu" id="mnuresp" :class="[theme,togmnuresp]" >
        <div class="slimscrolldiv">
          <ul class="list" id="accordion">
            <li>
              <div class="sidebarprofile clearfix">
                <div class="profile-img">
                  <img
                    src="./assets/images/usrbig.jpg"
                    alt="profile"
                    id="imgprof"
                    :class="imgprofl"
                  />
                </div>
                <div class="profile-info"></div>
              </div>
            </li>
            <li class="active" id="headingOne">
              <router-link to="/" class="menu-toggle waves-effect waves-block">
                <i
                  class="fa fa-home menu-icon ti-home"
                  id="icon1"
                  :class="themetext"
                ></i>
              </router-link>
            </li>
            <li>
              <a class="toggled waves-effect waves-block">
                <i class="menu-icon fa fa-shopping-cart" :class="themetext"></i>
              </a>
            </li>
            <li>
              <a class="toggled waves-effect waves-block">
                <i class="menu-icon fa fa-folder-open-o" :class="themetext"></i>
              </a>
            </li>
            <li>
              <router-link to="/profile" class="waves-effect waves-block">
                <i
                  class="menu-icon fa fa-user align-middle"
                  :class="themetext"
                ></i>
              </router-link>
            </li>
            <li>
              <router-link class="waves-effect waves-block" to="/chat">
                <i
                  class="menu-icon fa fa-pencil-square-o align-middle"
                  :class="themetext"
                ></i>
              </router-link>
            </li>
            <li>
              <router-link to="/samplework" class="waves-effect waves-block">
                <i
                  class="menu-icon fa fa-hdd-o align-middle"
                  :class="themetext"
                ></i>
              </router-link>
            </li>
          </ul>
          <div class="slimscrollbar"></div>
          <div class="slimscrollrail"></div>
        </div>
      </div>
    </aside>
  </div>
  <!-- side left -->
  <aside id="rightsidebar" class="right-sidebar open" :class="[showleft,themebdy]">
    <ul class="nav nav-tabs tab-nav-right" role="tablist">
      <li class="nav-item">
        <a
          id="nav-home-tab"
        >
         تنظیمات عمومی
        </a>
      </li>
    </ul>
    <div class="tab-content">
      <div
        class="tan-pane fade show active"
        id="nav-home"
        role="tabpanel"
        aria-labelledby="nav-home-tab"
      >
        <div class="slimscrolldiv">
          <div class="demo-skin">
            <div class="rightSetting">
              <ul class="setting-list list-unstyled m-t-20">
                <li>
                  <div class="form-check">
                    <div class="form-check m-l-10">
                      <label class="form-check-label" :class="themetextgh">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          value
                          checked
                        />
                        ذخیره تاریخچه
                        <span class="form-check-sign">
                          <span class="check"></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <div class="form-check m-l-10">
                      <label class="form-check-label" :class="themetextgh">
                        <input
                        
                          type="checkbox"
                          class="form-check-input"
                          value
                          checked
                        />
                        نمایش وضعیت
                        <span class="form-check-sign">
                          <span class="check"></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <div class="form-check m-l-10">
                      <label class="form-check-label" :class="themetextgh">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          value
                          checked
                        />
                        ثبت مسئله خودکار
                        <span class="form-check-sign">
                          <span class="check"></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
                <li>
                  <div class="form-check">
                    <div class="form-check m-l-10">
                      <label class="form-check-label" :class="themetextgh">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          value
                          checked
                        />
                        نمایش وضعیت به همه
                        <span class="form-check-sign">
                          <span class="check"></span>
                        </span>
                      </label>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <div class="rightSetting">
              <p>رنگ منو نوار کناری</p>
              <button
                class="btn btn-sidebar-light p-l-20 p-r-20"
                @click="sidebarlight()"
              >
                روشن
              </button>
              <button
                class="btn btn-sidebar-dark btn-default p-l-20 p-r-20"
                @click="sidebardark()"
              >
                تاریک
              </button>
            </div>
            <div class="rightSetting">
              <p>رنگ قالب</p>
              <button
                class="btn btn-sidebar-light p-l-20 p-r-20"
                @click="ghaleblight()"
              >
                روشن
              </button>
              <button
                class="btn btn-sidebar-dark btn-default p-l-20 p-r-20"
                @click="ghalebdark()"
              >
                تاریک
              </button>
            </div>
            <div class="rightSetting">
              <p>پوسته ها</p>
              <ul class="demo-choose-skin choose-theme list-unstyled">
                <li class="actived" data-theme="black">
                  <div class="black-theme"></div>
                </li>
                <li data-theme="white">
                  <div class="white-theme white-theme-border"></div>
                </li>
                <li data-theme="purple">
                  <div class="purple-theme" @click="pur()"></div>
                </li>
                <li data-theme="blue">
                  <div class="blue-theme" @click="blu()"></div>
                </li>
                <li data-theme="cyan">
                  <div class="cyan-theme"></div>
                </li>
                <li data-theme="green">
                  <div class="green-theme"></div>
                </li>
                <li data-theme="orange">
                  <div class="orange-theme"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </aside>
<section class="content"></section>
  <!-- <store-product /> -->
</template>

<script>
import { directive as fullscreen } from 'vue-fullscreen'

export default {
   directives: {
    fullscreen
  },
        options: {
        target: ".fullscreen-wrapper",
        callback (isFullscreen) {
          console.log(isFullscreen)
        },
      },

  components: {},
  data() {
    return {
      theme: "light",
      themetext: "lighttext",
      themebdy: "lighbody",
      showleft: "rightsidebardef",
      widthnavright :'wnavrightdef',
      showlogo:'shlogo',
      iconnav:'iconnavdef',
      navtop:'navtopdef',
      imgprofl:'imgprodef',
      togmnu :'showmnu',
      togmnuresp:'hidemnures',
      asideres:'asidedef',
      themetextgh:'lighttext',
      widthnavrightres:'wnavrighrestdef',
      purpl:'purpledef',
      bl:'purpledef',
    };
  },
  methods: {
    sidebardark() {
      this.theme = "dark";
      this.themetext = "darktext";
    },
    sidebarlight() {
      this.theme = "light";
      this.themetext = "lighttext";
    },
    ghalebdark() {
      this.themebdy = "darkbody";
      this.themetextgh = 'darktext'
    },ghaleblight() {
      this.themebdy = "lightmbody";
      this.themetextgh = 'lighttext'
    },
    togglenavleft() {
      this.showleft =
        this.showleft === "rightsidebarclk"
          ? "rightsidebardef"
          : "rightsidebarclk";
    },
    closesidebar(){
      this.widthnavright = this.widthnavright === 'wnavrightdef'
      ? 'wnavrightclk'
      : 'wnavrightdef'

      this.showlogo = this.showlogo === 'shlogo'
      ? 'dellogo'
      : 'shlogo'

      this.iconnav = this.iconnav === 'iconnavdef'
      ? 'iconnavclk'
      : ' iconnavdef'

      this.navtop = this.navtop === 'navtopdef'
      ? 'navtopclk'
      : 'navtopdef'
      this.imgprofl = this.imgprofl === 'imgprodef'
      ? 'imgproclk'
      : 'imgprodef'

      this.togmnu = this.togmnu === 'showemnu'
      ? 'hidemnu'
      : 'showmnu'

      this.togmnuresp = this.togmnuresp === 'hidemnures'
      ? 'showmnures'
      : 'hidemnures'

      this.asideres = this.asideres === 'asidedef'
      ? 'asideclk'
      : 'asidedef'

     
     const sec = document.getElementsById('section')
      sec.classList.add('mysec')
    },
    closesidebarres(){
      this.widthnavrightres = this.widthnavrightres === 'wnavrighrestdef'
      ? 'wnavrightresclk'
      : 'wnavrighrestdef'

     
      
    },
    pur(){
      // this.purpl = this.purpl === 'purpledef'
      // ? 'purpleclk'
      // : 'purpledef'
     const pur = document.getElementsById('navbar')
     pur.classList.toggle('purpleclk')
    },

    // blu(){
    //   this.bl = this.bl === 'purpledef'
    //   ? 'blueclk'
    //   : 'purpledef'
    // },
  //   hoverside(){
  // this.asideres = this.asideres === 'asidedef'
      
  //    }
  },

 };
</script>

<style>
.mysec{
  margin: 0 !important;
}
</style>