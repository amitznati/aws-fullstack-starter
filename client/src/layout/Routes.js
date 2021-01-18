import React from "react";
import {Switch,	Route} from "react-router-dom";
import Blog from '../blog/Blog';
import MyPosts from '../post';

export default function Routes() {
	return (
		<Switch>
			<Route exact path="/">
				<Blog />
			</Route>
			<Route exact path="/myposts">
				<MyPosts />
			</Route>
		</Switch>
	);
}
