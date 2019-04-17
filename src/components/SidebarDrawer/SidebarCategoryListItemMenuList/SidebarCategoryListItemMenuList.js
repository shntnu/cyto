import * as React from 'react';
import {
  MenuItem,
  MenuList,
  Paper,
  Popover,
  ListItemText
} from '@material-ui/core';
import ConnectedEditCategoryDialog from '../../../containers/ConnectedEditCategoryDialog';
import ConnectedDeleteCategoryDialog from '../../../containers/ConnectedDeleteCategoryDialog';
import useDialog from '../../../hooks/Dialog';
import { useTranslation } from 'react-i18next';

const SidebarCategoryListItemMenuList = props => {
  const { anchorEl, category, closeMenu, openedMenu } = props;

  const {
    openedDialog: openedEditCategoryDialog,
    openDialog: openEditCategoryDialog,
    closeDialog: closeEditCategoryDialog
  } = useDialog();

  const {
    openedDialog: openedDeleteCategoryDialog,
    openDialog: openDeleteCategoryDialog,
    closeDialog: closeDeleteCategoryDialog
  } = useDialog();

  const anchorPosition = {
    top: openedMenu ? anchorEl.getBoundingClientRect().bottom - 10 : 0,
    left: openedMenu ? anchorEl.getBoundingClientRect().left : 0
  };

  const onHideOtherCategoriesClick = () => {
    closeMenu();
  };

  const onEditCategoryClick = () => {
    openEditCategoryDialog();

    closeMenu();
  };

  const onDeleteCategoryClick = () => {
    openDeleteCategoryDialog();

    closeMenu();
  };

  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Popover
        anchorPosition={anchorPosition}
        anchorReference="anchorPosition"
        id="simple-popper"
        onClose={closeMenu}
        open={openedMenu}
      >
        <Paper>
          <MenuList dense>
            <MenuItem onClick={onHideOtherCategoriesClick}>
              <ListItemText primary={t('Hide other categories')} />
            </MenuItem>

            <MenuItem onClick={onEditCategoryClick}>
              <ListItemText primary={t('Edit category')} />
            </MenuItem>

            <MenuItem onClick={onDeleteCategoryClick}>
              <ListItemText primary={t('Delete category')} />
            </MenuItem>
          </MenuList>
        </Paper>
      </Popover>

      <ConnectedEditCategoryDialog
        category={category}
        onClose={closeEditCategoryDialog}
        open={openedEditCategoryDialog}
      />

      <ConnectedDeleteCategoryDialog
        category={category}
        onClose={closeDeleteCategoryDialog}
        open={openedDeleteCategoryDialog}
      />
    </React.Fragment>
  );
};

export default SidebarCategoryListItemMenuList;
