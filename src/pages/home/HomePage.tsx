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
import sideImage from '../../assets/images/sider_2019_12-09.png'
import sideImage2 from '../../assets/images/sider_2019_02-04.png'
import sideImage3 from '../../assets/images/sider_2019_02-04-2.png'
import styles from './HomePage.module.css'
import axios from 'axios'
import { withTranslation, WithTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { RootState } from '../../redux/store'
import { reqAsyncDataActionCreator } from '../../redux/recommendProducts/recommendProductsActions'

const mapStateToProps = (state: RootState) => {
	return {
		loading: state.recommendProducts.loading,
		error: state.recommendProducts.error,
		products: state.recommendProducts.products
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		getData: () => {
			dispatch(reqAsyncDataActionCreator())
		}
	}
}

type PropsType = WithTranslation &
	ReturnType<typeof mapStateToProps> &
	ReturnType<typeof mapDispatchToProps>

class OriginHomePage extends React.Component<PropsType> {
	componentDidMount() {
		this.props.getData()
	}

	render() {
		const { products, error, loading, t } = this.props
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

export const HomePage = connect(
	mapStateToProps,
	mapDispatchToProps
)(withTranslation()(OriginHomePage))
