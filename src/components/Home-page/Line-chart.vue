<template>
  <div class="card">
    <div class="header">
      <h5>
        <strong> نمودار </strong>
        میانگین
      </h5>
      <ul class="header-dropdown dropdown">
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
      <div class="chartsh">
        <div class="box-chartsh">
          <line-chart class="linechart" :data="data" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [
        {
          name: "Workout",
          data: {
            2001: 2,
            2002: 0,
            2003: 2,
            2004: 5,
            2005: 3,
            2006: 2,
            2007: 0,
          },
        },
        {
          name: "Call parents",
          data: {
            2001: 8,
            2002: 7,
            2003: 15,
            2004: 13,
            2005: 3,
            2006: 2,
            2007: 0,
          },
        },
      ],
    };
  },
};
</script>

<style>
</style>