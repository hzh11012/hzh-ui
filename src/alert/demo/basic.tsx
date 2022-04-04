import React from "react";
import { Alert } from "hzh-ui";

export default () => (
  <>
    <Alert kind="info">这是一条info提示</Alert>
    <br />
    <Alert kind="warning">这是一条warning提示</Alert>
    <br />
    <Alert kind="negative">这是一条negative提示</Alert>
    <br />
    <Alert kind="positive">这是一条positive提示</Alert>
  </>
);
