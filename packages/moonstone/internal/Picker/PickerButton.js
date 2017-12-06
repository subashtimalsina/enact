import factory from '@enact/core/factory';
import kind from '@enact/core/kind';
import React from 'react';
import PropTypes from 'prop-types';
import Pure from '@enact/ui/internal/Pure';

import Icon from '../../Icon';
import IconButton from '../../IconButton';
import {withSkinnableProps} from '../../Skinnable';

import Touchable from '../Touchable';

import componentCss from './Picker.less';

const JoinedPickerButtonBaseFactory = factory({css: componentCss}, ({css}) => kind({
	name: 'JoinedPickerButtonBase',

	propTypes: {
		disabled: PropTypes.bool,
		icon: PropTypes.oneOfType([
			PropTypes.string,
			PropTypes.object
		])
	},

	render: ({disabled, icon, ...rest}) => (
		<span {...rest} disabled={disabled}>
			<Icon className={css.icon} disabled={disabled} small>{icon}</Icon>
		</span>
	)
}));

const JoinedPickerButtonFactory = (props) => Touchable(JoinedPickerButtonBaseFactory(props));

const PickerButtonBaseFactory = factory({css: componentCss}, ({css}) => {
	const JoinedPickerButton = JoinedPickerButtonFactory({css});

	return kind({
		name: 'PickerButton',

		propTypes: {
			disabled: PropTypes.bool,
			hidden: PropTypes.bool,
			icon: PropTypes.oneOfType([
				PropTypes.string,
				PropTypes.object
			]),
			joined: PropTypes.bool,
			onSpotlightDisappear: PropTypes.func,
			skin: PropTypes.string,
			spotlightDisabled: PropTypes.bool
		},

		styles: {
			css
		},

		computed: {
			className: ({hidden, styler}) => styler.append({
				hidden
			})
		},

		render: ({disabled, icon, joined, ...rest}) => {
			if (joined) {
				delete rest.hidden;
				delete rest.onSpotlightDisappear;
				delete rest.skin;
				delete rest.spotlightDisabled;
				return (
					<JoinedPickerButton {...rest} icon={icon} disabled={disabled} />
				);
			} else {
				return (
					<IconButton {...rest} backgroundOpacity="transparent" disabled={disabled} small>
						{icon}
					</IconButton>
				);
			}
		}
	});
});

const PickerButtonFactory = (props) => Pure(
	withSkinnableProps(
		PickerButtonBaseFactory(props)
	)
);

const PickerButtonBase = PickerButtonBaseFactory();
const PickerButton = PickerButtonFactory();

export default PickerButton;
export {
	PickerButton,
	PickerButtonBase,
	PickerButtonFactory,
	PickerButtonBaseFactory
};
