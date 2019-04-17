import { ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import * as React from 'react';
import FeedbackIcon from '@material-ui/icons/Feedback';
import { useTranslation } from 'react-i18next';

const SidebarSendFeedbackListItem = () => {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <ListItem button disabled>
        <ListItemIcon>
          <FeedbackIcon />
        </ListItemIcon>

        <ListItemText primary={t('Send feedback')} />
      </ListItem>
    </React.Fragment>
  );
};

export default SidebarSendFeedbackListItem;
