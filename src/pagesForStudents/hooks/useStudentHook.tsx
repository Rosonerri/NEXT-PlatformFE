import useSWR from "swr";
import { readStudentCookie, viewStduentDetail } from "../api/studentAPI";

export const useStudentCookie = () => {
  const { data: dataID } = useSWR(`api/read-student-cookie/`, () => {
    return readStudentCookie().then((res: any) => {
      return res.data;
    });
  });
  return { dataID };
};

export const useStudentInfo = () => {
  const { dataID } = useStudentCookie();

  const { data: studentInfo } = useSWR(
    `api/view-student-info/${dataID}`,
    () => {
      return viewStduentDetail(dataID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { studentInfo };
};
