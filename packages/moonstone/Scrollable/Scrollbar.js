import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {ScrollbarBase as UiScrollbarBase} from '@enact/ui/Scrollable/Scrollbar';

import componentCss from './Scrollbar.less';
import ScrollButtons from './ScrollButtons';
import ScrollThumb from './ScrollThumb';

/**
 * A moonstone-styled scroll bar. It is used in [Scrollable]{@link moonstone/Scrollable.Scrollable}.
 *
 * @class Scrollbar
 * @memberof moonstone/Scrollable
 * @ui
 * @private
 */
class Scrollbar extends Component {
	static propTypes = /** @lends moonstone/Scrollable.Scrlllbar.prototype */ {
		/**
		 * The callback function which is called for linking alertThumb function.
		 *
		 * @type {Function}
		 * @private
		 */
		cbAlertThumb: PropTypes.func,

		/**
		 * If `true`, add the corner between vertical and horizontal scrollbars.
		 *
		 * @type {Booelan}
		 * @public
		 */
		corner: PropTypes.bool,

		/**
		 * If `true`, the scrollbar will be oriented vertically.
		 *
		 * @type {Boolean}
		 * @default true
		 * @public
		 */
		vertical: PropTypes.bool
	}

	render () {
		const {cbAlertThumb, corner, vertical, ...rest} = this.props;

		return (
			<UiScrollbarBase
				corner={corner}
				css={componentCss}
				setRef={({showThumb, startHidingThumb, update: uiUpdate}) => { // eslint-disable-line react/jsx-no-bind
					this.showThumb = showThumb;
					this.startHidingThumb = startHidingThumb;
					this.uiUpdate = uiUpdate;
				}}
				vertical={vertical}
				render={({setScrollThumbRef: setScrollThumbRef}) => ( // eslint-disable-line react/jsx-no-bind
					<ScrollButtons
						{...rest}
						setRef={({isOneOfScrollButtonsFocused, updateButtons}) => { // eslint-disable-line react/jsx-no-bind
							this.isOneOfScrollButtonsFocused = isOneOfScrollButtonsFocused;
							this.update = (bounds) => {
								updateButtons(bounds);
								this.uiUpdate(bounds);
							};
						}}
						vertical={vertical}
						render={() => ( // eslint-disable-line react/jsx-no-bind
							<ScrollThumb
								cbAlertThumb={cbAlertThumb}
								key="thumb"
								setRef={setScrollThumbRef}
								vertical={vertical}
							/>
						)}
					/>
				)}
			/>
		);
	}
}

export default Scrollbar;
export {
	Scrollbar
};