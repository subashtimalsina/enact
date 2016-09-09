import kind from 'enyo-core/kind';
import Slottable from 'enyo-ui/Slottable';
import React from 'react';

import css from './Panel.less';

/**
* {@link module:moonstone/Panel~Panel} is the default kind for controls created inside a
* [moonstone/Panels]{@link module:moonstone/Panels~Panels} container. A `moonstone/Panels`
* will typically contain several instances of `moonstone/Panel`.
*
* @class Panel
* @public
*/
const PanelBase = kind({

	name: 'Panel',

	styles: {
		css,
		className: 'panel'
	},

	render: ({children, header, ...rest}) => (
		<article {...rest}>
			<div name="header" className={css.header}>{header}</div>
			<section className={css.body}>{children}</section>
		</article>
	)
});

const Panel = Slottable({slots: ['header']}, PanelBase);

export default Panel;
export {Panel, Panel as PanelBase};
