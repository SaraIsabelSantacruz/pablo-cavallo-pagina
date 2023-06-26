
export const INITIAL_STATE = {
    images: []
};

export const Action = {
    SET_IMAGES: 'SET_IMAGES'
}

export const actionCreators = {
  setImages: (images) => ({
    type: Action.SET_IMAGES,
    payload: images
  })
};

export const reducer = (state, action) => {
  switch (action.type) {
    case Action.SET_IMAGES: {
      return { ...state, images: action.payload };
    }
    default: {
      return state;
    }
  }
};