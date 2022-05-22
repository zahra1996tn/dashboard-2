<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">کاربران</h4>
              </li>
              <li class="breadcrumb-item bcrumb-1">
                <a href="#"> خانه </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> مدیریت کاربران </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> کاربران</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="body">
              <button
                class="btn btn-info btn-save-change"
                type="button"
                data-toggle="modal"
                data-target=".bd-example-modal-lg"
              >
                افزودن کاربر جدید
              </button>
              <form class="add-project form-categ form-user"
              >
                <div class="row">
                  <div class="form-group">
                    <p class="text-add-form" >شماره</p>
                  </div>
                  <div class="form-group"
                  >
                    <p class="text-add-form"> نام</p>
                  </div>
                  <div class="form-group"
                  >
                    <p class="text-add-form" >ایمیل</p>
                  </div>
                </div>
                <div class="row">
                  <div class="form-group"
                  >
                    <p class="text-add-form" >شماره تماس</p>
                  </div>
                  <div class="form-group">
                    <p class="text-add-form" >نقش</p>
                  </div>
                  <div class="form-group box-del-edt-user">
                    <a
                      href="#"
                      class="btn btn-tbl-edit-user ml-1"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg2"
                    >
                      <i class="fa fa-pencil ml-1 align-middle"></i>ویرایش
                    </a>
                    <a
                      href="#"
                      class="btn btn-tbl-delete-user"
                      data-toggle="modal"
                      data-target=".bd-example-modal-lg3"
                    >
                      <i class="fa fa-trash ml-1 align-middle"></i>حذف
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!--  modal add user -->
  <div
    class="modal fade modal-add-user bd-example-modal-lg"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
         <h5 class="modal-title title-edit-user title-add-user" id="exampleModalLabel">
          افزودن کاربر جدید
        </h5>
        </div>
        <div class="modal-body fields">
             <form action="" @submit.prevent="checkform">
                <div class="mail">
                  <input type="text"  v-model="username">
                  <label> نام </label>
                </div>
                    <p class="mt-2" v-if="errorsusername.length">
                        <ul>
                           <li v-for="error in errorsusername" :key="error">{{ error }}</li>
                         </ul>
                      </p>
                <div class="mail">
                  <input type="email" v-model="email">
                  <label> ایمیل </label>
                </div>
                        <p v-if="errorsemail.length">
                            <ul>
                              <li v-for="errorem in errorsemail" :key="errorem">{{ errorem }}</li>
                            </ul>
                          </p>
                <div class="mail">
                  <input type="email"  v-model="password">
                  <label> رمزعبور </label>
                  </div>
                    <p v-if="errorspassword.length">
                        <ul>
                          <li v-for="errorpass in errorspassword" :key="errorpass">{{ errorpass }}</li>
                        </ul>
                      </p>
                <div class="mail">
                  <input type="email"  v-model="mobile">
                  <label> شماره تماس </label>
                  </div>
                    <p v-if="errorsmobile.length">
                        <ul>
                          <li v-for="errormob in errorsmobile" :key="errormob">{{ errormob }}</li>
                        </ul>
                      </p>
                    <button class="signin-button" type="submit"> ثبت نام </button>
              </form>
        </div>
        <div class="modal-footer mf-button">
          <button type="button" class="btn text-muted" data-dismiss="modal">
            انصراف
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- modal edit user -->
  <div
    class="modal fade modal-add-user bd-example-modal-lg2"
    id="exampleModal"
    tabindex="-1"
    role="dialog"
    aria-labelledby="myLargeModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog" role="document">
      <div class="modal-content modal-cont-add-user">
        <div class="modal-header justify-content-center"><h5
          class="modal-title title-edit-user title-add-user"
          id="exampleModalLabel2"
        >
          بروزرسانی اطلاعات کاربر
        </h5></div>
        
        <div class="modal-body fields">
             <form action="" @submit.prevent="checkform">
                <div class="mail">
                  <input type="text"  v-model="username">
                  <label> نام </label>
                </div>
                    <p class="mt-2" v-if="errorsusername.length">
                        <ul>
                           <li v-for="error in errorsusername" :key="error">{{ error }}</li>
                         </ul>
                      </p>
                <div class="mail">
                  <input type="email" v-model="email">
                  <label> ایمیل </label>
                </div>
                        <p v-if="errorsemail.length">
                            <ul>
                              <li v-for="errorem in errorsemail" :key="errorem">{{ errorem }}</li>
                            </ul>
                          </p>
                <div class="mail">
                  <input type="email"  v-model="password">
                  <label> رمزعبور </label>
                  </div>
                    <p v-if="errorspassword.length">
                        <ul>
                          <li v-for="errorpass in errorspassword" :key="errorpass">{{ errorpass }}</li>
                        </ul>
                      </p>
                <div class="mail">
                  <input type="email"  v-model="mobile">
                  <label> شماره تماس </label>
                  </div>
                    <p v-if="errorsmobile.length">
                        <ul>
                          <li v-for="errormob in errorsmobile" :key="errormob">{{ errormob }}</li>
                        </ul>
                      </p>
                <div class="mail">
                  <input type="email"  v-model="role">
                  <label> نقش </label>
                  </div>
                    <p v-if="errorsrole.length">
                        <ul>
                          <li v-for="errorro in errorsrole" :key="errorro">{{ errorro }}</li>
                        </ul>
                      </p>
                    <button class="signin-button" type="submit"> ثبت </button>
              </form>
        </div>
        <div class="modal-footer mf-button">
          <button type="button" class="btn text-muted" data-dismiss="modal">
            انصراف
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      errorsusername: [],
      errorspassword: [],
      errorsmobile: [],
      errorsemail: [],
      errorsrole: [],
      password: null,
      adduser: false,

      items: [{}],
      itemname: [],
      itememail: [],
      itemmobile: [],
      tag: "",
      username: "",
      email: "",
      mobile: "",
      role: "",
    };
  },
  methods: {
    checkform() {
      this.errorsusername = [];
      this.errorspassword = [];
      this.errorsemail = [];
      this.errorsmobile = [];
      this.errorsrole = [];

      if (!this.username) {
        this.errorsusername.push("نام کاربری را وارد کنید");
      } else if (this.username.length < 5 || this.username.length > 15) {
        this.errorsusername.push("نام کاربری باید بین 5 تا 15 کاراکتر باشد");
      } else if (!this.email) {
        this.errorsemail.push("ایمیل را وارد کنید");
      } else if (
        /^[a-z0-9._-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(this.email) == false
      ) {
        this.errorsemail.push("لطفا یک ایمیل معتبر وارد کنید");
      } else if (!this.password) {
        this.errorspassword.push("پسورد را وارد کنید");
      } else if (this.password.length < 8) {
        this.errorspassword.push("پسورد باید بیشتر از 8 کاراکتر باشد");
      } else if (/\d/.test(this.password) == false) {
        this.errorspassword.push("پسورد باید شامل حداقل یک عدد باشد");
      } else if (/[A-Z]/g.test(this.password) == false) {
        this.errorspassword.push("پسورد باید شامل حداقل یک حرف بزرگ باشد");
      } else if (!this.mobile) {
        this.errorsmobile.push(" شماره تماس را وارد کنید");
      } else if (
        this.mobile.match(
          /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
        ) == false
      ) {
        this.errorsmobile.push("یک شماره تماس معتبر وارد کنید");
      } else if (!this.role) {
        this.errorsrole.push("  نوع کاربری را وارد کنید");
      } else {
        alert("successfull !");
        this.adduser = true;
      }
    },
    removetodo(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style scoped>
tr td {
  position: relative;
  z-index: 555;
  margin: 10px auto !important;
}

tr {
  display: flex;
}

i {
  cursor: pointer;
}

/* .mail {
  position: relative;
  margin-bottom: 25px;
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
} */
p {
  font-size: 13px;
  padding: 5px 0;
}
</style>