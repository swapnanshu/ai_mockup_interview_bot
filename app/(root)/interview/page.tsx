import Agent from "@/app/components/Agent";
import { getCurrentUser } from "@/lib/actions/auth.actions";
import React from "react";

const page = async () => {
  const user = await getCurrentUser();

  return (
    <>
      <h3>Interview Page</h3>
      <Agent userId={user?.id} userName={user?.name || ""} type="generate" />
    </>
  );
};

export default page;
