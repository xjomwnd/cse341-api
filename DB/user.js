const User = require('./user');

// Create a new user
const user = new User({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    age: 30
});

// Save the user to the database
user.save()
    .then(savedUser => {
        console.log('User saved:', savedUser);
    })
    .catch(error => {
        console.error('Error saving user:', error);
    });
