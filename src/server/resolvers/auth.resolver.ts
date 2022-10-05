// import bcrypt from "bcrypt";
// import jwt from "jsonwebtoken";

type Props = {
  ctx: any;
  input: any;
};

export const signupResolver = async ({ ctx, input }: Props) => {
  console.log(input, "heheheheh");
  const { username, email, password } = input;


  return {
    message: "from the trpc",
  };
};
