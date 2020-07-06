<template>
  <div>
    <vue-headful title="Catchup Tutor Profile | Parents" description="Description goes here"/>
    <section class="tutor-profile-section base-type-layout w-100 h-auto brand_navy_bg">
      <TutorIntroBlock
        tutor_img="TutorOneLg.png"
        tutor_name="Oluwatosin Oloko-obi"
        tutor_subject_types="IGCSE Mathematics, WAEC/NECO Mathematics"
        :tutor_rating="4.3"
      ></TutorIntroBlock>
    </section>

    <section class="mid-section base-type-layout h-100" style="background: #f0f0f0 !important">
      <div class="container px-1 pt-5">
        <div class="row">
          <!-- LEFT LAYOUT -->
          <div class="col-12 col-md-8 left-layout">
            <!-- ABOUT ME COMPONENT -->
            <TutorAboutMe
              about_text="I’ve been teaching for Eight Years (8)Years. I teach JSS3/Year9. In My Spare Time, I engage in business. My Super Power is in the explanation of mathematics concept using basic examples, building students self confidence and helping them believe that excellence is achievable in the subject matter."
            ></TutorAboutMe>
            <!-- ABOUT ME COMPONENT -->

            <!-- TUTOR PROFILE COMPONENT -->
            <TutorProfileCard
              tutor_subject_types="IGCSE Mathematics, WAEC/NECO Mathematics"
              tutor_notice="12 Hours notice"
              tutor_language="English Language (Native)"
              tutor_class="Year 9 or Junior Secondary School 3"
            ></TutorProfileCard>
            <!-- TUTOR PROFILE COMPONENT -->

            <!-- TUTOR CALENDAR COMPONENT -->
            <TutorCalendar></TutorCalendar>
            <!-- TUTOR CALENDAR COMPONENT -->

            <!-- TUTOR RATINGS & REVIEWS COMPONENT -->
            <TutorRatings :tutor_rating="4.3" :tutor_total_rating="439"></TutorRatings>
            <TutorReviews
              card_img="MaleChild.png"
              card_name="Omolade Giwa"
              card_date="3 weeks ago"
              review_title="Honest and Kind"
              :review_rating="3.5"
              review_text="Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements. Let's say you're drafting the ultimate content marketing strategy."
            ></TutorReviews>

            <TutorReviews
              card_img="FemaleChild.png"
              card_name="Sandra Brown"
              card_date="3 weeks ago"
              review_title="Honest and Kind"
              :review_rating="4"
              review_text="Derived from Latin dolorem ipsum (“pain itself”), Lorem Ipsum is filler text used by publishers and graphic designers used to demonstrate graphic elements. Let's say you're drafting the ultimate content marketing strategy."
            ></TutorReviews>

            <!-- SHOW MORE LINK -->
            <div class="more d-flex justify-content-center align-items-center nowrap">
              <router-link
                to
                class="color_grey_dark font-weight-bold text-uppercase font-14 my-4"
              >Show More</router-link>
            </div>
            <!-- TUTOR RATINGS & REVIEWS COMPONENT -->
          </div>

          <!-- RIGHT LAYOUT -->
          <div class="col-12 col-md-4 col-xl-3 offset-xl-1 right-layout">
            <TutorBookingCard
              video_poster="VideoPoster.png"
              :days_left="2"
              :tutor_charge="3000"
              :is_booked="false"
              tutor_session="IGCSE Mathematics session"
              tutor_date="Apr 12, 2020 01:30 PM WAT"
            ></TutorBookingCard>
          </div>
        </div>
      </div>
    </section>

    <!-- BOTTOM SECTION -->
    <section class="bottom-section base-type-layout h-100" style="background: #f0f0f0 !important">
      <div class="container px-1" style="border-top: 1px solid #d5d5d5;">
        <div class="row">
          <div class="col-12 col-md-5">
            <div class="d-flex flex-column justify-column-center align-items-center">
              <div class="title brand_navy font-weight-bold">Have Questions?</div>

              <!-- CONTACT BUTTON -->
              <button class="btn btn-md btn-whitish color_grey_dark font-weight-bold">Contact Us</button>

              <!-- WAVY LINE IMAGE -->
              <img v-lazy="localImg('WavyLine.png')" alt>

              <!-- CONTACT INFO -->
              <div class="contact-info color_ash text-center">
                Or you can call us on:
                <span class="brand_navy font-weight-bold">(+234) 810 0598 268</span>
              </div>
            </div>
          </div>

          <!-- TUTOR FAQ -->
          <div class="col-12 col-md-7">
            <div class="faq-section">
              <TutorFAQ
                question="How do I get a Tutor?"
                response="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo, a modi itaque omnis porro voluptatibus eos ut, fuga soluta consequatur iste maiores, esse sunt ex maxime animi excepturi placeat impedit. Sapiente vero dolorem assumenda ipsam voluptas quibusdam quis iure."
              ></TutorFAQ>

              <TutorFAQ
                question="Can I cancel a class?"
                response="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo, a modi itaque omnis porro voluptatibus eos ut, fuga soluta consequatur iste maiores, esse sunt ex maxime animi excepturi placeat impedit. Sapiente vero dolorem assumenda ipsam voluptas quibusdam quis iure."
              ></TutorFAQ>

              <TutorFAQ
                question="Do I have to pay before a session?"
                response="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo, a modi itaque omnis porro voluptatibus eos ut, fuga soluta consequatur iste maiores, esse sunt ex maxime animi excepturi placeat impedit. Sapiente vero dolorem assumenda ipsam voluptas quibusdam quis iure."
              ></TutorFAQ>

              <TutorFAQ
                question="How can I book multiple sessions?"
                response="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo, a modi itaque omnis porro voluptatibus eos ut, fuga soluta consequatur iste maiores, esse sunt ex maxime animi excepturi placeat impedit. Sapiente vero dolorem assumenda ipsam voluptas quibusdam quis iure."
              ></TutorFAQ>

              <TutorFAQ
                question="Can I have more than one Tutor? "
                response="   Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nemo, a modi itaque omnis porro voluptatibus eos ut, fuga soluta consequatur iste maiores, esse sunt ex maxime animi excepturi placeat impedit. Sapiente vero dolorem assumenda ipsam voluptas quibusdam quis iure."
              ></TutorFAQ>
            </div>
          </div>
          <!-- TUTOR FAQ -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import RenderImages from "@/scripts/mixins/RenderImages";
