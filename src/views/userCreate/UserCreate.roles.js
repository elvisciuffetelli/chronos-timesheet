const userRoles = [
  { value: 'User.Guidelines', label: 'Guidelines' },
  { value: 'User.Handbook', label: 'Handbook' },
  { value: 'User.Home', label: 'Home' },
  { value: 'User.Payrolls', label: 'Payrolls' },
  { value: 'User.Projects', label: 'Projects' },
  { value: 'User.Requests', label: 'Requests' },
  { value: 'User.Timesheets', label: 'Timesheets' },
  { value: 'User.Refunds', label: 'Refunds' }
];

const adminRoles = [
  { value: 'Admin.Billing', label: 'Billing' },
  { value: 'Admin.Customers', label: 'Customers' },
  { value: 'Admin.Employees', label: 'Employees' },
  { value: 'Admin.Home', label: 'Home' },
  { value: 'Admin.Payrolls', label: 'Payrolls' },
  { value: 'Admin.Projects', label: 'Projects' },
  { value: 'Admin.Requests', label: 'Requests' },
  { value: 'Admin.Timesheets', label: 'Timesheets' },
  { value: 'Admin.Refunds', label: 'Refunds' }
];

const superUserRoles = [
  { value: 'Superuser.Home', label: 'Home' },
  { value: 'Superuser.ManageRoles', label: 'Manage Roles' }
];

export { adminRoles, userRoles, superUserRoles };
