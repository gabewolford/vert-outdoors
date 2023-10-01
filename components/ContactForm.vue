<script>
import emailjs from "@emailjs/browser";

export default {
  data() {
    return {
      isSubmitting: false,
    };
  },
  methods: {
    sendEmail() {
      this.isSubmitting = true;
      emailjs
        .sendForm(
          "service_rg1jq3d",
          "template_7zlc0vf",
          this.$refs.form,
          "GLjJJKxGwW-an5Tep"
        )
        .then(
          (result) => {
            console.log("SUCCESS!", result.text);
            this.$router.push("/contact/confirmation");
            this.$refs.form.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
          }
        )
        .finally(() => {
          this.isSubmitting = false;
        });
    },
  },
};
</script>

<template>
  <form
    ref="form"
    @submit.prevent="sendEmail"
    class="flex flex-col w-full md:w-1/2 mx-auto gap-2"
  >
    <label class="text-sm">First Name</label>
    <input type="text" name="first_name" />

    <label class="text-sm">Last Name</label>
    <input type="text" name="last_name" />

    <label class="text-sm">Subject</label>
    <input type="text" name="subject" />

    <label class="text-sm">Email</label>
    <input type="email" name="user_email" />

    <label class="text-sm">Message</label>
    <textarea name="user_message"></textarea>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-fit px-4 py-2 bg-[#2655BB] hover:bg-[#3D67C3] rounded-full text-white text-lg font-medium"
    >
      {{ isSubmitting ? "Sending..." : "Send message" }}
    </button>
  </form>
</template>
