"use client";
import React from "react";
import login from "../../firebase/auth/login";
import { useRouter } from "next/navigation";
import { Button } from "@mui/material";

function Page() {
  const router = useRouter();

  const handleLoginClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    const { result, error } = await login();

    if (error) {
      return console.log(error);
    }

    // else successful
    console.log(result);
    router.push("/admin");
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Login</h1>
        <Button variant="contained" onClick={handleLoginClick}>
          Log in with github
        </Button>
      </div>
    </div>
  );
}

export default Page;
