import React from 'react';

function dashCompBody(compType) {
  if (compType === 'calendar') {
    return (
      <div className="dashcomp-calendar">
        <h1 className="dashcomp-calendar-header">
          23 December, Sunday
        </h1>
        <ul className="dashcomp-calendar-week">
          <li>
            <div className="dashcomp-calendar-weekday">
              Sun
            </div>
            <div className="dashcomp-calendar-datenum">
              23
            </div>
          </li>
          <li>
            <div className="dashcomp-calendar-weekday">
              Mon
            </div>
            <div className="dashcomp-calendar-datenum">
              24
            </div>
          </li>
          <li>
            <div className="dashcomp-calendar-weekday">
              Tue
            </div>
            <div className="dashcomp-calendar-datenum">
              25
            </div>
          </li>
          <li>
            <div className="dashcomp-calendar-weekday">
              Wed
            </div>
            <div className="dashcomp-calendar-datenum">
              26
            </div>
          </li>
          <li>
            <div className="dashcomp-calendar-weekday">
              Thu
            </div>
            <div className="dashcomp-calendar-datenum">
              27
            </div>
          </li>
          <li>
            <div className="dashcomp-calendar-weekday">
              Fri
            </div>
            <div className="dashcomp-calendar-datenum">
              28
            </div>
          </li>
          <li>
            <div className="dashcomp-calendar-weekday">
              Sat
            </div>
            <div className="dashcomp-calendar-datenum">
              29
            </div>
          </li>
        </ul>
      </div>
    );
  }
}

export default dashCompBody;
