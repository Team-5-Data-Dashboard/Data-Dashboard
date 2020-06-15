import React, { useState, useEffect } from 'react';

function NavBar() {
  const [selectedYear, changeSelectedYear] = useState('2019');

  const updateYear = (val) => {
    changeSelectedYear(val);
  };

  useEffect(() => {
    console.log(selectedYear);
  }, [selectedYear]);

  return (
    <div className="navbar">
      Data Dashboard
      <select onChange={(e) => updateYear(e.target.value)}>
        <option value="2006"> 2006 </option>
        <option value="2007"> 2007 </option>
        <option value="2008"> 2008 </option>
        <option value="2009"> 2009 </option>
        <option value="2010"> 2010 </option>
        <option value="2011"> 2011 </option>
        <option value="2012"> 2012 </option>
        <option value="2013"> 2013 </option>
        <option value="2014"> 2014 </option>
        <option value="2015"> 2015 </option>
        <option value="2016"> 2016 </option>
        <option value="2017"> 2017 </option>
        <option value="2018"> 2018 </option>
        <option selected value="2019"> 2019 </option>
      </select>
    </div>
  );
}

export default NavBar;
