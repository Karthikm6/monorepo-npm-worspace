import React, { useEffect, useState } from 'react';
import "./Cards.scss";
import { StyleLoader, Button } from "@fstr/components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Cards = () => {
    const [data, setData] = useState();
    //add post
    const fetchData = async () => {
        const url = 'http://localhost:4502/graphql/execute.json/monorepo-demo/cardsSlider';
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
        await setData(jsonData?.data?.cardsSliderList?.items?.[0]?.fieldLabel);
    };
    console.log(data);
    useEffect(() => {
        fetchData();
    }, []);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows: false,
        slidesToShow: 4,
        slidesToScroll: 1,
    };
    const cardItems = data?.map((i, ind) => (
        <div className='card-slider__card__item' key={`sliderItemCardKey${ind + 1}`}>
            <div className="card-slider__wrapper border-light-dark">
                <div className="card-slider__image mb-10">
                    <img src={i?.authorImage?._authorUrl} className='w-100' />
                </div>
                <div className="card-slider__info px-5 mb-5">
                    <h3 className='mb-5'>{i?.name}</h3>
                    <p className='mb-10'>{i?.textInfo}</p>
                    <Button text={i?.buttonLabel} className='btn primary-bg px-10 py-4 white-color r-2' />
                </div>
            </div>
        </div>
    ));
    return (
        <>
            <StyleLoader />
            <section className='card-slider w-75 m-auto mt-10'>
                <Slider {...settings}>
                    {cardItems}
                </Slider>
            </section>
        </>
    )
}

export default Cards;
