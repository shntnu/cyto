import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import HelpDialog from '../../Dialog/HelpDialog/HelpDialog';
import HelpIcon from '@material-ui/icons/Help';
import useDialog from '../../../hooks/Dialog';
import { useTranslation } from 'react-i18next';

const HelpListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ListItem dense disabled button onClick={openDialog}>
        <ListItemIcon>
          <HelpIcon />
        </ListItemIcon>

        <ListItemText primary={t('Help')} />
      </ListItem>

      <HelpDialog onClose={closeDialog} open={openedDialog} />
    </React.Fragment>
  );
};

export default HelpListItem;
