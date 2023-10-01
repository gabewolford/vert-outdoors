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
    class="flex flex-col w-full mx-auto gap-4 md:text-[#1f2c1e]"
  >
    <p class="text-xs text-right">* all fields required</p>

    <div class="flex flex-col gap-2">
      <label class="text-sm">First name</label>
      <input
        type="text"
        placeholder="First name"
        name="first_name"
        required="true"
        class="p-2 shadow-md"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm">Last name</label>
      <input
        type="text"
        placeholder="Last name"
        name="last_name"
        required="true"
        class="p-2 shadow-md"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm">Subject</label>
      <input
        type="text"
        placeholder="Subject"
        name="subject"
        required="true"
        class="p-2 shadow-md"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm">Email</label>
      <input
        type="email"
        placeholder="Email"
        name="user_email"
        required="true"
        class="p-2 shadow-md"
      />
    </div>

    <div class="flex flex-col gap-2">
      <label class="text-sm">Message</label>
      <textarea
        name="user_message"
        placeholder="Type your message here"
        required="true"
        class="p-2 shadow-md"
      ></textarea>
    </div>

    <button
      type="submit"
      :disabled="isSubmitting"
      class="w-fit px-4 py-2 bg-[#2655BB] hover:bg-[#3D67C3] rounded-full text-white text-lg font-medium"
    >
      {{ isSubmitting ? "Sending..." : "Send message" }}
    </button>
  </form>
</template>
