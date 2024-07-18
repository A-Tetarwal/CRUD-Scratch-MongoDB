const express = require('express');
const app = express();

// UserModel import
const userModel = require('./usermodel');

app.get('/', (req, res) => {
    res.setHeader('Content-type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Button Example</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container mt-5">
                <a href="/create" class="btn btn-success">Create user</a>
            </div>
        </body>
        </html>
    `);
    // res.render('index');
});

app.get('/create', async function(req, res){
    // await ki requirement hai ki nearest parent function pe async lga hona chahiye
    let createduser = await userModel.create({ // create me object pass krna hota hai
        name: 'Harshita',
        email: 'harshite@gmail.com',
        username: 'harshi'
    })
    // Send the created user details in an HTML response
    res.setHeader('Content-type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Created</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container mt-5">
                <h1>User Created</h1>
                <p><strong>Name:</strong> ${createduser.name}</p>
                <p><strong>Email:</strong> ${createduser.email}</p>
                <p><strong>Username:</strong> ${createduser.username}</p>
                <a href="/" class="btn btn-primary">Back to Home</a>
                <a href="/update" class="btn btn-success">Updated data</a>
            </div>
        </body>
        </html>
    `);
})
app.get('/read', async function(req, res){ // read me do hote hai, ek hota hai saare read krna, dusra hota hai kis partiular ko read krna
    let users = await userModel.find() // find hamesha ek array deta hai, phir chahe ek hi element kyu na ho ya ek bhi na ho
    // findOne() se object milta hai
    res.setHeader('Content-type', 'text/html');
    let userListHTML = users.map(user => `<p>${user}</p>`).join('');
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>All Users</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container mt-5">
                <h1>All Users</h1>
                <p>${userListHTML}</p>
                <a href="/" class="btn btn-primary">Back to Home</a>
                <a href="/delete" class="btn btn-danger">Deletion of Users</a>
            </div>
        </body>
        </html>
    `);
})
app.get('/update', async function(req, res){
    let updateduser = await userModel.findOneAndUpdate(
        {username: 'jaani'}, {name: 'Ashish Tetarwal'}
    )
    res.setHeader('Content-type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>User Created</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container mt-5">
                <h1>Updated User</h1>
                <p><strong>Name:</strong> ${updateduser.name}</p>
                <p><strong>Email:</strong> ${updateduser.email}</p>
                <p><strong>Username:</strong> ${updateduser.username}</p>
                <a href="/" class="btn btn-primary">Back to Home</a>
                <a href="/read" class="btn btn-success">All Users</a>
            </div>
        </body>
        </html>
    `);
})
app.get('/delete', async function(req, res){ // read me do hote hai, ek hota hai saare read krna, dusra hota hai kis partiular ko read krna
    let users = await userModel.findOneAndDelete({username: 'jaani'}) // find hamesha ek array deta hai, phir chahe ek hi element kyu na ho ya ek bhi na ho
    // findOne() se object milta hai
    res.setHeader('Content-type', 'text/html');
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>To Delete</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container mt-5">
                <h1>Deleting this</h1>
                <p>${users}</p>
                <a href="/" class="btn btn-primary">Back to Home</a>
            </div>
        </body>
        </html>
    `);
})

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
