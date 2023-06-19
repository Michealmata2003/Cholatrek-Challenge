const Errors = (data) => {
  const err = {};
  //first name validation
  if (data.firstname === '') {
    err.firstname = 'First Name is Required'

  } else if (data.firstname.length < 3) {
    err.firstname = 'First Name should be greater than 3 characters'
  }
  //last name validation

  if (data.lastname === '') {
    err.lastname = 'Last Name is Required'

  } else if (data.lastname.length < 3) {
    err.lastname = 'Last Name should be greater than 3 characters'
  }

  //Middle Name Validation
  if (data.middlename.length < 3) {
    err.middlename = 'Last Name should be greater than 3 characters'
  }
  //Gender Validation
  // if (data.gender === '') {
  //   err.gender = 'Select a gender'
  // }
  //Email Validation
  // if (!data.email.trim()) {
  //   err.email = "Email is Required"
  // }
  if (data.email === '') {
    err.email = "Email is Required"
  }
  // phonenumber validation
  if (data.phonenumber === '') {
    err.phonenumber = "Phone Number is Required"
  } else if (data.phonenumber.length > 11) {
    err.phonenumber = "Phone Number can not exceed 11 characters"
g
  }
  //Password Validation
  // if (!data.password.trim()) {
  //   err.password = "Password is Required"
  // } else if (data.password < 8) {
  //   err.password = "Password must be 8 Characters minimum"

  // }
  if (data.password === '') {
    err.password = "Password is Required"
  } else if (data.password < 8) {
    err.password = "Password must be 8 Characters minimum"

  }
  //   country validation
  if (data.country === "") {
    err.country = 'Country is Required'
  }

  //   Date validation
  if (data.dateofbirth === "") {
    err.dateofbirth = 'Date is Required'
  }
  //   Start of work validation
  if (data.startWork === "") {
    err.startWork = 'Select Start of Work'
  }

  //   Start of relationship
  if (data.relationship === "") {
    err.relationship = 'Select your Relationship'
  }

  return err

}

export default Errors



