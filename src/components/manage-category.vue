<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">مدیریت دسته بندی ها</h4>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> مدیریت محتوا </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> مدیریت دسته بندی ها </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <div class="row clearfix">
        <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12 col-sm-12">
              <section>
                <div class="card">
                  <div class="body">
                    <form class="add-project form-categ">
                      <div class="form-group fm-cate">
                        <label class="mb-0">نام:</label>
                        <input
                          type="text"
                          placeholder="ارز دیجیتال"
                          class="form-control in2"
                          v-model="cate"
                        />
                        <div class="switch switchadd">
                          <label>
                            <input type="checkbox" checked />
                            <span class="lever switch-col-green"></span>
                          </label>
                        </div>
                      </div>
                    </form>
                    <button
                      class="btn btn-info btn-save-change"
                      type="submit"
                      @click="addtodo()"
                    >
                      ثبت
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div class="row justify-content-center">
            <div class="col-lg-10 col-md-12 col-sm-12">
              <div class="card">
                <div class="body">
                  <div class="table-responsive">
                    <div class="tableExport_wrapper">
                      <form>
                        <table class="table dataTable">
                          <tbody>
                            <tr role="row">
                              <td class="center">1</td>
                              <td class="center td-num">داشبورد</td>
                              <td class="center">
                                <div class="switch">
                                  <label>
                                    <input type="checkbox" checked />
                                    <span class="lever switch-col-green"></span>
                                  </label>
                                </div>
                                <a href="#" class="btn btn-tbl-delete1">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td class="center">2</td>
                              <td class="center td-num">تبدیل ارز</td>
                              <td class="center">
                                <div class="switch">
                                  <label>
                                    <input type="checkbox" checked />
                                    <span class="lever switch-col-green"></span>
                                  </label>
                                </div>
                                <a href="#" class="btn btn-tbl-delete1">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr role="row">
                              <td class="center">3</td>
                              <td class="center td-num">وضعیت اب و هوا</td>
                              <td class="center">
                                <div class="switch">
                                  <label>
                                    <input type="checkbox" checked />
                                    <span class="lever switch-col-green"></span>
                                  </label>
                                </div>
                                <a href="#" class="btn btn-tbl-delete1">
                                  <i class="fa fa-trash"></i>
                                </a>
                              </td>
                            </tr>
                            <tr
                              class="row"
                              v-for="(item, index) in items"
                              :key="index"
                            >
                              <td class="center">{{ index + 1 }}</td>
                              <td class="center td-num">{{ item }}</td>
                              <td class="center">
                                <div class="switch">
                                  <label>
                                    <input type="checkbox" checked />
                                    <span class="lever switch-col-green"></span>
                                  </label>
                                </div>
                                <a href="#" class="btn btn-tbl-delete1">
                                  <i
                                    @click="removetodo(index)"
                                    class="fa fa-trash"
                                  >
                                  </i>
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
export default {
  
  data() {
    return {
      items: [],
      cate: "",
    };
  },
  methods: {
    
    addtodo() {
      if (this.cate == "") {
        alert("enter value!");
      } else {
        this.items.push(this.cate);
        this.cate = "";
      }
    },
    removetodo(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
.row {
  margin: 0 !important;
}
tr {
  display: flex;
}
</style>