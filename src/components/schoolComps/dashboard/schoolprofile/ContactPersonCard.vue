<template>
    <div>
        <div class="contact-person-card">
            <!-- CARD AVATAR SECTION -->
            <div class="card-avatar-section">
                <div class="title">Contact Person</div>
                <div class="d-flex justify-content-start align-items-start nowrap">
                    <!-- AVATAR -->
                    <div class="avatar avatar_lg">
                        <img :src="require('@/assets/images/'+ img + '')" :alt="name" class="avatar-img">
                    </div>

                    <!-- CONTACT INFO -->
                    <div class="contact-info">
                        <div class="name color_text">{{ name }}</div>
                        <div class="role color_grey_dark">{{ role }}</div>
                        <div class="contact"><a href="#" class="btn-link link-underline font-weight-bold">Contact</a></div>
                    </div>
                </div>
            </div>

            <!-- CARD CONTACT ADDRESS -->
            <div class="card-contact-address">
                <div class="title">Address</div>
                <div class="d-flex justify-content-start align-items-center nowrap">
                    <!-- ICON -->
                    <div class="avatar contact-icon">
                        <div class="cust_icon avatar-img icon_xs map_pin_primary"></div>
                    </div>

                    <!-- INFO -->
                    <div class="info">
                        <div class="location">{{ location }}</div>
                        <div class="contact-data">{{ address }}</div>
                    </div>
                </div>
            </div>

            <!-- CARD CONTACT PHONE AND EMAIL -->
            <div class="card-contact-data">
                <div class="title">Contact</div>

                <!-- PHONE -->
                <div class="d-flex justify-content-start align-items-center nowrap bottom-10">
                    <!-- ICON -->
                    <div class="avatar contact-icon">
                        <div class="cust_icon avatar-img icon_xs telephone_primary"></div>
                    </div>

                    <!-- INFO -->
                    <div class="info">
                        <div class="contact-data">{{ phone }}</div>
                    </div>
                </div>

                <!-- EMAIL -->
                <div class="d-flex justify-content-start align-items-center nowrap bottom-10">
                    <!-- ICON -->
                    <div class="avatar contact-icon">
                        <div class="cust_icon avatar-img icon_xs email_primary"></div>
                    </div>

                    <!-- INFO -->
                    <div class="info">
                        <div class="contact-data">{{ email }}</div>
                    </div>
                </div>

                <!-- WEBSITE -->
                <div class="d-flex justify-content-start align-items-center nowrap bottom-0">
                    <!-- ICON -->
                    <div class="avatar contact-icon">
                        <div class="cust_icon avatar-img icon_xs link_primary"></div>
                    </div>

                    <!-- INFO -->
                    <div class="info">
                        <div class="contact-data">{{ website }}</div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ContactPersonCard",
    props: ['name', 'role', 'location', 'address', 'phone', 'email', 'website', 'img']
}
</script>

<style>

</style>
