// @flow
import * as React from 'react';
import {Feature} from "../model/feature";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

type Props = {
    feature: Feature,
    selected: boolean,
    onSelect: () => void
};
export const FeatureCheckItem = (props: Props) => {
    return (
        <FormControlLabel
            control={
                <Checkbox
                    checked={props.selected}
                    onChange={props.onSelect}
                    color="primary"
                />
            }
            label={props.feature.name}
            style={{fontSize: 10, marginBottom: 5}}
        />
    );
};
