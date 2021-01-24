import { TextField } from "@material-ui/core";
import { useContext } from "react";
import { MainContext } from "../../context/mainContext";
import { helper } from "../../utils";

export default function BrandFacet({ data, name }) {
  const { state, send } = useContext(MainContext);

  data = [null, ...data];
  const { changeHandler } = helper(state, send);
  const mappedOptions = data.map((item) => (
    <option key={item} value={item}>
      {item}
    </option>
  ));

  return (
    <TextField
      style={{ width: "180px" }}
      name={name}
      select
      SelectProps={{ native: true }}
      placeholder={name}
      label={name}
      size="small"
      fullWidth
      value={state.context.filter[name]}
      variant="outlined"
      onChange={(e) => changeHandler(e, name)}
    >
      {mappedOptions}
    </TextField>
  );
}
