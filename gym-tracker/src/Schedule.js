import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
export default function Schedule() {
  let [schedule, setSchedule] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    let tmpSchedule = window.localStorage.getItem("schedule");
    let tmpUser = window.localStorage.getItem("user");

    if (!tmpUser) {
      navigate("/login");
    }
    if (tmpSchedule) {
      tmpSchedule = JSON.parse(tmpSchedule);
    } else {
      navigate("/");
    }
    setSchedule(tmpSchedule);
    console.log(tmpSchedule);
  }, []);

  let handleClick = (option) => {
    console.log(option);
    navigate(`/plan/${option}`);
  };

  return (
    <div className="w-screen h-screen bg-background text-white flex items-center justify-between">
      <div className="text-center w-full flex flex-col">
        <div className="display-font md:text-8xl text-4xl">
          Which Day are you planning today?
        </div>
        <div className="mt-8 flex md:flex-row flex-col md:justify-evenly md:w-1/2 self-center">
          {schedule.map((plan) => (
            <div
              className="border-4 rounded-full min-h-fit w-28 p-4 my-2 md:my-0 cursor-pointer"
              key={plan.day}
              onClick={() => handleClick(plan.day)}
            >
              <div className="uppercase border-b-2">Day {plan.day}</div>
              <div className="md:text-4xl text-2xl font-bold display-font mt-2">
                {plan.type}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
