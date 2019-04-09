const drawerWidth = 280;

const styles = theme => ({
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: 'none'
  },
  appBarShiftLeft: {
    marginLeft: drawerWidth
  },
  toolBar: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  },
  slider: {
    root: {
      width: 10
    },
    slider: {
      padding: '22px 0px'
    }
  }
});

export default styles;
