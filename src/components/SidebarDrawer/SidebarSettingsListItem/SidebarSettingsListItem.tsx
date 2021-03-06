import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDialog from '../../Dialog/SettingsDialog/SettingsDialog';
import useDialog from '../../../hooks/Dialog';

const SettingsListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  return (
    <React.Fragment>
      <ListItem dense button onClick={openDialog}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>

        <ListItemText primary="Settings" />
      </ListItem>

      <SettingsDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
};

export default SettingsListItem;
