import React from 'react';
import PropTypes from 'prop-types';
import ImmutablePropTypes from 'react-immutable-proptypes';
import { defineMessages, injectIntl, FormattedMessage } from 'react-intl';
import ColumnCollapsable from '../../../components/column_collapsable';
import SettingToggle from '../../notifications/components/setting_toggle';
import SettingText from './setting_text';

const messages = defineMessages({
  filter_regex: { id: 'home.column_settings.filter_regex', defaultMessage: 'Filter out by regular expressions' },
  settings: { id: 'home.settings', defaultMessage: 'Column settings' }
});

class ColumnSettings extends React.PureComponent {

  render () {
    const { settings, onChange, onSave, intl } = this.props;

    return (
      <ColumnCollapsable icon='sliders' title={intl.formatMessage(messages.settings)} fullHeight={209} onCollapse={onSave}>
        <div className='column-settings__outer'>
          <span className='column-settings__section'><FormattedMessage id='home.column_settings.basic' defaultMessage='Basic' /></span>

          <div className='column-settings__row'>
            <SettingToggle settings={settings} settingKey={['shows', 'reblog']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_reblogs' defaultMessage='Show boosts' />} />
          </div>

          <div className='column-settings__row'>
            <SettingToggle settings={settings} settingKey={['shows', 'reply']} onChange={onChange} label={<FormattedMessage id='home.column_settings.show_replies' defaultMessage='Show replies' />} />
          </div>

          <span className='column-settings__section'><FormattedMessage id='home.column_settings.advanced' defaultMessage='Advanced' /></span>

          <div className='column-settings__row'>
            <SettingText settings={settings} settingKey={['regex', 'body']} onChange={onChange} label={intl.formatMessage(messages.filter_regex)} />
          </div>
        </div>
      </ColumnCollapsable>
    );
  }

}

ColumnSettings.propTypes = {
  settings: ImmutablePropTypes.map.isRequired,
  onChange: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  intl: PropTypes.object.isRequired
}

export default injectIntl(ColumnSettings);
