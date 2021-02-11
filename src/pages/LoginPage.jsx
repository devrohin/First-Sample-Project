import { Router, useHistory } from "react-router-dom";
import Header from "../components/Header";
import React, { Component, useState } from "react";
import Page from "../components/Page";
import Error from "./ErorrPage";

export default function LoginPage({ user }) {
  const history = useHistory();
  if (!user) {
    return (
      <Page>
        Login
        <h6> Please login with your Credentials </h6>

      </Page>
    );
  } else {
    return <Error />
  }
}
