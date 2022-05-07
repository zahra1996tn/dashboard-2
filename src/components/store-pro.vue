<template>
  <div class="col-md-3 col-sm-6 box-store-pro">
    <div class="product-grid">
      <div class="product-image">
        <a href="#">
          <img :src="src1" class="pic-1" />
          <img :src="src2" class="pic-2" />
        </a>
        <ul class="social">
          <li>
            <a href="#">
              <i class="fa fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-shopping-bag"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-shopping-cart"></i>
            </a>
          </li>
        </ul>
        <span class="product-new-label"> حراج </span>
        <span class="product-discount-label"> 20% </span>
      </div>
      <ul class="rating">
        <li class="fa fa-star"></li>
        <li class="fa fa-star"></li>
        <li class="fa fa-star"></li>
        <li class="fa fa-star"></li>
        <li class="fa fa-star"></li>
      </ul>
      <div class="product-content">
        <h3 class="title">
          <a href="#"> دوربین حرفه ای </a>
        </h3>
        <div class="price">
          1600 تومان
          <span> 2000 تومان </span>
        </div>
        <a href="#" class="add-to-cart"> افزودن به سبد خرید </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    props:['src1','src2']
};
</script>

<style>
</style>