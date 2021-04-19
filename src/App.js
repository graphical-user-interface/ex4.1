import React, { useState } from "react"
import { makeStyles } from "@material-ui/core/styles"
import { Container, Grid, Paper, Typography } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		margin: theme.spacing(2),
		padding: theme.spacing(2, 1),
		textAlign: "center",
		color: theme.palette.text.secondary,
		display: "flex",
	},
	text: {
		border: "1px solid #333",
		padding: "0 10px",
	},
}))

export default function App() {
	const classes = useStyles()
	return (
		<div className={classes.root} contentEditable={true}>
			<Container maxWidth='sm'>
				<Grid container>
					<Paper elevation={2} className={classes.paper}>
						<Typography className={classes.text} variant='h6'>
							Hmm kimochi
						</Typography>
						<Typography className={classes.text} variant='h6'>
							Hmm kimochi 2
						</Typography>
						<Typography className={classes.text} variant='h6'>
							Hmm kimochi 3
						</Typography>
					</Paper>
				</Grid>
			</Container>
		</div>
	)
}
