function Validation(values) {
   let errors = {};
   const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   const passwordPattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/;

   if (!values.name) {
      errors.name = "Name should not be empty";
   } else {
      errors.name = "";
   }

   if (!values.email) {
      errors.email = "Email should not be empty";
   } else if (!emailPattern.test(values.email)) {
      errors.email = "Invalid email format";
   } else {
      errors.email = "";
   }

   if (!values.password) {
      errors.password = "Password should not be empty";
   } else if (!passwordPattern.test(values.password)) {
      errors.password = "Password is not valid";
   } else {
      errors.password = "";
   }

   return errors;
}
export default Validation;
