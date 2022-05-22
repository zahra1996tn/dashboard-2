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
          <form action="">

      <div class="card">
        <div class="card-body">
          <label> مقاله: </label>
          <textarea
            name="editor1"
            id="editor1"
            cols="5"
            rows="10"
            data-sample-short
          ></textarea>
        </div>
      </div>
      <div class="card">
        <div class="card-body">
          <div class="box-file">
            <div class="form-group">
                <label for=""> فایل: </label>
              <div class="uploader">
                <input type="text" class="file-name" readonly />
                <input size="30" id="file1" type="file" />
                <input type="button" class="upbutton" value="انتخاب فایل" />
              </div>
            </div>
            <div class="form-group">
                <label for=""> عکس: </label>
              <div class="uploader">
                <input type="text" class="file-name" readonly />
                <input size="30" id="file1" type="file" />
                <input type="button" class="upbutton" value="انتخاب فایل" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card"></div>

      <div class="card">
        <div class="card-body">
          <div class="box-file m-b-60">
            <div class="form-group">
              <label> دسته بندی: </label>
              <select class="form-control">
                <option selected> دسته اول </option>
                <option value=""> دسته دوم </option>
              </select>
            </div>
            <div class="form-group">
              <label> تگ: </label>
              <select class="form-control">
                <option selected> تگ اول </option>
                <option value=""> تگ دوم </option>
              </select>
            </div>
          </div>
          <div class="box-file">
            <div class="form-group">
              <label for=""> رتبه بندی </label>
              <select class="form-control">
                <option selected>ضعیف</option>
                <option value="">متوسط</option>
                <option value="">خوب</option>
                <option value="">عالی</option>
              </select>
            </div>
            <div class="form-group">
              <label for=""> وضعیت </label>
              <select class="form-control">
                <option selected>فعال</option>
                <option value="">غیرفعال</option>
              </select>
            </div>
            <div class="form-group">
              <label for=""> کامنت </label>
              <select class="form-control">
                <option selected>فعال</option>
                <option value="">غیرفعال</option>
              </select>
            </div>
          </div>
      <div class="field-ck">
         <button class="ck-button" type="submit"> ثبت </button>
      </div>
        </div>
      </div>
</form>
      <!-- <div id="myDIV">
  <button class="btn">1</button>
  <button class="btn active">2</button>
  <button class="btn">3</button>
  <button class="btn">4</button>
  <button class="btn">5</button>
</div>       -->
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";
export default {
  props: ["content"],
  setup(props) {
    const content = ref(props.content);
    let ckEditor;
    onMounted(() => {
      ckEditor = window.CKEDITOR.replace("editor1", {
        uiColor: "#CCEAEE",
      });
      ckEditor.setData(content.value);
    });

    const header = ref('document.getElementById("myDIV")');
    var btns = ref('header.getElementsByClassName("btn")');

    for (var i = 0; i < btns.length; i++) {
      btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
      });
    }
    return { header };
  },
};
</script>

<style>
label {
  font-weight: 800;
}
select {
  width: 50% !important;
}

</style>