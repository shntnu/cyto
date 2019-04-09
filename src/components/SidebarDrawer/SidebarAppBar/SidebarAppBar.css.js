const drawerWidth = 280;

const styles = theme => ({
  appBar: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
    boxShadow: 'none',
    position: 'absolute'
  },
  appBarShiftLeft: {
    marginLeft: drawerWidth
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 20
  },
  hide: {
    display: 'none'
  }
});

export default styles;
