import React, { Fragment, useEffect } from 'react'
import DestinationSection from './../../components/destinationSection/DestinationSection';
import NavBar from './../../components/navBar/NavBar';
import BannerSection from './../../components/bannerSection/BannerSection';
import VideoSection from './../../components/videoSection/VideoSection';
import BrandsSection from './../../components/brandsSection/BrandsSection';
import TripsSection from '../../components/tripsSection/TripsSection';
import Footer from '../../components/footer/Footer';

const HomePage = () => {
    useEffect(()=>{
        window.addEventListener('scroll',()=>{
            if(window.scrollY > 100){
                document.body.classList.add('ThemeEffect')
            }else{
                document.body.classList.remove('ThemeEffect')
            }
        })
    },[])
    return (
        <Fragment>
            <NavBar></NavBar>
            <BannerSection></BannerSection>
            <DestinationSection></DestinationSection>
            <VideoSection></VideoSection>
            <BrandsSection></BrandsSection>
            <TripsSection></TripsSection>
            <Footer></Footer>
        </Fragment>
    )
}

export default HomePage