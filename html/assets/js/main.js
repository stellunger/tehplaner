$('#form').on('submit', function(event) {
    event.preventDefault();

    $.post('/mail.php', {
        name: $('#name').val(),       
        phone: $('#phone').val(),        
    }, function(){
        $('#form').html('<h1>Спасибо! Мы свяжемся с вами!</h1>');    
    });
});

$('#form1').on('submit', function(event) {
    event.preventDefault();

    $.post('/mail1.php', {
        name1: $('#name1').val(),        
        phone1: $('#phone1').val(),        
    }, function(){
        $('#form1').html('<h1>Спасибо! Мы свяжемся с вами!</h1>');    
    });
});