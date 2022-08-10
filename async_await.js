const login = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('User logged in...');
        }, 4000);
    });
}

const updateAccount = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Updating last login...');
        }, 2000);
    });
}

// --- happens in order

// async function loginActivities() {
//     const returnedLogin = await login();
//     console.log(returnedLogin);

//     const returnedUpdateAccount = await updateAccount();
//     console.log(returnedUpdateAccount);
// }

// loginActivities();



// --- happens all at once.

async function loginActivities(login, updateAccount) {
    const returnedLogin = await login;
    console.log(returnedLogin);

    const returnedUpdateAccount = await updateAccount;
    console.log(returnedUpdateAccount);
}

loginActivities(login(), updateAccount());


// --- 

async function queryApis() {
    try {
        const postsPromise = fetch('https://api.dailysmarty.com/posts');
        const posts = await postsPromise.then(res => res.json());
        console.log(posts);
    } catch (err) {
        console.log(err);
        console.log('There was an error with the DailySmarty API');
    }

    try {
        const reposPromise = fetch('https://api.github.com/users/jordanhudgens/repos');
        const repos = await reposPromise.then(res => res.json());
        console.log(repos);
    } catch (err) {
        console.log(err);
        console.log('There was an error with the GitHub API');
    }
}

queryApis();