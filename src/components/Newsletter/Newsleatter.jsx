import React from 'react'
import style from './Newsleatter.module.scss'

export const Newsleatter = () => {
    return (
        <div className={style.newsleatter}>
            <div className={`container ${style.container}`}>
                <div className={style['text-side']}>
                    <h3>Sing Up For Newsletters</h3>
                    <p>Get E-mail updates about our latest shop <span>special offers.</span></p>
                </div>
                <form>
                    <input type="text" placeholder='Your email address...' />
                    <button>Sing Up</button>
                </form>
            </div>
        </div>
    )
}
