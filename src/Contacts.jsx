import React from "react";
import { useSearchParams, useParams, useNavigate } from "react-router-dom";

const Contacts = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const { userId, sectionId, productId } = useParams();
  console.log("userIduserIduserIduserIduserId", userId, sectionId, productId);

  const navigate = useNavigate();

  return (
    <div>
      <div>This is the contacts Page</div>
      <button
        onClick={() => {
          navigate("/contact/userId/2/sectionId/3/productId/4/", {
            replace: true,
          });
          setSearchParams({});
          setSearchParams({ userId: 1, sectionId: 2, productId: 3 });
        }}
      >
        Set Parameters
      </button>
    </div>
  );
};

export default Contacts;
