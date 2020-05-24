<template>
  <div>
    <div class="teacher-about">
      <div class="row">
        <!-- MOBILE PROFILE PHOTO -->
        <div class="col-3 d-md-none">
          <div class="avatar avatar-square avatar_xxl">
            <img src="@/assets/images/TeacherOneLg.png" alt class="avatar-img">
          </div>
        </div>

        <!-- TEACHER INFO -->
        <div class="col-9">
          <div class="title text-uppercase font-weight-bold brand_primary">Teacher</div>

          <!-- TEACHER NAME -->
          <div class="teacher-name brand_navy font-weight-bold">Aderonke Oko</div>

          <!-- SUBJECTS -->
          <div class="subjects color_grey_dark">Mathematics, Further Mathematics, Physics</div>

          <!-- ACTIVITY -->
          <div class="activity d-flex justify-content-start align-items-center">
            <!-- CLASS TAUGHT -->
            <div class="class-taught">
              <!-- ACTIVITY COUNT -->
              <div class="count font-weight-bold brand_navy">
                14
                <span class="font-weight-normal color_grey_dark">Classes</span>
              </div>
              <div class="count-item color_ash">Taught</div>
            </div>

            <!-- HOMEWORK ASSIGNED -->
            <div class="homework-assigned">
              <!-- ACTIVITY COUNT -->
              <div class="count font-weight-bold brand_navy">
                12
                <span class="font-weight-normal color_grey_dark">Homework</span>
              </div>
              <div class="count-item color_ash">Assigned</div>
            </div>
          </div>
        </div>

        <!-- ACTIVITY BUTTON -->
        <div class="col-12 button-row d-flex justify-content-start align-items-center d-md-none">
          <!-- MESSAGE BUTTON -->
          <button class="btn btn-md btn-inverse color_text mr-3" @click="$emit('toggleMessage')">
            <span class="icon-chat mr-2 font-16"></span> Send a Message
          </button>

          <!-- REMOVE BUTTON -->
          <button class="btn btn-md transparent_bg text-capitalize ml-3 color_ash">Remove from Class</button>
        </div>
      </div>

      <!-- ABOUT ME -->
      <div class="row">
          <div class="col-12 about-me-block">
              <!-- TITLE -->
              <div class="page-title color_text font-weight-bold">About Me</div>

              <!-- ABOUT TEXT -->
              <div class="about-text color_ash">
                  I have a BS and MS in Mechanical Engineering from Santa Clara University and years of experience as a professional instructor and trainer for Data Science and programming. He has publications and patents in various fields such as microfluidics, materials science, and data science technologies. Over the course of his career he has developed a skill set in analyzing data and he hopes to use his experience in teaching and data science to help other people learn the power of programming the ability to analyze data, as well as present the data in clear and beautiful visualizations.
              </div>

              <div class="contact-block">
                  <!-- MOBILE PHONE -->
                  <div>
                      <span class="icon icon-phone"></span>
                      <span class="info color_text">+234 803 786 2234</span>
                  </div>

                  <!-- EMAIL ADDRESS -->
                  <div>
                      <span class="icon icon-email"></span>
                      <span class="info color_text">johnhorace@christland.com</span>
                  </div>

                  <!-- HOUSE ADDRESS -->
                  <div>
                      <span class="icon icon-map"></span>
                      <span class="info color_text">34 Louisiana Estate, Dakwo, Abuja, Nigeria</span>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutMeSection"
};
</script>

<style>
</style>
