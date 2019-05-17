const capabilityType = {
  USER: {
    GUIDELINES: 'User.Guidelines',
    HANDBOOK: 'User.Handbook',
    HOME: 'User.Home',
    PAYROLLS: 'User.Payrolls',
    PROJECTS: 'User.Projects',
    REQUESTS: 'User.Requests',
    TIMESHEETS: 'User.Timesheets',
    REFUNDS: 'User.Refunds'
  },
  ADMIN: {
    BILLING: 'Admin.Billing',
    CUSTOMERS: 'Admin.Customers',
    EMPLOYEES: 'Admin.Employees',
    HOME: 'Admin.Home',
    PAYROLLS: 'Admin.Payrolls',
    PROJECTS: 'Admin.Projects',
    REQUESTS: 'Admin.Requests',
    TIMESHEETS: 'Admin.Timesheets',
    REFUNDS: 'Admin.Refunds'
  },
  SUPERUSER: {
    HOME: 'Superuser.Home',
    MANAGE_ROLES: 'Superuser.ManageRoles'
  }
};

export default capabilityType;
