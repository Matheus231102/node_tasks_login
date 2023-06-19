document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault()
    
    const emailValue = document.getElementById('email').value
    const passwordValue = document.getElementById('password').value

    const jsonBody = {
        email: emailValue,
        password: passwordValue
    }

    fetch('http://localhost:9999/login/user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jsonBody)
    })
    .then((response) => {
        if (response.ok) {
            window.location.href = '/mainpage';
        } else {
            throw new Error('Erro de login');
        }
    })
    .catch(() => {
        console.log({
            login_status: false,
            error: "login falhou!"
        })
        location.reload()
    })
})

