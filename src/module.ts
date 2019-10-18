import { DataSourcePlugin } from '@grafana/ui';
import { DataSource } from './DataSource';
import { ConfigEditor } from './ConfigEditor';
import { QueryEditor } from './QueryEditor';
import { StackStateQuery, StackStateDataSourceOptions } from './types';

export const plugin = new DataSourcePlugin<DataSource, StackStateQuery, StackStateDataSourceOptions>(DataSource)
  .setConfigEditor(ConfigEditor)
  .setQueryEditor(QueryEditor);
