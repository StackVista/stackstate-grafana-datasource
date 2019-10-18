import { DataQuery, DataSourceJsonData } from '@grafana/ui';

export interface StackStateQuery extends DataQuery {
  queryText: string;
}

export const defaultQuery: Partial<StackStateQuery> = {
  queryText: ""
};

/**
 * These are options configured for each DataSource instance
 */
export interface StackStateDataSourceOptions extends DataSourceJsonData {
  apiKey?: string;
}
