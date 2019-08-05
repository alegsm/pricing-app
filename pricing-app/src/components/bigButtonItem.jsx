// @flow
import * as React from "react";
import { Feature } from "../model/feature";
import Grid from "@material-ui/core/Grid";

type Props = {
  feature: Feature,
  selected: boolean,
  onSelect: () => void
};
export const BigButtonItem = (props: Props) => {
  console.log(props);
  return (
    <Grid
      container
      item
      xs
      key={props.feature.name}
      direction={"row"}
      alignItems={"center"}
      style={{
        padding: 20,
        background: props.selected ? "grey" : "white",
        border: `1px solid grey`,
        borderRadius: 10,
        margin: 10,
        fontSize: 20,
        fontWeight: 200,
        color: props.selected ? "white" : "black",
        cursor: "pointer"
      }}
      onClick={props.onSelect}
    >
      <Grid item xs style={{fontSize: 30}}>
        {props.feature.name}
      </Grid>
      {props.feature.icon ? (
        <Grid item xs>
          <div
            style={{
              width: 70,
              height: 70,
              borderRadius: 100,
              backgroundColor:"white",
              backgroundImage: `url(${props.feature.icon})`,
              backgroundSize: "80%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              border: `1px solid ${props.selected ? "white" : "grey"}`
            }}
          />
        </Grid>
      ) : null}
    </Grid>
  );
};
