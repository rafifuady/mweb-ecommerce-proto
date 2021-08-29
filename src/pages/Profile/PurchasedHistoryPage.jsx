import React from "react";
import { Typography } from "@material-ui/core";
import { HeaderContainer } from "../../container/Navigation";
import { ProductHistoryContainer } from "../../container/Product";

export function PurchasedHistoryPage() {
  return (
    <>
      <HeaderContainer />
      <Typography variant="h5">Purchased History</Typography>
      <ProductHistoryContainer />
    </>
  );
}
