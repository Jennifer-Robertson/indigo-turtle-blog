import "./styles.css";
import { useNavigate } from "react-router-dom";
import React from "react";

import { ProfilePictureForm } from "./ProfilePictureForm";
import { ChangePasswordForm } from "./ChangePasswordForm";
import { ProfilePicture } from "./ProfilePicture";

function AccountPage(): JSX.Element {
  const navigate = useNavigate();

  return (
    <div className="container">
      <ProfilePicture />
      <ChangePasswordForm />
      <ProfilePictureForm />

      <button
        className="btn"
        onClick={() => {
          navigate("/", { replace: true });
        }}
      >
        Home
      </button>
    </div>
  );
}

export { AccountPage };
