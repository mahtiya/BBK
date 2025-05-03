import { Toaster } from 'react-hot-toast';
import Layout from './Layout/Layout';
import './assets/scss/main.scss';
export default function App() {
  return (
    <>
      <Toaster position='top-center' />
      <Layout />
    </>
  )
}
