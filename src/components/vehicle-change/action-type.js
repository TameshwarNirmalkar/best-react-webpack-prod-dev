import { createTypes, asyncAction } from 'redux-action-types';

export const VEHICLE_TYPES = createTypes(
  'VEHICELE_INFO',
  'ALL_MODELS',
  'ALL_VARIANTS',
  'ALL_CITIES',
  'UNIQUE_VARIANTS',
  'UNIQUE_SEATING_TYPE',
  'UNIQUE_DRIVE_TYPE',
  'UNIQUE_COLOR_LIST',
  asyncAction('LOAD'),
  asyncAction('SAVE'),
  asyncAction('UPDATE'),
  asyncAction('REMOVE', ['REQUEST', 'COMPLETE'])
);