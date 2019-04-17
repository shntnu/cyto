import * as React from 'react';
import styles from './SidebarAppBar.css';
import {
  AppBar,
  IconButton,
  Toolbar,
  Tooltip,
  Typography
} from '@material-ui/core';
import classNames from 'classnames';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/styles';
import { useTranslation } from 'react-i18next';

const useStyles = makeStyles(styles);

const SidebarAppBar = (props: any) => {
  const { toggle, toggled } = props;

  const classes = useStyles();

  const { t } = useTranslation();

  return (
    <AppBar className={classNames(classes.appBar)} color="default">
      <Toolbar disableGutters={true}>
        <Tooltip title={toggled ? t('Hide sidebar') : t('Show sidebar')}>
          <IconButton
            aria-label={t('Open sidebar')}
            className={classNames(classes.menuButton)}
            color="inherit"
            onClick={toggle}
          >
            <MenuIcon />
          </IconButton>
        </Tooltip>

        <Typography variant="h6" color="inherit">
          {t('Logo')}
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default SidebarAppBar;
