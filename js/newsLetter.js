
(function () {
    emailjs.init("user_Qaw7jJX6973CHP3itYMoU");
})();
function signUp() {
    var $name = $("#name");
    var $email = $("#address");
    emailjs.send("gmail", "newsLetter", { email: $email, name: $name });
};