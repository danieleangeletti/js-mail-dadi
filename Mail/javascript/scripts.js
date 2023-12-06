const submit_button = document.getElementById("submit-button");

submit_button.addEventListener('click', function() {
    const user_input = document.getElementById("exampleInputEmail1");
    const user_input_value = user_input.value;
    console.log(user_input_value);
})
