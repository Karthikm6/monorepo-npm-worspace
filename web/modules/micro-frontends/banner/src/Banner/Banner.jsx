import React, { useEffect, useState } from 'react';
import "./Banner.scss";
import { StyleLoader } from "@fstr/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Banner = () => {
    const [data, setData] = useState();
    //add post
    const fetchData = async () => {
        const url = 'http://localhost:4502/graphql/execute.json/monorepo-demo/bannerQuery';
        const username = 'admin';
        const password = 'admin';
        const resData = await fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                'Authorization': 'Basic ' + btoa(username + ':' + password)
            }
        });
        const jsonData = await resData?.json();
        await setData(jsonData?.data?.bannerCarouselList?.items?.[0]);
    }
    useEffect(() => {
        fetchData();
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };
    const bannerItems = data?.bannerImages.map((i,ind) => (
        <div className='home-banner__carousel__item' key={`bannerCarouselItem${ind}`}>
            <img src={i?._authorUrl} alt=''/>
        </div>
    ));
    return (
        <>
            <StyleLoader />
            <section className='home-banner w-75 m-auto'>
                <Slider {...settings}>
                    {bannerItems}
                </Slider>
            </section>
        </>
    )
}

export default Banner;
