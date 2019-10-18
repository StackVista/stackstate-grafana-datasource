import defaults from 'lodash/defaults';

import React, { PureComponent, ChangeEvent } from 'react';
import { FormField, QueryEditorProps } from '@grafana/ui';
import { DataSource } from './DataSource';
import { StackStateQuery, StackStateDataSourceOptions, defaultQuery } from './types';

type Props = QueryEditorProps<DataSource, StackStateQuery, StackStateDataSourceOptions>;

interface State {}

export class QueryEditor extends PureComponent<Props, State> {
  onComponentDidMount() {}

  onQueryTextChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { onChange, query } = this.props;
    onChange({ ...query, queryText: event.target.value });
  };

  render() {
    const query = defaults(this.props.query, defaultQuery);
    const { queryText } = query;

    return (
      <div className="gf-form">
        <FormField labelWidth={8} value={queryText || ''} onChange={this.onQueryTextChange} label="Query" tooltip={
            <div>
                Enter a valid <a target="_blank" href="https://docs.stackstate.com/use/queries/.">StackState query</a> here
            </div>
          }></FormField>
      </div>
    );
  }
}
