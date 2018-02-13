function moveSlider(){
    let documents = [
        'js_applications_-_july_2017_-_certificate.jpg',
        'web_fundamentals_-_html5_-_january_2017_-_certific.jpg',
        'Diploma.jpg'
    ];

    $('#btn-js').click(prependNewSlide);
    $('#btn-html').click(prependNewSlide);
    $('#btn-diploma').click(prependNewSlide);

    function prependNewSlide(target){
        let currentButton = this.id;
        let container = $('.sldr');
        let imgSrc = '';
        let currentItem = $('.sldr-item-top');

        if(currentButton === 'btn-js'){
            imgSrc = documents[0];
        }
        if(currentButton === 'btn-html'){
            imgSrc = documents[1];
        }
        if(currentButton === 'btn-diploma'){
            imgSrc = documents[2];
        }

        currentItem.animate({left: "100%"}, 200);

        setTimeout(function(){
            container.empty();
        }, 500);

        setTimeout(function(){

            let currentContent = `
            <article class="sldr-item-top">
                <div class="img-container">
                    <a href="img/${imgSrc}" target="_blank">
                        <img src="img/${imgSrc}" alt="Certificate">
                    </a>
                </div>
            </article>`;

            container.prepend(currentContent);


            $('.sldr-item-top').css('right', '100%');
        }, 500);

        setTimeout(function(){
            $('.sldr-item-top').animate({right: "0%"}, 200);
        }, 500);


    }
}