import dotenv from 'dotenv';
dotenv.config();
import jwt from 'jsonwebtoken';
export const login = async ({ password, email }) => {
  try {
    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const TokenKey = jwt.sign({ email, password }, process.env.JWT_SECRET);
      return {
        data: { token: TokenKey, message: 'Login successful' },
        statuscode: 200
      };

    } else {
      return { data: 'Invalid email or password', statuscode: 400 };
    }
  } catch (error) {
    console.error("Login error:", error);
    return { data: 'An error occurred while logging in', statuscode: 500 };
  }
};