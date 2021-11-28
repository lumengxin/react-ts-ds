import React from 'react'
import {
	Header,
	Footer,
	Carousel,
	SideMenu,
	ProductCollection,
	BusinessPartners
} from '../../components'
import { Row, Col, Typography, Spin } from 'antd'
import { productList1, productList2, productList3 } from './mockups'
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from './HomePage.module.css'
import axios from 'axios'

export class HomePage extends React.Component {
	constructor(props) {
		super(props)
	}
	state = {
		products: [],
		loading: true,
		error: null
	}

	async componentDidMount() {
		try {
			const { data } = await axios.get('/data.json')
			this.setState({
				loading: false,
				error: null,
				products: data.products
			})
		} catch (error) {
			this.setState({
				error: error,
				loading: false
			})
		}
	}

	render() {
		const { products, error, loading } = this.state
		if (loading) {
			return (
				<Spin
					size="large"
					style={{
						marginTop: 200,
						marginBottom: 200,
						marginLeft: 'auto',
						marginRight: 'auto',
						width: '100%'
					}}
				/>
			)
		}
		if (error) {
			return <div>网站出错：{error}</div>
		}
		return (
			<>
				<Header />
				{/* 页面内容 content */}
				<div className={styles['page-content']}>
					<Row style={{ marginTop: 20 }}>
						<Col span={6}>
							<SideMenu />
						</Col>
						<Col span={18}>
							<Carousel />
						</Col>
					</Row>
					<ProductCollection
						title={
							<Typography.Title level={3} type="warning">
								爆款推荐
							</Typography.Title>
						}
						sideImage={sideImage}
						//@ts-ignore
						products={products[0].touristRoute}
					/>
					<ProductCollection
						title={
							<Typography.Title level={3} type="danger">
								新品上市
							</Typography.Title>
						}
						sideImage={sideImage2}
						//@ts-ignore
						products={products[1].touristRoute}
					/>
					<ProductCollection
						title={
							<Typography.Title level={3} type="success">
								国内游推荐
							</Typography.Title>
						}
						sideImage={sideImage3}
						//@ts-ignore
						products={products[2].touristRoute}
					/>
					<BusinessPartners />
				</div>
				<Footer />
			</>
		)
	}
}
