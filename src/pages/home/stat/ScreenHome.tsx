import { useEffect, useState } from "react";
import { FaBuildingUser, FaCheckDouble } from "react-icons/fa6";
import { MdPlaylistAddCheck } from "react-icons/md";
import Personal from "../../page/stats/Personal";
import StudentPerformance from "./StudentPerformance";
import TopRatedTeacher from "./TopRatedTeacher";
import MostActiveScreen from "../../page/stats/MostActiveStudio";

const ScreenHome = () => {
  document.title = "Studio Record and Stats";

  const [state, setState] = useState<string>("");

  const readData = Array.from({ length: 2 });

  useEffect(() => {
    // justRead();
  }, []);

  return (
    <div className="text-blue-950 flex flex-col h-full">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-3 mt-5">
        <div className="min-w-[250px] h-full flex flex-col rounded-md border p-4">
          <div className="mb-4 text-medium capitalize">School's Info</div>
          <Personal />

          <div className="flex-1 mt-10" />
          <div className="text-[13px] font-medium mt-4">
            <div className="flex items-center gap-4">
              <div className="border-r pr-4 ">
                {state ? (
                  <label className="relative w-20 h-20 flex flex-col items-center cursor-pointer">
                    <input
                      type="checkbox"
                      value={state}
                      onChange={() => {
                        document.startViewTransition(() => {
                          setState("");
                        });
                      }}
                      className="sr-only peer"
                    />

                    <div className="absolute -bottom-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-900 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950" />
                    <span className="absolute text-[11px] leading-tight mt-2 font-medium text-gray-900 dark:text-gray-300">
                      View Subscription Status
                    </span>
                  </label>
                ) : (
                  <label className="relative w-20 flex flex-col h-20 items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      value={state}
                      onChange={() => {
                        document.startViewTransition(() => {
                          setState("dd");
                        });
                      }}
                    />

                    <div className=" absolute -bottom-0 w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-950" />

                    <span className="absolute text-[11px] leading-tight mt-2 font-medium text-gray-900 dark:text-gray-300 mb-0">
                      View Subscription Status
                    </span>
                  </label>
                )}
              </div>
              <div className="w-[60%] text-blue-950">
                {state ? (
                  <div>Subscription ends Monday Feb, 26 2024</div>
                ) : (
                  <div>****************</div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="min-w-[300px] overflow-hidden h-full flex flex-col rounded-md border p-4">
          <div className="mb-10 text-[14px] font-normal capitalize">
            Performance
          </div>

          <div>
            {readData?.length > 0 ? (
              <div className="flex justify-center flex-col gap-3 w-full items-center ">
                {/* from complain */}
                <p>Top 5 Performancing Students</p>
                <div className=" overflow-hidden">
                  <StudentPerformance />
                </div>
              </div>
            ) : (
              <div className="flex flex-col w-full items-center">
                <MdPlaylistAddCheck size={30} />
                <p className="font-medium text-[13px]">
                  No complains Record yet:{" "}
                </p>
              </div>
            )}
          </div>

          <div className="flex-1" />
          <div className="border-b my-5" />

          <div className="flex flex-col items-center w-full justify-center">
            <p className="mb-3 text-[14px] font-medium">Top Rated Teacher</p>

            <div className=" flex justify-center gap-3 w-full items-center">
              <TopRatedTeacher />
            </div>
          </div>
        </div>

        <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3  ">
          {/* Appointment */}

          <div className=" rounded-md w-full  p-4">
            <div className="mb-4 text-medium capitalize">
              Top 5 Most Active Student
            </div>

            <div>
              {readData?.length > 0 ? (
                <div>
                  {" "}
                  <MostActiveScreen />{" "}
                </div>
              ) : (
                <div className="flex flex-col w-full items-center">
                  <MdPlaylistAddCheck size={30} />
                  <p className="font-medium text-[13px]">No Enry Record yet</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1" />
      <div className=" border bg-slate-50 mt-10 p-2 ">
        {readData?.length! < 0 ? (
          <div className=" grid grid-cols-1  lg:grid-cols-2 xl:grid-cols-3 gap-3">
            <div className="border rounded-md flex gap-2 w-full p-2 overflow-hidden">
              <FaBuildingUser size={25} />
              {/* <HospitalDetails
                state={data?.familyHospital[0]}
                choice="First Choice"
              /> */}
            </div>

            <div className="border rounded-md flex gap-2 w-full p-2">
              <FaBuildingUser size={25} />
              {/* <HospitalDetails
                state={data?.familyHospital[1]}
                choice="Second Choice"
              /> */}
            </div>

            <div className="border rounded-md flex gap-2 w-full p-2 col-span-1 lg:col-span-3  xl:col-span-1  ">
              <FaBuildingUser size={25} />
              {/* <HospitalDetails
                state={data?.familyHospital[2]}
                choice="Third Choice"
              /> */}
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center p-4">
            <FaCheckDouble />
            <p className="mt-3 text-[12px] font-medium">
              No Entery Recorded yet
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ScreenHome;
