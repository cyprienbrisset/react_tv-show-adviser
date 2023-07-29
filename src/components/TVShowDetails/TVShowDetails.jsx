import s from "./style.module.css"
import {TVShowRating} from "../TVShowRating/TVShowRating";

export function TVShowDetails({tvShow}) {

    const rating = tvShow.vote_average / 2

    return (
        <div>
            <div className={s.title}>{ tvShow.title }</div>
            <div className={s.rating_container}>
                <TVShowRating rate={ rating }/>
                <div className={s.rating}>{rating}</div>
            </div>
            <div className={s.overview}>{ tvShow.overview }</div>
        </div>
    )
}