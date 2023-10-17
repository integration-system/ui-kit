import {generateApi} from '../utils/apiUtils';

const dataMoc = {
	"name": "votings",
	"fields": [{
		"name": "canDelayResult",
		"label": "Задержка результатов",
		"type": "boolean",
		"inputType": "checkbox"
	}, {
		"name": "id",
		"label": "Идентификатор",
		"type": "string",
		"inputType": "input"
	}],
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
		}
	}
}



