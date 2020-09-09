const auth = firebase.auth();
const db = firebase.firestore();


//listening for auth status
auth.onAuthStateChanged(user => {
    if(user){
        db.collection("guides").get().then(snapshot => {
            setupGuides(snapshot.docs);
        })
    }else{
        setupGuides([]);
    }
});



//sign up
const signupform = document.querySelector("#signupform");
signupform.addEventListener("submit", (e) =>{
    e.preventDefault();

    //getting user info

const email = signupform["signup-email"].value;
const password = signupform["signup-password"].value;

//signup user

auth.createUserWithEmailAndPassword(email, password).then(cred => {
    signupform.reset();
});

});

const logout = document.querySelector("#logout");
logout.addEventListener("click", (e) => {
    e.preventDefault();
    auth.signOut();
});

const loginForm = document.querySelector("#loginform");
loginForm.addEventListener("click", (e) =>{
    e.preventDefault();

    const email = loginform["login-email"].value;
    const password = loginform["login-password"].value;

    auth.signInWithEmailAndPassword(email, password).then(cred => {
        loginform.reset();
    });

});

















