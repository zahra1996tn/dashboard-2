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
                    <h6 class="text-center">مدیریت تگ ها</h6>
                    <img src="../assets/images/usrbig.jpg" alt="" />
                  </div>
                  <div class="body">
                    <form class="add-project" @submit.prevent="checktag">
                      <div class="form-group">
                        <input
                          type="text"
                          placeholder="عنوان"
                          class="form-control in2"
                          v-model="tag"
                        />
                        <p class="errtagg" v-if="errorstag.length">
                            <ul>
                              <li v-for="error in errorstag" :key="error">{{ error }}</li>
                            </ul>
                          </p>
                      </div>
                    <button
                      class="btn btn-info btn-save-change"
                      @click="addtodo"
                      type="submit"
                    >
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
                                1
                              </td>
                              <td class="center">
                                تگ 1
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-delete">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td class="center">
                                2
                              </td>
                              <td class="center">
                                تگ 2
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-delete">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td class="center">
                                3
                              </td>
                              <td class="center">
                                تگ 3
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-delete">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr
                              class="row rowtag"
                              v-for="(item, index) in items"
                              :key="index"
                            >
                              <td class="center">{{ index+1 }}</td>
                              <td class="center">{{ item }}</td>
                              <td class="center">
                                <a @click="removetodo(index)" href="#" class="btn btn-tbl-delete">
                                <i class="fa fa-trash"> </i>
                                </a></td>
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
export default {
  data() {
    return {
      items: [],
      tag: "",
      active: false,
      errorstag: [],
    };
  },
  methods: {
    addtodo() {
      if (this.tag == "") {
        this.errorstag.push("عنوان تگ را وارد کنید");
      } else if (this.tag.length < 5 || this.tag.length > 15) {
        this.errorstag.push("عنوان تگ باید بیشتر از 5 کاراکتر باشد");
      } else {
        this.errorstag = [];
        this.items.push(this.tag);
        this.tag = "";
        this.active = true;
      }
    },
    removetodo(index) {
      this.items.splice(index, 1);
    },
    // checktag(){
    //   this.errorstag = []
    //    if (!this.tag) {
    //     this.errorstag.push("عنوان تگ را وارد کنید");
    //   }
    //   else if (/[A-Z]/.g.test(this.tag) == false) {
    //     this.errorstag.push("عنوان باید رشته باشد");
    //   }
    //    else if (this.tag.length < 5 || this.tag.length > 15) {
    //     this.errorstag.push("عنوان تگ باید بیشتر از 5 کاراکتر باشد");
    //   }

    // }
  },
};
</script>

<style scoped>
.row {
  margin: 15px 0 !important;
}

.mail {
  position: relative;
  margin-bottom: 15px;
}
.mail input {
  height: 40px;
  width: 100%;
  border: solid 1px #999;
  border-radius: 20px;
  padding-right: 10px;
}
.mail label {
  position: absolute;
  top: -7px;
  font-size: 12px;
  white-space: nowrap;
  background: #fff;
  text-align: right;
  right: 15px;
  padding: 0 5px;
  color: #999;
  pointer-events: none;
}
.errtagg {
  color: red;
}
</style>