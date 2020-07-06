<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <!-- TITLE -->
          <h2 class="brand_primary font-weight-bold mt-4">Accessible Gradely Pages</h2>

          <ul class="list-unstyled mt-3">
            <li class="brand_navy">
              AUTH PAGES
              <ul class="list-unstyled ml-4 mt-2">
                <!-- LOGIN -->
                <li class="mb-2">
                  <router-link to="/login" class="btn-link">
                    <span class="icon-arrow-right"></span> LOGIN
                  </router-link>
                </li>

                <!-- FORGET PASSWORD -->
                <li class="mb-2">
                  <router-link to="/forget_password" class="btn-link">
                    <span class="icon-arrow-right"></span> FORGET PASSWORD
                  </router-link>
                </li>

                <!-- RESET PASSWORD -->
                <li class="mb-2">
                  <router-link to="/reset_password" class="btn-link">
                    <span class="icon-arrow-right"></span> RESET PASSWORD
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <!-- PAGES -->
          <ul class="list-unstyled mt-3">
            <li class="brand_navy">
              SCHOOL PAGES
              <ul class="list-unstyled ml-4 mt-2">
                <!-- SCHOOL SIGNUP -->
                <li class="mb-2">
                  <router-link to="/school/signup" class="btn-link">
                    <span class="icon-arrow-right"></span> SCHOOL SIGN UP
                  </router-link>
                </li>

                <!-- SCHOOL ONBOARDING -->
                <li class="mb-2">
                  <router-link to="/school/onboarding" class="btn-link">
                    <span class="icon-arrow-right"></span> SCHOOL ONBOARDING
                  </router-link>
                </li>

                <!-- SCHOOL DASBOARD -->
                <li class="mb-2">
                  <router-link to="/school/dashboard" class="btn-link">
                    <span class="icon-arrow-right"></span> SCHOOL DASHBOARD
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="list-unstyled mt-3">
            <li class="brand_navy">
              TEACHER PAGES
              <ul class="list-unstyled ml-4 mt-2">
                <!-- TEACHER SIGNUP -->
                <li class="mb-2">
                  <router-link to="/teacher/signup" class="btn-link">
                    <span class="icon-arrow-right"></span> TEACHER SIGN UP
                  </router-link>
                </li>

                <!-- TEACHER ONBOARDING -->
                <li class="mb-2">
                  <router-link to="/teacher/onboarding" class="btn-link">
                    <span class="icon-arrow-right"></span> TEACHER ONBOARDING
                  </router-link>
                </li>

                <!-- TEACHER DASBOARD -->
                <li class="mb-2">
                  <router-link to="/teacher/dashboard" class="btn-link">
                    <span class="icon-arrow-right"></span> TEACHER DASHBOARD
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="list-unstyled mt-3">
            <li class="brand_navy">
              PARENT PAGES
              <ul class="list-unstyled ml-4 mt-2">
                <!-- PARENT SIGNUP -->
                <li class="mb-2">
                  <router-link to="/parent/signup" class="btn-link">
                    <span class="icon-arrow-right"></span> PARENT SIGN UP
                  </router-link>
                </li>

                <!--PARENT ONBOARDING -->
                <li class="mb-2">
                  <router-link to="/parent/onboarding/new_child" class="btn-link">
                    <span class="icon-arrow-right"></span> PARENT ONBOARDING
                  </router-link>
                </li>

                <!--PARENT DASBOARD -->
                <li class="mb-2">
                  <router-link to="/parent/dashboard" class="btn-link">
                    <span class="icon-arrow-right"></span> PARENT DASHBOARD
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>

          <ul class="list-unstyled mt-3">
            <li class="brand_navy">
              STUDENT PAGES
              <ul class="list-unstyled ml-4 mt-2">
                <!-- STUDENT SIGNUP -->
                <li class="mb-2">
                  <router-link to="/student/signup" class="btn-link">
                    <span class="icon-arrow-right"></span> STUDENT SIGN UP
                  </router-link>
                </li>

                <!--STUDENT ONBOARDING -->
                <li class="mb-2">
                  <router-link to="/student/onboarding" class="btn-link">
                    <span class="icon-arrow-right"></span> STUDENT ONBOARDING
                  </router-link>
                </li>

                <!--STUDENT DASBOARD -->
                <li class="mb-2">
                  <router-link to="/student/dashboard" class="btn-link">
                    <span class="icon-arrow-right"></span> STUDENT DASHBOARD
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "index"
};
</script>

<style>
</style>
