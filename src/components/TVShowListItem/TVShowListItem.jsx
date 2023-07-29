import s from "./style.module.css"
import {SMALL_IMAGE_COVER_BASE_URL} from "../../config";

export function TVShowListItem({tvShow, onClick}) {
    return (
        <div onClick={() => onClick(tvShow)} className={s.container}>
            <img className={s.image} src={SMALL_IMAGE_COVER_BASE_URL + tvShow.backdrop_path} alt={tvShow.title}/>
            <div className={s.title}>
                {tvShow.title}
            </div>
        </div>
    )
}