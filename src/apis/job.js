import { api } from './instance/defaultInstance';
const jobApi = {
  // 추천채용 카테고리 변경
  changeCategory: (career, companyType, cityMain, citySub, jobMain, jobSub) =>
    api.patch('/api/posting/category', { career, companyType, cityMain, citySub, jobMain, jobSub }),
  // 추천채용 카테고리 조회
  getJobCategory: () => api.get('/api/posting/category'),
  // 추천채용 조회 (카테고리 검색)
  getJobs: (nextCursor, previousCursor) =>
    api.get(`/api/postings?nextCursor=${nextCursor}&previousCursor=${previousCursor}`),
  // 추천채용 상세조회
  getDetailJob: (postingId) => api.get(`/api/posting/${postingId}`),
  // 채용공고 스크랩
  scrapJob: (postingId) => api.post('/api/schedule/scrap', postingId),
  // 채용공고 찜(like)
  likePosting: (postingId) => api.post(`/api/posting/like/${postingId}`),
  // 채용공고 찜 목록 조회
  getLikeList: (condition, orderBy) => api.get(`/api/posting/likes?condition=${condition}&orderBy=${orderBy}`),
  // 채용공고 찜(like) 삭제
  deleteLikePosting: (postingId) => api.delete(`/api/posting/like/${postingId}`),
};

export default jobApi;
