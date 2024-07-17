import React, { useEffect, useState } from 'react';
import "./Footer.scss";
import { StyleLoader, Button } from "@fstr/components";

const Footer = () => {
    const [data, setData] = useState();
    //add post
    const fetchData = async () => {
        const url = 'http://localhost:4502/graphql/execute.json/monorepo-demo/footerQuery';
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
        await setData(jsonData?.data?.footList?.items?.[0]);
    }
    useEffect(() => {
        fetchData();
    }, []);

    return (
        <>
            <StyleLoader />
            <footer className='footer mt-15 dark-bg pt-12 white-color'>
                <div className="footer__main flex between px-5 py-2 gap-5 w-75 m-auto">
                    {/* column start */}
                    <div className='footer__column w-25'>
                        <h2 className='footer__logo mb-10'>IndiGo</h2>
                        <div className="footer__addr mb-7">
                            <p className='mb-2 fs-7'>{data?.footerColumn1?.addres1}</p>
                            <p className='fs-7'>{data?.footerColumn1?.addres2}</p>
                        </div>
                        <div className="footer__contact mb-7">
                            <p className='mb-2 fs-7'><b>Phone:</b> {data?.footerColumn1?.phone}</p>
                            <p className='mb-2 fs-7'><b>Email:</b> {data?.footerColumn1?.email}</p>
                        </div>
                        <div className="footer__social flex gap-4">
                            {
                                data?.footerColumn1?.socialIcons?.map((i, ind) => (
                                    <p className='social__icon flex center mb-2 fs-7 fs-8 light-dark-bg r-2 middle fw-700' key={`footerSocialIcons${ind + 1}`}>{i}</p>
                                ))
                            }
                        </div>
                    </div>
                    {/* column end */}

                    {/* column start */}
                    <div className='footer__column w-25'>
                        <h3 className='footer__logo mb-10'>{data?.footerColumn2?.title}</h3>
                        <ul>
                            {data?.footerColumn2?.linkMenu?.map((elem, i) => (
                                <li key={`footerLinksItem${i}`} className={`fs-7 ${i === data?.footerColumn2?.linkMenu?.length - 1 ? 'mb-0' : 'mb-3'}`}>{elem}</li>
                            ))}
                        </ul>
                    </div>
                    {/* column end */}

                    {/* column start */}
                    <div className='footer__column w-25'>
                        <h3 className='footer__logo mb-10'>{data?.footerColumn3?.title}</h3>
                        <ul>
                            {data?.footerColumn3?.menuLinks?.map((elem, i) => (
                                <li key={`footerLinksItem${i}`} className={`fs-7 ${i === data?.footerColumn3?.menuLinks?.length - 1 ? 'mb-0' : 'mb-3'}`}>{elem}</li>
                            ))}
                        </ul>
                    </div>
                    {/* column end */}

                    {/* column start */}
                    <div className='footer__column footer-newsletter w-25'>
                        <h2 className='mb-10'>{data?.footerColumn4?.title}</h2>
                        <p className='mb-10 fs-7'>{data?.footerColumn4?.info}</p>
                        <form className='flex'>
                            <input placeholder='Enter your email' className='p-2' />
                            <Button text="Subscribe" className="primary-bg px-10 py-4 white-color" />
                        </form>
                    </div>
                    {/* column end */}
                </div>
                <div className="footer__copyright tc py-7 light-dark-bg mt-12">© Copyright IndiGo</div>
            </footer>
        </>
    )
}

export default Footer;
