//@flow

import React from "react";
import PropTypes from "prop-types";

type Props = {
  item: string,
  cost?: number
};

export default function App(props: Props) {
  return (
    <div>
      <h1>{props.item}</h1>
      <p>Cost: {props.cost}</p>
    </div>
  );
}
