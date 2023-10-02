import React from 'react'; // Import your CSS file for styling

const Sidebar = () => {
  // You can retrieve user information from sessionStorage or props
  const employeeName = sessionStorage.getItem('employeeName'); // Replace with your data source
  const department = sessionStorage.getItem('department'); // Replace with your data source
  const designation = sessionStorage.getItem('designation'); // Replace with your data source

  return (
    <div className="sidebar">
      <div className="user-info">
        <h2>User Information</h2>
        <p><strong>Name:</strong> {employeeName}</p>
        <p><strong>Department:</strong> {department}</p>
        <p><strong>Designation:</strong> {designation}</p>
      </div>
    </div>
  );
};

export default Sidebar;
