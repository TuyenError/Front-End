import React from 'react'

const BannerSlider = () => {
    const data = [
        {
            id: 1,
            image: 'https://statics.vincom.com.vn/xu-huong/chi_tiet_xu_huong/1/14-4/3/do-an-nhanh-cho-nguoi-ban-ron.jpg',
            title: ' Những món ăn ngon và tuyêt vời đang chờ bạn đến tận hưởng ',
            description:'Hãy cùng chúng tôi nếm thử và trải nghiệm mọi thứ nhá!',
            button: 'htttps://www.google.com'
        },
        {
            id: 2,
            image: 'https://statics.vincom.com.vn/xu-huong/chi_tiet_xu_huong/1/14-4/3/do-an-nhanh-cho-nguoi-ban-ron.jpg',
            title: ' Những món ăn ngon và tuyêt vời đang chờ bạn đến tận hưởng ',
            description:'Hãy cùng chúng tôi nếm thử và trải nghiệm mọi thứ nhá!',
            button: 'htttps://www.google.com'  
        }
    ]
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

  return (
    <div className='bannerslider'>
        <Slider className='bannerslider' {...settings}>
            {
                data.map(item => {
                    return (
                        <div className='imagecont' key={item.id}>
                            <img src={item.image } alt='noimg'/>
                            <div className='content'>
                                <h1> {item.title}</h1>
                                <span>{item.description}</span>
                                <button> SHop More</button>
                            </div>
                        </div>
                    )
                })
            }
        </Slider>
        BannerSlider</div>
  )
}

export default BannerSlider