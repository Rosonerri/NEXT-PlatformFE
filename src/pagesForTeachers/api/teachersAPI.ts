import axios from "axios";

const URL: string = "http://localhost:2244/api";

export const viewTeacherDetail: any = async (teacherID: string) => {
  try {
    return await axios
      .get(`${URL}/view-teacher-detail/${teacherID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const updaetTeacherSalary = async (teacherID: string, data: {}) => {
  try {
    return await axios
      .patch(`${URL}/update-teacher-salery/${teacherID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const loginTeacher = async (data: {}) => {
  try {
    return await axios
      .post(`${URL}/login-teacher/`, data, { withCredentials: true })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readTeacherCookie = async () => {
  try {
    return await axios
      .get(`${URL}/read-teacher-cookie/`, { withCredentials: true })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readClassInfo = async (className: string) => {
  try {
    return await axios
      .post(`${URL}/view-classroom-info-name/`, { className })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readClassInfoTimeTable = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-classroom-info-timetable/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readClassInfoSubject = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-classroom-info-subject/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readClassInfoStudent = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/view-classroom-info-student/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readTeacherSchedule = async (teacherID: string) => {
  try {
    return await axios
      .get(`${URL}/view-teacher-schedule/${teacherID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readSubjectDetail = async (subjectID: string) => {
  try {
    return await axios
      .get(`${URL}/view-subjects-info/${subjectID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createQuiz = async (
  classID: string,
  subjectID: string,
  data: {}
) => {
  try {
    return await axios
      .post(`${URL}/create-subject-quiz/${classID}/${subjectID}`, {
        quiz: data,
      })
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const createTeacherLessonNote = async (
  schoolID: string,
  teacherID: string,
  data: {}
) => {
  try {
    return await axios
      .post(`${URL}/create-lesson-note/${schoolID}/${teacherID}`, data)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readSubjectQuiz = async (subjectID: string) => {
  try {
    return await axios
      .get(`${URL}/view-subject-quiz/${subjectID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const readQuiz = async (quizID: string) => {
  try {
    return await axios.get(`${URL}/view-quiz/${quizID}`).then((res: any) => {
      return res?.data;
    });
  } catch (error) {
    return error;
  }
};

export const markAttendancePresent = async (
  teacherID: string,
  studentID: string
) => {
  try {
    return await axios
      .post(`${URL}/present/${teacherID}/${studentID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const markAttendanceAbsent = async (
  teacherID: string,
  studentID: string
) => {
  try {
    return await axios
      .post(`${URL}/absent/${teacherID}/${studentID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};

export const classAttendance = async (classID: string) => {
  try {
    return await axios
      .get(`${URL}/viewing-class-attendance/${classID}`)
      .then((res: any) => {
        return res?.data;
      });
  } catch (error) {
    return error;
  }
};
