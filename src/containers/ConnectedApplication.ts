import { connect } from 'react-redux';
import { fitClassifierAction } from '../actions/classifier';
import Application from '../components/Application/Application';
import {
  updateImageCategoryAction,
  updateImageProbabilityAction
} from '../actions/images';
import { getVisibleImages } from '../selectors/images';

const mapStateToProps = (state: any) => {
  return {
    categories: state.categories,
    images: getVisibleImages(state),
    spinnerActive: state.settings.spinnerActive
  };
};

const mapDispatchToProps = (dispatch: any, props: any) => {
  return {
    fit: () => {
      const pathname = '';
      dispatch(fitClassifierAction(pathname));
    },
    updateImageCategory: (imgIdentifier: any, categoryIdentifier: any, categoryName: any) => {
      dispatch(
        updateImageCategoryAction(
          imgIdentifier,
          categoryIdentifier,
          categoryName
        )
      );
      dispatch(updateImageProbabilityAction(imgIdentifier, null));
    }
  };
};

const ConnectedApplication = connect(
  mapStateToProps,
  mapDispatchToProps
)(Application);

export default ConnectedApplication;
