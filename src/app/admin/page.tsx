"use client";
import signout from "@/src/firebase/auth/signout";
import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const router = useRouter();

  const handleLogoutClick = async (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();

    try {
      await signout();
      router.push("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="wrapper">
      <div className="form-wrapper">
        <h1 className="mt-60 mb-30">Logout</h1>
        <Button variant="contained" onClick={handleLogoutClick}>
          Log Out
        </Button>
      </div>
    </div>
  );

  return <div>Hello</div>;
}

export default Page;
