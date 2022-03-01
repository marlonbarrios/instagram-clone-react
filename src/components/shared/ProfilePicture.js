import React from "react";
import { useProfilePictureStyles } from "../../styles";
import { Person } from "@material-ui/icons";

function ProfilePicture({
  size,
  image = "https://storage.ning.com/topology/rest/1.0/file/get/9015983657?profile=RESIZE_710x&width=184&height=184&crop=1%3A1",
  isOwner
}) {
  const classes = useProfilePictureStyles({ size, isOwner });

  return (
    <section className={classes.section}>
      {image ? (
        <div className={classes.wrapper}>
          <img src={image} alt="user profile" className={classes.image} />
        </div>
      ) : (
        <div className={classes.wrapper}>
          <Person className={classes.person} />
        </div>
      )}
    </section>
  );
}

export default ProfilePicture;
