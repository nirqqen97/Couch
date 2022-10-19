$("#sendMail").on('click',function(e) {
    var name = $('#name').val().trim()
    var phone = $('#phone').val().trim()
    var email = $('#email').val().trim()
    var message = $('#message').val().trim()
    $.ajax({
        url: 'ajax/mail.php',
        type: 'POST',
        cache: 'false',
        data: {'name': name, 'phone': phone, 'email': email, 'message': message },
        dataType: 'html',
        beforeSend: function () {
            // $("#sendMail").prop("disabled", true);
        },
        success: function (data) {
            if (!data) {
                alert("Помилка")
                return
            }
            alert('data');
            $("form").trigger("reset")

        }
    })
})
