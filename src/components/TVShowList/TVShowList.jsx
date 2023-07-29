import {TVShowListItem} from "../TVShowListItem/TVShowListItem";

import s from "./style.module.css"

export function TVShowList({tvShowList, onClickItem}) {
    return (
        <>
            <div className={s.title}>Vous pourriez aussi aimer</div>
            <div className={s.list}>
                {tvShowList.map((tvShow) => {
                    return (
                        <span key={tvShow.id} className={s.item}>
                            <TVShowListItem tvShow={tvShow} onClick={onClickItem}/>
                        </span>
                    )
                })}
            </div>
        </>
    )
}