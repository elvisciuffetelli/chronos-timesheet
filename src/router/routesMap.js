import { withOidcSecure } from '@axa-fr/react-oidc-context';
import Dashboard from '../views/dashboard/Dashboard';
import Timesheet from '../views/timesheet/Timesheet';
import UserCreate from '../views/userCreate/UserCreate';
import SuccessAlert from '../components/successAlert/SuccessAlert';
import Home from '../components/home/Home';
import withCapabilities from '../hoc/withCapabilities';
import capabilityType from '../constants/capabilityType';
import Unauthorized from '../components/unauthorized/Unauthorized';
import NotFound from '../views/notFound/NotFound';
import UserRequest from '../views/request/UserRequest';

const dashboardCapabilities = [capabilityType.USER.GUIDELINES];
const userCreateCapabilities = [capabilityType.USER.GUIDELINES];
const userRequestCapabilities = [capabilityType.USER.GUIDELINES];

export const path = {
  dashboard: '/dashboard',
  home: '/',
  timesheet: '/timesheet',
  userCreate: '/user-create',
  unauthorized: '/unauthorized',
  userPosted: '/user-posted',
  notfound: '/notfound',
  userRequest: '/user/request'
};

export default {
  dashboard: {
    path: path.dashboard,
    component: withOidcSecure(withCapabilities(Dashboard, dashboardCapabilities)),
    requiredCapabilities: dashboardCapabilities
  },
  home: {
    path: path.home,
    component: Home,
    requiredCapabilities: []
  },
  timesheet: {
    path: path.timesheet,
    component: withOidcSecure(withCapabilities(Timesheet, [])),
    requiredCapabilities: []
  },
  userCreate: {
    path: path.userCreate,
    component: withOidcSecure(withCapabilities(UserCreate, userCreateCapabilities)),
    requiredCapabilities: userCreateCapabilities
  },
  userRequest: {
    path: path.userRequest,
    component: withOidcSecure(withCapabilities(UserRequest, userRequestCapabilities)),
    requiredCapabilities: userRequestCapabilities
  },
  unauthorized: {
    path: path.unauthorized,
    component: Unauthorized,
    requiredCapabilities: []
  },
  userPosted: {
    path: path.userPosted,
    component: SuccessAlert,
    requiredCapabilities: []
  },
  notfound: {
    path: path.notfound,
    component: NotFound,
    requiredCapabilities: []
  }
};
