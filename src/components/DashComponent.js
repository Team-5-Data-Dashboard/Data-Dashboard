import React from 'react';
import dashCompBody from './dashComponentBody';

function DashCompontent(props) {
  const { headline, compType } = props;
  return (
    <div className="dashcomp-container">
      <div className="dashcomp-head">
        <div className="dashcomp-head-title">
          {headline}
        </div>
        <div className="dashcomp-head-filter">
          Show:&nbsp;
          <a
            href="https://google.com"
          >
            This week
          </a>
        </div>
      </div>
      <div
        className="dashcomp-body"
      >
        {dashCompBody(compType)}
      </div>
    </div>
  );
}

export default DashCompontent;
