import React, { useContext, useEffect, useState } from 'react';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Tooltip from '@material-ui/core/Tooltip';
import capabilityContext from '../../../providers/capabilityContext';
import routesMap from '../../../router/routesMap';

const linksData = [
  {
    text: 'Dashboard',
    icon: 'home',
    route: routesMap.dashboard.path,
    requiredCapabilities: routesMap.dashboard.requiredCapabilities
  },
  {
    text: 'Timesheet',
    icon: 'calendar_today',
    requiredCapabilities: routesMap.timesheet.requiredCapabilities,
    route: routesMap.timesheet.path
  },
  {
    text: 'User Request',
    icon: 'edit',
    requiredCapabilities: routesMap.userRequest.requiredCapabilities,
    route: routesMap.userRequest.path
  },
  {
    text: 'Crea Utente',
    icon: 'create',
    requiredCapabilities: routesMap.userCreate.requiredCapabilities,
    route: routesMap.userCreate.path
  }
];

const LinksList = () => {
  const { capabilities } = useContext(capabilityContext);
  const [capabilityLinks, setCapabilityLinks] = useState([]);

  useEffect(() => {
    setCapabilityLinks(
      linksData.filter(l => l.requiredCapabilities.some(c => capabilities.includes(c)))
    );
  }, [capabilities]);

  return (
    <List>
      {capabilityLinks.map(item => (
        <Link to={item.route} key={item.text} style={{ textDecoration: 'none' }}>
          <Tooltip title={item.text} placement="right">
            <ListItem button>
              <ListItemIcon style={{ paddingLeft: '8px' }}>
                <i className="material-icons">{item.icon}</i>
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          </Tooltip>
        </Link>
      ))}
    </List>
  );
};

export default LinksList;
