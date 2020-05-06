<template>
<div>
    <form @submit.prevent class="signup-form">
        <!-- FIRST NAME AND LAST NAME -->
        <div class="row">
            <div class="form-group col-sm-6">
                <label for class="control-label">First Name</label>
                <input type="text" v-model="form.firstname" class="form-control" placeholder="E.g David">
            </div>
            <div class="form-group col-sm-6">
                <label for class="control-label">Last Name (Surname)</label>
                <input type="text" v-model="form.lastname" class="form-control" placeholder="E.g Nwankwo">
            </div>
        </div>

        <!-- SCHOOL NAME -->
        <div class="form-group">
            <label for class="control-label">School Name</label>
            <input type="text" v-model="form.school" class="form-control" placeholder="The Name of your school">
        </div>

        <!-- SCHOOL ROLE -->
        <div class="form-group">
            <label for class="control-label">Role in the School</label>
            <select class="form-control" v-model="form.role.selected">
                <option v-for="(option, index) in form.role.options" :key="index" :value="option.value">{{ option.text }}</option>
            </select>
        </div>

        <!-- SCHOOL EMAIL ADDRESS -->
        <div class="form-group">
            <label for class="control-label">Email Address</label>
            <input type="email" v-model="form.email" class="form-control" placeholder="E.g davidisaboy@gmail.com">
        </div>

        <!-- PHONE NUMBER -->
        <div class="form-group">
            <label for class="control-label">Phone Number</label>
            <div class="inputaffixed inputPrefixed">
                <div class="inputfixture">
                    <span class="font-14 color_text">+234</span>
                </div>
                <input type="number" v-model.number="form.phone" class="form-control inputControl" placeholder="Enter phone number">
            </div>
        </div>

        <div class="form-group">
            <label for class="control-label">Password</label>
            <div class="input-group">
                <input :type="passwordType ? 'password': 'text'" v-model="form.password" class="form-control" placeholder="Create a Password">
                <span class="input-group-addon show-pwd" @click="showPwd">
                    <i class="pointer cust_icon icon_eye"></i>
                </span>
            </div>
        </div>

        <div class="row">
            <div class="col-md-5">
                <button type="submit" class="btn btn-block btn-accent font-weight-bold">Get Started</button>
            </div>
            <div class="disclaimer-block col-md-7 mt-3 mt-md-0">
                <p>
                    By creating an account, you agree to our
                    <a href="#" class="btn-link">Terms</a> and
                    <a href="#" class="btn-link">Policies</a>.
                </p>
            </div>
        </div>
    </form>
</div>
</template>

<script>
export default {
    name: "SignUpForm",
    data() {
        return {
            form: {
                firstname: "",
                lastname: "",
                school: "",
                role: {
                    selected: "Principal",
                    options: [{
                            text: "Principal",
                            value: "Principal"
                        },
                        {
                            text: "Science Teacher",
                            value: "Science Teacher"
                        },
                        {
                            text: "Art Teacher",
                            value: "Art Teacher"
                        }
                    ]
                },
                email: "",
                phone: "",
                password: ""
            },
            passwordType: true
        };
    },

    methods: {
        showPwd() {
            let pwd_icon = document.querySelector('.show-pwd');
            this.passwordType = !this.passwordType;
            pwd_icon.classList.toggle('show_pass');
        }
    }
};
</script>

<style lang='scss'>
</style>
