function formValidation() {
    var lastname = document.registration.lastname;
    var firstname = document.registration.passid;
    //var uname = document.registration.username;
    //var uadd = document.registration.address;
    //var ucountry = document.registration.country;
    //var uzip = document.registration.zip;
    //var uemail = document.registration.email;
    //var umsex = document.registration.msex;
    //ar ufsex = document.registration.fsex; if (userid_validation(uid, 5, 12)) 
    
        if (passid_validation(lastname, 2, 15)) {
            if (allLetter(uname)) {
                
            }
        }
    
    return false;

} 

function lastname_validation(lastname, mx, my) {
    var lastname_len = lastname.value.length;
    if (lastname_len == 0 || lastname_len >= my || lastname_len < mx) {
        alert("User Id should not be empty / length be between " + mx + " to " + my);
        lastname.focus();
        return false;
    }
    return true;
}





$(function(){
    $("#form-total").steps({
        headerTag: "h2",
        bodyTag: "section",
        transitionEffect: "fade",
        enableAllSteps: true,
        stepsOrientation: "vertical",
        autoFocus: true,
        transitionEffectSpeed: 500,
        titleTemplate : '<div class="title">#title#</div>',
        labels: {
            previous : 'Back Step',
            next : '<i class="zmdi zmdi-arrow-right"></i>',
            finish : '<i class="zmdi zmdi-check"></i>',
            current : ''
        },
    })
});
