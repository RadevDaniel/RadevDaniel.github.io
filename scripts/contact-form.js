function contactFormDesign(){
    //IMPLEMENTING VARIABLES
    let name = $('.name');
    let nameIn = $('#name');
    let nameBox = $('.name-box');
    let email = $('.email');
    let emailIn = $('#email');
    let emailBox = $('.email-box');
    let message = $('.msg');
    let messageIn = $('#msg');
    let msgBox = $('.msg-box');

    //IMPLEMENTING EVENT LISTENERS
    name.mouseover(movingPanel);
    nameBox.mouseleave(closePanel);
    nameIn.focus(focusElement);
    nameIn.blur(blurElement);

    email.mouseover(movingPanel);
    emailBox.mouseleave(closePanel);
    emailIn.focus(focusElement);
    emailIn.blur(blurElement);

    message.mouseover(movingPanel);
    msgBox.mouseleave(closePanel);
    messageIn.focus(focusElement);
    messageIn.blur(blurElement);



    //IMPLEMENTING FUNCTIONS
    function movingPanel(){
        $(this).css('width', '20%');
    }

    function closePanel(){
        if($(this).parent().val('name')){
            name.css('width', '100%');
        }if($(this).parent().val('email')){
            email.css('width', '100%');
        }if($(this).parent().val('message')){
            message.css('width', '100%');
        }
    }

    function focusElement(){
        if(this.parentNode.className === 'field name-box'){
            name.css({'max-width': '20%', 'background-color': '#3085a3'} );
        }if(this.parentNode.className === 'field email-box'){
            email.css({'max-width': '20%' , 'background-color': '#3085a3'});

        }if(this.parentNode.className === 'field msg-box'){
            message.css({'max-width': '20%', 'background-color': '#3085a3'});
            $('textarea').animate({'height': '200px'});
        }
    }

    function blurElement(){
        if(this.parentNode.className === 'field name-box'){
            if(document.getElementById('name').value === ''){
                name.css({'max-width': '100%', 'background-color': '#01414b'});
            }else{
                name.css({'max-width': '20%', 'background-color': '#3085a3'});
            }
        }if(this.parentNode.className === 'field email-box'){
            if(document.getElementById('email').value === ''){
                email.css({'max-width': '100%', 'background-color': '#01414b'});
            }else{
                email.css({'max-width': '20%', 'background-color': '#3085a3'});
            }

        }if(this.parentNode.className === 'field msg-box'){
            if(document.getElementById('msg').value === ''){
                message.css({'max-width': '100%', 'background-color': '#01414b'});
                $('textarea').animate({'height': '50px'});
            }else{
                message.css({'max-width': '20%', 'background-color': '#3085a3'});
                $('textarea').animate({'height': '200px'});
            }
        }
    }
}