import { AppStateProvider } from "../state/common/StateContext";
import { TimeStateProvider } from "../state/time/TimeStateContext";
import { QueryStateProvider } from "../state/query/QueryStateContext";
import { CustomPanelStateProvider } from "../state/customPanel/CustomPanelStateContext";
import { GraphStateProvider } from "../state/graph/GraphStateContext";
import { DashboardsStateProvider } from "../state/dashboards/DashboardsStateContext";
import { SnackbarProvider } from "./Snackbar";

import { combineComponents } from "../utils/combine-components";

const providers = [
  AppStateProvider,
  TimeStateProvider,
  QueryStateProvider,
  CustomPanelStateProvider,
  GraphStateProvider,
  SnackbarProvider,
  DashboardsStateProvider,
];

export default combineComponents(...providers);