import TutorIntroBlock from "@/components/classComps/catchup/catchuptutor/TutorIntroBlock";
import TutorAboutMe from "@/components/classComps/catchup/catchuptutor/TutorAboutMe";
import TutorProfileCard from "@/components/classComps/catchup/catchuptutor/TutorProfileCard";

export default {
  name: "CatchupTutor",

  components: {
    TutorIntroBlock,
    TutorAboutMe,
    TutorProfileCard,
    TutorCalendar: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/TutorCalendar"),
    TutorRatings: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/TutorRatings"),
    TutorReviews: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/TutorReviews"),
    TutorBookingCard: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/TutorBookingCard"),
    TutorFAQ: () =>
      import(/* webpackChunkName: "TutorCatchup" */ "@/components/classComps/catchup/catchuptutor/TutorFAQ")
  },

  mixins: [RenderImages]
};
</script>

<style lang="scss">
.tutor-profile-section {
  position: relative;
  top: 60px;
}

.mid-section {
  .right-layout {
    padding-left: 0px;

    @include breakpoint_max(sm) {
      padding-left: 15px;
    }
  }
}

.bottom-section {
  padding-top: 25px;
  padding-bottom: 90px;

  .title {
    font-size: 32px;
    line-height: 160%;
    margin-top: 60px;
    margin-bottom: 30px;

    @include breakpoint_max(md) {
      font-size: 28px;
    }

    @include breakpoint_max(sm) {
      font-size: 26px;
      margin-bottom: 30px;
    }
  }

  .btn,
  img {
    margin-bottom: 50px;

    @include breakpoint_max(sm) {
      margin-bottom: 40px;
    }
  }

  .contact-info {
    font-size: 16px;
    line-height: 160%;

    @include breakpoint_max(sm) {
      font-size: 14.5px;
    }
  }

  .faq-section {
    margin-top: 50px;
  }
}

.tutor-page-title {
  font-size: 21px;
  line-height: 29px;
  padding-bottom: 10px;
  margin-bottom: 20px;
  border-bottom: 1px solid $border_grey;

  @include breakpoint_max(xs) {
    font-size: 19px;
  }
}
</style>
