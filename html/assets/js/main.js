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

$('#form2').on('submit', function(event) {
    event.preventDefault();

    $.post('/mail2.php', {
        name2: $('#name2').val(),        
        phone2: $('#phone2').val(),        
    }, function(){
        $('#form2').html('<h1>Спасибо! Мы свяжемся с вами!</h1>');    
    });
});