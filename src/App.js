import {useEffect, useState} from 'react';
import { Loader } from 'semantic-ui-react'
import ImagesGallery from './components/ImagesGallery';
import './App.scss';

export const App = () => {
    const [data, setData] = useState(null)

    const fetchData = async () => {
        let API_URL = 'https://picsum.photos/v2/list';
        fetch(API_URL)
            .then(res => {
                return res.json();
            })
            .then(data => {
                    setData(data)
                },
                error => {
                    console.error(error)
                });
    }

    useEffect(() => {
        fetchData()
    },[])

    if(!data) {
        return <Loader/>
    }

  return (
    <div className="app">
        <h1 className="app__heading">Images Gallery</h1>
        <div className="app__gallery">
            <ImagesGallery images={data} />
        </div>
    </div>
  );
}

export default App;
