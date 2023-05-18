"use client"
import '../../style/card.scss';
import Image from 'next/image';
import headphone from '../../accept/svg/headphone.svg'
import { useState } from 'react';

const Card = () => {
    const [color, setColor] = useState(1)

    const handelClick = (num: number) => {
        setColor(num)
    }

    return (
        <div className={'card'}>
            <div className={'headphone'}>
                <Image
                    src={headphone}
                    alt=''
                    width={258}
                    height={258}
                />
            </div>
            <p className={'price'}>$100</p>
            <h1>Zebronics head phone</h1>
            <p className={'description'}>
                A portable headphone with a battery
                life of 20 hours and IP67 rating.
                Comes with a 3 years warranty.
            </p>
            <span>Choose your colour</span>
            <div className={'row-colors'}>
                <i
                    className={color === 1 ? 'red active' : 'red'}
                    onClick={() => handelClick(1)}
                />
                <i
                    className={color === 2 ? 'blue active' : 'blue'}
                    onClick={() => handelClick(2)}
                />
                <i
                    className={color === 3 ? 'black active' : 'black'}
                    onClick={() => handelClick(3)}
                />
            </div>
            <div className='add-card'>Add to cart</div>
            <div className='buy-now'>Buy now</div>
            <span className='reviews'>Read reviews</span>
        </div>
    )
}

export default Card