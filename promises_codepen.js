let sleepyGreeting = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Hello....')
    }, 2000);

    setTimeout(() => {
        reject(Error('Too sleepy...'))
    }, 2000);
});

sleepyGreeting
    .then(data => {
        console.log(data);
    })
    .catch(err => {
        console.error(err);
    });


// ----  using Promise.all

const greeting = new Promise((resolve, reject) => {
    resolve('Hi there');
    reject('Oops, bad greeting');
});

const updateAccount = new Promise((resolve, reject) => {
    resolve('Updating last login...');
    reject('Error updating account with login.');
});

const loginActivities = Promise.all([greeting, updateAccount]);

loginActivities.then(res => {
    res.forEach(activity => {
        console.log(activity);
    })
})