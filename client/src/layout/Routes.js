import React from "react";
import {Switch,	Route} from "react-router-dom";
import Blog from '../blog/Blog';

export default function Routes() {
	return (
		<Switch>
			<Route path="/">
				<Blog />
			</Route>
		</Switch>
	);
}
