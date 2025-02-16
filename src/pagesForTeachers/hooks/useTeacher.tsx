import useSWR from "swr";
import {
  classAttendance,
  readClassInfoStudent,
  readClassInfoSubject,
  readQuiz,
  readSubjectDetail,
  readSubjectQuiz,
  readTeacherCookie,
  readTeacherSchedule,
  viewTeacherDetail,
} from "../api/teachersAPI";

export const useTeacherCookie = () => {
  const { data: dataID } = useSWR(`api/read-teacher-cookie/`, () => {
    return readTeacherCookie().then((res: any) => {
      return res.data;
    });
  });
  return { dataID };
};

export const useTeacherDetail = (teacherID: string) => {
  const { data: teacherDetail } = useSWR(
    `api/view-teacher-detail/${teacherID}`,
    () => {
      return viewTeacherDetail(teacherID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherDetail };
};

export const useTeacherInfo = () => {
  const { dataID } = useTeacherCookie();

  const { data: teacherInfo } = useSWR(
    `api/view-teacher-detail/${dataID}`,
    () => {
      return viewTeacherDetail(dataID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherInfo };
};

export const useClassSubject = (classID: string) => {
  const { data: subjectData } = useSWR(
    `api/view-teacher-detail/${classID}`,
    () => {
      return readClassInfoSubject(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { subjectData };
};

export const useClassTimeTable = (classID: string) => {
  const { data: timetableData } = useSWR(
    `api/view-teacher-detail/${classID}`,
    () => {
      return readClassInfoSubject(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { timetableData };
};

export const useTeacherSchedule = (teacherID: string) => {
  const { data: teacherSchedule } = useSWR(
    `api/view-teacher-schedule/${teacherID}`,
    () => {
      return readTeacherSchedule(teacherID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherSchedule };
};

export const useTeacherStudent = (classID: string) => {
  const { data: teacherSchedule } = useSWR(
    `api/view-teacher-schedule/${classID}`,
    () => {
      return readTeacherSchedule(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { teacherSchedule };
};

export const useClassStudent = (classID: string) => {
  const { data: classStudents } = useSWR(
    `api/view-all-class-students/${classID}`,
    () => {
      return readClassInfoStudent(classID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { classStudents };
};

export const useSujectInfo = (subjectID: string) => {
  const { data: subjectInfo } = useSWR(
    `api/view-subject-info/${subjectID}`,
    () => {
      return readSubjectDetail(subjectID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { subjectInfo };
};

export const useSujectQuiz = (subjectID: string) => {
  const { data: subjectQuiz } = useSWR(
    `api/view-subject-quiz/${subjectID}`,
    () => {
      return readSubjectQuiz(subjectID!).then((res: any) => {
        return res.data;
      });
    }
  );
  return { subjectQuiz };
};

export const useQuiz = (quizID: string) => {
  const { data: quizData } = useSWR(`api/view-quiz/${quizID}`, () => {
    return readQuiz(quizID!).then((res: any) => {
      return res.data;
    });
  });
  return { quizData };
};

export const useAttendance = (classID: string) => {
  const { data: attendance } = useSWR(
    `api/view-class-attendance/${classID}`,
    () => {
      return classAttendance(classID!).then((res: any) => {
        return res.data;
      });
    },
    { refreshInterval: 1000 }
  );
  return { attendance };
};
