import {Button, Table} from "antd";
import {
	DeleteOutlined,
	EditOutlined,
} from '@ant-design/icons';
import {useNavigate} from "react-router-dom";

function HomePages({crudApi, config}) {
	const {data} = crudApi.useGetListQuery();
	const [remove] = crudApi.useRemoveMutation();
	const navigate = useNavigate();
	const removeItem = (formData) => remove(formData)
	
	const buildColumnsData = config && config.fields.map(el => ({
			title: el.label,
			dataIndex: el.name.toString(),
			key: el.label,
			render: (value) => {
				return value.toString()
			}
		}))
	
	const columns = [
		...buildColumnsData,
		{
			title: 'Действия',
			dataIndex: 'actions',
			key: 'actions',
			render: (_, record) => <div>
				<Button
					style={{marginRight: "8px"}}
					onClick={() =>
						navigate(`${record.id}`, {
							state: {...record},
						})
					}
					icon={<EditOutlined/>}
				/>
				<Button
					onClick={() => removeItem(record.id)}
					danger
					type="primary"
					icon={<DeleteOutlined/>}
				/>
			</div>
		}
	]
	
	return <form>
		<Table
			rowKey={(record) => record.id}
			dataSource={data}
			columns={columns}
		/>
		<Button color='primary' onClick={() => navigate('new')}>Добавить элемент</Button>
	</form>
}

export default HomePages;
