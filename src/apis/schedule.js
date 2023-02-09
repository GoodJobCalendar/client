import { api } from './instance/defaultInstance';
const scheduleApi = {
  // 개인일정 작성
  postSchedule: (image, companyName, title, sticker, color, date, place, memo) =>
    api.post('/api/schedule', image, companyName, title, sticker, color, date, place, memo),
  // 개인일정 상세조회
  getDetailSchedule: (scheduleId) => api.get(`/api/schedule/${scheduleId}`),
  // 개인일정 삭제
  deleteSchedule: (scheduleId, params) => api.delete(`/api/schedule${scheduleId}`, params),
  // 개인일정 수정
  modifySchedule: (scheduleId, image, companyName, title, sticker, color, date, place, memo) =>
    api.patch(`/api/schedule${scheduleId}`, image, companyName, title, sticker, color, date, place, memo),
  // 월간일정조회
  getMonthlySchedules: (params) => api.get('/api/schedule/monthly', params),
  // 일간일정조회
  getDailySchedules: (params) => api.get('/api/schedule/daily', params),
  // 키워드 검색
  getSearchList: (params) => api.get('/api/schedule/search', params),
};

export default scheduleApi;