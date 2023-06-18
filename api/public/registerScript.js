document.getElementById('registerForm').addEventListener('submit', (event) => {    
    event.preventDefault()

    const userInfoJson = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    fetch('http://localhost:9999/register/user', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userInfoJson)
    }).then((response) => {
        console.log("CAN DO THE REQUISITION!", response)
        location.reload()
    }).catch(() => {
        console.log("CANT DO THE REQUISITION!")
        location.reload()
    })
    
})

document.getElementById('loginbutton').addEventListener('click', () => {
    window.location.href = 'login.html'
})

