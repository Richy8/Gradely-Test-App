<template>
  <div>
    <div class="container px-1 d-none d-md-block">
      <div class="row">
        <div class="col-12">
          <div class="breadcrumb-row px-0">
            <!-- BREADCRUNB -->
            <div class="breadcrumb">
              <div class="breadcrumb-item">{{ class_name }}</div>
              <div class="breadcrumb-item">
                <router-link to="/school/dashboard/class/members">Members</router-link>
              </div>
              <div class="breadcrumb-item active">{{ profile_type }}</div>
            </div>

            <!-- BREAD CRUMB NAVIGATION -->
            <div class="breadcrumb-nav">
              <div class="nav nav-left" title="Next">
                <i class="fas fa-caret-left"></i>
              </div>
              <div class="page">
                <span class="current">{{ current_page }}</span>/
                <span class="total">{{ total_page }}</span>
              </div>
              <div class="nav nav-right" title="Prev">
                <i class="fas fa-caret-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",

  props: {
    class_name: String,
    profile_type: String,
    current_page: Number,
    total_page: Number
  }
};
</script>

<style lang="scss" scoped>
</style>
