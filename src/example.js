// @flow

import React from "react";

import Select, { components } from "react-select";
import { colourOptions } from "./docs/data";

const CustomClearText = () => "clear all";
const ClearIndicator = (props) => {
  const {
    children = <CustomClearText />,
    getStyles,
    innerProps: { ref, ...restInnerProps }
  } = props;
  return (
    <div
      {...restInnerProps}
      ref={ref}
      style={getStyles("clearIndicator", props)}
    >
      <div style={{ padding: "0px 5px" }}>{children}</div>
    </div>
  );
};

const ClearIndicatorStyles = (base, state) => ({
  ...base,
  cursor: "pointer",
  color: state.isFocused ? "blue" : "black"
});

const ValueContainer = ({ children, ...props }) => {
  const arr = props.getValue();
  const str = arr.map((x) => x.value).join(", ");
  return (
    <components.ValueContainer {...props}>
      {!props.hasValue ? children : str}
    </components.ValueContainer>
  );
};

export default function CustomClearIndicator() {
  return (
    <Select
      closeMenuOnSelect={false}
      components={{ ClearIndicator, ValueContainer }}
      styles={{ clearIndicator: ClearIndicatorStyles }}
      defaultValue={[colourOptions[4], colourOptions[5]]}
      isMulti
      options={colourOptions}
    />
  );
}
