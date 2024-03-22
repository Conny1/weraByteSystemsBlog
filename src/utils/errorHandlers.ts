export const loginError = (status: number) => {
  let message = "";
  switch (status) {
    case 404:
      message = "Email with that account does not exist";
      break;
    case 401:
      message = "Invalid email or password";
      break;
    case 500:
      message = "Invalid error. Try Again.";
    default:
      break;
  }

  return message;
};

export const BlogError = (status: number) => {
  let message = "";
  switch (status) {
    case 404:
      message = "No blog added yet";
    case 400:
      message = "Blog could not be submited.Try again later";
      break;

    case 500:
      message = "Invalid error. Try Again.";
    default:
      break;
  }

  return message;
};
