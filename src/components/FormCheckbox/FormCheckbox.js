import {Checkbox, Form} from 'antd';
import { useController } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
export default function FormCheckbox({ control, name, rules, label, controlClassName = '', ...rest }) {
	const {
		field,
		fieldState: { error },
	} = useController({ name, control, rules, defaultValue: false });
	return (
		// eslint-disable-next-line react/prop-types,react/jsx-filename-extension
		<div >
			<Form.Item
				className={controlClassName}
				labelCol={{ span: 24 }}
				label={label}
				validateStatus={error && 'error'}
				help={error && error.message}
			>
				
				<Checkbox checked={field.value}   {...rest} {...field} />
			</Form.Item>
		</div>
	);
}
