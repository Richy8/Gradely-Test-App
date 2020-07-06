<template>
  <div>
    <vue-headful :title="getPageTitle" description="Description goes here"/>
    <div class="class-feeds-section mt-5 base-type-layout">
      <div class="container px-1">
        <div class="row">
          <!-- CHILD INFO COLUMN -->
          <div class="col-12 col-md-3 col-lg-3 left-layout">
            <!-- PARENT CHILD COMPONENT -->
            <div v-if="account_type==='parent'">
              <ParentChildCard></ParentChildCard>
            </div>
            <!-- PARENT CHILD COMPONENT -->

            <!-- STUDENT PROFILE CARD COMPONENT -->
            <div v-else-if="account_type==='student'">
              <StudentProfileCard
                child_img="ManLg.png"
                parent_img
                child_name="Andrew Oshinaga"
                class_code="FDR/2019/1128"
                parent_name="Boye Oshinaga"
                parent_role="Father"
                card_type="student"
              ></StudentProfileCard>
            </div>
            <!-- STUDENT PROFILE CARD COMPONENT -->
          </div>
          <!-- CHILD INFO COLUMN -->

          <!-- CLASS FEEDS -->
          <div class="col-12 col-md-9 col-lg-9 right-layout">
            <!-- UPGRADE ALERT CARD -->
            <UpgradeAlertCard v-if="upgrade_alert" @closeUpgradeAlert="toggleUpgradeAlert"></UpgradeAlertCard>

            <!-- POST INPUT CARD -->
            <PostInputCard fullname="Anthony Joshua" avatar_img="MaleChild.png"></PostInputCard>

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
                  <GettingStartedList></GettingStartedList>
                </div>
                <!-- POST BLOCK COMPONENTS -->
              </div>

              <!-- UPCOMING EVENTS -->
              <div class="col-12 col-md-5 order-1 order-lg-2 event-component">
                <UpcomingEventBlock></UpcomingEventBlock>
              </div>
            </div>
          </div>
          <!-- CLASS FEEDS -->
        </div>
      </div>
    </div>

    <!-- MODALS -->
    <WelcomeDialogue v-if="welcome_dialogue" @closeDialog="dialogueCompleted"></WelcomeDialogue>
    <!-- MODALS -->
  </div>
</template>

<script>
import { capitalizeFirstLetter } from "@/scripts/utilities";
import ParentChildCard from "@/components/classComps/parentSideBar/ParentChildCard";
import StudentProfileCard from "@/components/profileComps/studentprofile/StudentProfileCard";
import PostInputCard from "@/components/classComps/feeds/PostInputCard";
import FilterPost from "@/components/classComps/feeds/FilterPost";
import GettingStartedList from "@/components/classComps/feeds/GettingStartedList";
import PostBlock from "@/components/classComps/feeds/PostBlock";

export default {
  name: "Feeds",

  components: {
    ParentChildCard,
    StudentProfileCard,
    PostInputCard,
    FilterPost,
    GettingStartedList,
    PostBlock,
    WelcomeDialogue: () =>
      import("@/components/schoolComps/welcome/WelcomeDialog"),
    UpgradeAlertCard: () =>
      import("@/components/classComps/feeds/UpgradeAlertCard"),
    UpcomingEventBlock: () =>
      import("@/components/classComps/feeds/UpcomingEventBlock")
  },

  computed: {
    getPageTitle() {
      return `Dashboard Feeds | ${capitalizeFirstLetter(this.account_type)}`;
    }
  },

  data() {
    return {
      account_type: "",
      welcome_dialogue: true,
      upgrade_alert: true,
      post_count: 0
    };
  },

  mounted() {
    this.getAccountType();
    this.checkIsboarded();
  },

  methods: {
    toggleUpgradeAlert() {
      this.upgrade_alert = !this.upgrade_alert;
    },

    getAccountType() {
      this.account_type = this.$route.path.split("/")[1];
    },

    dialogueCompleted() {
      this.welcome_dialogue = !this.welcome_dialogue;
    },

    toggleInvitationModal() {
      this.invitation_modal = !this.invitation_modal;
    },

    setBoarded() {
      document.cookie = `is_boarded=true; max-age=30`;
    },

    checkIsboarded() {
      let cookies = document.cookie;
      let search_one = cookies.indexOf("is_boarded=");
      let search_two = cookies.indexOf(";is_boarded=");
      if (search_one === 0) {
        this.welcome_dialogue = false;
      } else if (search_two === 0) {
        this.welcome_dialogue = false;
      } else {
        this.setBoarded();
      }
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
}
</style>
