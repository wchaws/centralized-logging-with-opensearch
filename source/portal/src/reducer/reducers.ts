/*
Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.

Licensed under the Apache License, Version 2.0 (the "License").
You may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { combineReducers } from "redux";
import appReducer, { Action, AppStateProps } from "./appReducer";
import {
  CreateLightEngineAction,
  CreateLightEngineSate,
  createLightEngineReducer,
} from "./createLightEngine";
import {
  CreateTagActions,
  CreateTagSate,
  createTagReducer,
} from "./createTags";

import {
  CreateAlarmActions,
  CreateAlarmState,
  createAlarmReducer,
} from "./createAlarm";
import { grafana, GrafanaState } from "./grafana";
import { openSearchSlice, OpenSearchState } from "./createOpenSearch";

import {
  SelectProcessorActions,
  SelectProcessorState,
  selectProcessorReducer,
} from "./selectProcessor";
import { S3BufferState, s3BufferSlice } from "./configBufferS3";
import { KDSBufferState, kdsBufferSlice } from "./configBufferKDS";
import { LogConfigState, logConfigSlice } from "./createLogConfig";
import { MemberAccountState, memberAccountSlice } from "./linkMemberAccount";

export const reducers = {
  app: appReducer,
  createTag: createTagReducer,
  createLightEngine: createLightEngineReducer,
  createAlarm: createAlarmReducer,
  grafana: grafana.reducer,
  selectProcessor: selectProcessorReducer,
  openSearch: openSearchSlice.reducer,
  s3Buffer: s3BufferSlice.reducer,
  kdsBuffer: kdsBufferSlice.reducer,
  logConfig: logConfigSlice.reducer,
  memberAccount: memberAccountSlice.reducer,
};

export type RootState = {
  app: AppStateProps;
  createTag: CreateTagSate;
  createLightEngine: CreateLightEngineSate;
  createAlarm: CreateAlarmState;
  grafana: GrafanaState;
  selectProcessor: SelectProcessorState;
  openSearch: OpenSearchState;
  s3Buffer: S3BufferState;
  kdsBuffer: KDSBufferState;
  logConfig: LogConfigState;
  memberAccount: MemberAccountState;
};

export type Actions =
  | CreateTagActions
  | Action
  | CreateAlarmActions
  | CreateLightEngineAction
  | SelectProcessorActions;

export const reducer = combineReducers(reducers);
