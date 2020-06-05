function generateEmailAddress() {
  var firstName;
  var lastName;
  var emailAddress;
  var fillOutFlag = false;

  while (fillOutFlag == false) {
    firstName = document.getElementById("firstName").value;
    lastName = document.getElementById("lastName").value;
    console.log(firstName);
    console.log(lastName);

    if (firstName != null && lastName != null) {
      fillOutFlag = true;

      lowerCaseFirstName = firstName.toLowerCase();
      lowerCaseLastName = lastName.toLowerCase();

      emailAddress = `${lowerCaseFirstName}.${lowerCaseLastName}@bellevuecollege.edu`;

      document.getElementById("emailAddressNotify").style.visibility = "visible";
      document.getElementById("emailAddress").innerHTML = emailAddress;
    }

  }

}