export const periodFormatKor = (year: number, month: number) => {
    return year === 0 ? `${month}개월` : `${year}년 ${month}개월`;
};

export const periodFormatNum = (periodObj: { start: string; finish: string }) => {
    const dateFormatNum = (str: string) =>
        !str ? "재직중" : str.indexOf("-") !== -1 ? str.replace("-", ".") : str;
    return `${dateFormatNum(periodObj.start)} ~ ${dateFormatNum(periodObj.finish)}`;
};

export const getDateDiff = (periodObj: { start: string; finish: string }) => {
    const startDate = new Date(periodObj.start);
    const lastDate = new Date(periodObj.finish);
    let getYear = lastDate.getFullYear() - startDate.getFullYear();
    let getMonth = lastDate.getMonth() - startDate.getMonth() + 1; // 시작하는 월부터 계산해야하므로 + 1

    if (Math.sign(getMonth) === -1) {
        getMonth = 12 + getMonth;
        getYear--;
    }

    return {
        getYear,
        getMonth,
        formatKor: periodFormatKor(getYear, getMonth),
    };
};

export class DateForm {
    startDate: string;
    lastDate: string;

    constructor(startDate: string, lastDate: string) {
        this.startDate = startDate;
        this.lastDate = lastDate;
    }

    formatNumber = () => periodFormatNum({ start: this.startDate, finish: this.lastDate });
    getPeriodFormatKor = () => getDateDiff({ start: this.startDate, finish: this.lastDate }).formatKor;
}
