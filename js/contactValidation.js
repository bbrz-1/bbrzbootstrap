$(document).ready(function() {
  $('#contactForm').validate({
    errorClass: "input-validation-error",
    rules: {
      name: {
        required: true,
        minlength: 2
      },
      email: {
        required: true,
        email: true
      },
      phone: {
        required: true
      },
      message: {
        required: true
      }
    },
    messages: {
      name: {
        required: "<span class='text-danger'>This field is required</span>",
        minlength: "Your name must be at least 2 characters long"
      },
      email: {
        required: "<span class='text-danger'>This field is required</span>",
        email: "You must enter a valid email address"
      },
      phone: {
        required: "<span class='text-danger'>This field is required</span>"
      },
      message: {
        required: "<span class='text-danger'>This field is required</span>"
      }
    }
  });
});