import React from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';

const events = [
  {
    title: 'Client Meeting',
    start: '2024-03-20T10:00:00',
    end: '2024-03-20T11:30:00',
    backgroundColor: '#4F46E5',
  },
  {
    title: 'Follow-up Call',
    start: '2024-03-22T14:00:00',
    end: '2024-03-22T15:00:00',
    backgroundColor: '#7C3AED',
  },
  {
    title: 'Product Demo',
    start: '2024-03-25T15:00:00',
    end: '2024-03-25T16:30:00',
    backgroundColor: '#2563EB',
  },
];

const CalendarView = () => {
  return (
    <div className="calendar-container">
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        headerToolbar={{
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay',
        }}
        events={events}
        editable={true}
        selectable={true}
        selectMirror={true}
        dayMaxEvents={true}
        height="auto"
      />
    </div>
  );
};

export default CalendarView;