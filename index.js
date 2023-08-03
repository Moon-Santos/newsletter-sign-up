document.addEventListener("DOMContentLoaded", function (Event){
    const labels = document.getElementById('divLabels');
    const input = document.getElementById('email');
    const button = document.getElementById('buttonSubmit');
    const body = document.body;
    // const buttonSuccess = document.getElementById('button-success')
    
    button.addEventListener('click', function (Event){
        Event.preventDefault();
        const regex = /^[\w-.]+@([\w-]+.)+[\w-]{2,4}$/;
        if (!regex.test(input.value)){
            labels.innerHTML = `
                <label for="email">Email Adress</label>
                <label id="error" style = "color: red;" for="email">Valid email required</label>
                `
                input.style.backgroundColor = 'rgba(255, 0, 0, 0.2)'
                input.style.border = 'solid 1px red'
                input.style.color = 'red'
            } else {
                body.innerHTML = `
                <div id="container-success">
                <svg id="icon-success" xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 0 64 64"><defs><linearGradient id="a" x1="100%" x2="0%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF6A3A"/><stop offset="100%" stop-color="#FF527B"/></linearGradient></defs><g fill="none"><circle cx="32" cy="32" r="32" fill="url(#a)"/><path stroke="#FFF" stroke-width="4" d="m18.286 34.686 8.334 7.98 19.094-18.285"/></g></svg>  
                <h1 id="title-success">Thanks for subscribing!</h1>
                <p id="text-success">A confirmation email has been sent to <strong>${input.value}</strong> Please open it and click the button inside to confirm your subscription.</p>
                <button id="button-success">Dismiss message</button>
                </div>
                `
            }
            document.getElementById('button-success').addEventListener('click', function(event){
                location.reload()
            body.innerHTML = `
            <div id="container">
            <div id="left">
                <h1 id="title">
                  Stay updated!
                </h1>
                <span id="text">
                  Join 60,000+ product managers receiving monthly updates on:
                </span>
                <div id="icons">
                  <p class="verify">
                    <svg id="icon-normal" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                    Product discovery and building what matters
                  </p>
                  <p class="verify">
                    <svg id="icon-normal" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                    Measuring to ensure updates are a success
                  </p>
                  <p class="verify">
                    <svg id="icon-normal" xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21"><g fill="none"><circle cx="10.5" cy="10.5" r="10.5" fill="#FF6155"/><path stroke="#FFF" stroke-width="2" d="M6 11.381 8.735 14 15 8"/></g></svg>
                    And much more!
                  </p>
                </div>
                <div id="form">
                  <div id="divLabels">
                    <label for="email">Email Adress</label>
                  </div>
                  <Input id="email" type="email" placeholder="email@company.com"></Input>
                  <button id="buttonSubmit">Subscribe to monthly newsletter</button>
                </div>
            </div>
            <div id="right">
              <div id="imagem"></div>
            </div>
          </div>
            `
        })
            })
})