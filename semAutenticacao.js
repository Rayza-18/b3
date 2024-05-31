firebase.auth().onAuthStateChanged(user => {
    if (!user) {
        window.location.href = "http://localhost:8080/";
    }
});
