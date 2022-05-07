<template>
  <section class="content">
    <div class="container-fluid">
      <!-- start breadcrumb -->
      <div class="block-header">
        <div class="row">
          <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
            <ul class="breadcrumb breadcrumb-style">
              <li class="breadcrumb-item">
                <h4 class="page-title">محصولات</h4>
              </li>
              <li class="breadcrumb-item bcrumb-1">
                <a href="#">
                  <i class="fa fa-home"></i>
                  خانه
                </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> فروشگاه </a>
              </li>
              <li class="breadcrumb-item bcrumb-2">
                <a href="#"> محصولات </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <!-- end breadcrumb -->
      <!-- start product -->
      <div class="row clearfix">
        <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
          <div class="card">
            <div class="body">
              <div class="row">
                <store-pro :src1="src11" :src2="src12" />
                <store-pro :src1="src21" :src2="src22" />
                <store-pro :src1="src31" :src2="src32" />
                <store-pro :src1="src41" :src2="src42" />
                <store-pro :src1="src51" :src2="src52" />
                <store-pro :src1="src61" :src2="src62" />
                <store-pro :src1="src71" :src2="src72" />
                <store-pro :src1="src81" :src2="src82" />
                <store-pro :src1="src91" :src2="src92" />
                <store-pro :src1="src101" :src2="src102" />
                <store-pro :src1="src111" :src2="src112" />
                <store-pro :src1="src121" :src2="src122" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- end product -->
    </div>
  </section>
</template>

<script>
import { ref } from "@vue/reactivity";
import storePro from "./store-pro.vue";
export default {
  components: { storePro },
  setup() {
    const src11 = ref(require("../assets/images/p7.jpg"));
    const src12 = ref(require("../assets/images/p7-1.jpg"));
    const src21 = ref(require("../assets/images/p8.jpg"));
    const src22 = ref(require("../assets/images/p8-1.jpg"));
    const src31 = ref(require("../assets/images/p9.jpg"));
    const src32 = ref(require("../assets/images/p9-1.jpg"));
    const src41 = ref(require("../assets/images/p10.jpg"));
    const src42 = ref(require("../assets/images/p10-1.jpg"));
    const src51 = ref(require("../assets/images/p11.jpg"));
    const src52 = ref(require("../assets/images/p11-1.jpg"));
    const src61 = ref(require("../assets/images/p12.jpg"));
    const src62 = ref(require("../assets/images/p12-1.jpg"));
    const src71 = ref(require("../assets/images/p8.jpg"));
    const src72 = ref(require("../assets/images/p8-1.jpg"));
    const src81 = ref(require("../assets/images/p7.jpg"));
    const src82 = ref(require("../assets/images/p7-1.jpg"));
    const src91 = ref(require("../assets/images/p8.jpg"));
    const src92 = ref(require("../assets/images/p8-1.jpg"));
    const src101 = ref(require("../assets/images/p9.jpg"));
    const src102 = ref(require("../assets/images/p9-1.jpg"));
    const src111 = ref(require("../assets/images/p10.jpg"));
    const src112 = ref(require("../assets/images/p10-1.jpg"));
    const src121 = ref(require("../assets/images/p11.jpg"));
    const src122 = ref(require("../assets/images/p11-1.jpg"));

    return {
      src11,
      src12,
      src21,
      src22,
      src32,
      src31,
      src41,
      src42,
      src51,
      src52,
      src61,
      src62,
      src71,
      src72,
      src81,
      src82,
      src91,
      src92,
      src101,
      src102,
      src111,
      src112,
      src121,
      src122,
    };
  },
};
</script>

<style>
</style>