//this function is used to get the value of the input fields
// const loginForm = document.getElementById("loginForm");
// loginForm.addEventListener('submit', function (e) {
//     e.preventDefault();
//     const email = document.getElementById('email').value;
//     const password = document.getElementById('password').value;
//     console.log('Email:', email);
//     console.log('Password:', password);
//   });

//this function is used to get the value of the input fields of the register form
const registerForm = document.getElementById("register");
registerForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('password:', password);
    
});

