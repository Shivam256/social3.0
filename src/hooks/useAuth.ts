import React, { useCallback } from "react";

import {
  registerSuccess,
  loginSuccess,
  logoutSuccess,
} from "../redux/slices/auth";

import { trpc } from "../utils/trpc";

import { useSnackbar } from "notistack";

interface SignupData {
  username: string;
  email: string;
  password: string;
  cpassword: string;
}

const useAuth = () => {
  const signupMutation = trpc.useMutation(["auth.signup"]);

  const register = useCallback(async (data: SignupData) => {
    signupMutation.mutate(data);
    
  }, []);

  return {
    register,
  };
};

export default useAuth;
