import ReactDOM from 'react-dom/client';
import './index.css';
import Routes from 'routes'
import {gsap} from 'gsap'


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <React.StrictMode>
    <Routes />
  // </React.StrictMode>
);
