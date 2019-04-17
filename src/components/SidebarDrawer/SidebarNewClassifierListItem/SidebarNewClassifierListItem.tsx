import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import AddIcon from '@material-ui/icons/Add';
import useDialog from '../../../hooks/Dialog';
import ConnectedNewClassifierDialog from '../../../containers/ConnectedNewClassifierDialog';
import { useTranslation } from 'react-i18next';

const SidebarNewClassifierListItem = () => {
  const { openedDialog, openDialog, closeDialog } = useDialog();

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ListItem button dense onClick={openDialog}>
        <ListItemIcon>
          <AddIcon />
        </ListItemIcon>

        <ListItemText primary={t('New classifier') + '…'} />
      </ListItem>

      <ConnectedNewClassifierDialog
        closeDialog={closeDialog}
        openedDialog={openedDialog}
      />
    </React.Fragment>
  );
};

export default SidebarNewClassifierListItem;
