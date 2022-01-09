import { User } from './User';
///<reference types="@types/google.maps" />

import { CustomMap } from './CustomMap';


const user = new User();
const customMap = new CustomMap('map');
customMap.addUserMarker(user);