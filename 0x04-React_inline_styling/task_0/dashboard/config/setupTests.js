// import '@testing-library/jest-dom';
// import Enzyme from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16'; 
// Enzyme.configure({ adapter: new Adapter() });

import { configure } from 'enzyme';
import Adapter from '@cfaester/enzyme-adapter-react-18';

configure({ adapter: new Adapter() });
