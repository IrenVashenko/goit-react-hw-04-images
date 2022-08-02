import { useState } from "react";
import { useEffect } from "react";

import fetchGalleryApi from '../services/gallery-api'
import ScrollToTop from "react-scroll-to-top";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from "./Searchbar/Searchbar";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Container } from './App.styled'
import { Button } from "./Button/Button";
import { Loader } from "./Loader/Loader";

const PAGE_LIMIT = 12;
export const App = () => {
  const [text, setText] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [totalHits, setTotalHits] = useState('');
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    if (text === '') {
      return;
    }
    setIsLoader(true);

    fetchGalleryApi(text, page)
      .then(res => {
        if (res.hits) {
          toast.warning('Nothing was found for your search. Try again!')
        };
        setImages(state => [...state, ...res.hits]);
        setTotalHits(res.totalHits);
        setIsLoader(false);
      })
  }, [page, text]);

  useEffect(() => {
    setPage(1);
    setImages([])
    setTotalHits('')
  }, [text]);

  const handleLoadBtn = () => {
    setPage(state => state + 1)
  }


  return (
    <Container>
      {isLoader && <Loader />}
      <Searchbar onSubmit={setText} />
      {images.length > 0 && <ImageGallery listImage={images} loading={isLoader} />}
      {images.length > 0 && totalHits !== PAGE_LIMIT && <Button handleLoadBtn={handleLoadBtn} />}
      <ScrollToTop smooth top="5" color="blue" />

      <ToastContainer autoClose={3000} />
    </Container>
  );
};
