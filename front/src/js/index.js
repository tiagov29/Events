const base_url = "http://localhost:3000"
var form = document.getElementById("signUpform");
form.addEventListener('submit', sign_upfunction);




function sign_upfunction(e){
  //prevent the browser redirection
  e.preventDefault();

  var message = document.getElementById('message');
  message.textContent = "";

//get all inputs from the form
  var formData = new FormData(form);

//Convert data into json
  var data = Object.fromEntries(formData);

  const url_signUp = `${base_url}/sign-up`;

  fetch(url_signUp, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data),
  }
)
.then(response => response.json())
.then(data => {
  console.log(data);
  form.reset();
  message.textContent = data.message;
});

}
