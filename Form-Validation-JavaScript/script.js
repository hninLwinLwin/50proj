function validation(){
  const name = document.getElementById("name");
  const user = document.getElementById("user");
  const pass = document.getElementById("pass");
  const confirmpass = document.getElementById("conpass");
  const mobileNumber = document.getElementById("mobileNumber");
  const emails = document.getElementById("emails");

  if (name !== null && name.value ==''){
    document.getElementById('Name').innerHTML = "**Please fill the Name field";
    return false
  }
  if (emails !== null && emails.value == "") {
    document.getElementById("emailids").innerHTML =
      " ** Please fill the email id field";
    return false;
  }
  if (emails !== null && emails.value.indexOf("@") <= 0) {
    document.getElementById("emailids").innerHTML = " ** Invalid Email";
    return false;
  }

  if (
    emails !== null && emails.value.charAt(emails.length - 4) != "." &&
    emails.value.charAt(emails.length - 3) != "."
  ) {
    document.getElementById("emailids").innerHTML = " ** Invalid Email";
    return false;
  }

  if (user !== null && user.value == "") {
    document.getElementById("username").innerHTML =
      " ** Please fill the username field";
    return false;
  }
  if (user !== null && user.value.length <= 3 || user.value.length > 20) {
    document.getElementById("username").innerHTML =
      " ** Username lenght must be between 3 and 20";
    return false;
  }
  if (user !== null && !isNaN(user.value)) {
    document.getElementById("username").innerHTML =
      " ** only characters are allowed";
    return false;
  }

  if (emails !== null &&  pass == "") {
    document.getElementById("passwords").innerHTML =
      " ** Please fill the password field";
    return false;
  }
  if (pass !== null && (pass.value.length <= 5 || pass.value.length > 20)) {
    document.getElementById("passwords").innerHTML =
      " ** Passwords lenght must be between  5 and 20";
    return false;
  }

  if (pass !== null &&  pass.value != confirmpass.value) {
    document.getElementById("confrmpass").innerHTML =
      " ** Password Mismatch";
    return false;
  }

  if (confirmpass !== null &&  confirmpass.value == "") {
    document.getElementById("confrmpass").innerHTML =
      " ** Please fill the confirmpassword field";
    return false;
  }

  if (mobileNumber !== null &&  mobileNumber.value == "") {
    document.getElementById("mobileno").innerHTML =
      " ** Please fill the mobile NUmber field";
    return false;
  }
  if (mobileNumber !== null && isNaN(mobileNumber.value)) {
    document.getElementById("mobileno").innerHTML =
      " ** user must write digits only not characters";
    return false;
  }
  if (mobileNumber !== null && mobileNumber.value.length != 11) {
    document.getElementById("mobileno").innerHTML =
      " ** Mobile Number must be 11 digits only";
    return false;
  }
}
