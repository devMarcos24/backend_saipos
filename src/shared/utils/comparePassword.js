import bcrypt from "bcrypt";

const comparePassword = async (password, userPassowrd) => {
  bcrypt.compare(password, userPassowrd);
};

export default comparePassword;
