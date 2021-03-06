import defaults from 'lodash/defaults';

import { DataQueryRequest, DataQueryResponse, DataSourceApi, DataSourceInstanceSettings } from '@grafana/ui';

import { StackStateQuery, StackStateDataSourceOptions, defaultQuery } from './types';
import { MutableDataFrame, FieldType } from '@grafana/data';

export class DataSource extends DataSourceApi<StackStateQuery, StackStateDataSourceOptions> {

  constructor(private instanceSettings: DataSourceInstanceSettings<StackStateDataSourceOptions>) {
    super(instanceSettings);
  }

  query(options: DataQueryRequest<StackStateQuery>): Promise<DataQueryResponse> {
    const { range } = options;
    const from = range.from.valueOf();
    const to = range.to.valueOf();

    // Return a constant for each query
    const data = options.targets.map(target => {
      const query = defaults(target, defaultQuery);
      return new MutableDataFrame({
        refId: query.refId,
        fields: [
          { name: 'Time', values: [from, to], type: FieldType.time },
          { name: 'Value', values: [0, 0], type: FieldType.number },
        ],
      });
    });

    return Promise.resolve({ data });
  }

  testDatasource() {
    // Implement a health check for your data source.

    return new Promise((resolve, reject) => {
      resolve({
        status: 'success',
        message: 'Success',
      });
    });
  }
}
