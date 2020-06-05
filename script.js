function generateEmailAddress() {
  let firstName;
  let lastName;
  let emailAddress;

  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;

  if (firstName.length != 0 && lastName.length != 0) {
    lowerCaseFirstName = firstName.toLowerCase();
    lowerCaseLastName = lastName.toLowerCase();

    emailAddress = `${lowerCaseFirstName}.${lowerCaseLastName}@bellevuecollege.edu`;

    document.getElementById("emailAddressOutcome").style.visibility = "visible";
    document.getElementById("emailAddress").innerHTML = emailAddress;
    document.getElementById("fillOutNotification").style.visibility = "hidden";
  } else {
    document.getElementById("fillOutNotification").style.visibility = "visible";
    document.getElementById("emailAddressOutcome").style.visibility = "hidden";
  }

}