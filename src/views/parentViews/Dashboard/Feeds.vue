<template>
  <div>
    <vue-headful title="Class Feeds | Parents" description="Description goes here"/>
    <div class="class-feeds-section mt-5 base-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CLASS BRANCH INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <!-- TEACHER CLASSES COMPONENT -->
            <parentChildCard></parentChildCard>
            <!-- TEACHER CLASSES COMPONENT -->
          </div>
          <!-- CLASS BRANCH INFO COLUMN -->

          <!-- CLASS FEEDS -->
          
          <div class="col-12 col-md-9 col-lg-9 right-layout">
             <div class="d-flex container align-items-center mx-auto mb-2 py-2 rounded subscription">
                  <div class="ml-1">
                     <img src="@/assets/images/pckg.png" alt="" >
                  </div>
                  <div class="mx-4 text">
                    You have 14 days of free trials left
                  </div>
                  <div class="">
                    <button class="btn btn-white text-dark">UPGRADE PLAN</button>
                  </div>
                  <div class="ml-auto close text-sm-2">
                    <button class="mr-2 bg-transparent">
                      <span> &times; </span>
                    </button>
                  </div>
              </div>

              
            <PostInputCard fullname="Richard Harvey"></PostInputCard>

            <!-- FILTER -->
            <FilterPost></FilterPost>

            <div class="row">
              <!-- POSTS SECTION -->
              <div class="col-12 col-md-7 order-2 order-lg-1 post-component">
                <!-- POST BLOCK COMPONENTS -->
               
                <div class="content-post-section" v-if="post_count > 0">
                  <PostBlock></PostBlock>
                </div>
                <div class="default-post-section" v-else>
                  <DefaultPostBlock account_type="teacher"></DefaultPostBlock>
                </div>

                <!-- POST BLOCK COMPONENTS -->
              </div>

              <!-- UPCOMING EVENTS -->
              <div class="col-12 col-md-5 order-1 order-lg-2 event-component">
                <UpcomingEventBlock @toggleTeacher="toggleTeacherModal"></UpcomingEventBlock>
              </div>
            </div>
          </div>
          <!-- CLASS FEEDS -->
        </div>
      </div>
    </div>
    <!-- MODAL COMPONENTS -->
    <WelcomeDialogue v-if="welcome_dialogue" @closeDialog="dialogueCompleted"></WelcomeDialogue>
    <AddTeacherModal v-if="teacher_modal" @closeTriggered="toggleTeacherModal"></AddTeacherModal>
    <!-- MODAL COMPONENTS -->
  </div>
</template>

<script>
import WelcomeDialogue from "@/components/schoolComps/welcome/WelcomeDialog";
import parentChildCard from "@/components/classComps/parentSideBar/parentChildCard";
import PostInputCard from "@/components/classComps/feeds/PostInputCard";
import FilterPost from "@/components/classComps/feeds/FilterPost";
import DefaultPostBlock from "@/components/classComps/feeds/DefaultPostBlock";
import PostBlock from "@/components/classComps/feeds/PostBlock";

export default {
  name: "Feeds",

  components: {
    WelcomeDialogue,
    parentChildCard,
    PostInputCard,
    FilterPost,
    DefaultPostBlock,
    PostBlock,
    UpcomingEventBlock: () =>
      import(/* webpackChunkName: "upcomingevent" */ "@/components/classComps/feeds/UpcomingEventBlock"),
    AddTeacherModal: () =>
      import(/* webpackChunkName: "AddTeacherModal" */ "@/components/modalComps/schoolModals/AddTeacherModal")
  },

  data() {
    return {
      welcome_dialogue: false,
      teacher_modal: false,
      post_count: 1
    };
  },

  methods: {
    toggleTeacherModal() {
      this.teacher_modal = !this.teacher_modal;
    },

    dialogueCompleted() {
      this.welcome_dialogue = !this.welcome_dialogue;
    }
  }
};
</script>

<style lang="scss">
.class-feeds-section {
  .right-layout {
    @include breakpoint_max(lg) {
      padding-left: 30px;
      padding-right: 0px;
    }

    @include breakpoint_max(md) {
      margin-bottom: 80px;
      padding-left: 15px;
      padding-right: 15px;
    }
  }

  .post-component {
    min-width: 63%;
    max-width: 63%;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 60px;

    @include breakpoint_max(lg) {
      min-width: 100%;
      max-width: 100%;
    }
  }

  .event-component {
    min-width: 36%;
    max-width: 36%;
    padding-right: 5px;

    @include breakpoint_max(lg) {
      min-width: 100%;
      max-width: 100%;
      padding-right: 15px;
      margin-bottom: 20px;
    }
  }

  .subscription{
    background: #FCEACF;

    .text{
      font-size: 14px;
    }
    .close{
      font-size: 2em;
    }
  }
}
</style>
