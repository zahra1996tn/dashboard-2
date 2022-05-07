<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">مدیریت تگ</h4>
              </li>
              <li class="breadcrumb-item bcrumb-1">
                <a href="#">
                  <i class="fa fa-home"></i>
                  خانه
                </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> مدیریت محتوا </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> مدیریت تگ </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="dt-buttons">
            <button class="btn btn-dark btn-circle">
              <span> کپی </span>
            </button>
            <button class="btn btn-info btn-circle">
              <span> csv </span>
            </button>
            <button class="btn btn-success btn-circle">
              <span> اکسل </span>
            </button>
            <button class="btn btn-danger btn-circle">
              <span> pdf </span>
            </button>
            <button class="btn btn-primary btn-circle">
              <span> چاپ </span>
            </button>
          </div>
          <div class="row">
            <div class="col-lg-4 col-md-12 col-sm-12">
                <section>              
              <div class="card">
                <div class="header top-head-pro">
                  <h6 class="text-center"> مدیریت تگ ها </h6>
                  <img src="../assets/images/usrbig.jpg" alt="">
                </div>
                <div class="body">
                  <form class="add-project">
                    <div class="form-group">
                      <input
                        type="number"
                        placeholder="شماره"
                        class="form-control in1"
                      />
                    </div>
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="عنوان"
                        class="form-control in2"
                      />
                    </div>
                    <button class="btn btn-info btn-save-change">
                     افزودن
                    </button>
                  </form>
                </div>
              </div>

              </section>
            </div>
              
            <div class="col-lg-8 col-md-12 col-sm-12">
              <div class="card">
                <div class="body">
                  <div class="table-responsive">
                    <div class="tableExport_wrapper">
                      <form>
                        <table class="table dataTable">
                          <tbody>
                            <tr role="row">
                              <td class="center">
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="1"
                                />
                              </td>
                              <td class="center">
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="داشبورد"
                                />
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-delete">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td class="center">
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="2"
                                />
                              </td>
                              <td class="center">
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="تبدیل ارز"
                                />
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-delete">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td class="center">
                                <input
                                  type="number"
                                  class="form-control"
                                  placeholder="3"
                                />
                              </td>
                              <td class="center">
                                <input
                                  type="text"
                                  class="form-control"
                                  placeholder="وضعیت اب و هوا"
                                />
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-delete">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </form>
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
export default {};
</script>

<style>
</style>