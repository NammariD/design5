import * as React from "react";
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';


export default function SelectBasic() {
  return (
    <Select color = "neutral" variant ="plain" sx = {{width:"366px", top: "15px", backgroundColor:"#121212"}} defaultValue="dog">
      <Option value="dog">SOTeaching</Option>
      <Option value="cat">Nammari's TEAM</Option>
    </Select>
  );
}
