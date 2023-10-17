// DON'T TOUCH
// THIS FILE FOR PRODUCTION BUILD

const config = {
	data: {
		"name": "votings",
		'id': '13e828a5-e21e-4606-90ff-640053ef6bdc',
		"fields": [
			{
				"name": "name",
				"label": "Название",
				"type": "string",
				"inputType": "input",
				"id": "2",
				"required": false
			},
			{
				'name': 'description',
				'label': 'Описание',
				"type": "string",
				"inputType": "input",
				"id": "3",
				"required": true
			},
			{
				'name': 'canRevokeVoter',
				'label': 'Отозвать голос избирателя',
				"type": "boolean",
				"inputType": "checkbox",
				"id": "5",
				"required": true
			},
			{
				'name': 'canSkip',
				'label': 'Пропустить голосование',
				"type": "boolean",
				"inputType": "checkbox",
				"id": "6",
				"required": true
			},
			{
				"name": "canDelayResult",
				"label": "Задержка результатов",
				"type": "boolean",
				"inputType": "checkbox",
				"id": "1",
				"required": true
			},
		
		
		],
		"endpoints": {
			"delete": {
				"method": "DELETE",
				"endpoint": "/regs/voting"
			},
			"update": {
				"method": "POST",
				"endpoint": "/regs/voting"
			},
			"create": {
				"method": "POST",
				"endpoint": "/regs/voting"
			},
			"getList": {
				"method": "GET",
				"endpoint": "/regs/voting"
			},
			"getOne": {
			"method": "GET",
			"endpoint": "/regs/voting"
		}
		}
	}
};

window.config = { ...config };

