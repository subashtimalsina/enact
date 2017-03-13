import Dialog, {DialogBase} from '@enact/moonstone/Dialog';
import BodyText from '@enact/moonstone/BodyText';
import Button from '@enact/moonstone/Button';
import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import {withKnobs, boolean, text} from '@kadira/storybook-addon-knobs';

Dialog.propTypes = Object.assign({}, DialogBase.propTypes, Dialog.propTypes);
Dialog.defaultProps = Object.assign({}, DialogBase.defaultProps, Dialog.defaultProps);
Dialog.displayName = 'Dialog';

storiesOf('Dialog')
	.addDecorator(withKnobs)
	.addWithInfo(
		' ',
		'Basic usage of Dialog',
		() => (
			<div>
				<Dialog
					noAnimation={boolean('noAnimation', false)}
					noAutoDismiss={boolean('noAutoDismiss', false)}
					onClose={action('onClose')}
					open={boolean('open', false)}
					preserveCase={boolean('preserveCase', false)}
					showCloseButton={boolean('showCloseButton', false)}
					showDivider={boolean('showDivider', false)}
				>
					<title>{text('title', 'Hello Dialog')}</title>
					<titleBelow>{text('titleBelow', 'This is an organized dialog')}</titleBelow>
					<span>This dialog has content in it and can be very useful for organizing information
					for the user.</span>
					<buttons>
						<Button>Ok</Button>
						<Button>Nevermind</Button>
					</buttons>
				</Dialog>
				<BodyText centered>Use KNOBS to interact with Dialog.</BodyText>
			</div>
		));