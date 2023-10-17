import { Route, Routes } from 'react-router-dom';

import {Provider} from "react-redux";
import HomePages from '../pages/HomePage/HomePages';

import SimpleItem from './SimpleItem/SimpleItem';
import './app.scss';
import {generateApi} from "../utils/apiUtils";
import {setupStore} from "../store";


export const config = {
  "name": "votings",
  'id': '13e828a5-e21e-4606-90ff-640053ef6bdc',
  "fields": [
    {
      "name": "canDelayResult",
      "label": "Задержка результатов",
      "type": "boolean",
      "inputType": "checkbox",
      "required": true
    },
    {
      'name': 'canRevokeVoter',
      'label': 'Отозвать голос избирателя',
      "type": "boolean",
      "inputType": "checkbox",
      "required": true
    },
    {
      'name': 'canSkip',
      'label': 'Пропустить голосование',
      "type": "boolean",
      "inputType": "checkbox",
      "required": true
    },
    {
      'name': 'description',
      'label': 'Описание',
      "type": "string",
      "inputType": "input",
      "required": true
    },
    {
      "name": "id",
      "label": "айди",
      "type": "string",
      "inputType": "input",
      "required": true
    },
    {
      "name": "ioType",
      "label": "ioType",
      "type": "string",
      "inputType": "input",
      "required": true
    },
    
    {
      "name": "name",
      "label": "Название",
      "type": "string",
      "inputType": "input",
      "required": false
    },
    {
      "name": "privateKey",
      "label": "privateKey",
      "type": "string",
      "inputType": "input",
      "required": false
    },
    {
        "name": "protocolDate",
        "label": "protocolDate",
        "type": "string",
        "inputType": "input",
        "required": false
      },
      {
        "name": "publicKey",
        "label": "publicKey",
        "type": "string",
        "inputType": "input",
        "required": false
      },
    
    {
        "name": "rules",
        "label": "rules",
        "type": "string",
        "inputType": "input",
        "required": false
      },
    
    {
        "name": "startTime",
        "label": "startTime",
        "type": "string",
        "inputType": "input",
        "required": false
      },
      {
        "name": "stopTime",
        "label": "stopTime",
        "type": "string",
        "inputType": "input",
        "required": false
      },
    
    {
        "name": "votingType",
        "label": "votingType",
        "type": "string",
        "inputType": "input",
        "required": false
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
    }
  }
}

function App() {
  const crudApi = generateApi(config);
  const store = setupStore(crudApi);
  
  return (
    <Provider store={store}>
    <div className="app">
      <Routes>
        <Route path="/" element={<HomePages crudApi={crudApi} config={config}  />} />
        <Route path="/:id" element={<SimpleItem crudApi={crudApi} config={config} />} />
        <Route path="/new" element={<SimpleItem  crudApi={crudApi} config={config}/>} />
      </Routes>
    </div>
    </Provider>
  );
}

export default App;
