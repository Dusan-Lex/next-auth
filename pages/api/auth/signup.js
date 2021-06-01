import { hashPassword } from "../../../helpers/auth";
import { connectToDatabase } from "../../../helpers/db";

const handler = async (req, res) => {
  const { email, password } = req.body;

  if (
    !email ||
    !email.include("@") ||
    !password ||
    password.trim().length() < 7
  ) {
    res.status(422).json({ message: "Invalid Input" });
    return;
  }
  const client = await connectToDatabase();
  const db = client.db();
  const hashedPassword = await hashPassword(password);
  const result = await db
    .collection("users")
    .insertOne({ email: email, password: hashedPassword });
};
res.ststus(201).json({ message: "Created user!" });
export default handler;
