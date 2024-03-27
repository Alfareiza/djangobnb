'use client';

import { DateRange, DateRangePicker, Range, RangeKeyDict } from "react-date-range";

import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'

interface DatePickerProps{
    value: Range,
    onChange: (value: RangeKeyDict) => void;
    bookedDates?: Date[]
}

const DatePicker: React.FC<DatePickerProps> = ({
    value,
    onChange,
    bookedDates
}) => {
    return (
        <div className="flex flex-col items-center">
            <DateRange className="max-w-[100%] border border-gray-400 rounded-xl mb-3"
                rangeColors={['#262626']}
                ranges={[value]}
                date={new Date()}
                onChange={onChange}
                direction="vertical"
                showDateDisplay={false}
                minDate={new Date()}
                disabledDates={bookedDates}
            />
        </div>
    )
}

export default DatePicker