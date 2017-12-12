import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import { Form, Input, Button } from 'antd'

const App = ({ form: { getFieldDecorator, validateFields }, history }) => {
	const handleSubmit = (e) => {
		e.preventDefault()
		validateFields((err, values) => {
			if (!err) {
				history.push('/artist/' + values.search)
			}
		})
	}
	return (
		<div className="container">
				<div>
					<h2>Search Artist's albums in Deezer API.</h2>
					<hr />
					<Form onSubmit={handleSubmit} style={{ marginTop: 20 }}>
						<Form.Item>
						{
							getFieldDecorator('search')(
								<Input className="form-search" placeholder="Search an Artist." />
							)
						}
						</Form.Item>
						<Button type="primary" htmlType="submit" className="form-button">
							Search
						</Button>
					</Form>
				</div>
		</div>
	)
}

App.propTypes = {
	form: PropTypes.object.isRequired,
	history: PropTypes.object.isRequired
}

export default withRouter(Form.create()(App))
