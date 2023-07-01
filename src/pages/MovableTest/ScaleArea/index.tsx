import * as React from 'react';

import './index.less';

interface ScaleAreaProps {
	
}
interface ScaleAreaState {
	
}
class ScaleArea extends React.Component<ScaleAreaProps, ScaleAreaState> {
	constructor(props: ScaleAreaProps) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<div className="ScaleArea"></div>
		);
	}
	componentDidMount() {}
}
export default ScaleArea;