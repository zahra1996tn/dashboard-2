<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">مدیریت پروژه</h4>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> مدیریت محتوا </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> مدیریت پروژه </a>
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
            <!-- <div class="col-lg-4 col-md-12 col-sm-12">
                <section>              
              <div class="card">
                <div class="header top-head-pro">
                  <h6 class="text-center"> مدیریت پروژه </h6>
                  <img src="../assets/images/usrbig.jpg" alt="">
                </div>
                <div class="body">
                  <form class="add-project">
                    <div class="form-group">
                      <input
                        type="text"
                        placeholder="عنوان"
                        class="form-control in2"
                        v-model="tag"
                      />
                    </div>
                  </form>
                  <router-link to="addproject">  <button class="btn btn-info btn-save-change" type="submit" >
                      ایجاد پروژه
                    </button></router-link>
                </div>
              </div>
              </section>
            </div> -->
              
            <div class="col-lg-12 col-md-12 col-sm-12">
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
                                داشبورد
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-edit">
                                  <i class="fa fa-pencil"></i>
                                </a>
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
                                تبدیل ارز
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-edit">
                                  <i class="fa fa-pencil"></i>
                                </a>
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
                                وضعیت اب و هوا
                              </td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-edit">
                                  <i class="fa fa-pencil"></i>
                                </a>
                                <a href="#" class="btn btn-tbl-delete">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr
                              class="row"
                              v-for="(item, index) in items2"
                              :key="index"
                            >
                              <td class="center">{{ index+1 }}</td>
                              <td class="center">{{ item }}</td>
                              <td class="center">
                                <a href="#" class="btn btn-tbl-edit">
                                  <i class="fa fa-pencil"></i>
                                </a>
                                <a @click="removetodo(index)" href="#" class="btn btn-tbl-delete">
                                <i class="fa fa-trash"> </i>
                                </a>
                                </td>
                            </tr>
                          </tbody>
                        </table>
                  <router-link to="addproject">  <button class="btn btn-info btn-save-change" type="submit" >
                      ایجاد پروژه
                    </button></router-link>
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
      items2: [],
      tag: "",
    };
  },
  methods: {
    addtodopro() {
      if (this.tag == "") {
        alert("enter value!");
      } else {
        this.items2.push(this.tag);
        this.tag = "";
      }
    },
    removetodo(index){
      this.items2.splice(index, 1);
    }
  }

};
</script>

<style scoped>
.row{
  margin:15px 0 !important;
}

</style>