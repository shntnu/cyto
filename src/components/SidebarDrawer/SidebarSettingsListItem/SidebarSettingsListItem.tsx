import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import SettingsIcon from '@material-ui/icons/Settings';
import SettingsDialog from '../../Dialog/SettingsDialog/SettingsDialog';
import useDialog from '../../../hooks/Dialog';
import { useTranslation } from 'react-i18next';

const SettingsListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ListItem dense button onClick={openDialog}>
        <ListItemIcon>
          <SettingsIcon />
        </ListItemIcon>

        <ListItemText primary={t('Settings')} />
      </ListItem>

      <SettingsDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
};

export default SettingsListItem;
