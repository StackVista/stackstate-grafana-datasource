import React, { PureComponent, ChangeEvent } from 'react';
import { DataSourcePluginOptionsEditorProps, DataSourceSettings, FormField } from '@grafana/ui';
import { StackStateDataSourceOptions } from './types';

type Settings = DataSourceSettings<StackStateDataSourceOptions>;

interface Props extends DataSourcePluginOptionsEditorProps<Settings> {}

interface State {}

export class ConfigEditor extends PureComponent<Props, State> {
  componentDidMount() {}

  onFieldChange = (fieldName: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const { onOptionsChange, options } = this.props;
    const jsonData = {
      ...options.jsonData,
      [fieldName]: event.target.value,
    };
    onOptionsChange({ ...options, jsonData });
  };

  render() {
    const { options } = this.props;
    const { jsonData } = options;

    return (
      <div className="gf-form-group">
        <div className="gf-form">
          <FormField label="Core API url" labelWidth={6} onChange={this.onFieldChange("coreApiUrl")} value={jsonData.coreApiUrl || ''} placeholder="URL of the StackState core API. Typically the base URL + /api." /> 
          <FormField label="Username" labelWidth={6} onChange={this.onFieldChange("username")} value={jsonData.username || ''} />
          <FormField label="Password" labelWidth={6} onChange={this.onFieldChange("password")} value={jsonData.password || ''} />
        </div>
      </div>
    );
  }
}
