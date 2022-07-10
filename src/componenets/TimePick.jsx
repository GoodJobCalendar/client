import React, { useState } from "react";
import styled from "styled-components";

import TimePicker from "rc-time-picker";
import "rc-time-picker/assets/index.css";
import moment from "moment";
import ko from "date-fns/locale/ko";

const TimePick = ({ value, onChange, ...others }) => {
  const [dispatchTime, setDispatchTime] = useState(moment());
  const now = moment().hour(0).minute(0);
  const handleValueChange = (value) => {
    setDispatchTime(value);
    console.log("value" + value);
  };
  return (
    <Div>
      <TimePicker
        locale={ko}
        showSecond={false}
        minuteStep={5}
        {...others}
        use12Hours={true}
        value={dispatchTime}
        defaultValue={now}
        onChange={handleValueChange}
        format="a HH:mm"
        showTime={{ use12Hours: true, format: "a HH:mm" }}
        clearIcon={true}
      />
    </Div>
  );
};

export default TimePick;
const Div = styled.div`
  position: relative !important;
`;
