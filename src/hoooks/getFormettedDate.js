export const getFormattedDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1; // 월은 0부터 시작하므로 +1
    const date = today.getDate();
    const day = ['일', '월', '화', '수', '목', '금', '토'][today.getDay()]; // 요일 가져오기
    return `${year}년 ${month}월 ${date}일 (${day})`;
};
