function formSubmit(){
    $('form').submit(emailSend);
    loadRepos();
    function emailSend(e){
        e.preventDefault();
        let name = document.getElementById('name');
        let email = document.getElementById('email');
        let content = document.getElementById('msg');
        let text = '';
        let allIsValid = true;

        validateInputWithRegex(name, /^[A-Za-z\d]{4,20}$/g);
        validateInputWithRegex(email, /^.*?@.*?\..*$/g);

        function validateInputWithRegex(input, pattern){
            if(!pattern.test(input.value)){
               allIsValid = false;
                appendText(input);
            }
        }

        function appendText(input){
            if(input == name){
                text += 'Name should contains 4-20 letters!\n';
            }else if(input == email){
                text += 'Please provide a valid email address!\n';
            }
        }

        function ajaxRequest(){
            let data = {
                name: name.value,
                email: email.value,
                content: content.value
            };
            $.ajax({
                url: "https://formspree.io/d.radevs@abv.bg",
                method: "POST",
                data: data,
                dataType: "json",
                success: emailSend
            });
            function emailSend(data){
                notify('Email send', '#01414b');
                name.value = '';
                email.value = '';
                content.value = '';
            }
        }

        if(allIsValid){
            ajaxRequest();
        }else{
            notify(text, '#631522');
        }

    }

    function notify(content, color){
        let svgshape = document.getElementById( 'notification-shape' );
        let svgQuery = $('#notification-shape');
        svgQuery.empty();
        let listedEffect = $(`<svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 500 500" preserveAspectRatio="none">
                                    <path d="m 0,0 500,0 0,500 0,-500 z"/>
                              </svg>`);
        let notificationText = $(`<div class="notification-text">
                    <div class="notf-icon"></div>
                    <div class="notf-message">${content}</div>
            </div>`);
        svgQuery.append(listedEffect)
                .append(notificationText);
        let s = Snap( svgshape.querySelector( 'svg' ) );
        let path = s.select( 'path' );
        let pathConfig = {
                from : path.attr( 'd' ),
                to : svgshape.getAttribute( 'data-path-to' )
            };
        if(color === '#01414b'){
            notificationText.css({'background': '#3085a3'});
            $('.notf-message').css({'text-align': 'center', 'font-size': '18px', 'line-height': '22px'});
            $('.notf-icon').append($('<img src="media/Thick.png" alt="Thick" style="width: 70px; height: 70px;">'))
        }
        if(color === '#631522'){
             notificationText.css('background', '#811527');
            $('.notf-message').css({'text-align': 'justify'});
            $('.notf-icon').append($('<img src="media/Cross.png" alt="Thick" style="width: 70px; height: 70px;">'))
        }
        path.animate({'path': pathConfig.to}, 300);
        $('.shape-box path').css('fill', `${color}`);
        setTimeout(function(){
            notificationText.animate({'opacity': '1','width': '100%', 'height': '100%'}, 300);
        }, 350);

        setTimeout(function(){
            notificationText.animate({'opacity': '0','width': '20%', 'height': '20%'}, 300);
           setTimeout(function(){path.animate( { 'path' : pathConfig.from }, 300)}, 300);
        }, 5000);

    }

    function loadRepos() {
        let output = $('#repos');
        output.empty();
        let url = "https://api.github.com/users/RadevDaniel" + "/repos";
        let request = {
            url:url,
            success: displayRepos,
            error: displayError
        };
       $.ajax(request);

        function displayRepos(repos){
            let basicContent = $('.main-content-repos');
            for(let repo of repos){
                let contentContainer = $(`
                          <div class="centerflipcards">
                            <div class="square-flip">
                                <div class='square'>
                                    <div class="square-container">
                                        <h2 class="textshadow">${repo.name}</h2>
                                        <h3 class="textshadow">${repo.description}</h3>
                                            <div class="repo-specifics">
                                                <p id="left-paragraph">Views: <span>${repo.watchers}</span></p>
                                                <p id="right-paragraph">Language: <span>${repo.language}</span></p>
                                            </div>
                                    </div>
                                    <div class="flip-overlay"></div>
                                </div>
                                <a href="${repo.html_url}" target="_blank">
                                    <div class='square2'>
                                        <div class="square-container2">
                                            <div class="align-center"></div>
                                            <h2>GO</h2>
                                        </div>
                                        <div class="flip-overlay"></div>
                                    </div>
                                </a>
                            </div>
                        </div>`
                );
                basicContent.append(contentContainer);
            }
            setTimeout(function(){ notify('GitHub Repositories Loaded','#01414b')}, 2000);
        }
        function displayError(error){
           notify(error.statusText, '#631522' )
        }
    }


}
