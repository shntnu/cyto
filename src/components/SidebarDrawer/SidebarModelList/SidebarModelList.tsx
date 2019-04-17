import {
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core';
import * as React from 'react';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';
import * as API from '../../../classifier';
import useSnackbar from '../../../hooks/Snackbar';
import TrainingSnackbar from '../../Snackbar/TrainingSnackbar/TrainingSnackbar';
import useCollapseList from '../../../hooks/CollapseList';
import { useTranslation } from 'react-i18next';

const SidebarModelList = (props: { categories: any; images: any }) => {
  const { collapsedList, collapseList } = useCollapseList();

  const { openedSnackbar, openSnackbar, closeSnackbar } = useSnackbar();

  const { t } = useTranslation();

  const run = () => {
    openSnackbar();

    API.fitAndPredict(images, categories);
  };

  const { categories, images } = props;

  return (
    <List dense>
      <ListItem button onClick={collapseList}>
        <ListItemIcon>
          {!collapsedList ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </ListItemIcon>

        <ListItemText inset primary={t('Model')} />
      </ListItem>

      <Collapse in={!collapsedList} timeout="auto" unmountOnExit>
        <ListItem dense button onClick={run}>
          <ListItemIcon>
            <PlayCircleOutlineIcon />
          </ListItemIcon>

          <ListItemText primary={t('Run classifier')} />

          <TrainingSnackbar onClose={closeSnackbar} open={openedSnackbar} />
        </ListItem>
      </Collapse>
    </List>
  );
};

export default SidebarModelList;
