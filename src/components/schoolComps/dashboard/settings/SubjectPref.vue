<template>
  <div>
    <div class="school-preference">
      <form @submit.prevent>
        <!-- CARD ONE -->
        <div class="preference-card">
          <div class="checkbox">
            <label for="subjectOne" class="label label-sm label-active">
              <!-- INPUT -->
              <input type="checkbox" id="subjectOne" @change="onChecked" v-model="form.maths">
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title title-sm">Mathematics</div>
              </div>
            </label>
          </div>
        </div>
        <!-- CARD ONE -->

        <!-- CARD TWO-->
        <div class="preference-card">
          <div class="checkbox">
            <label for="subjectTwo" class="label label-sm">
              <!-- INPUT -->
              <input type="checkbox" id="subjectTwo" @change="onChecked" v-model="form.english">
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title title-sm">English Language</div>
              </div>
            </label>
          </div>
        </div>
        <!-- CARD TWO-->

        <!-- CARD TWO-->
        <div class="preference-card">
          <div class="checkbox">
            <label for="subjectThree" class="label label-sm">
              <!-- INPUT -->
              <input
                type="checkbox"
                id="subjectThree"
                @change="onChecked"
                v-model="form.basic_tech"
              >
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title title-sm">Basic Technology</div>
              </div>
            </label>
          </div>
        </div>
        <!-- CARD TWO-->

        <!-- CARD TWO-->
        <div class="preference-card">
          <div class="checkbox">
            <label for="subjectFour" class="label label-sm">
              <!-- INPUT -->
              <input
                type="checkbox"
                id="subjectFour"
                @change="onChecked"
                v-model="form.computer_sci"
              >
              <!-- TEXT CONTENT -->
              <div class="text-content">
                <div class="title title-sm">Computer Science</div>
              </div>
            </label>
          </div>
        </div>
        <!-- CARD TWO-->
      </form>

      <!-- CURRICULUM REQUEST SECTION -->
      <div class="preference-request rounded-5 pointer" @click.self="toggleModal">
        <span class="icon icon-help-circle d-block" @click.self="toggleModal"></span>
        <div class="help-text" @click.self="toggleModal">Request for more subject</div>
      </div>

      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
      <SubjectRequestModal v-if="subject_request" @closeTriggered="toggleModal"></SubjectRequestModal>
      <!-- CURRICULUM REQUEST MODAL COMPONENTS -->
    </div>
  </div>
</template>

<script>
import SubjectRequestModal from "@/components/schoolComps/dashboard/modals/SubjectRequestModal";

export default {
  name: "SubjectPref",
  components: { SubjectRequestModal },

  data() {
    return {
      form: {
        maths: true,
        english: true,
        basic_tech: false,
        computer_sci: false
      },
      subject_request: false
    };
  },

  methods: {
    onChecked(event) {
      event.target.checked
        ? event.target.parentElement.classList.add("label-active")
        : event.target.parentElement.classList.remove("label-active");
    },

    toggleModal() {
      this.subject_request = !this.subject_request;
    }
  }
};
</script>

<style>
</style>
