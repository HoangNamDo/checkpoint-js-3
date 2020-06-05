function generateEmailAddress() {
  let firstName;
  let lastName;
  let emailAddress;

  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;

  if (firstName.length == 0 && lastName.length == 0) {
    document.getElementById("emptyNotification").style.visibility = "visible";
    document.getElementById("emailAddressOutcome").style.visibility = "hidden";
  } else {
    lowerCaseFirstName = firstName.toLowerCase();
    lowerCaseLastName = lastName.toLowerCase();

    emailAddress = `${lowerCaseFirstName}.${lowerCaseLastName}@bellevuecollege.edu`;
    document.getElementById("emailAddress").innerHTML = emailAddress;

    document.getElementById("emailAddressOutcome").style.visibility = "visible";
    document.getElementById("emptyNotification").style.visibility = "hidden";
  }

}