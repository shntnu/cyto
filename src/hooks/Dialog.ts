import { useCallback, useState } from 'react';

export default function useDialog() {
  const [openedDialog, setOpenedDialog] = useState(false);

  const closeDialog = useCallback(() => {
    setOpenedDialog(false);
  }, []);

  const openDialog = useCallback(() => {
    setOpenedDialog(true);
  }, []);

  return { openedDialog, openDialog, closeDialog };
}
