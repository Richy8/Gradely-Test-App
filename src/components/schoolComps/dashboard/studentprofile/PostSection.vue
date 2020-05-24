<template>
  <div>
    <div class="student-post-section profile-block d-none d-md-block">
      <div class="title-row d-flex justify-content-between align-items-center nowrap">
        <!-- TITLE -->
        <div class="title-bold color_text text-uppercase">Posts</div>

        <!-- VIEW ALL -->
        <div class="view-all">
          <span class="btn-link font-weight-bold">See all</span>
        </div>
      </div>

      <!-- POST DATA ROW -->
      <div class="post-row d-flex justify-content-start align-items-center nowrap">
        <!-- POST DATA COMPONENT -->
        <PostData></PostData>
        <PostData></PostData>
        <PostData></PostData>
        <!-- POST DATA COMPONENT -->
      </div>
      
    </div>
  </div>
</template>

<script>
import PostData from "@/components/schoolComps/dashboard/studentprofile/PostData";

export default {
  name: "PostSection",

  components: {
    PostData
  }
};
</script>

<style>
</style>
