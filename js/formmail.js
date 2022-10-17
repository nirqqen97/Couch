$("#sendMail").on('click',function(e) {
    var name = $('#name').val()
    var phone = $('#phone').val()
    var email = $('#email').val()
    var usertext = $('user-text').val()
    $.ajax({
        url: '',
        type: 'POST',
        cache: 'false',
        data: {'name': name, 'phone': phone, 'email': email, 'usertext': usertext },
        dataType: 'html',
        beforeSend: function () {
            // $("#sendMail").prop("disabled", true);
        },
        success: function (data) {
            alert(data);
            // $("#sendMail").prop("disabled", false);

        }
    })
})
const btn = $("#sendMail")
console.log(btn)