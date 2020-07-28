const express = require('express')

let app = express()

app.use(express.urlencoded({extended: false}))

app.set('views', './views')
app.set('view engine', 'pug')

// app.get('/', (req, res) => {
//     res.render('index', {
//         usersList: [
//             {username: 'lukegiles', email: 'myemail@email.com'},
//             {username: 'luke', email: 'email@email.com'},
//             {username: 'giles', email: 'my@email.com'}
//         ],
//         date: new Date(),
//         users: ['luke', 'curtis', 'travis']
//     })
// })

// app.get('/users/:user', (req, res) => {
//     res.end(`you clicked on ${req.params.user}`)
// })

app.get('/', (req, res) => {
    res.render('newUser')
})

app.post('/userListing', (req, res) => {
    console.log(req.body);
    let user = [{
        username: req.body.username,
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }]

    res.end(`Username: ${user.username} Name: ${user.name} Email: ${user.email} Age: ${user.age}`)
})

app.listen(3000, () => {
    console.log('listening on port 3000');
})