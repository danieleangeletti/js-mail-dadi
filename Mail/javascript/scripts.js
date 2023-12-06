const email_list = [
    'licenziatoassunto@gmail.com',
    'carlone@gmail.com',
    'daniele@gmail.com',
    'motivettopasquale@gmail.com'
];

const submit_button = document.getElementById("submit-button");

submit_button.addEventListener('click', function() {
    const user_input = document.getElementById("exampleInputEmail1");
    const user_input_value = user_input.value;
    const email_typed = [user_input_value];
    let flag = 0;
    for (i = 0; i < email_list.length; i++) {
        if (email_typed == email_list[i]) {
            flag = 1;
        }
    }

    my_cont = document.querySelector('.container');

    if (flag == 0) {
        my_cont.innerHTML += '<p class = "mt-3 mb-3">' + 'NON OK' + '</p>';
    }
    else {
        my_cont.innerHTML += '<p class = "mt-3 mb-3">' + 'OK' + '</p>';
    }
})