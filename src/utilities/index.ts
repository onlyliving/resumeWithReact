export const datePeriod = (periodObj: { start: string; finish: string }) => {
    const startDate = new Date(periodObj.start);
    const lastDate = new Date(periodObj.finish);
    let getYear = lastDate.getFullYear() - startDate.getFullYear();
    let getMonth = lastDate.getMonth() - startDate.getMonth();

    if (Math.sign(getMonth) === -1) {
        getMonth = 12 + getMonth;
        getYear--;
    }

    return getYear === 0 ? `${getMonth}개월` : `${getYear}년 ${getMonth}개월`;
};

const dateForm = (str: string) => (!str ? "재직중" : str.indexOf("-") !== -1 ? str.replace("-", ".") : str);

export const periodForm = (periodObj: { start: string; finish: string }) => {
    return `${dateForm(periodObj.start)} ~ ${dateForm(periodObj.finish)}`;
};

export class ProjectDatePeriodForm {
    startDate: string;
    lastDate: string;

    constructor(startDate: string, lastDate: string) {
        this.startDate = startDate;
        this.lastDate = lastDate;
    }

    formatNumber = () => periodForm({ start: this.startDate, finish: this.lastDate });
    formatKor = () => datePeriod({ start: this.startDate, finish: this.lastDate });
}
