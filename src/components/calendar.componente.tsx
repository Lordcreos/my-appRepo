import DatePicker from "react-datepicker";
import "../styles/calendar.css";
import { format } from "date-fns";
import { Title } from "./title.component";
import { Button } from "./button.component";

export const Calendar = ({ startDate, endDate, onChange }: any) => {
  return (
    <div className="w-full mt-4">
      <DatePicker
        selected={startDate}
        onChange={onChange}
        startDate={startDate}
        endDate={endDate}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
        }: any) => {
          return (
            <div className="flex justify-center bg-white">
              <div className="flex items-center justify-between w-full max-w-xs">
                <Button
                  icon="back"
                  onClick={decreaseMonth}
                  disabled={prevMonthButtonDisabled}
                  className="p-3 border rounded-md"
                />
                <Title type="h4" text={format(date, "MMMM, y")} />

                <Button
                  icon="forward"
                  onClick={increaseMonth}
                  disabled={nextMonthButtonDisabled}
                  className="p-3 border rounded-md aaa"
                />
              </div>
            </div>
          );
        }}
        selectsRange
        calendarStartDay={1}
        formatWeekDay={(nameOfDay: any) => nameOfDay.substr(0, 3)}
        renderDayContents={(day: any, date: any) => {
          const tooltipText = `Tooltip for date: ${date}`;
          return <span title={tooltipText}>{day}</span>;
        }}
        inline
      />
    </div>
  );
};
