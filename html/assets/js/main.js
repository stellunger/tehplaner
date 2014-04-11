$('#form').on('submit', function(event) {
    event.preventDefault();

    $.post('/mail.php', {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),        
    }, function(){
        $('#form').html('<h1>Спасибо! Мы свяжемся с вами!</h1>');    
    });
});

$('#form1').on('submit', function(event) {
    event.preventDefault();

    $.post('/mail1.php', {
        name: $('#name').val(),
        email: $('#email').val(),
        phone: $('#phone').val(),        
    }, function(){
        $('#form1').html('<h1>Спасибо! Мы свяжемся с вами!</h1>');    
    });
});