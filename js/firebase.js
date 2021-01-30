const contact_form = document.querySelector("#main_contact_form");

contact_form.addEventListener("submit",(event) => {
    event.preventDefault();
    db.collection("contact-me").add({
        email:contact_form["email"].value,
        first_name:contact_form["first_name"].value,
        last_name:contact_form["name2"].value,
        message:contact_form["message"].value,
        phone:contact_form["phone"].value
    });
    contact_form["email"].value = "";
    contact_form["first_name"].value = "";
    contact_form["name2"].value = "";
    contact_form["message"].value = "";
    contact_form["phone"].value = ""
    window.alert("Thanks for contacting us!!!!")
});


//registration area

const register_form = document.querySelector("#register_form");
register_form.addEventListener("submit", (event) => {
    console.log("submitted");
    
    
    event.preventDefault(); 
    db.collection("registration_data").add({
        full_name:register_form["full_name"].value,
        college_name:register_form["college_name"].value,
        registration_number:register_form["registration_number"].value,
        email_id:register_form["email_id"].value,
        
    });
    register_form["full_name"].value = "";
    register_form["college_name"].value = "";
    register_form["registration_number"].value = "";
    register_form["email_id"].value = "";
    
    document.querySelector("#registerModal").hide();

});