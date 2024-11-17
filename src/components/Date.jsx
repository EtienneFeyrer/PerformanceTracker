import React, { useState, useEffect } from 'react';
import { DayPicker, getDefaultClassNames } from 'react-day-picker';

const DateComponent = ({ MonthsOnly, GetDayPicker }) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [content, setContent] = useState('');
  const [selected, setSelected] = useState(new Date());
  const defaultClassNames = getDefaultClassNames();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000); // Update every second

    return () => {
      clearInterval(interval); // Clean up the interval on component unmount
    };
  }, []);

  useEffect(() => {
    if (MonthsOnly) {
      setContent(currentDate.toLocaleString('default', { month: 'long' }));
    } else if (GetDayPicker) {
      setContent(
        <DayPicker
          classNames={{
            today: "border-coral-red",
            selected: "bg-coral-red text-white",
            root: `${defaultClassNames.root} shadow-lg p-5`,
            chevron: `${defaultClassNames.chevron} text-coral-red`,
          }}
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={selected ? selected.toLocaleString() : 'Please select a day'}
        />
      );
    } else {
      setContent(`Countdown: ${getCountdownToNext3AM()}`); // Display countdown to next 3 AM with "Countdown:"
    }
  }, [currentDate, MonthsOnly, GetDayPicker]);

  const getCountdownToNext3AM = () => {
    const now = new Date();
    const next3AM = new Date();
    next3AM.setDate(now.getDate() + 1);
    next3AM.setHours(3, 0, 0, 0);
    const countdown = next3AM - now;

    const hours = Math.floor((countdown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((countdown % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((countdown % (1000 * 60)) / 1000);

    return ` ${hours}h ${minutes}m ${seconds}s`;
  };

  return (
    <span>
      {content}
    </span>
  );
};

export default DateComponent;
