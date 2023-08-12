import { useContext, useEffect, useState } from "react";

function IntroduceNav() {
    const [pos, setPos] = useState(0)
    const [isOpen, setOpen] = useState(false)
    const [isMount, setMount] = useState(false)

    useEffect(()=>{
        setMount(true);
    }, [])

    

    const items = [
        {
            name: "Đại học và cao đẳng",
            des: "nnnnnnnnnnnnnnnnnnnnn",
            link: null,
            subNav: [
                {
                    title: "Hệ Đại Học",
                    link: '/daotao/dai-hoc',
                    delay: '0.2s'
                },
                {
                    title: "Hệ Cao Đẳng",
                    link: '/daotao/cao-dang',
                    delay: '0.22s'
                },
            ]
        },
        {
            name: "Chương trình đào tạo",
            des: "Khám phá các chương trình đào tạo và kế hoạch giảng dạy của chúng tôi.",
            link: '/daotao/chuong-trinh-dao-tao',
            subNav: [
                {
                    title: "Hệ chính quy",
                    link: '/daotao/chuong-trinh-dao-tao/chinh-quy',
                    delay: '0.22s'
                },
                {
                    title: "Hệ hoàn chỉnh",
                    link: '/daotao/chuong-trinh-dao-tao/hoan-chinh',
                    delay: '0.24s'
                },
                {
                    title: "Hệ cao đẳng",
                    link: '/daotao/chuong-trinh-dao-tao/cao-dang',
                    delay: '0.26s'
                },
                {
                    title: "Hệ đào tạo từ xa",
                    link: '/daotao/chuong-trinh-dao-tao/tu-xa',
                    delay: '0.28s'
                },
                {
                    title: "Hệ đào tạo liên kết quốc tế",
                    link: '/daotao/chuong-trinh-dao-tao/lien-ket-quoc-te',
                    delay: '0.3s'
                },
                
            ]
        }
    ]
    const listSubNav = items[pos].subNav

    const handleClick = (index)=>{
        if(pos === index && isOpen){
            setOpen(false);
        }
        else{
            setPos(index);
            setOpen(true);
        }
    }

    const SSubNav = (props) => {
        const [alo, setAlo] = useState(false);
        useEffect(()=>{
            setAlo(true)

            return ()=>{
                setAlo(false);
            }
        }, [])
        return (
            <>
                <div 
                    className={`explore ${alo ? 'subNav-appear' : ''}`}
                    style={{transitionDelay: '0.2s'}}
                >
                    <div className="explore-des">
                        <span>{items[pos].des}</span>
                    </div>

                    <div className="explore-title">
                        <div className="explore-arrow">
                            <svg width="24" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z" fill="#939393"/>
                            </svg>
                        </div>
                        <div >
                            <span>Xem tất cả chương trình đào tạo</span>
                        </div>
                    </div>
                </div>
                {listSubNav.map((item, index) => (
                    <div
                        style={listSubNav.length - 1 === index ? {borderBottom: '1px solid #464a4f', transitionDelay: item.delay} : {transitionDelay: item.delay}} 
                        className={`SSubNav-item ${alo ? 'subNav-appear' : ''}`} key={item.title}>
                        <a href={item.link}>{item.title}</a>
                    </div>
                ))}
            </>
        )
    }

    const sNav = isOpen ? (
        <>
          <SSubNav />
        </>
      ) : null;
    return ( 
        <>
            <div className="SubNav">
                <div className="SubNav-container">
                    <div style={{transitionDelay: '0.2s'}} className={`subNav-header ${isMount ? 'appear' : ''}`}>
                        <div className="subNav-header__container">
                            <a href='/daotao/dao-tao'>
                                Đào tạo
                                <svg width="20" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z" fill="#939393"/>
                                </svg>

                            </a>
                        </div>
                        <span>Việc học ở HCMUS có thể xảy ra với mọi đối tượng người học, ở bất kỳ giai đoạn nào của cuộc đời. Việc học là mãi mãi.</span>
                    </div>
                    <div style={{transitionDelay: '0.22s'}} className={`subNav-item ${isMount ? 'appear' : ''}`}>
                        <button onClick={(index)=>handleClick(0)}>
                            <span
                                className={pos===0 && isOpen ? `active` : ""}
                                style={{color: pos===0 || !isOpen ? 'white' : '#8996a0'}}>
                                Đại học và cao đẳng
                            </span>
                            <svg width="20" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 3L17.5 12L8.5 21" stroke="#8996a0" strokeWidth="2" strokeMiterlimit="10"/>
                            </svg>

                        </button>
                    </div>
                    <div style={{transitionDelay: '0.24s'}} className={`subNav-item ${isMount ? 'appear' : ''}`}>
                        <a 
                            href='/daotao/sau-dai-hoc'
                            style={{color: pos===2 || !isOpen ? 'white' : '#8996a0'}}>
                            Sau đại học
                            <svg className="arrow-right" width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z" fill="#939393"/>
                            </svg>
                        </a>
                    </div>
                    <div style={{transitionDelay: '0.26s'}} className={`subNav-item ${isMount ? 'appear' : ''}`}>
                        <a
                            href='/daotao/dai-hoc-tu-xa'
                             style={{color: pos===2 || !isOpen ? 'white' : '#8996a0'}}>
                            Đại học từ xa
                            <svg className="arrow-right" width="13" height="13" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M24 12.0067C24 11.8064 23.9175 11.6152 23.7803 11.4712L16.356 3.97191C16.0627 3.67566 15.588 3.67641 15.2955 3.97191C15.0022 4.26741 15.0022 4.74741 15.2955 5.04291L21.4403 11.2492H0.75C0.336 11.2492 0 11.5882 0 12.0067C0 12.4252 0.336 12.7642 0.75 12.7642H21.4395L15.2955 18.9704C15.0022 19.2659 15.003 19.7459 15.2955 20.0414C15.5887 20.3369 16.0635 20.3369 16.356 20.0414L23.7803 12.5422C23.9205 12.4004 23.9977 12.2054 24 12.0067Z" fill="#939393"/>
                            </svg>
                        </a>
                    </div>
                    <div style={{transitionDelay: '0.28s'}} className={`subNav-item ${isMount ? 'appear' : ''}`}>
                        <button onClick={(index)=>handleClick(1)}>
                            <span
                                className={pos===1 && isOpen ? `active` : ""}
                                style={{color: pos===1 || !isOpen ? 'white' : '#8996a0'}}>
                                    Chương trình đào tạo
                            </span>
                            <svg width="20" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.5 3L17.5 12L8.5 21" stroke="#8996a0" strokeWidth="2" strokeMiterlimit="10"/>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className="SSubNav">
                
                {sNav}
            </div>
        </>
    );
}

export default IntroduceNav;