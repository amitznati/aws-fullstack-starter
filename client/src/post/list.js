import React from 'react';
import {Container, Grid, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
	table: {
		// minWidth: 650,
	},
	padding: {
		padding: '1rem'
	}
});

function createData(name, calories, fat, carbs, protein) {
	return { name, calories, fat, carbs, protein };
}

const rows = [
	createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
	createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
	createData('Eclair', 262, 16.0, 24, 6.0),
	createData('Cupcake', 305, 3.7, 67, 4.3),
	createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function PostList() {
	const classes = useStyles();
	return (
		<Grid container spacing={2}>
			<Grid item xs={12}>
				<Typography variant="h6" gutterBottom className={classes.padding}>
					My post list
				</Typography>
			</Grid>
			<Grid item xs={12}>
				<TableContainer component={Paper}>
					<Table className={classes.table} aria-label="simple table">
						<TableHead>
							<TableRow>
								<TableCell>Dessert (100g serving)</TableCell>
								<TableCell >Calories</TableCell>
								<TableCell align="right">Fat&nbsp;(g)</TableCell>
								<TableCell align="right">Carbs&nbsp;(g)</TableCell>
								<TableCell align="right">Protein&nbsp;(g)</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{rows.map((row) => (
								<TableRow key={row.name}>
									<TableCell>
										{row.name}
									</TableCell>
									<TableCell>{row.calories}</TableCell>
									<TableCell>{row.fat}</TableCell>
									<TableCell align="right">{row.carbs}</TableCell>
									<TableCell align="right">{row.protein}</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</Grid>
		</Grid>
	)
}
