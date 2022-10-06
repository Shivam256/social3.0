import React, { useState } from "react";
import { useSelector, TypedUseSelectorHook } from "react-redux";
import Header from "../components/Header";

type Props = {
  children: React.ReactNode;
};

interface RootState {
  auth: {
    isLoggedIn: boolean;
  };
}

const MainLayout = ({ children }: Props) => {
  const selectAuth = (state: RootState) => state.auth;
  const auth = useSelector(selectAuth);

  return (
    <>
      {auth.isLoggedIn ? <Header /> : null}
      {children}
    </>
  );
};

export default MainLayout;
