const drawerWidth = 280;

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  appFrame: {
    zIndex: 1,
    overflow: 'hidden',
    display: 'flex',
    width: '100%'
  },
  appBar: {
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
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  content: {
    flexGrow: 1
  },
  contentLeft: {
    marginLeft: 0
  },
  contentShiftLeft: {
    marginLeft: drawerWidth
  },
  fab: {
    position: 'absolute'
  },
  unlabeledToggled: {
    '&:hover': {
      background: 'rgba(150,150,150,1)'
    },
    background: 'rgba(200,200,200,1)',
    position: 'absolute'
  },
  unlabeledUntoggled: {
    background: 'rgba(200,50,50,1)',
    position: 'absolute'
  },
  tagStyle: {
    display: 'inline',
    padding: '.2em .6em .3em',
    fontSize: '75%',
    fontWeight: '600',
    lineHeight: '1',
    color: 'yellow',
    textAlign: 'center',
    whiteSpace: 'nowrap',
    verticalAlign: 'baseline',
    borderRadius: '.25em'
  },

  pacmanLoader: {
    position: 'fixed',
    top: '50%',
    left: '50%'
  }
});

export default styles;
