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
      linksData.filter(f => capabilities.some(x => x.includes(f.requiredCapabilities)))
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
