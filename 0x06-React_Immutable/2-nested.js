import { fromJS } from "./node_modules/immutable/dist/immutable";


export default function accessImmutableObject(object, array) {
    const mappedObj = fromJS(object);

    return mappedObj.getIn(array, undefined);
  }