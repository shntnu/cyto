import { connect } from 'react-redux';
import { fitClassifierAction } from '../actions/classifier';
import { updateZoomLevelAction } from '../actions/settings';
import Application from '../components/Application/Application';
import { toggleUploadDialogAction } from '../actions/settings';

const mapStateToProps = state => {
  return {
    ...state,
    imagesMetadata: state.images.images.filter(image => image.visible === true)
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    fit: () => {
      const pathname = '';
      dispatch(fitClassifierAction(pathname));
    },

    changeZoomLevel: value => {
      dispatch(updateZoomLevelAction(value));
    },

    toggleUploadDialog: () => {
      dispatch(toggleUploadDialogAction());
    }
  };
};

const ConnectedApplication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ConnectedApplication;