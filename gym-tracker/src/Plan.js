import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function Plan() {
  let [plan, setPlan] = useState();
  let [warm, setWarm] = useState([]);
  let [exercise, setExercise] = useState([]);
  let [selectedExercise, setSetSelectedExercise] = useState();
  let user = window.localStorage.getItem("user");
  let { day } = useParams();
  let navigate = useNavigate();
  useEffect(() => {
    let tmpPlan = window.localStorage.getItem("schedule");
    if (tmpPlan) {
      tmpPlan = JSON.parse(tmpPlan);
      tmpPlan = tmpPlan.filter((x) => x.day == day)[0];
      console.log(tmpPlan);
      setPlan(tmpPlan);
    } else {
      navigate("/");
    }
  }, []);

  useEffect(() => {
    console.log(plan);
    if (plan) {
      let tmpWarm = plan.plan.filter((x) => x.type == "warm");
      let tmpExecise = plan.plan.filter((x) => x.type == "exercise");
      setWarm(tmpWarm);
      setExercise(tmpExecise);
    }
  }, [plan]);

  let handleExerciseSelect = (selExercise) => {
    let tmpArr = plan.plan;
    tmpArr = tmpArr.map((x) => {
      if (x.exercise == selExercise.exercise) {
        x["selected"] = true;
        return x;
      } else {
        return x;
      }
    });
    let tmpPlan = plan;
    tmpPlan["plan"] = tmpArr;
    setPlan(tmpPlan);
    setSetSelectedExercise(selExercise);
  };

  let WorkoutPlan = () => {
    return (
      <div className="text-center w-full flex flex-col">
        <div className="display-font md:text-4xl text-2xl self-center">
          Workout Plan - {user}
        </div>
        <div className="border-b-2 border-dashed w-3/4 self-center pb-2 uppercase text-4xl display-font">
          [ {plan && plan.type} ]
        </div>
        <div className="display-font text-2xl mt-4">Warm Up</div>
        {warm.length > 0 &&
          warm.map((ex) => (
            <div
              className={`p-4 rounded border-2 w-1/4 self-center mt-2 display-font text-lg cursor-pointer ${
                ex.selected ? "border-yellow-600" : "border-green-400"
              }`}
              onClick={() => {
                handleExerciseSelect(ex);
              }}
            >
              {ex.exercise}
            </div>
          ))}
        <div className="display-font text-2xl mt-4">Exercises</div>
        <div className="grid grid-cols-2 md:grid-cols-3 md:w-3/4 self-center gap-4">
          {exercise.length > 0 &&
            exercise.map((ex) => (
              <div
                className={`p-3 rounded border-2 self-center mt-2 display-font text-lg cursor-pointer ${
                  ex.selected ? "border-yellow-600" : "border-green-400"
                }`}
                onClick={() => {
                  handleExerciseSelect(ex);
                }}
              >
                {ex.exercise}
              </div>
            ))}
        </div>
      </div>
    );
  };

  let Exercise = ({ selectedExercise }) => {
    return (
      <div>
        <div
          className="display-font text-lg fixed top-4 left-4 py-2 px-4 border-2"
          onClick={() => {
            setSetSelectedExercise();
          }}
        >
          Back
        </div>
        <div className="flex flex-col">
          <div>Exercise : {selectedExercise.exercise}</div>
          <div>Type : {selectedExercise.repType}</div>
          <div>Reps : {selectedExercise.reps}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-screen h-screen bg-background text-white flex items-center justify-between">
      {selectedExercise ? (
        <Exercise selectedExercise={selectedExercise} />
      ) : (
        <WorkoutPlan />
      )}
    </div>
  );
}
