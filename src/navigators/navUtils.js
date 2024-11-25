import * as React from 'react';
import {
  CommonActions,
  createNavigationContainerRef,
} from '@react-navigation/native';

//export const navigationRef = createNavigationContainerRef();
export const navigationRef = React.createRef();

export const navigateBack = () => {
  if (navigationRef.isReady()) {
    navigationRef.goBack();
  }
};
export const navigate = (name, params) => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.navigate(name, params);
  }
};

export const navigateAndReset = (routes = [], index = 0) => {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(
      CommonActions.reset({
        index,
        routes,
      }),
    );
  }
};

export const navigateAndSimpleReset = (name, index = 0) => {
  if (navigationRef.current?.isReady()) {
    navigationRef.current?.dispatch(
      CommonActions.reset({
        index,
        routes: [{ name }],
      }),
    );
  }
};
