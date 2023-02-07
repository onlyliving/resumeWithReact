export const periodFormatKor = (year: number, month: number): string =>
    year === 0 ? `${month}개월` : `${year}년 ${month}개월`;

export const periodFormatNum = (periodObj: {
    start: string;
    finish: string;
}): string => {
    const dateFormatNum = (str: string): string =>
        !str ? '재직중' : str.indexOf('-') !== -1 ? str.replace('-', '.') : str;
    return `${dateFormatNum(periodObj.start)} ~ ${dateFormatNum(
        periodObj.finish
    )}`;
};

export const getDateDiff = (periodObj: {
    start: string;
    finish: string;
}): {
    getYear: number;
    getMonth: number;
    formatKor: string;
} => {
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

    formatNumber = () =>
        periodFormatNum({ start: this.startDate, finish: this.lastDate });
    getPeriodFormatKor = () =>
        getDateDiff({ start: this.startDate, finish: this.lastDate }).formatKor;
}

export const noticeConsoleLog = () => {
    const style = {
        favicon: 'background-color:#56f256',
        content: 'background-color: #000; color: #fff; font-size: 12px',
        subContent: 'background-color: #000; font-size: 10px; color: #fff',
    };
    return console.log(
        `%c  %c 김소희 - 프론트엔드 개발자 이력서. %c최신 업데이트 (2023년 2월)`,
        style.favicon,
        style.content,
        style.subContent
    );
};
