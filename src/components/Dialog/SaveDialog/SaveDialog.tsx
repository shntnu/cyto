import * as React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import { useTranslation } from 'react-i18next';

const SaveDialog = (props: any) => {
  function handleCancel(props: any) {
    props.onClose();
  }

  function handleDownload(props: any) {
    props.onClose();
    props.download();
  }

  const { open, defaultDialogText, changeDefaultDialogText } = props;

  const { t } = useTranslation();

  return (
    <Dialog
      open={open}
      onClose={() => handleCancel(props)}
      aria-labelledby="form-dialog-title"
    >
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Filename"
          fullWidth
          onChange={e => {
            changeDefaultDialogText(e);
          }}
          value={defaultDialogText}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => handleCancel(props)} color="primary">
          {t('Cancel')}
        </Button>
        <Button onClick={() => handleDownload(props)} color="primary">
          {t('Download')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default SaveDialog;
