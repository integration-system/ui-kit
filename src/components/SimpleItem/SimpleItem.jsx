import {useLocation, useNavigate} from "react-router-dom";
import {Button} from "antd";
import {useForm} from "react-hook-form";
import FormInput from "../FormInput/FormInput";
import FormCheckbox from "../FormCheckbox/FormCheckbox";
import '../app.scss'

function SimpleItem({crudApi, config}) {
	const location = useLocation();
	const [update] = crudApi.useUpdateMutation();
	const [create] = crudApi.useCreateMutation();
	const navigate = useNavigate();
	const isNew = location.pathname === '/new';
	const {state} = location;
	
	const {control, handleSubmit, getValues} = useForm({
		defaultValues: isNew ? {} : state,
		mode: 'onChange',
	});

	const saveForm = (newData) => {
		const newItem = {...newData}
		if(isNew) {
			create(newItem)
			navigate(-1)
		} else {
			update(newItem)
		}
	}
	
	const render = () =>
		 <div>
			 <input className="save-btn" type='submit' value='Сохранить'/>
			{config.fields.map((el, i) => {
				if(el.inputType === 'input') {
						return <div className="div" key={isNew  ? 'new' : state.id+i}>
							<span className="label-span">{el.label}</span>
							<FormInput name={el.name} value={el.label} control={control} />
					</div>
					}
				if(el.inputType === 'checkbox') {
					return <div key={isNew  ? 'new' : state.id+i} className="div">
						<span className="label-span">{el.label}</span>
						<FormCheckbox name={el.name} control={control}/>
					</div>
				}
			})}
		</div>
	
		return <form onSubmit={handleSubmit(saveForm)}>
		
		{render()}
		<Button type="danger" onClick={()=> navigate(-1)}>
			Назад
		</Button>
	</form>
}

export default SimpleItem;
