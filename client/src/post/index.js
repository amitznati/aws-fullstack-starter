import React from 'react';
import {Paper, Tabs, Tab} from '@material-ui/core';
import PostList from './list';

export default function MyPosts() {
	const [value, setValue] = React.useState(2);

	const handleChange = (event, newValue) => {
		setValue(newValue);
	};
	return (
		<div>
			<Paper square>
				<Tabs
					value={value}
					indicatorColor="primary"
					textColor="primary"
					onChange={handleChange}
					aria-label="disabled tabs example"
				>
					<Tab label="Posts list" />
					<Tab label="Create new post" />
				</Tabs>
				{value === 0 && <PostList />}
			</Paper>
		</div>
	)
}
