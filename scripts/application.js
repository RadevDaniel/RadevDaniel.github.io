function effects() {


//IMPLEMENTING BUTTONS
    $('#tab-one').click(showView);
    $('#tab-two').click(showView);
    $('#tab-three').click(showView);
    $('#tab-four').click(showView);
    $('#tab-five').click(showView);
    $('#tab-six').click(showView);
    $('.send-email').click(viewEmailForm);
    $('#footer-email').click(viewEmailForm);
    $('.poster-email').click(viewEmailForm);
    $('.close-form').click(closeEmailForm);


//IMPLEMENTING FUNCTIONS
    function showView(event){
        showHide(this.name)
    }
    function showHide(obj) {
        let object = $('#' + obj);

        function executePercents(percent, container){
            let counter = setInterval(increment, 15);
            let incrementation = 0;

            function increment(){
                if(incrementation < percent){
                    incrementation++;
                    $('#' + container).text(incrementation + '%');
                }else{
                    clearInterval(counter);
                }

            }
        }



        if(object.css('height') != '0px'){
            object.animate({'max-height': '0px'});
            setTimeout(function () {
                $('#' + obj + ' ' + '.w3-center').text('');
                $('#' + obj + ' ' + '.w3-progressbar').animate({'width': '0%'});
            }, 400);
        }else{
            object.animate({'max-height': '500px'}, 700);

            if(obj === 'tabOne') {
                setTimeout(function () {
                    executePercents(95, 'html');
                    $('.w3-progressbar:eq(0)').animate({'width': '95%'}, 1550);
                    executePercents(80, 'js');
                    $('.w3-progressbar:eq(1)').animate({'width': '80%'}, 1340);
                    executePercents(65, 'node');
                    $('.w3-progressbar:eq(2)').animate({'width': '65%'}, 1150);
                    executePercents(40, 'csh');
                    $('.w3-progressbar:eq(3)').animate({'width': '40%'}, 850);
                    executePercents(30, 'cpp');
                    $('.w3-progressbar:eq(4)').animate({'width': '30%'}, 650);
                }, 250);
            }else if(obj === 'tabTwo') {
                setTimeout(function () {
                    executePercents(95, 'ws');
                    $('.w3-progressbar:eq(5)').animate({'width': '95%'}, 1550);
                    executePercents(95, 'vs');
                    $('.w3-progressbar:eq(6)').animate({'width': '95%'}, 1550);
                    executePercents(95, 'dw');
                    $('.w3-progressbar:eq(7)').animate({'width': '95%'}, 1550);
                    executePercents(75, 'st');
                    $('.w3-progressbar:eq(8)').animate({'width': '75%'}, 1300);
                }, 250);
            }else if(obj === 'tabThree') {
                setTimeout(function () {
                    executePercents(90, 'aps');
                    $('.w3-progressbar:eq(9)').animate({'width': '90%'}, 1450);
                    executePercents(75, 'ail');
                    $('.w3-progressbar:eq(10)').animate({'width': '75%'}, 1300);
                    executePercents(75, 'ain');
                    $('.w3-progressbar:eq(11)').animate({'width': '75%'}, 1300);
                    executePercents(90, 'cdw');
                    $('.w3-progressbar:eq(12)').animate({'width': '90%'}, 1450);
                }, 250);
            }else if(obj === 'tabFour') {
                setTimeout(function () {
                    executePercents(95, 'mo');
                    $('.w3-progressbar:eq(13)').animate({'width': '95%'}, 1550);
                    executePercents(80, 'mdp');
                    $('.w3-progressbar:eq(14)').animate({'width': '80%'}, 1340);
                    executePercents(80, 'mtrz');
                    $('.w3-progressbar:eq(15)').animate({'width': '80%'}, 1340);
                    executePercents(85, 'mtrd');
                    $('.w3-progressbar:eq(16)').animate({'width': '85%'}, 1360);
                    executePercents(95, 'trdbg');
                    $('.w3-progressbar:eq(17)').animate({'width': '95%'}, 1550);
                }, 250);
            }else if(obj === 'tabFive') {
                setTimeout(function () {
                    executePercents(50, 'apmr');
                    $('.w3-progressbar:eq(18)').animate({'width': '50%'}, 900);
                    executePercents(40, 'aae');
                    $('.w3-progressbar:eq(19)').animate({'width': '40%'}, 800);
                    executePercents(35, 'sove');
                    $('.w3-progressbar:eq(20)').animate({'width': '35%'}, 700);
                }, 200);
            }else if(obj === 'tabSix') {
                setTimeout(function () {
                    executePercents(95, 'fl');
                    $('.w3-progressbar:eq(21)').animate({'width': '95%'}, 1550);
                    executePercents(50, 'cu');
                    $('.w3-progressbar:eq(22)').animate({'width': '50%'}, 900);
                }, 200);
            }
        }
    }
    let container = $('.content-main');
    let formContainer = $('.form-container');
    let formHeader = $('form > h1');
    let form = $('form');
    function viewEmailForm(){
            formContainer.css({'display':'block', 'z-index': '10'}, 1000, 'linear');
            formContainer.animate({'opacity': '1'}, 1000, 'linear');
            formHeader.animate({'opacity': '1'}, 1000, 'linear');
            setTimeout(function () {
                form.animate({'top': '0', 'opacity': '1'}, 500);
                $('h1').animate({'opacity': '1'}, 500);
            }, 300);
        $('.w3-third').css('min-width', '20px');
    }
    function closeEmailForm(){
        $('h1').animate({'opacity': '0'}, 220);
        form.animate({'top': '250', 'opacity': '0'}, 220, 'linear');

        setTimeout(function () {
            formContainer.animate({'opacity': '0'}, 1000, 'linear');
            formHeader.animate({'opacity': '0'}, 1000, 'linear');
            formContainer.css({'display':'none', 'z-index': '0'}, 1000, 'linear');
        }, 300);
        $('.w3-third').css('min-width', '350px');
    }

    (function() {
        let video = document.getElementById("my-video");

        video.addEventListener( "canplay", function() {
            video.play();
        });
    })();
}