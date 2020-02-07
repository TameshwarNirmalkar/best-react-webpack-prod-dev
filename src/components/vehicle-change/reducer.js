import { useReducer } from "react";
import { VEHICLE_TYPES } from './action-type';

export const initialState = {
  vehicleInformation: {},
  allCities: [],
  modelList: [],
  allVariants: [],
  uniqueVariantsList: [],
  uniqueSeatingList: [],
  uniqueDriveList: [],
  allColorList: []
};

export const reducer = (state, action) => {
  switch (action.type) {
    case VEHICLE_TYPES.VEHICLE_INFO:
      return { ...state, vehicleInformation: action.paylod };
    case VEHICLE_TYPES.ALL_CITIES:
      return { ...state, allCities: action.paylod };
    case VEHICLE_TYPES.ALL_MODELS:
      return { ...state, modelList: action.paylod };
    default: throw new Error('Unexpected action:: Action does not matched');
  }
};

export const getVehicleReducer = () => useReducer(reducer, initialState);