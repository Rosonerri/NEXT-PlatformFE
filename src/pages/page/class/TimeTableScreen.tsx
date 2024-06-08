import React, { FC, useCallback, useEffect, useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { useClassTimeTable } from "../../hook/useSchoolAuth";
import lodash from "lodash";

const TimeTableScreen: FC = () => {
  const { classID } = useParams();
  const { timetbale } = useClassTimeTable(classID!);

  let [data, setData] = useState<Array<{}>>([]);
  let [title, setTitle] = useState<Array<string>>([]);

  //   console.log("Got it: ", timetbale?.data?.timeTable);

  const viewTable = lodash.groupBy(timetbale?.data?.timeTable, "day");

  useEffect(() => {
    const timer = setTimeout(() => {
      setData(Object.values(viewTable));
      setTitle(Object.keys(viewTable));

      clearTimeout(timer);
    }, 200);
  }, []);

  return (
    <div className="w-full">
      <div className="">
        <div className=" w-full bg-slate-100 h-[200px] border rounded-md p-2 overflow-x-auto gap-4">
          {/* Header */}
          <div className="flex w-[2600px] gap-4 bg-white py-3 px-1">
            <div className="w-[200px] h-6 border-r">days</div>

            <div className="w-[300px] h-6  border-r">07:45AM - 08:10AM </div>
            <div className="w-[300px] h-6  border-r">08:10AM - 08:50AM </div>
            <div className="w-[300px] h-6  border-r">08:50AM - 09:30AM </div>
            <div className="w-[300px] h-6  border-r">09:30AM - 10:10AM</div>
            <div className="w-[300px] h-6  border-r">10:10AM - 10:20AM </div>
            <div className="w-[300px] h-6  border-r">10:20AM - 11:00AM </div>
            <div className="w-[300px] h-6  border-r">11:00AM - 11:40AM </div>
            <div className="w-[300px] h-6  border-r">11:40AM - 12:00NOON </div>
            <div className="w-[300px] h-6  border-r">12:00NOON - 12:40PM </div>
            <div className="w-[300px] h-6  border-r">12:40PM - 01:20PM </div>
            <div className="w-[300px] h-6  border-r">01:20PM - 02:00PM </div>
          </div>

          <div className="flex w-[2600px] gap-4 px-1 py-3 mt-2">
            <div className="w-[200px] h-6 border-r">
              {title?.map((props: string, i: number) => (
                <div
                  key={i}
                  className={`py-2 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}`}
                >
                  {props}
                </div>
              ))}
            </div>

            <div className="">
              {data?.map((props: any, i: number) => (
                <div
                  key={i}
                  className={`
                flex flex-col py-2 ${i % 2 === 0 ? "bg-white" : "bg-slate-50"}
                `}
                >
                  <div className="flex   ">
                    {props?.map((props: any, e: number) => (
                      <div className="flex">
                        <div key={e} className="w-[200px] h-6 border-r ">
                          {props.subject}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* 
          <div className="flex w-[2600px] gap-4 px-1 py-3 mt-2">
            
            <div className="w-[300px] h-6  border-r">Assembly</div>
            <div className="w-[300px] h-6  border-r">Chemistry</div>
            <div className="w-[300px] h-6  border-r">time</div>
            <div className="w-[300px] h-6  border-r">time</div>
            <div className="w-[300px] h-6  border-r">Short Break</div>
            <div className="w-[300px] h-6  border-r">time</div>
            <div className="w-[300px] h-6  border-r">time</div>
            <div className="w-[300px] h-6  border-r">Long Break</div>
            <div className="w-[300px] h-6  border-r">time</div>
            <div className="w-[300px] h-6  border-r">time</div>
            <div className="w-[300px] h-6  border-r">time</div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TimeTableScreen;
