import { Form, Input } from 'antd';
import { useController } from 'react-hook-form';

// eslint-disable-next-line react/prop-types
export default function FormInput({ control, name, rules, label, controlClassName = '', ...rest }) {
	const {
		field,
		fieldState: { error },
	} = useController({ name, control, rules });
	return (
		// eslint-disable-next-line react/prop-types
		<div className={`${rules?.required.value ? 'requiredInput' : ''}`}>
			<Form.Item
				className={controlClassName}
				labelCol={{ span: 24 }}
				label={label}
				validateStatus={error && 'error'}
				help={error && error.message}
			>
				<Input {...rest} {...field} />
			</Form.Item>
		</div>
	);
}
