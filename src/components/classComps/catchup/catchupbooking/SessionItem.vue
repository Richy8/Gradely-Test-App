<template>
  <div class="session-item-section">
    <!-- DAY OF WEEK -->
    <div class="day-of-week">
      <select class="form-control">
        <option selected disabled value>Day of the Week</option>
        <option value="sunday">Sunday</option>
        <option value="monday">Monday</option>
        <option value="tuesday">Tuesday</option>
        <option value="wednesday">Wednesday</option>
        <option value="friday">Friday</option>
        <option value="saturday">Saturday</option>
      </select>
    </div>

    <!-- TIME -->
    <div class="time">
      <select class="form-control">
        <option selected disabled value>Time</option>
        <option value="11:00AM - 12:00AM">11:00AM - 12:00AM</option>
        <option value="12:00AM - 01:00PM">12:00AM - 01:00PM</option>
        <option value="01:00PM - 02:00PM">01:00PM - 02:00PM</option>
        <option value="02:00PM - 03:00PM">02:00PM - 03:00PM</option>
        <option value="03:00PM - 04:00PM">03:00PM - 04:00PM</option>
      </select>
    </div>

    <!-- CANCEL SESSION -->
    <div class="avatar color_white_bg pointer" @click="$emit('removeItem')">
      <span class="icon-decline flex-center font-22"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "SessionItem"
};
</script>

<style lang="scss">
.session-item-section {
  margin-bottom: 20px;
  @include flex_row_start_nowrap;

  .day-of-week {
    width: 200px;
    margin-right: 15px;
  }

  .time {
    width: 180px;
    margin-right: 15px;
  }

  .avatar {
    transition: all 0.3s ease-in-out;

    &:hover {
      background: $brand_inverse_light !important;
    }
    span {
      color: rgba($border_grey_dark, 0.5);
    }
  }
}
</style>
