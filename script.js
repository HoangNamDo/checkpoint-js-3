function generateEmailAddress() {
  let firstName;
  let lastName;
  let emailAddress;

  firstName = document.getElementById("firstName").value;
  lastName = document.getElementById("lastName").value;

  lowerCaseFirstName = firstName.toLowerCase();
  lowerCaseLastName = lastName.toLowerCase();

  emailAddress = `${lowerCaseFirstName}.${lowerCaseLastName}@bellevuecollege.edu`;

  document.getElementById("emailAddressNotify").style.visibility = "visible";
  document.getElementById("emailAddress").innerHTML = emailAddress;
}